/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    paths: {
        'underscore': 'lib/underscore',
        'jquery': 'lib/jquery-1.7.2',
        'backbone': [
            'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js',
            'libs/backbone-0.9.2'
        ]
    },

    // This is needed for checking loading error in IE
    // It disallows modules which are not use define or
    // not exports (via shim) value
    enforceDefine: true,

    shim: {
        // For IE check
        'underscore': {
            'exports': '_'
        },
        'jquery': {
            'exports': function ($) {
                "use strict";
                return $.noConflict();
            }
        },

        'backbone': {
            'deps': ['underscore', 'jquery'],
            // For IE interval check enforceDefine
            // It is global value
            'exports': 'Backbone'
        },
        'backbone.validation': {
            'deps': ['backbone'],
            'exports': 'Backbone.Validation'
        },
        'backbone.relational': {
            'deps': ['backbone'],
            'exports': 'Backbone.Relational'
        }
    }
});

requirejs(['backbone'], function () {
    'use strict';
});
