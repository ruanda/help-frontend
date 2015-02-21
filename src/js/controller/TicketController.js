angular.module('helpApp.controllers').controller('TicketController', ['$scope', '$location', '$routeParams', 'TicketsService',
function($scope, $location, $routeParams, TicketsService) {

    var ticketid = $routeParams.ticketId;

    $scope.newcomment = '';

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

    $scope.changes = TicketsService.query_changes(
        // data
        {ticketId: ticketid},
        // success
        function(value, responseHeaders) {
        },
        // error
        function(httpResponse) {
        });

    $scope.addcomment = function(newcomment) {
        TicketsService.save_comment(
            // data
            {ticketId: ticketid},
            { comment: newcomment},
            // success
            function(value, responseHeaders) {
                $scope.newcomment = '';
                TicketsService.query_changes(
                    {ticketId: ticketid},
                    function(value, responseHeaders) {
                        $scope.changes = value;
                    },
                    function(httpResponse) {
                        console.log(httpResponse);
                    });
            },
            // error
            function(httpResponse) {

            });
    };
}]);
