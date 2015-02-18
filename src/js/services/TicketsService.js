angular.module('helpApp.services').factory('TicketsService', ['$resource', function($resource) {
    return $resource('/api/tickets/:ticketId',
        { ticketId: '@id' },
        { });
}]);
