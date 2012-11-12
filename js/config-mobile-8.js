/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    // Path aliases
    paths: {
        'app': 'mobile/app',

        'views/viewName': 'views/mobile/viewName',
        'views/viewName2': 'views/mobile/viewName2',
        'views/viewName3': 'views/mobile/viewName3',
        'views/viewName4': 'views/mobile/viewName4',

        'templates/index': 'templates/mobile/index',
        'templates/details': 'templates/mobile/details',
        'templates/twitterWindow': 'templates/mobile/twitterWindow'
    }
});
