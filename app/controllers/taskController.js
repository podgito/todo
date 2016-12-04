(function() {
'use strict';

    angular
        .module('app')
        .controller('taskController', taskController);

    taskController.$inject = ['$scope'];
    function taskController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();