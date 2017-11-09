import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-32">
					<div className="cps-card__header cps-subheader">Slats</div>
					<div className="cps-card__body">
						<strong>Note:</strong> Adding the class '+noclick' to a slat will
						remove the cursor:pointer and the background-color that appears on
						hover.
					</div>
				</div>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">
							Large slats
						</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Large slats have a max of two separate lines of slat content.
						<p>
							The first line of slat content should be a title or primary
							description for the slat.
						</p>
						<p>
							The second line should be meta data directly related to the slat.
						</p>
					</div>
				</div>

				<CodeExample>
					<div className="cps-flexible-focus">
						<div className="cps-card">
							<a className="cps-slat-lg">
								<div className="cps-slat-lg__badge">
									<div className="cps-slat-lg__badge__main">21</div>
									<div className="cps-slat-lg__badge__sub">Jan</div>
								</div>
								<div className="cps-slat-lg__content">
									<div className="cps-slat-lg__content__title">Date Title</div>
									Salami venison spare ribs shankle landjaeger tongue, pork loin
									brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
									landjaeger chicken, kielbasa frankfurter prosciutto ham rump
									tail.
								</div>
								<div className="cps-slat-lg__actions">2:30PM - 3:30PM</div>
							</a>
							<div className="cps-slat-lg">
								<div className="cps-slat-lg__content">
									<div className="cps-slat-lg__content__title">Date Title</div>
									Salami venison spare ribs shankle landjaeger tongue, pork loin
									brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
									landjaeger chicken, kielbasa frankfurter prosciutto ham rump
									tail.
								</div>
								<div className="cps-slat-lg__actions +hover-show">
									<span className="cps-link cps-primary-green">
										<strong>PRIMARY link</strong>
									</span>
								</div>
							</div>
							<a className="cps-slat-lg">
								<div className="cps-slat-lg__badge">
									<div className="cps-slat-lg__badge__main">21</div>
									<div className="cps-slat-lg__badge__sub">Jan</div>
								</div>
								<div className="cps-slat-lg__content">
									<div className="cps-slat-lg__content__title">Date Title</div>
									Salami venison spare ribs shankle landjaeger tongue, pork loin
									brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
									landjaeger chicken, kielbasa frankfurter prosciutto ham rump
									tail.
								</div>
								<div className="cps-slat-lg__actions +hover-show">
									<i className="cps-icon cps-icon-trash" />
									<i className="cps-icon cps-icon-archive cps-margin-left-24" />
								</div>
							</a>
						</div>
					</div>
				</CodeExample>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">
							Medium slats
						</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Medium slats have a max of one line of slat content. There needs to
						be a title and an option for descriptions. The primary description
						should be listed directly after the title.
					</div>
				</div>

				<CodeExample>
					<div className="cps-flexible-focus">
						<div className="cps-card">
							<a className="cps-slat">
								<div className="cps-slat__badge">
									<i className="cps-icon cps-subheader cps-icon-taxes" />
								</div>
								<div className="cps-slat__content">
									<div className="cps-slat__content__title">Filename</div>
									<div className="cps-slat__content__description">Document</div>
								</div>
								<div className="cps-slat__actions">2:30PM - 3:30PM</div>
							</a>
							<div className="cps-slat">
								<div className="cps-slat__content">
									<div className="cps-slat__content__title">Filename</div>
									<div className="cps-slat__content__description">Document</div>
								</div>
								<div className="cps-slat__actions">2:30PM - 3:30PM</div>
							</div>
							<a className="cps-slat">
								<div className="cps-slat__badge">
									<i className="cps-icon cps-subheader cps-icon-taxes" />
								</div>
								<div className="cps-slat__content">
									<div className="cps-slat__content__title">Filename</div>
									<div className="cps-slat__content__description">Document</div>
								</div>
								<div className="cps-slat__actions +hover-show">
									<i className="cps-icon cps-icon-trash" />
									<i className="cps-icon cps-icon-archive cps-margin-left-24" />
									<span className="cps-link cps-primary-green cps-margin-left-12">
										<strong>Move</strong>
									</span>
									<span className="cps-link cps-primary-green">
										<strong>Rename</strong>
									</span>
								</div>
							</a>
						</div>
					</div>
				</CodeExample>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">
							Small slats
						</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Create a small slat by simply adding the class modifier +small to
						the medium slat
					</div>
				</div>

				<CodeExample>
					<div className="cps-flexible-focus">
						<div className="cps-card">
							<a className="cps-slat +small">
								<div className="cps-slat__badge">
									<i className="cps-icon cps-subheader cps-icon-taxes" />
								</div>
								<div className="cps-slat__content">
									<div className="cps-slat__content__title">Filename</div>
									<div className="cps-slat__content__description">Document</div>
								</div>
								<div className="cps-slat__actions">2:30PM - 3:30PM</div>
							</a>
							<div className="cps-slat +small">
								<div className="cps-slat__content">
									<div className="cps-slat__content__title">Filename</div>
									<div className="cps-slat__content__description">Document</div>
								</div>
								<div className="cps-slat__actions">2:30PM - 3:30PM</div>
							</div>
							<a className="cps-slat +small">
								<div className="cps-slat__badge">
									<i className="cps-icon cps-subheader cps-icon-taxes" />
								</div>
								<div className="cps-slat__content">
									<div className="cps-slat__content__title">Filename</div>
									<div className="cps-slat__content__description">Document</div>
								</div>
								<div className="cps-slat__actions +hover-show">
									<i className="cps-icon cps-icon-trash" />
									<i className="cps-icon cps-icon-archive cps-margin-left-24" />
									<span className="cps-link cps-primary-green cps-margin-left-12">
										<strong>Move</strong>
									</span>
									<span className="cps-link cps-primary-green">
										<strong>Rename</strong>
									</span>
								</div>
							</a>
						</div>
					</div>
				</CodeExample>

				<CodeExample>
					<div className="cps-flexible-focus">
						<div className="cps-card">
							<div className="cps-card__header cps-subheader">
								This slat appears within a card.
							</div>
							<a className="cps-slat-lg">
								<div className="cps-slat-lg__badge">
									<div className="cps-slat-lg__badge__main">21</div>
									<div className="cps-slat-lg__badge__sub">Jan</div>
								</div>
								<div className="cps-slat-lg__content">
									<div className="cps-slat-lg__content__title">Date Title</div>
									Salami venison spare ribs shankle landjaeger tongue, pork loin
									brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
									landjaeger chicken, kielbasa frankfurter prosciutto ham rump
									tail.
								</div>
								<div className="cps-slat-lg__actions">2:30PM - 3:30PM</div>
							</a>
							<a className="cps-slat-lg">
								<div className="cps-slat-lg__badge">
									<div className="cps-slat-lg__badge__main">21</div>
									<div className="cps-slat-lg__badge__sub">Jan</div>
								</div>
								<div className="cps-slat-lg__content">
									<div className="cps-slat-lg__content__title">Date Title</div>
									Salami venison spare ribs shankle landjaeger tongue, pork loin
									brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
									landjaeger chicken, kielbasa frankfurter prosciutto ham rump
									tail.
								</div>
								<div className="cps-slat-lg__actions">2:30PM - 3:30PM</div>
							</a>
						</div>
					</div>
				</CodeExample>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">
							Disabled slats
						</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Create a visually "disabled" variation of a slat by adding the class
						modifier +disabled. This will remove the hover state, as well as the
						cursor change.
					</div>
				</div>

				<CodeExample>
					<div className="cps-flexible-focus">
						<div className="cps-card">
							<a className="cps-slat-lg +disabled">
								<div className="cps-slat-lg__content">
									<div className="cps-slat-lg__content__title">
										A disabled large slat
									</div>
									Salami venison spare ribs shankle landjaeger tongue, pork loin
									brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
									landjaeger chicken, kielbasa frankfurter prosciutto ham rump
									tail.
								</div>
								<div className="cps-slat-lg__actions cps-margin-top-4">
									<i className="cps-icon cps-icon-lock" />
								</div>
							</a>
						</div>
					</div>
				</CodeExample>
			</div>
		);
	}
};
