angular.module('helpApp.services').factory('UserService', [function() {

    return UserService = {

        isLogged: false,
        user: '',

        setUser: function(name) {
            this.isLogged = true;
            this.user = name;
        },

        clearUser: function() {
            this.isLogged = false;
            this.user = '';
        }
    };
}]);
