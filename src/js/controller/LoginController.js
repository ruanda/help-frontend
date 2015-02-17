angular.module('helpApp.controllers').controller('LoginController', ['$scope', '$location', 'AuthService', 'AlertService',
function($scope, $location, AuthService, AlertService) {

    $scope.login = function(user) {
        AuthService.create(
            // data
            { user: user.login, password: user.password },
            // success
            function(value, responseHeaders) {
                $location.path("/tickets");
            },
            // error
            function(httpResponse) {
                AlertService.add('danger', 'Nieprawidłowe hasło lub nazwa użytkownika.');
            });
    };
}]);
