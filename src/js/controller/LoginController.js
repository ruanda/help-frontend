angular.module('helpApp.controllers').controller('LoginController', ['$scope', function($scope) {
    $scope.login = function(user) {
        alert(user.login);
    };
}]);
