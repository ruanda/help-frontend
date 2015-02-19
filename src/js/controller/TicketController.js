angular.module('helpApp.controllers').controller('TicketController', ['$scope', '$location', '$routeParams', 'TicketsService',
function($scope, $location, $routeParams, TicketsService) {
    var ticketid = $routeParams.ticketId;
    $scope.ticketid = ticketid;
    $scope.ticket = TicketsService.get(
        // data
        {ticketId: ticketid},
        // success
        function(value, responseHeaders) {
        },
        // error
        function(httpResponse) {
            if (httpResponse.status === 404) {
                $location.path('/tickets');
            }
            console.log(httpResponse);
        });
}]);
