(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.input = '';

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        this.submit = function () {
            Room.add(this.input);
            $uibModalInstance.close(this.input);
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
