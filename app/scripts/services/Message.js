(function() {
  function Message($firebaseArray) {

      /**
      * @desc Private variable stores "message" objects
      * @type {Object}
      */
      var Message = {};

      /**
      * @desc Private variable stores a reference to Firebase database path to "messages"
      * @type relative reference
      */
      var ref = firebase.database().ref().child("messages");

      /**
      * @desc Private variable stores data from "ref" as an array
      * @type {array}
      */
      var messages = $firebaseArray(ref);

      /**
      * @desc Public variable stores data from "messages" array
      * @type {array}
      */
      Message.all = messages;

      /**
      * @function Message.add
      * @desc Public method that adds a message to Message objects
      * @param {Object} message
      */
      Message.add = function(message) {
         messages.$add(message);
     };

      return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
