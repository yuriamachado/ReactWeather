var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
      <Router history={hasHistory}>
        <Route path="/" component={Main}>
          <Route  path="about" component={About} />
          <Route  path="examples" component={Examples} />
          <IndexRoute component={Weather} />
        </Route>
      </Router>,
      document.getElementById('app')
    );
