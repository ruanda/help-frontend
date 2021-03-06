angular.module('helpApp').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            }).
            when('/tickets', {
                templateUrl: 'views/tickets.html',
                controller: 'TicketsController'
            }).
            when('/tickets/:ticketId', {
                templateUrl: 'views/ticket.html',
                controller: 'TicketController'
            }).
            when('/create', {
                templateUrl: 'views/newticket.html',
                controller: 'NewTicketController'
            }).
            otherwise({
                redirectTo: '/tickets'
            });
        $locationProvider.html5Mode(true);
    }
]);
