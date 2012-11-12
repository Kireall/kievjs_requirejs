/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    // But not for "/...", "http(s)...", ".js"
    baseUrl: '/js/',

    // Caching, for example (new Date()).getTime()
    // or version number
    urlArgs: 'v1.0',

    // Load error timeout
    waitSeconds: 20,

    config: {
        version: '1.0',
        platform: 'mobile',
        languages: {
            active: 'en',
            available: ['en', 'ru']
        }
    },

    paths: {
        'text': 'lib/text',
        'jquery': 'lib/jquery-1.7.2',
        'backbone': 'lib/backbone-0.9.2',
        'underscore': 'lib/underscore-1.3.3',
        'facebooklib': '//connect.facebook.net/en_US/all'
    }
});

requirejs(['app'], function (App) {
    "use strict";

   // Code here
});
