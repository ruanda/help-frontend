angular.module('helpApp.controllers').controller('NavigatorController', ['$scope', '$location', 'AuthService', 'UserService',
function($scope, $location, AuthService, UserService) {

    $scope.user = UserService.user;

    $scope.logout = function(user) {
        AuthService.delete({},
            // success
            function(value, responseHeaders) {
                UserService.clearUser();
                $location.path("/login");
            },
            // error
            function(httpResponse) {
                console.log("lol");
            });
    };
}]);
