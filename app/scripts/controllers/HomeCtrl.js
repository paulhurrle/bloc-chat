(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {

        this.rooms = Room.all;

        this.activeRoom = '';

        this.newMessage = '';

        this.setActiveRoom = function (room) {
            this.activeRoom = room.$value;
            this.messages = Message.getByRoomId(this.activeRoom);
        };

        this.sendMessageEnter = function () {
            if (this.newMessage === '') {
                return;
            }
            var messageObj = {
                username: $cookies.get('blocChatCurrentUser'),
                userUrl: "/styles/images/{{ message.username }}.jpg",
                content: this.newMessage,
                sentAt: new Date().getTime(),
                roomId: this.activeRoom
            };
            Message.send(messageObj);
            this.newMessage = '';
            return;
        }

        this.sendMessageClick = function () {
            if (this.newMessage === '') {
                return;
            }
            var messageObj = {
                username: $cookies.get('blocChatCurrentUser'),
                userUrl: "/styles/images/{{ message.username }}.jpg",
                content: this.newMessage,
                sentAt: new Date().getTime(),
                roomId: this.activeRoom
            };
            Message.send(messageObj);
            this.newMessage = '';
            return;
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
