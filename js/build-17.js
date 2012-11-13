/*global define: true, _: true, require: true, requirejs: true, $: true */

({
    // For for you app, build path relative to it
    appDir: "../",

    // Relative to app Dir
    baseUrl: 'js/',

    // Main configuration for path / shim etc for avoid duplication
    mainConfigFile: './main-6.js',

    // Dir for builds
    dir: 'app_builds/' + new Date().getTime(),

    // Closure compiler or none can be
    optimize: "uglify",

    // For build nested require([...])
    findNestedDependencies: true,

    // Remove another files from build dir
    removeCombined: true,

    // It's default true, we should not care about this - for text!
    inlineText: true,

    // Modules should be built
    modules: [{name: "main-6"}],

    // or if it is one module instead of modules array
    name: "main-6",
    out: "path/to/optimized-file.js",
    // Or
    //out: function(text) {
    //    // Code here
    //}

    // For monkey patching :)
    onBuildRead: function (moduleName, path, contents) {
        "use strict";
        return contents.replace(/$/g, 'jQuery');
    }

})();
