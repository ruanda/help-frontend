angular.module('helpApp.controllers').controller('TicketsController', ['$scope', '$location', 'TicketsService',
function($scope, $location, TicketsService) {

    $scope.tickets = TicketsService.query();

    $scope.predicate = 'id';
    $scope.reverse = false;

    $scope.show = function(id) {
        $location.path("/tickets/" + id);
    };

    $scope.order = function(predicate) {
        if ($scope.predicate === predicate) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.predicate = predicate;
            $scope.reverse = false;
        }
    };
}]);
