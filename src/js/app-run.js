angular.module('helpApp').run(['$rootScope', '$location', 'AuthService', 'UserService',
function($rootScope, $location, AuthService, UserService) {
    AuthService.get(
        {},
        // success
        function(value, responseHeaders) {
            UserService.setUser(value.user);
        },
        // error
        function(httpResponse) {
            UserService.clearUser();
            $location.path("/login");
        });
}]);
