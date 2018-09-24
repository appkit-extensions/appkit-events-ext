angular.module("moduleContent")
.controller("extensionContentCtrl", ["$scope", "$attrs", "$parse",
    function extensionContentCtrl($scope, $attrs, $parse) {

        var ctxt = null;
        var itemKey = $parse($attrs.itemKey)($scope);

        $scope.error = "err";
        $scope.name = itemKey;

        ctxt = $scope.getContext(itemKey)
        if (!ctxt) {
            showInvalid("Could not find the data type matching '" + itemKey + "'.")
        }
    }
]);
