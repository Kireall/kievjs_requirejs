/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    // Will load main.js for each package
    'packages': [
        'registration',
        'pkg1',
        // But it is ugly
        {
            name: 'profile',
            main: 'index'
        }
    ]
});

require(['registration', 'pkg1'], function (Reg, Pkg1) {
    "use strict";
    // Code here
});
