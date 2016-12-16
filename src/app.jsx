var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, Redirect, Link } = require('react-router');
var components = require('./components.js');
import { designPrinciples } from './design-principles.js';
var Highlight = require('react-highlight');
var _ = require('lodash');

var icons = _.map(require('../.fontcustom-manifest.json').glyphs, function(icon, name) {
	return 'cps-icon-' + name;
});

var Sidebar = function({route}) {
	var menuItems;
	if (route.path.includes('/components')) {
		menuItems = (
			<div>
				{components.map(function(component, i) {
					var classes = "cps-icon " + icons[i] + " cps-flexible-sidenav__menu__item__icon";
					if(component.link) {
						return <a className="cps-flexible-sidenav__menu__item" key={component.title} href={component.link}>
							<i className={classes}></i>
							<span className="cps-flexible-sidenav__menu__item__title">{component.title}</span>
						</a>
					} else {
						return <Link className="cps-flexible-sidenav__menu__item" key={component.title} activeClassName="+active" to={`/components/${component.title}`}>
							<i className={classes}></i>
							<span className="cps-flexible-sidenav__menu__item__title">{component.title}</span>
						</Link>;
					}
				})}
			</div>
		);
	} else {
		menuItems = (
			<div>
				{designPrinciples.map((designPrinciple, i) => {
					var classes = `cps-icon ${designPrinciple.icon} cps-flexible-sidenav__menu__item__icon`;
					return (
						<Link className="cps-flexible-sidenav__menu__item" key={i} to={`/design/${designPrinciple.title}`} activeClassName="+active">
							<i className={classes}></i>
							<span className="cps-flexible-sidenav__menu__item__title">{designPrinciple.title}</span>
						</Link>
					);
				})}
			</div>
		);
	}
	return (
		<div className="cps-flexible-sidenav +tall-top" style={{height: '100%'}}>
			<div className="cps-flexible-sidenav__menu" style={{overflow: 'auto', height: 'calc(100% - 175px)'}}>
				{ menuItems }
			</div>
		</div>
	);
}

var TopNav = ({route}) =>  {
	return (
		<div>
			<div className="cps-topnav">
				<div className="cps-topnav__bar"></div>
				<div className="cps-topnav__content">
					<span className="cps-topnav__content__brand" href>
						<img src="canopy-logomark.svg" alt="Company Logo"/>
					</span>
					<ul className="cps-topnav__content__menu">
						<li><Link to={ `/design/${designPrinciples[0].title}` } activeClassName='+active'>Design</Link></li>
						<li><Link to={ `/components/${components[0].title}` } activeClassName='+active'>Components</Link></li>
					</ul>
					<ul className="cps-topnav__content__menu cps-pull-right">
						<li className="cps-topnav__content__menu__form">
							<div client-search></div>
						</li>
						<li className="cps-dropdown" dropdown on-toggle="toggled(cps-open)">
							<a className="cps-link" dropdown-toggle>
								Mike Hewitt
								<span className="cps-caret"></span>
							</a>
							<ul className="cps-dropdown-menu" role="menu">
								<li><a>My Profile</a></li>
								<li><a>Team Members</a></li>
								<li><a>Company Profile</a></li>

								<li className="cps-divider"></li>
								<li><a>Help</a>
								</li>
								<li className="cps-divider"></li>
								<li><a>Sign out</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className="cps-topnav-secondary">
				<div className="cps-topnav-secondary__content" >
					<ul className="cps-topnav-secondary__content__menu">
						<li>
							<a>Mike Lewis</a>
							<i className="cps-icon cps-icon-right-caret"></i>
						</li>
						<li>
							<a>Level 2</a>
							<i className="cps-icon cps-icon-right-caret"></i>
						</li>
						<li>
							<a>Level 3</a>
							<i className="cps-icon cps-icon-right-caret"></i>
						</li>
					</ul>
					<ul className="cps-topnav-secondary__content__right-menu">
						<li>
							<div className="cps-label-square +medium">
								<div className="cps-center-vertical">AC</div>
							</div>
						</li>
						<li>
							<div className="cps-label-square +medium">
								<div className="cps-center-vertical">DV</div>
							</div>
						</li>
						<li>
							<div className="cps-label-square +medium +active">
								<div className="cps-center-vertical">KL</div>
							</div>
						</li>
						<li>
							<div className="cps-label-square__add">
								<div className="cps-center-vertical">+</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

var ComponentLayout = ({params, route}) => {
	var Component = components.filter(function(component) {
		return component.title === params.title;
	})[0].html;
	return (
		<div>
			<TopNav route={route}/>
			<Sidebar route={route}/>
			<div className="cps-nav-content +tall-top">
				<Component/>
			</div>
		</div>
	);
}

var DesignLayout = ({params, route}) => {
	var designPrinciple = designPrinciples.filter((principle) => principle.title === params.title)[0];
	return (
		<div>
			<TopNav route={route} />
			<Sidebar route={route}/>
			<div className="cps-nav-content +tall-top">
				<img src={`/design/${designPrinciple.title.replace(/ /g, '_')}.png`} />
			</div>
		</div>
	);
}

ReactDOM.render((
		<Router>
			<Redirect from="/" to="components/Typography"/>
			<Route path="/components/:title" component={ComponentLayout} />
			<Route path="/design/:title" component={DesignLayout} />
		</Router>
	), document.getElementById('styleguide')
)
