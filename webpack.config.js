const path = require('path');

module.exports = {
    context:path.resolve(__dirname,'simplePass/src'),
    entry: {
        app: {
            import:'./simplePass.js',
        }
    },
    output:{
        path:path.resolve(__dirname, './simplePass/browser/'),
        filename:"simplePass.js",
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
    },
};