import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import reactElementToJSXString from "react-element-to-jsx-string";
import Highlight from "react-highlight";
import { html } from 'js-beautify';

export default class CodeExample extends React.Component {
	state = {
		showJSX: false
	};

	render() {
		const { title, children } = this.props;

		let codeString = this.state.showJSX
			? reactElementToJSXString(children)
			: html(renderToStaticMarkup(children), { indent_inner_html: true, indent_size: 2 });

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
									checked={this.state.showJSX}
								/>
								<div
									className="cps-margin-right-24"
									onClick={this.toggleCheckbox}
								>
									JSX
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
		this.setState(() => ({ showJSX: this.theCheckbox.checked }));
	};
}
