var React = require('react');
var HourSelect = require('HourSelect');
var QuarterSelect = require('QuarterSelect');
var { Link, IndexLink } = require('react-router');

var Room = React.createClass({
  getInitialState: function () {
    return {
      openPanel: "",
    }
  },

  handleHourSelect: function (e) {
    $(".tabs-panel").removeClass("is-active");
    $(".tabs-title").removeClass("is-active");
    $(".tabs-title a").attr("aria-selected", false);
    $(e.target).parent().addClass("is-active");
    $(e.target).attr("aria-selected", true);

    var openPanel = this.state.openPanel;
    this.setState(
      { openPanel: e.target.dataset.panel }
    );

    $("#"+e.target.dataset.panel).addClass("is-active");
  },

  render: function () {
    const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const panelList = hours.map((hour) =>
      <QuarterSelect key={"panel-"+hour} panelId={"panel-"+hour}/>
    );

    return (
      <div>
        <h3>Room Name</h3>
          <HourSelect onClick={this.handleHourSelect} />
        <div className="tabs-content" data-tabs-content="hour-select">
          {panelList}
        </div>
        <button>Read more</button>
      </div>
    );
  }
});

module.exports = Room;
