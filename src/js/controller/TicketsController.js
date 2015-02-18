angular.module('helpApp.controllers').controller('TicketsController', ['$scope', '$location', 'TicketsService',
function($scope, $location, TicketsService) {
    $scope.tickets = TicketsService.query();
}]);
