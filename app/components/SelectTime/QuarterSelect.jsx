var React = require('react');

var QuarterSelect = React.createClass({

  getInitialState: function () {
    return {
      panel,
      1stQuarterStatus,
      2ndQuarterStatus,
      3dQuarterStatus,
      4thQuarterStatus
    }
  },

  render: function () {
    var { panelId } = this.props;
    return (
      <div className="tabs-panel is-active" id={this.props.panelId}>
        <div className="switch">
          <input className="switch-input" id="1st Quarter" type="checkbox" name="1st Quarter" />
          <label className="switch-paddle" htmlFor="1st Quarter">
            <span className="show-for-sr">1st Quarter</span>
            <span className="switch-active" aria-hidden="true">.00 - .15</span>
            <span className="switch-inactive" aria-hidden="true">.00 - .15</span>
          </label>
        </div>
        <div className="switch">
          <input className="switch-input" id="2nd Quarter" type="checkbox" name="2nd Quarter" />
          <label className="switch-paddle" htmlFor="2nd Quarter">
            <span className="show-for-sr">2nd Quarter</span>
            <span className="switch-active" aria-hidden="true">.15 - .30</span>
            <span className="switch-inactive" aria-hidden="true">.15 - .30</span>
          </label>
        </div>
        <div className="switch">
          <input className="switch-input" id="3d Quarter" type="checkbox" name="3d Quarter" />
          <label className="switch-paddle" htmlFor="3d Quarter">
            <span className="show-for-sr">3d Quarter</span>
            <span className="switch-active" aria-hidden="true">.30 - .45</span>
            <span className="switch-inactive" aria-hidden="true">.30 - .45</span>
          </label>
        </div>
        <div className="switch">
          <input className="switch-input" id=" Quarter" type="checkbox" name=" Quarter" />
          <label className="switch-paddle" htmlFor=" Quarter">
            <span className="show-for-sr"> Quarter</span>
            <span className="switch-active" aria-hidden="true">.45 - .60</span>
            <span className="switch-inactive" aria-hidden="true">.45 - .60</span>
          </label>
        </div>
      </div>
    );
  }
});

module.exports = QuarterSelect;
