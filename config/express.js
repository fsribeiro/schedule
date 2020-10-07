"use strict"

const express = require("express");

module.exports = function() {

    var app = express();
    app.set('port', 3500);

    return app
}