var React = require('react');
var HourSelect = require('HourSelect');
var QuarterSelect = require('QuarterSelect');
var PanelsContainer = require('PanelsContainer');
var { Link, IndexLink } = require('react-router');

var Room = React.createClass({
  getInitialState: function () {
    return {
      openPanel: "",
    }
  },

  handleHourSelect: function (e) {
    $(".tabs-title" && ".tabs-panel").removeClass("is-active");
    $(e.target).parent().addClass("is-active");
    var openPanel = this.state.openPanel;
    this.setState(
      { openPanel: e.target.dataset.panel }
    );
    $("#"+e.target.dataset.panel).addClass("is-active");
    debugger;
  },

  // handleActivePanel: function (e) {
  //   $(".tabs-title" && ".tabs-panel").removeClass("is-active");
  //   $(e.target).parent().addClass("is-active");
  //   var id=e.target.dataset.path;
  //   $("#"+id).addClass("is-active");
  // },

  render: function () {
    return (
      <div>
        <h3>Room Name</h3>
          <HourSelect onClick={this.handleHourSelect} />
        <div className="tabs-content" data-tabs-content="hour-select">
          <PanelsContainer openPanel={this.state.openPanel}/>
        </div>
        <button>Read more</button>
        {/*<ul className="tabs" data-tabs id="example-tabs">
          <li className="tabs-title"><IndexLink to="panel1" data-path="panel1" onClick={this.handleActivePanel} >Tab 1</IndexLink></li>
          <li className="tabs-title"><IndexLink to="panel2" data-path="panel2" onClick={this.handleActivePanel} >Tab 2</IndexLink></li>
        </ul>
        <div className="tabs-content" data-tabs-content="example-tabs">
          <div className="tabs-panel" id="panel1">
            <p>panel1</p>
          </div>
          <div className="tabs-panel" id="panel2">
            <p>panel2</p>
          </div>
        </div>*/}
      </div>
    );
  }
});

module.exports = Room;
