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

    $("#"+this.props.roomIndex+e.target.dataset.panel).addClass("is-active");
  },

  render: function () {
    const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const panelList = hours.map((hour, index) =>
      <QuarterSelect key={index} panelId={this.props.roomIndex+"panel-"+hour} avail={this.props.avail} hour={hour} />
    );

    return (
      <div>
        <h3>{this.props.roomName}</h3>
        <p>{"location: "+this.props.location}</p>
        <HourSelect roomIndex={this.props.roomIndex} onClick={this.handleHourSelect} avail={this.props.avail} />
        <div className="tabs-content" data-tabs-content="hour-select">
          {panelList}
        </div>
        {/*========= needs fixing =========*/}
        <ul className="accordion" data-accordion>
          <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title">Details</a>
            <div className="accordion-content" data-tab-content>
              <p>{this.props.size}</p>
              <p>{this.props.capacity}</p>
              <p>{this.props.images}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Room;
