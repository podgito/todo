(function () {
    'use strict';

    angular
        .module('app')
        .controller('taskController', taskController);

    taskController.$inject = ['$scope'];
    function taskController($scope) {
        var vm = this;

        $scope.tasks = [
            { name: 'Task 1', hours: 2 },
            { name: 'Task 2', hours: 3 },
            { name: 'Task 3', hours: 1 },
            { name: 'Task 4', hours: 2 }
        ]
        
        $scope.models = {
            selected: null,
            lists: { "A": [], "B": [] }
        };

        // Generate initial model
        for (var i = 1; i <= 3; ++i) {
            $scope.models.lists.A.push({ label: "Item A" + i });
            $scope.models.lists.B.push({ label: "Item B" + i });
        }

        // Model to JSON for demo purpose
        $scope.$watch('models', function (model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);


        activate();

        ////////////////

        function activate() { }
    }
})();