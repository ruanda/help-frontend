angular.module('helpApp').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }
]);
