var React = require('react');
var HourSelect = require('HourSelect');
var QuarterSelect = require('QuarterSelect');

var Room = React.createClass({
  getInitialState: function () {
    return {
      openPanel: "panel-7",
    }
  },

  handleHourSelect: function (e) {
    // e.target.preventDefault;
    var openPanel = this.state.openPanel;
    this.setState(
      { openPanel: e.target.dataset.panel }
    );
  },

  render: function () {
    return (
      <div>
        <h3>Room Name</h3>
          <HourSelect onClick={this.handleHourSelect} />
        <div className="tabs-content" data-tabs-content="hour-select">
          <QuarterSelect panelId={this.state.openPanel} />
        </div>
        <button>Read more</button>
      </div>
    );
  }
});

module.exports = Room;
