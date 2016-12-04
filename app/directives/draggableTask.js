(function () {
    'use strict';

    angular
        .module('app')
        .directive('draggableTask', draggableTask);

    draggableTask.$inject = [];
    function draggableTask() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: draggableTaskController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
            element.attr('draggable', true);
            element.on('dragstart', handleDragStart);
            element.on('dragenter', handleDragEnter);
            element.on('dragover', handleDragOver);
            element.on('dragleave', handleDragLeave);
            element.on('drop', handleDrop);
            element.on('dragend', handleDragEnd);
        }

        function handleDragStart(evt, obj, elem) {
            this.style.opacity = '0.4';
        }

        function handleDragOver(evt, obj, elem) {
            if (e.preventDefault) {
                e.preventDefault(); // Necessary. Allows us to drop.
            }

            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

            return false;
        }

        function handleDragEnter(evt, obj, elem) {
            // this / e.target is the current hover target.
            elem.addClass('over');
        }

        function handleDragLeave(e) {
            $(this).removeClass('over');  // this / e.target is previous target element.
        }

        function handleDrop(e) {
            // this / e.target is current target element.

            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
            }

            // See the section on the DataTransfer object.

            return false;
        }

        function handleDragEnd(e) {
            // this/e.target is the source node.

            [].forEach.call(cols, function (col) {
                $(col).removeClass('over');
            });
        }
    }
    /* @ngInject */
    function draggableTaskController() {

    }
})();