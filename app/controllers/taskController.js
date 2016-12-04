(function() {
'use strict';

    angular
        .module('app')
        .controller('taskController', taskController);

    taskController.$inject = ['$scope'];
    function taskController($scope) {
        var vm = this;

        $scope.tasks = [
            {name:'Task 1', hours:2},
            {name:'Task 2', hours:3},
            {name:'Task 3', hours:1},
            {name:'Task 3', hours:2}
        ]
        

        activate();

        ////////////////

        function activate() { }
    }
})();