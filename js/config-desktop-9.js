/*global define: true, _: true, require: true, requirejs: true, $: true */

require.config({
    // Path aliases
    paths: {
        'app': 'mobile/app',

        'views/viewName': 'views/desktop/viewName',
        'views/viewName2': 'views/desktop/viewName2',
        'views/viewName3': 'views/desktop/viewName3',
        'views/viewName4': 'views/desktop/viewName4',

        'templates/index': 'templates/desktop/index',
        'templates/details': 'templates/desktop/details',
        'templates/twitterWindow': 'templates/mobile/twitterWindow',

        /*TODO: TEST IT*/
        'templates/': 'templates/mobile/'
    }
});
