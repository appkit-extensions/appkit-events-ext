angular.module("moduleContent")
.controller("eventsImportContentCtrl", ["$scope", "$attrs", "$parse",
    function eventsImportContentCtrl($scope) {

        $scope.error = "#ERROR#";
        $scope.hasThumb = false;

        var ctxt = $scope.getContext("events");

        $scope.textICal = "";
        $scope.resultsICal = "";
        $scope.items = [];

        $scope.load = function () {
            $.prompt("Enter the URL for the ICS to open...", function (result) {
                if (result !== null) {
                    ctxt.readTextFromUrl(result)
                    .then(function (ics) {
                        console.log(ics);
                        $scope.parseICal(ics);
                    })
                }
            });
        }

        $scope.parseICal = function (ics) {
            var calendar = new ICAL.Component(ics);
            var events = calendar.getAllSubcomponents('vevent');
            var items = [];
            var now = new Date().getTime();
            for (var i=0; i<events.length; i++) {
                var event = new ICAL.Event(events[i]);

                // ignore old events
                if (event.startDate.toJSDate().getTime() < now) {
                    continue;
                }

                // find categories
                var fields = event.component.jCal[1];
                for (var j=0; j<fields.length; j++) {
                    if (fields[j][0] === "categories") {
                        event.categories = fields[j][3];
                        break;
                    }
                }

                items.push(event);
            }
            $scope.items = items;
        }
    }
]);
