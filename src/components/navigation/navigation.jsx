import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div
					className="cps-flexible-focus cps-card"
					style={{ marginLeft: "320px" }}
				>
					<div className="cps-card__header cps-subheader">Navigation</div>
				</div>
				<CodeExample
					title="(rendered output should appear to the left)"
					style={{ marginLeft: "320px" }}
				>
					<div style={{ position: "absolute", left: "300px" }}>
						<div
							className="cps-secondarynav"
							style={{ top: "85px", height: "800px" }}
						>
							<div className="cps-secondarynav__title">Some Title</div>
							<div className="cps-secondarynav__menu">
								<div className="cps-secondarynav__menu__tabs">
									<a className="cps-secondarynav__menu__tab +active">
										<span>WORKFLOW</span>
									</a>
									<a className="cps-secondarynav__menu__tab">
										<span>FORMS</span>
									</a>
								</div>
								<a href="#" className="cps-secondarynav__menu__item +expanded">
									<div className="cps-secondarynav__menu__item__bar" />
									<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-compass" />
									<span className="cps-secondarynav__menu__item__title">
										Planning
									</span>
									<i className="cps-icon cps-icon-left-caret" />
								</a>
								<div className="cps-secondarynav__menu__sub +active">
									<a href="#" className="+active">
										<span>Power of Attorney</span>
									</a>
									<a href="#">
										<span>Collection Survey</span>
									</a>
								</div>
								<a href="#" className="cps-secondarynav__menu__item +expanded">
									<div className="cps-secondarynav__menu__item__bar" />
									<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-work" />
									<span className="cps-secondarynav__menu__item__title">
										Program
									</span>
									<i className="cps-icon cps-icon-left-caret" />
								</a>
								<div className="cps-secondarynav__menu__sub +active">
									<a href="#">
										<span>Offer in Compromise</span>
									</a>
									<a href="#">
										<span>Payment Plan</span>
									</a>
									<a href="#">
										<span>Currently Not Collectible</span>
									</a>
								</div>
								<a href="#" className="cps-secondarynav__menu__item">
									<div className="cps-secondarynav__menu__item__bar" />
									<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-taxes" />
									<span className="cps-secondarynav__menu__item__title">
										File & Complete
									</span>
								</a>
								<a href="#" className="cps-secondarynav__menu__item +active">
									<div className="cps-secondarynav__menu__item__bar" />
									<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-work" />
									<span className="cps-secondarynav__menu__item__title">
										Lock & Archive
									</span>
								</a>
								<a className="cps-secondarynav__menu__item +anchor-bottom">
									<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-cog" />
									<span className="cps-secondarynav__menu__item__title">
										Engagement Settings
									</span>
								</a>
							</div>
						</div>
					</div>
				</CodeExample>
			</div>
		);
	}
};
