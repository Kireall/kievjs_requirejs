/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    baseUrl: '/js/',
    urlArgs: 'v1.0',
    waitSeconds: 20,

    paths: {
        'text': 'lib/text',
        'jquery': 'lib/jquery-1.7.2',
        'backbone': 'lib/backbone-0.9.2',
        'underscore': 'lib/underscore-1.3.3',
        'facebooklib': '//connect.facebook.net/en_US/all'
    }
});

requirejs(['config-desktop-9'], function () {
    "use strict";

    require(['app'], function () {});
});
