(function() {
    function HomeCtrl($scope, Room) {
        this.room = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
