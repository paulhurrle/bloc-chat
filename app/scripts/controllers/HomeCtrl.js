(function() {
    function HomeCtrl(Room, $uibModal, Message) {

        this.rooms = Room.all;

        this.messages = Message.all;

        this.activeRoom = Room.active;

        this.alert = function () {
            alert("The active room is now " + this.activeRoom);
        };

        this.open = function () {   //in your JSFiddle, you pass `size` and `template` as arguments here.
                                    //I get that template refers to one potential location of the html you want
                                    //to bind to the view, but why `size`?
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                backdrop: 'static'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
