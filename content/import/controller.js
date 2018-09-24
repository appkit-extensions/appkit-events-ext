angular.module("moduleContent")
.controller("eventsImportContentCtrl", ["$scope", "$attrs", "$parse",
    function eventsImportContentCtrl($scope, $attrs, $parse) {

        var ctxt = null;
        var itemKey = $parse($attrs.itemKey)($scope);

        $scope.error = null;
        $scope.name = itemKey;

        ctxt = $scope.getContext(itemKey)
        if (!ctxt) {
            showInvalid("Could not find the data type matching '" + itemKey + "'.")
        }
    }
]);
