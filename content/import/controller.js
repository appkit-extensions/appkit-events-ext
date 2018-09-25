angular.module("moduleContent")
.controller("eventsImportContentCtrl", ["$scope", "$attrs", "$parse",
    function eventsImportContentCtrl($scope) {

        $scope.error = "#ERROR#";
        $scope.hasThumb = false;

        $scope.textICal = "";
        $scope.resultsICal = "";
        $scope.items = [];

        $scope.parseICal = function () {
            var data = ICAL.parse($scope.textICal);
            var calendar = new ICAL.Component(data);
            var events = calendar.getFirstSubcomponent('vevent');
            var items = [];
            for (var i=0; i<events.length; i++) {
                var event = new ICAL.Event(events[i]);
                items.push(event);
            }
            $scope.items = items;
        }
    }
]);
