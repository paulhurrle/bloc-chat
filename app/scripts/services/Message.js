(function() {
  function Message($firebaseArray) {

      /**
      * @desc Private variable stores "message" objects
      * @type {Object}
      */
      var Message = {};

      /**
      * @desc Private variable stores a reference to Firebase database path to "messages" ordered by "roomId" property
      * @type relative reference
      */
      var ref = firebase.database().ref().child("messages");

      /**
      * @desc Private variable stores data from "ref" as an array
      * @type {array}
      */
      var messages = $firebaseArray(ref);

      /**
      *@function Message.getByRoomId
      *@desc Public method gets messages from firebase database that have a given roomID property
      *@param {Object} roomId
      */
      Message.getByRoomId = function(roomId) {
          return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      };

      /**
      * @function Message.send
      * @desc Public method that adds a message to firebase array
      * @param {Object} newMessage
      */
      Message.send = function(newMessage) {
          messages.$add(newMessage);
      };

      return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
