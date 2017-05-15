var React = require('react');

var HourSelect = React.createClass({
  render: function () {
    return (
      <ul className="tabs" data-tabs id="hour-select" >
        <li className="tabs-title"><a data-panel={"panel-7"} href="#panel-7" onClick={this.props.onClick}>7am</a></li>
        <li className="tabs-title"><a data-panel="panel-8" href="#panel-8" onClick={this.props.onClick}>8am</a></li>
        <li className="tabs-title"><a data-panel="panel-9" href="#panel-9" onClick={this.props.onClick}>9am</a></li>
        <li className="tabs-title"><a data-panel="panel-10" href="#panel-10" onClick={this.props.onClick}>10am</a></li>
        <li className="tabs-title"><a data-panel="panel-11" href="#panel-11" onClick={this.props.onClick}>11am</a></li>
        <li className="tabs-title"><a data-panel="panel-12" href="#panel-12" onClick={this.props.onClick}>12pm</a></li>
        <li className="tabs-title"><a data-panel="panel-13" href="#panel-13" onClick={this.props.onClick}>1pm</a></li>
        <li className="tabs-title"><a data-panel="panel-14" href="#panel-14" onClick={this.props.onClick}>2pm</a></li>
        <li className="tabs-title"><a data-panel="panel-15" href="#panel-15" onClick={this.props.onClick}>3pm</a></li>
        <li className="tabs-title"><a data-panel="panel-16" href="#panel-16" onClick={this.props.onClick}>4pm</a></li>
        <li className="tabs-title"><a data-panel="panel-17" href="#panel-17" onClick={this.props.onClick}>5pm</a></li>
        <li className="tabs-title"><a data-panel="panel-18" href="#panel-18" onClick={this.props.onClick}>6pm</a></li>
      </ul>
    );
  }
});

module.exports = HourSelect;
