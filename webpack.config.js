'use strict';

const path = require('path');
const {EnvironmentPlugin, BannerPlugin} = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const FS = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const PACKAGE = require('./package.json');
const {SubresourceIntegrityPlugin} = require("webpack-subresource-integrity");
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

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
module.exports = (env) => [
    // Config for the application.
    {
        context: path.resolve(__dirname, 'javascript/module'),
        name: "bundle",
        entry: {
            app: {
                import: `./${PACKAGE.name}.js`
            }
        },
        output: {
            path: path.resolve(__dirname, './javascript/bundle/'),
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
            new BannerPlugin({
                banner: licenseBanner
            })
        ],
        performance: env.production ? {
            hints: "warning"
        } : false
    },
    // Config for the site.
    {
        context: path.resolve(__dirname, 'site/src/'),
        name: "site",
        entry: {
            site: {
                import: "./main.js"
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
            magicHtml: false,
        },
        output: {
            path: path.resolve(__dirname, './site/prod'),
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
            new EnvironmentPlugin({
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
                        from: "./sw.js",
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
            }),
            new HtmlWebpackPlugin({
                minify:env.production?true:false,
                inject:'head',
                title:`${PACKAGE.name} | Demo`,
                scriptLoading:'module',
                base:env.production?githubURL:devURL,
                template:"./index.html",
            }),
            env.production?new SubresourceIntegrityPlugin():function(){},
            new HtmlWebpackTagsPlugin({
                tags:[
                    {
                        path:"sw.js",
                        // Stops HtmlWebPackPlugin From changing script type
                        attributes:{
                            type:"text/javascript",
                            defer:true
                        }
                    },
                    "main.css"
                ],
                append: true,
            }),
            new CspHtmlWebpackPlugin({
                'default-src':"'self'",
                'base-uri':"'self'",
                'form-action':"'self'",
                'upgrade-insecure-requests':"",
                'object-src': "'none'",
                'script-src': ['',"'strict-dynamic'"],
                'style-src': ''
            }),
        ],
        cache: false,
        experiments: {
            outputModule: true,
        },
        performance: env.production ? {
            hints: "warning"
        } : false
    },
];
