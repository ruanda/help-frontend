angular.module('helpApp.controllers').controller('NewTicketController', ['$scope', '$location', 'TicketsService', 'AlertService',
function($scope, $location, TicketsService, AlertService) {

    $scope.create = function(newticket) {
        TicketsService.save(
            //data
            newticket,
            // success
            function(value, responseHeaders) {
                $location.path("/tickets");
            },
            // error
            function(httpResponse) {
                AlertService.add('warning', 'Zgłoszenie nie zostało dodane.');
            });
    };

    $scope.cancel = function() {
        $location.path("/tickets");
    };

}]);
