"use strict";

const path = require('path');

module.exports = {

    mode: "production",
    entry: "./frontend/app.js",
    output: {
        'path': path.resolve(__dirname , "public/js"),
        'filename': 'index.js'
    },
    devtool: "source-map",
    watch: true

};