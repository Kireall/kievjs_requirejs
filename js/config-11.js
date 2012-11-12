/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    paths: {
        'libs': [
            'http://cdnjs.cloudflare.com/ajax/libs/your-app-name/libs-min.js',
            'http://ajax.google.com/ajax/libs/your-app-name/libs-min.js'
        ],

        'app': [
            'http://cdnjs.cloudflare.com/ajax/libs/your-app-name/app-min.js',
            'http://ajax.google.com/ajax/libs/your-app-name/app-min.js'
        ]
    }
});

// Load by order (first first)
requirejs(['libs', 'app'], function (Libs, App) {
    "use strict";

    // Code here
    var appIns = new App();
});
