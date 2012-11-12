/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    map: {
        // All modules will use jquery 1.8
        '*': {
            'jquery': 'jquery-1.8'
        },

        // Some old module will use 1.4.1 / 0.9
        // We will refactor it later :)
        'some/oldmodule': {
            'jquery': 'jquery-1.4.1',
            'underscore': 'underscore-0.9'
        }
    }
});
