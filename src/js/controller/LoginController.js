angular.module('helpApp.controllers').controller('LoginController', ['$scope', '$location', 'AuthService', 'UserService', 'AlertService',
function($scope, $location, AuthService, UserService, AlertService) {

    $scope.login = function(user) {
        AuthService.create(
            // data
            { user: user.login, password: user.password },
            // success
            function(value, responseHeaders) {
                UserService.setUser(user.login);
                $location.path("/tickets");
            },
            // error
            function(httpResponse) {
                UserService.clearUser();
                AlertService.add('danger', 'Nieprawidłowe hasło lub nazwa użytkownika.');
            });
    };
}]);
