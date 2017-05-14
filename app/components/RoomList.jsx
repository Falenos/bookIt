var React = require('react');
var Room = require('Room');
var roomData = require('roomData');

var RoomList = React.createClass({
  getDefaultProps: function () {
    return {
      title: roomData.getRooms()
    }
    debugger;
  },

  // getRooms: function () {
  //   debugger;
  //   roomData.getStuff();
  // },

  render: function () {
    // var data = this.getRooms;
    // debugger;
    return (
      <div>
        <Room />
      </div>
    );
  }
});

module.exports = RoomList;
