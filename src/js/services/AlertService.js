angular.module('helpApp.services').factory('AlertService', [ '$rootScope', '$timeout',
function($rootScope, $timeout) {
    var AlertService;
    
    $rootScope.alerts = [];

    return AlertService = {
        add: function(type, msg) {
            var alert = {
                type: type,
                message: msg,
                close: function() {
                    return AlertService.closeAlert(this);
                }
            };
            $timeout(function() { alert.close(); }, 3000);
            return $rootScope.alerts.push(alert);
        },
        closeAlert: function(alert) {
            return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
        },
        closeAlertIdx: function(index) {
            return $rootScope.alerts.splice(index, 1);
        }
    };

}]);
