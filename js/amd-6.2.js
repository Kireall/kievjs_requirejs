/*global define: true, _: true, $: true */

define(
    function () {
        "use strict";

        // Singleton example

        function Singleton() { }

        // Module executes once
        return new Singleton();
    }
);
