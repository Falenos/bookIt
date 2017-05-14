var React = require('react');

var QuarterSelect = React.createClass({

  // getInitialState: function () {
  //   return {
  //     panel,
  //     1stQuarterStatus,
  //     2ndQuarterStatus,
  //     3dQuarterStatus,
  //     4thQuarterStatus
  //   }
  // },

  render: function () {
    return (
      <div className="tabs-panel" id={this.props.panelId}>
        <div className="switch">
          <input className="switch-input" id={this.props.panelId+" 1st Quarter"} type="checkbox" name={this.props.panelId+" 1st Quarter"} />
          <label className="switch-paddle" htmlFor={this.props.panelId+" 1st Quarter"}>
            <span className="switch-active" aria-hidden="true">.00 - .15</span>
            <span className="switch-inactive" aria-hidden="true">.00 - .15</span>
          </label>
        </div>
        <div className="switch">
          <input className="switch-input" id={this.props.panelId+" 2nd Quarter"} type="checkbox" name={this.props.panelId+" 2nd Quarter"} />
          <label className="switch-paddle" htmlFor={this.props.panelId+" 2nd Quarter"}>
            <span className="switch-active" aria-hidden="true">.15 - .30</span>
            <span className="switch-inactive" aria-hidden="true">.15 - .30</span>
          </label>
        </div>
        <div className="switch">
          <input className="switch-input" id={this.props.panelId+" 3d Quarter"} type="checkbox" name={this.props.panelId+" 3d Quarter"} />
          <label className="switch-paddle" htmlFor={this.props.panelId+" 3d Quarter"}>
            <span className="switch-active" aria-hidden="true">.30 - .45</span>
            <span className="switch-inactive" aria-hidden="true">.30 - .45</span>
          </label>
        </div>
        <div className="switch">
          <input className="switch-input" id={this.props.panelId+ "4th Quarter"} type="checkbox" name={this.props.panelId+ "4th Quarter"} />
          <label className="switch-paddle" htmlFor={this.props.panelId+ "4th Quarter"}>
            <span className="switch-active" aria-hidden="true">.45 - .60</span>
            <span className="switch-inactive" aria-hidden="true">.45 - .60</span>
          </label>
        </div>
      </div>
    );
  }
});

module.exports = QuarterSelect;
