/**
 * Webpack-Multi Compilation as shown here: https://github.com/webpack/webpack/blob/main/examples/multi-compiler/webpack.config.js
 */

const path = require('path');

/**
 * Because we need to bundle the browser version of simplePass with the main page, we create a second directory bundle our files and include it in the site.
 * So we have to webpack complilations, one to bundle the source javascript (application) and one to bundle the PWA javascript (site).
 */
module.exports = [
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
            static: './site/prod',
            bonjour: false,
            client:{
                overlay: true,
                progress: true
            },
            headers:[
                {
                    key: 'X-Webpack-Server',
                    value: 'TRUE',
                }
            ],
            magicHtml: false
        },
        output:{
            path:path.resolve(__dirname, './site/prod/'),
            filename:"main.js",
            module:true,
            libraryTarget:'module'
        },
        optimization: {
            minimize: true,
            // runtimeChunk: 'single'
        },
        mode:"production",
        cache:false,
        experiments: {
            outputModule: true,
        }
	},
];