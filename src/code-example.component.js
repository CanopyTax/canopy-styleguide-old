import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import Highlight from "react-highlight";

export default class CodeExample extends React.Component {
	state = {
		showReact: false
	};

	render() {
		const { title, children } = this.props;

		let codeString = this.state.showReact
			? reactElementToJSXString(children)
			: reactElementToJSXString(children).replace(/className=/g, "class=");

		return (
			<div style={{ ...this.props.style }}>
				{title && (
					<div className="cps-subheader cps-margin-top-24">{title}</div>
				)}
				{children && (
					<div>
						<div className="cps-flexible-focus cps-card">
							<div className="cps-card__body">
								<div className="cps-padding-left-12">{children}</div>
							</div>
						</div>

						<div className="cps-flexible-focus cps-card cps-margin-bottom-8 cps-padding-top-16">
							<div style={{ display: "flex", justifyContent: "flex-end" }}>
								<input
									ref={el => (this.theCheckbox = el)}
									type="checkbox"
									onChange={this.toggleCheckbox}
									checked={this.state.showReact}
								/>
								<div
									className="cps-margin-right-24"
									onClick={this.toggleCheckbox}
								>
									React
								</div>
							</div>
							<div className="cps-card__body">
								<Highlight className="html">{`${codeString}`}</Highlight>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}

	toggleCheckbox = () => {
		this.setState(() => ({ showReact: this.theCheckbox.checked }));
	};
}
