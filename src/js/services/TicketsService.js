angular.module('helpApp.services').factory('TicketsService', ['$resource', function($resource) {
    return $resource('/api/tickets/:ticketId',
        { ticketId: '@id' },
        { query_changes: { method: 'GET', url: '/api/tickets/:ticketId/changes', isArray: true },
          save_comment: { method: 'POST', url: '/api/tickets/:ticketId/changes' } });
}]);
