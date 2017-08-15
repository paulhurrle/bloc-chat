(function() {
    function RoomModalCtrl(Room, $uibModalInstance) {

        this.input = '';

        this.cancel = function () {
            $uibModalInstance.close(false);
        };

        this.submit = function () {
            Room.add(this.input);
            $uibModalInstance.close(this.input);
        };
    }

    angular
        .module('blocChat')
        .controller('RoomModalCtrl', ['Room', '$uibModalInstance', RoomModalCtrl]);
})();
