var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var components = require('./components.js');

var Sidebar = React.createClass({
  render: function () {
	    return (
				<ul>
					{components.map(function(component) {
						return <li><Link to="component" params={{title: component.title}}>{component.title}</Link></li>;
					})}
				</ul>
			);
	  }
});

var App = React.createClass({
  mixins: [ Router.State ],

  render: function () {
	    var title = this.getParams().title;
	    return (
				<div>
					<Sidebar/>
					<div className="Content">
						<RouteHandler/>
					</div>
				</div>
			);
	  }
});

var Component = React.createClass({
  mixins: [ Router.State ],

  render: function () {
	    var params = this.getParams();
	    var component = components.filter(function(component) {
				return component.title === params.title;
			});
	    return (
				<div dangerouslySetInnerHTML={{__html: component[0].html}}>
				</div>
			);
	  }
});

var Index = React.createClass({
  render: function () {
	    return (
				<div>
					<p>Our Styleguide</p>
				</div>
			);
	  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index}/>
    <Route name="component" path=":title" handler={Component} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('styleguide'));
});
