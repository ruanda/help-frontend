angular.module('helpApp.services').factory('AuthService', ['$resource', function($resource) {
    return $resource('/api/auth', {}, {
        create: { method: 'POST' }
    });
}]);
