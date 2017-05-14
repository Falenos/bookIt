var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var BookItApp = require('BookItApp');
var Room = require('Room');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={BookItApp}>
      <Route path="/panel-7" component={BookItApp}/>
      <Route path="/panel-8" component={Room}/>
      <Route path="/panel-9" component={Room}/>
      <Route path="/panel-10" component={Room}/>
      <Route path="/panel-11" component={Room}/>
      <Route path="/panel-12" component={Room}/>
      <Route path="/panel-13" component={Room}/>
      <Route path="/panel-14" component={Room}/>
      <Route path="/panel-15" component={Room}/>
      <Route path="/panel-16" component={Room}/>
      <Route path="/panel-17" component={Room}/>
      <Route path="/panel-18" component={Room}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
