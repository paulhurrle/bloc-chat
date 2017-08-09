(function() {
  function Room($firebaseArray) {

      /**
      * @desc Private variable stores "room" objects
      * @type {Object}
      */
      var Room = {};

      /**
      * @desc Private variable stores a reference to Firebase database path to "rooms"
      * @type relative reference
      */
      var ref = firebase.database().ref().child("rooms");

      /**
      * @desc Private variable stores data from "ref" as an array
      * @type {array}
      */
      var rooms = $firebaseArray(ref);

      /**
      * @desc Public variable stores data from "rooms" array
      * @type {array}
      */
      Room.all = rooms;

      /**
      * @function Room.add
      * @desc Public method that adds a room to Room objects
      * @param {Object} room
      */
      Room.add = function(room) {
         rooms.$add({ room });
     };

      return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
