(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {

        this.rooms = Room.all;

        this.activeRoom = '';

        this.newMessage = '';

        this.setActiveRoom = function (room) {
            this.activeRoom = room.$value;
            this.messages = Message.getByRoomId(this.activeRoom);
        };

        this.sendMessage = function ($event) {
            $event.preventDefault();
            if (this.newMessage === '') {
                return;
            }
            var messageObj = {
                username: $cookies.get('blocChatCurrentUser'),
                userUrl: "/styles/images/Anonymous.jpg",
                content: this.newMessage,
                sentAt: new Date().getTime(),
                roomId: this.activeRoom
            };
            Message.send(messageObj);
            this.newMessage = '';
        }

        this.open = function () {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/new-room-modal.html',
                controller: 'RoomModalCtrl as roomModal',
                backdrop: 'static'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
