var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var components = require('./components.js');

var Sidebar = React.createClass({
  render: function () {
	    return (
				<div className="bs-flexible-sidenav +tall-top">
					<div className="bs-flexible-sidenav__menu">
					{components.map(function(component) {
						return <Link className="bs-flexible-sidenav__menu__item" to="component" params={{title: component.title}}>
							<i className="fa fa-home bs-flexible-sidenav__menu__item__icon"></i>
							<span className="bs-flexible-sidenav__menu__item__title">{component.title}</span>
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
					<div className="bs-topNav">
						<div className="bs-topnav__bar"></div>
						<div className="bs-topnav__content">
							<span className="bs-topnav__content__brand" href>
								<img src="logo.png" alt="Company Logo"/>
							</span>
							<ul className="bs-topnav__content__menu padding-left-28">
								<li><a href="#">Beanstalk Style Guide</a></li>
							</ul>
						</div>
					</div>
					<Sidebar/>
					<div style={{'margin-left': '240px', width: 'calc(100% - 260px)'}}>
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
				<div style={{'margin-left': '240px', width: 'calc(100% - 260px)'}}>
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
