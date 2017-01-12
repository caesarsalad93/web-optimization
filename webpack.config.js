module.exports = {
    entry: "views/js/main.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};