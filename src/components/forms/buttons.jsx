import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-16">
					<div className="cps-card__header cps-subheader">Buttons</div>
				</div>

				<CodeExample title="Primary and secondary">
					<div className="cps-row cps-margin-24">
						<button className="cps-btn +primary">primary</button>
						<button className="cps-btn +secondary">secondary</button>
						<a href className="cps-btn +primary">
							PRIMARY link
						</a>
						<a href className="cps-btn +secondary">
							secondary link
						</a>
						<button className="cps-btn +primary">
							<span className="cps-icon cps-icon-upload" /> primary
						</button>
						<a href className="cps-btn +primary">
							PRIMARY link <span className="cps-icon cps-icon-upload" />
						</a>
					</div>
				</CodeExample>

				<CodeExample title="Disabled">
					<div className="cps-row cps-margin-24">
						<button className="cps-btn +primary +disabled">PRIMARY</button>
						<button className="cps-btn +secondary" disabled>
							secondary
						</button>
						<a href className="cps-btn +primary +disabled">
							PRIMARY link
						</a>
						<a href className="cps-btn +secondary +disabled">
							secondary link
						</a>
						<button className="cps-btn +primary" disabled>
							<span className="cps-icon cps-icon-upload" /> primary
						</button>
						<a href className="cps-btn +primary" disabled>
							PRIMARY link <span className="cps-icon cps-icon-upload" />
						</a>
					</div>
				</CodeExample>

				<CodeExample title="Link buttons">
					<div>
						<span className="cps-link cps-primary-green">
							<strong>PRIMARY link</strong>
						</span>

						<a href className="cps-link">
							PRIMARY link
						</a>

						<a href className="cps-link" disabled="disabled">
							PRIMARY link
						</a>

						<a href className="cps-link">
							<span className="cps-icon cps-icon-lg-check" /> ACCEPT
						</a>

						<a href className="cps-link" disabled="disabled">
							<span className="cps-icon cps-icon-lg-check" /> PRIMARY link
						</a>

						<button className="cps-link">BUTTON</button>
					</div>
				</CodeExample>

				<CodeExample title="Icon buttons">
					<div className="cps-btn-icon">
						<a href className="cps-link">
							<span className="cps-icon cps-icon-work" />
						</a>
						<a href className="cps-link">
							<span className="cps-icon cps-icon-cog" />
						</a>
						<a href className="cps-link">
							<span className="cps-icon cps-icon-close" />
						</a>
						<a href className="cps-link">
							<span className="cps-icon cps-icon-help" />
						</a>
						<a href className="cps-link">
							<span className="cps-icon cps-icon-lg-check" />
						</a>
					</div>
				</CodeExample>
			</div>
		);
	}
};
