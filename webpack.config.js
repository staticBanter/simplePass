/**
 * Webpack-Multi Compilation as shown here: https://github.com/webpack/webpack/blob/main/examples/multi-compiler/webpack.config.js
 */

const path = require('path');
const {EnvironmentPlugin} = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

/**
 * Because we need to bundle the browser version of simplePass with the main page, we create a second directory bundle our files and include it in the site.
 * So we have to webpack complilations, one to bundle the source javascript (application) and one to bundle the PWA javascript (site).
 */
module.exports = (env) => [
    // Config for the application.
	{
        context:path.resolve(__dirname,'javascript/module'),
		name: "bundle",
		entry:{
            app:{
                import:"./simplePass.js"
            }
        },
        output:{
            path:path.resolve(__dirname, './javascript/bundle/'),
            filename:"simplePass.bundle.js",
            module:true,
            libraryTarget:'module'
        },
        optimization: {
            minimize: true,
        },
        mode:"production",
        cache:false,
        experiments: {
            outputModule: true,
        }
	},
    // Config for the site.
	{
        context:path.resolve(__dirname,'site/src/'),
		name: "site",
		entry:{
            site:{
                import:"./main.js"
            }
        },
        devServer:{
            // static: './site/prod',
            static:{
                directory: './site/prod',
                staticOptions:{
                    extensions:['html'],
                }
            },
            bonjour: false,
            client:{
                logging: "none",
                overlay: true,
                progress: false,
                reconnect: false,
            },
            headers:[
                {
                    key: 'X-Webpack-Server',
                    value: 'TRUE',
                }
            ],
            magicHtml: false,
        },
        output:{
            path:path.resolve(__dirname, './site/prod'),
            filename:"main.js",
            module:true,
            libraryTarget:'module'
        },
        optimization: {
            minimize: true,
        },
        mode:"production",
        plugins: [
            new EnvironmentPlugin({
                serviceWorkerURL: env.production?'/simplePass/sw.js':(env.customServiceWorkerURL??'/sw.js')
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
                                ?'https://staticbanter.github.io/simplePass/'
                                :(env.customManifestStartURL??'http://localhost:8080/')
                            )
                        },
                    },
                    {
                        from: "./sw.js",
                        to: "../prod/sw.js",
                        transform(content) {
                            return content
                            .toString()
                            .replace('$BASE_URL$',
                                (env.production)
                                ?'/simplePass/'
                                :(env.customBaseURL??'/')
                            )
                            .replace('$serviceWorkerCacheName$',
                                (env.production)
                                ?'simplePass_PWA_Cache_v1'
                                :(env.customServiceWorkerCacheName??'simplePass_DEVELOPMENT_PWA_Cache_v1')
                            )
                        },
                    },
                ],
            }),
        ],
        cache:false,
        experiments: {
            outputModule: true,
        }
	},
];
