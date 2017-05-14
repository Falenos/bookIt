var React = require('react');
var QuarterSelect = require('QuarterSelect');

var PanelsContainer = React.createClass({

  // handleActivePanel: function (e) {
  //   $(".tabs-title" && ".tabs-panel").removeClass("is-active");
  //   $(e.target).parent().addClass("is-active");
  //   var id=e.target.dataset.path;
  //   $("#"+id).addClass("is-active");
  // },

  render: function () {
    return (
      <div className="panels-container">
        <QuarterSelect panelId="panel-7" />
        <QuarterSelect panelId="panel-8" />
        <QuarterSelect panelId="panel-9" />
        <QuarterSelect panelId="panel-10" />
        <QuarterSelect panelId="panel-11" />
        <QuarterSelect panelId="panel-12" />
        <QuarterSelect panelId="panel-13" />
        <QuarterSelect panelId="panel-14" />
        <QuarterSelect panelId="panel-15" />
        <QuarterSelect panelId="panel-16" />
        <QuarterSelect panelId="panel-17" />
        <QuarterSelect panelId="panel-18" />
      </div>
    );
  }
});

module.exports = PanelsContainer;
