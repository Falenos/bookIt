var React = require('react');
var Room = require('Room');

var RoomList = React.createClass({

  handleOrder: function () {
    console.log("handleOrder is running");
  },

  render: function () {
    // the data const should be modified so that search and sorting are applied

    // also we need to pass the avail info to the checkboxes so that they can't be controlled if they are booked.
    const data = this.props.data;
    const rooms = data.map((room, index) =>
      <Room
        key={index}
        roomIndex={index}
        roomName={room.name}
        location={room.location}
        equipment={room.equipment}
        size={room.size}
        capacity={room.capacity}
        avail={room.avail}
        images={room.images}
      />
    );
    return (
      <div className="rooms-container">
        {rooms}
      </div>
    );
  }
});

module.exports = RoomList;
