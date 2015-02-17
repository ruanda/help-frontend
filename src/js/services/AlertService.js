angular.module('helpApp.services').factory('AlertService', [ '$rootScope', function($rootScope) {
    var AlertService;
    
    $rootScope.alerts = [];

    return AlertService = {
        add: function(type, msg) {
            return $rootScope.alerts.push({
                type: type,
                message: msg,
                close: function() {
                    return AlertService.closeAlert(this);
                }
            });
        },
        closeAlert: function(alert) {
            return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
        },
        closeAlertIdx: function(index) {
            return $rootScope.alerts.splice(index, 1);
        }
    };

}]);
