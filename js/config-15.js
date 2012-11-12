/*global define: true, _: true, require: true, requirejs: true, $: true, stableRequire: true */

var libRequire = require.config({
    context: "lib",
    baseUrl: "/libs"
});

var devRequire = require.config({
    context: "dev",
    baseUrl: "/dev",
    urlArgs: 'version_' + (new Date()).getTime()
});

libRequire(['jquery', 'underscore'], function () {
    "use strict";
});

devRequire(['app'], function (App) {
    "use strict";
    var app = new App();
});
