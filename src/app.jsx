var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var components = require('./components.js');

var Sidebar = React.createClass({
  render: function () {
	    return (
				<div className="bss-flexible-sidenav">
					<div className="bss-flexible-sidenav__menu">
					{components.map(function(component) {
						return <Link className="bss-flexible-sidenav__menu__item" activeClassName="+active" to="component" params={{title: component.title}}>
							<i className="fa fa-home bss-flexible-sidenav__menu__item__icon"></i>
							<span className="bss-flexible-sidenav__menu__item__title">{component.title}</span>
						</Link>;
					})}
					</div>
				</div>
			);
	  }
});

var App = React.createClass({
  mixins: [ Router.State ],

  render: function () {
	    var title = this.getParams().title;
	    return (
				<div>
					<div className="bss-topNav">
						<div className="bss-topnav__bar"></div>
						<div className="bss-topnav__content">
							<span className="bss-topnav__content__brand" href>
								<img src="logo.png" alt="Company Logo"/>
							</span>
							<ul className="bss-topnav__content__menu padding-left-28">
								<li><a href="#">Beanstalk Style Guide</a></li>
							</ul>
						</div>
					</div>
					<Sidebar/>
					<div className="bss-nav-content">
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
				<div className="bss-nav-content">
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
