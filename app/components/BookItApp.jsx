var React = require('react');
var roomData = require('roomData');
var RoomList = require('RoomList');

var BookItApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1>BookIt</h1>
        <button>Prev</button><span>   Today-day   </span><button>Next</button>
        <RoomList />
      </div>
    );
  }
});

module.exports = BookItApp;
