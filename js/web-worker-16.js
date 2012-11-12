/*global define: true, _: true, require: true, requirejs: true, $: true, importScripts: true, postMessage: true */

importScripts('../libs/require.js');
require.config({
    baseUrl: "./"
});

require(
    // importScripts is using for load
    ["require", "amd-1", "./subdir/file1"],
    function (require, amd1, file1) {
        "use strict";

        postMessage("It works");
    }
);
