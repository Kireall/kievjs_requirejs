/*global define: true, _: true, $: true */

define(
    function (require, exports) {
        "use strict";
        var amd1,
            amd1Cached;

        // No arguments - no need to add require, exports
        // If arguments - ['require', 'exports', ...]

        // This only works inside defile function
        // Or if module was already loaded
        amd1 = require('./amd-1');

        // Next call returns cached module
        amd1Cached = require('./amd-1');

        // Exports is using for solving circular dependency problem
        exports.param = 'val';
        exports.param2 = 'val2';

        // Code here
    }
);
