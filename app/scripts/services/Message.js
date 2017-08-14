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
      * @desc Public variable stores data from Message.getByRoomId function
      * @type {array}
      */
      Message.messagesByRoomId = '';

      /**
      *@function Message.getByRoomId
      *@desc Public method gets messages from firebase database that have a given roomID property
      *@param {Object} roomId
      */
      Message.getByRoomId = function(roomId) {
          Message.messagesByRoomId = messages.orderByChild("roomId").equalTo(roomId);
      };

      /**
      * @function Message.add
      * @desc Public method that adds a message to Message objects
      * @param {Object} message
      */
/*
      Message.add = function(message) {
         messages.$add({
             username: "<USERNAME HERE>",
             content: "<CONTENT OF THE MESSAGE HERE>",
             sentAt: "<TIME MESSAGE WAS SENT HERE>",
             roomId: "<ROOM UID HERE>"
         });
      };
*/
      return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
