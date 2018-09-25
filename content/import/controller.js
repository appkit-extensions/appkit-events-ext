<script src="https://rawgit.com/mozilla-comm/ical.js/master/build/ical.js" />

angular.module("moduleContent")
.controller("eventsImportContentCtrl", ["$scope", "$attrs", "$parse",
    function eventsImportContentCtrl($scope) {

        $scope.error = "#ERROR#";
        $scope.textICal = "";
        $scope.resultsICal = "";

        $scope.parseICal = function () {
            $scope.resultsICal = JSON.stringify(ICAL.parse($scope.textICal));
        }
    }
]);
