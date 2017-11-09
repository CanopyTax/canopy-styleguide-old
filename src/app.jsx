import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect, NavLink } from 'react-router-dom';
import components from './components.js';
import { designPrinciples } from './design-principles.js';
import { map } from 'lodash';

const icons = map(require('../.fontcustom-manifest.json').glyphs, function(icon, name) {
	return 'cps-icon-' + name;
});

const Sidebar = function({ match }) {
	var menuItems;
	if (match.path.includes('/components')) {
		menuItems = (
			<div>
				{components.map(function(component, i) {
					var classes = 'cps-icon ' + icons[i] + ' cps-flexible-sidenav__menu__item__icon';
					if (component.link) {
						return (
							<a className="cps-flexible-sidenav__menu__item" key={component.title} href={component.link}>
								<i className={classes} />
								<span className="cps-flexible-sidenav__menu__item__title">{component.title}</span>
							</a>
						);
					} else {
						return (
							<NavLink
								className="cps-flexible-sidenav__menu__item"
								key={component.title}
								activeClassName="+active"
								to={`/components/${component.title}`}>
								<i className={classes} />
								<span className="cps-flexible-sidenav__menu__item__title">{component.title}</span>
							</NavLink>
						);
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
						<NavLink
							className="cps-flexible-sidenav__menu__item"
							key={i}
							to={`/design/${designPrinciple.title}`}
							activeClassName="+active">
							<i className={classes} />
							<span className="cps-flexible-sidenav__menu__item__title">{designPrinciple.title}</span>
						</NavLink>
					);
				})}
			</div>
		);
	}
	return (
		<div className="cps-flexible-sidenav" style={{ height: '100%' }}>
			<div className="cps-flexible-sidenav__menu" style={{ overflow: 'auto', height: 'calc(100vh - 40px)' }}>
				{menuItems}
			</div>
		</div>
	);
};

const TopNav = ({ match }) => {
	return (
		<div>
			<div
				className="cps-topnav"
				style={{
					position: 'fixed',
					width: '100%',
					height: '38px',
					backgroundColor: '#00bf4b',
					top: 0,
					zIndex: 100,
				}}>
				<div className="cps-topnav__bar" />
				<div className="cps-topnav__content" style={{ position: 'relative' }}>
					<span className="cps-topnav__content__brand" style={{ float: 'left' }}>
						<img
							style={{ position: 'relative', top: '2px', left: '12px' }}
							src="white-logo.png"
							alt="Company Logo"
						/>
					</span>
					<ul className="cps-topnav__content__menu">
						<li style={{ listStyle: 'none', margin: '8px 16px', display: 'inline-block' }}>
							<NavLink
								className="cps-white"
								to={`/components/${components[0].title}`}
								activeClassName="+active">
								Components
							</NavLink>
						</li>
						<li style={{ listStyle: 'none', margin: '8px 16px', display: 'inline-block' }}>
							<NavLink
								className="cps-white"
								to={`/design/${designPrinciples[0].title}`}
								activeClassName="+active">
								Design
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

const ComponentLayout = ({ match }) => {
	var Component = components.filter(component => component.title === match.params.title)[0].html;
	return (
		<div>
			<TopNav match={match} />
			<Sidebar match={match} />
			<div className="cps-nav-content" style={{ paddingTop: '66px' }}>
				<Component />
			</div>
		</div>
	);
};

const DesignLayout = ({ match }) => {
	var designPrinciple = designPrinciples.filter(principle => principle.title === match.params.title)[0];
	return (
		<div>
			<TopNav match={match} />
			<Sidebar match={match} />
			<div className="cps-nav-content +tall-top" style={{ paddingTop: '66px' }}>
				<img src={`/design/${designPrinciple.title.replace(/ /g, '_')}.png`} />
			</div>
		</div>
	);
};

ReactDOM.render(
	<HashRouter>
		<div>
			<Route exact path="/" render={() => <Redirect from="/" to="/components/Typography" />} />
			<Route path="/components/:title" component={ComponentLayout} />
			<Route path="/design/:title" component={DesignLayout} />
		</div>
	</HashRouter>,
	document.getElementById('styleguide')
);
