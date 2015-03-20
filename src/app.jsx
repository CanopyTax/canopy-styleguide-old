var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var components = require('./components.js');
var Highlight = require('react-highlight');

var Sidebar = React.createClass({
  render: function () {
	    return (
				<div className="bss-flexible-sidenav +tall-top">
					<div className="bss-flexible-sidenav__menu">
					{components.map(function(component) {
						if(component.link) {
							return <a className="bss-flexible-sidenav__menu__item" href={component.link}>
								<i className="fa fa-home bss-flexible-sidenav__menu__item__icon"></i>
								<span className="bss-flexible-sidenav__menu__item__title">{component.title}</span>
							</a>
						} else {
							return <Link className="bss-flexible-sidenav__menu__item" activeClassName="+active" to="component" params={{title: component.title}}>
								<i className="fa fa-home bss-flexible-sidenav__menu__item__icon"></i>
								<span className="bss-flexible-sidenav__menu__item__title">{component.title}</span>
							</Link>;
						}
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

					<div className="bss-topnav">
						<div className="bss-topnav__bar"></div>

						<div className="bss-topnav__content">
							<span className="bss-topnav__content__brand" href>
								<img src="logo.png" alt="Company Logo"/>
							</span>
							<ul className="bss-topnav__content__menu">
								<li><a href="#">Beanstalk Style Guide</a></li>
								<li><a ui-sref="calendar" className="+active">Calendar</a></li>
							</ul>
							<ul className="bss-topnav__content__menu bss-pull-right">
								<li className="bss-topnav__content__menu__form">
									<div client-search></div>
								</li>
								<li className="bss-dropdown" dropdown on-toggle="toggled(bss-open)">
									<a href dropdown-toggle>
									 Mike Hewitt
									</a>
									<ul className="bss-dropdown-menu" role="menu">
										<li><a href>My Profile</a></li>
										<li><a href>Team Members</a></li>
										<li><a href>Company Profile</a></li>

										<li className="bss-divider"></li>
										<li><a href="https://beanstalk.reamaze.com" target="_blank">Help</a>
										</li>
										<li className="bss-divider"></li>
										<li><a href="/signout">Sign out</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
						<div className="bss-topnav-secondary">
							<div className="bss-topnav-secondary__content" >
								<ul className="bss-topnav-secondary__content__menu">
									<li>
										<a href>Mike Lewis</a>
										<i className="bss-icon bss-icon-lg-right-caret"></i>
									</li>
									<li>
										<a href>Level 2</a>
										<i className="bss-icon bss-icon-lg-right-caret"></i>
									</li>
									<li>
										<a href>Level 3</a>
										<i className="bss-icon bss-icon-lg-right-caret"></i>
									</li>
								</ul>
								<ul className="bss-topnav-secondary__content__right-menu">
									<li>
										<div className="bss-label-square +medium">
											<div className="bss-center-vertical">AC</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square +medium">
											<div className="bss-center-vertical">DV</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square +medium +active">
											<div className="bss-center-vertical">KL</div>
										</div>
									</li>
									<li>
										<div className="bss-label-square__add">
											<div className="bss-center-vertical">+</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					<Sidebar/>
					<div className="bss-nav-content +tall-top">
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
	    var Component = components.filter(function(component) {
				return component.title === params.title;
			})[0].html;
	    return (
				<Component/>
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
