'use strict';

import CopyPlugin from "copy-webpack-plugin";
import * as FS from "fs";
import * as path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from 'webpack';
const PACKAGE = JSON.parse(FS.readFileSync('./package.json'));

PACKAGE.name = 'simplePass';

const githubDomain = `https://staticbanter.github.io`
const githubURL = `${githubDomain}/${PACKAGE.name}/`;

const devDomain = `localhost:`
const devPort = `8080`;
const devURL = `http://${devDomain}${devPort}`;

const serviceWorkerAppShellFiles = FS.readdirSync('./site/prod',{
    recursive:true,
});

const licenseBanner = `
${PACKAGE.name} - ${PACKAGE.description}.
Copyright (C) 2023  ${PACKAGE.author.name}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;

/**
 * Console types that should never be in production.
 */
const nonProdConsoles = [
    'assert',
    'count',
    'countReset',
    'debug',
    'dir',
    'dirxml',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeLog',
    'timeStamp',
    'trace'
];

/**
 * Because we need to bundle the browser version of simplePass with the main page, we create a second directory bundle our files and include it in the site.
 * So we have two webpack compilations, one to bundle the source javascript (application) and one to bundle the PWA javascript (site).
 * Webpack-Multi Compilation as shown here: https://github.com/webpack/webpack/blob/main/examples/multi-compiler/webpack.config.js
 */
export default (env) => [
    // Config for the application.
    {
        context: path.resolve("javascript/module"),
        name: "bundle",
        entry: {
            app: {
                import: `./${PACKAGE.name}.js`
            }
        },
        output: {
            path: path.resolve( 'javascript/bundle/'),
            filename: `${PACKAGE.name}.bundle.js`,
            module: true,
            libraryTarget: 'module'
        },
        optimization: {
            minimize: env.production ? true : false,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        compress: {
                            drop_console: nonProdConsoles,
                        }
                    }
                })
            ],
        },
        mode: "production",
        cache: false,
        experiments: {
            outputModule: true,
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: licenseBanner,
            })
        ],
        performance: env.production ? {
            hints: "warning"
        } : false,
        stats:env.production?{
            all:true,
            colors:true,
            logging:'verbose',
        }:'minimal',
    },
    // Config for the site.
    {
        context: path.resolve('site/src'),
        name: "site",
        entry: {
            site: {
                import: "./js/main.js"
            }
        },
        devServer: {
            static: {
                directory: './site/prod',
                staticOptions: {
                    extensions: ['html'],
                }
            },
            bonjour: false,
            client: {
                logging: "none",
                overlay: true,
                progress: false,
                reconnect: false,
            },
            headers: [
                {
                    key: 'X-Webpack-Server',
                    value: 'TRUE',
                }
            ],
        },
        output: {
            path: path.resolve('site/prod'),
            filename: "main.js",
            module: true,
            libraryTarget: 'module',
            crossOriginLoading: "anonymous",
        },
        optimization: {
            minimize: env.production ? true : false,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        compress: {
                            drop_console: nonProdConsoles,
                        }
                    }
                })
            ],
        },
        mode: "production",
        plugins: [
            new webpack.EnvironmentPlugin({
                serviceWorkerURL: env.production ? `/${PACKAGE.name}/sw.js` : (env.customServiceWorkerURL ?? '/sw.js'),
                examplesAndIntegrationURL: env.production ? `/${PACKAGE.name}/EXAMPLES-AND-INTEGRATION.html` : '/EXAMPLES-AND-INTEGRATION.html'
            }),
            new CopyPlugin({
                patterns: [
                    // Assume `./site/src` is root dir here
                    {
                        from: "./manifest.json",
                        to: "../prod/manifest.json",
                        transform(content) {
                            return content
                                .toString()
                                .replace('$START_URL$',
                                    (env.production)
                                        ? githubURL
                                        : (env.customManifestStartURL ?? devURL)
                                );
                        },
                    },
                    {
                        from: "./js/sw.js",
                        to: "../prod/sw.js",
                        transform(content) {
                            return content
                                .toString()
                                .replace('$serviceWorkerCacheName$',
                                    (env.production)
                                        ? `${PACKAGE.name}_PWA_Cache_v1`
                                        : (env.customServiceWorkerCacheName ?? `${PACKAGE.name}_DEVELOPMENT_PWA_Cache_v1`)
                                )
                                .replace(
                                    '$serviceWorkerAppShellFiles$',
                                    serviceWorkerAppShellFiles.filter((fileName)=>{
                                        return(
                                            fileName[0] !== '.'
                                            && fileName.includes('.')
                                        )?fileName:null;
                                    }).map((fileName)=>{
                                        return `./${fileName}`
                                    })
                                    .join(' ')
                                    .concat((env.production)?` /${PACKAGE.name}/`:(env.customBaseURL?` ${env.customBaseURL}`:" /"))
                                );
                        },
                    },
                ],
            })
        ],
        cache: false,
        experiments: {
            outputModule: true,
        },
        performance: env.production ? {
            hints: "warning"
        } : false,
        stats:env.production?{
            all:true,
            colors:true,
            logging:'verbose',
        }:'minimal',
    }
];
