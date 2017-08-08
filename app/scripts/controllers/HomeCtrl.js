(function() {
    function HomeCtrl(Room, $uibModal) {
        this.room = Room;

        this.open = function () {   //in your JSFiddle, you pass `size` and `template` as arguments here.
                                    //I get that template refers to one potential location of the html you want
                                    //to bind to the view, but why `size`?
            $uibModal.open({
                animation: true,
                templateUrl: 'modal.html',
                controller: 'ModalCtrl'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
