import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-16">
					<div className="cps-card__header cps-subheader">Cards</div>
				</div>

				<CodeExample>
					<div>
						<p className="cps-card cps-padding-32 cps-margin-bottom-32">
							This is the default card.
						</p>

						<div className="cps-card__height-2 cps-padding-32 cps-margin-bottom-32">
							This is a div with the 'cps-card__height-2' class applied.
						</div>

						<p className="cps-card__height-3 cps-padding-32 cps-margin-bottom-32">
							This is a div with the 'cps-card__height-3' class applied.
						</p>
					</div>
				</CodeExample>

				<CodeExample title="Flexible focus cards">
					<div className="cps-flexible-focus cps-card cps-margin-bottom-16">
						<div className="cps-card__header cps-subheader">Title</div>
						<div className="cps-card__body">
							This card is within a flexible focus layout. This layout
							encourages a focus on a particular type of content like files or
							dates. Generally the card grows vertically rather than stacking
							sequential cards.
							<p>
								Flexible focus really only defines a max and min width for the
								content. It also centers it.
								<strong>
									The class name "cps-card" is what makes the card look with a
									white background.
								</strong>
								This same class name is used for the card look and feel of the
								slat and table components.
							</p>
							<hr className="cps-card__hr" />
							<p>
								The thinner card headers can be used by adding the class
								modifier "+thin" to the cps-card element.
							</p>
						</div>
					</div>
				</CodeExample>

				<CodeExample>
					<div className="cps-flexible-focus cps-card">
						<div className="cps-card__header cps-subheader">
							The Header content goes here.
						</div>
						<div className="cps-card__body">
							Put card main content with a body tag.
						</div>
						<hr />
						<div className="cps-card__body">
							There can be multiple body tags, generally separated by an hr
						</div>
					</div>
				</CodeExample>

				<CodeExample title="Fixed focus cards">
					<div className="cps-fixed-focus cps-card cps-margin-bottom-16">
						<div className="cps-card__header cps-subheader">Fixed Focus</div>
						<div className="cps-card__body">
							This card is within a fixed focus layout. This layout encourages a
							focus on a particular type of content like files or dates.
							Generally the card grows vertically but does not resize
							horizontally with the screen.
							<div className="cps-card__banner cps-bg-success cps-white">
								A long banner can appear within a card
							</div>
							<p>
								Fixed focus defines a 760px width for the content. It also
								centers it. It generally does not account for navigation menus.
								<strong>
									The class name "cps-card" is what makes the card look with a
									white background.
								</strong>
								This same class name is used for the card look and feel of the
								slat and table components.
							</p>
							<div className="cps-card__banner +large +bg-warning">
								<i className="cps-icon cps-icon-error cps-warning">
									<span>A large banner can also appear in a card</span>
								</i>
							</div>
							<p>Followed by more text.</p>
						</div>
					</div>
				</CodeExample>

				<CodeExample>
					<div className="cps-fixed-focus cps-card">
						<div className="cps-card__header cps-subheader">
							The Header content goes here.
						</div>
						<div className="cps-card__body">
							Put card main content with a body tag.
							<p>Inline banners:</p>
							<div className="cps-card__banner cps-bg-success cps-white">
								A long banner can appear within a card
							</div>
						</div>
						<hr />
						<div className="cps-card__body">
							There can be multiple body tags, generally separated by an hr
						</div>
						<hr />
						<div className="cps-card__body">
							<div className="cps-card__banner +large +bg-warning">
								<i className="cps-icon cps-icon-error cps-warning">
									<span>A large banner can also appear in a card</span>
								</i>
							</div>
							<p>Followed by more text.</p>
						</div>
					</div>
				</CodeExample>

				<CodeExample title="Fixed masonry cards">
					<div className="cps-fixed-masonry cps-margin-bottom-16">
						<div className="cps-row">
							<div className="cps-col-xs-6">
								<div className="cps-fixed-masonry__card cps-card +thin">
									<div className="cps-card__header">
										Card 1
										<a href className="cps-pull-right cps-blue-link">
											+ Take some action
										</a>
									</div>
									<div className="cps-card__body">
										These cards are within a fixed masonry layout. The layout of
										these cards is arranged with bootstrap classes. The actual
										layout and structure of the cards are the same as others.
										The cards have a min height of 296px and depending on the
										content cards may need manually defined max height.
									</div>
								</div>
							</div>
							<div className="cps-col-xs-6">
								<div className="cps-fixed-masonry__card cps-card +thin">
									<div className="cps-card__header">Card 2</div>
									<a className="cps-slat">
										<div className="cps-slat__badge">
											<i className="cps-icon cps-subheader cps-icon-taxes" />
										</div>
										<div className="cps-slat__content">
											<div className="cps-slat__content__title">Filename</div>
											<div className="cps-slat__content__description">
												Document
											</div>
										</div>
										<div className="cps-slat__actions">2:30PM - 3:30PM</div>
									</a>
									<a className="cps-slat">
										<div className="cps-slat__badge">
											<i className="cps-icon cps-subheader cps-icon-taxes" />
										</div>
										<div className="cps-slat__content">
											<div>Filename</div>
										</div>
										<div className="cps-slat__actions">2:30PM - 3:30PM</div>
									</a>
									<a className="cps-slat">
										<div className="cps-slat__badge">
											<i className="cps-icon cps-subheader cps-icon-taxes" />
										</div>
										<div className="cps-slat__content">
											<div className="cps-slat__content__title">Filename</div>
											<div className="cps-slat__content__description">
												Document
											</div>
										</div>
										<div className="cps-slat__actions">2:30PM - 3:30PM</div>
									</a>
								</div>
							</div>
						</div>
						<div className="cps-row">
							<div className="cps-col-xs-4">
								<div className="cps-fixed-masonry__card cps-card">
									<div className="cps-card__header">Card 3</div>
								</div>
							</div>
							<div className="cps-col-xs-4">
								<div className="cps-fixed-masonry__card cps-card">
									<div className="cps-card__header">Card 4</div>
								</div>
							</div>
							<div className="cps-col-xs-4">
								<div className="cps-fixed-masonry__card cps-card">
									<div className="cps-card__header">Card 5</div>
								</div>
							</div>
						</div>
					</div>
				</CodeExample>

				<CodeExample title="Fixed masonry cards">
					<div className="cps-flexible-focus cps-card cps-margin-bottom-16 cps-margin-top-32">
						<div className="cps-card__body">
							The flexible masonry grid can be achieved purely in CSS or with
							the masonry JS lib available at http://masonry.desandro.com/.
							<p>
								If you want to have the CSS functionality, wrap all the cards in
								a "cps-flexible-masonry class".
							</p>
							<p>Give the cards a link style by adding the "+link" modifier</p>
						</div>
					</div>
				</CodeExample>

				<CodeExample>
					<div className="cps-flexible-masonry cps-flexible-focus">
						<div className="cps-flexible-masonry-card">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone.
							</div>
						</div>
						<div className="cps-flexible-masonry-card">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								iltong brisket tri-tip venison pig ham rump shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin
								kielbasa pork, alcatra ground round spare ribs jowl frankfurter.
								Andouille alcatra biltong brisket tri-tip venison pig ham rump
								shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank. Salami venison spare ribs shankle landjaeger
								tongue, pork loin brisket sirloin tri-tip turducken doner pork
								t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
								prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground
								round spare ribs jowl frankfurter. Andouille alcatra biltong
								brisket tri-tip venison pig ham rump shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card +link">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank. Salami venison spare ribs shankle landjaeger
								tongue, pork loin brisket sirloin tri-tip turducken doner pork
								t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
								prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground
								round spare ribs jowl frankfurter. Andouille alcatra biltong
								brisket tri-tip venison pig ham rump shank.
							</div>
						</div>
					</div>
				</CodeExample>

				<CodeExample title="Small flexible masonry cards">
					<div className="cps-flexible-focus cps-card cps-margin-bottom-16 cps-margin-top-32">
						<div className="cps-card__body">
							Small cards can be created with the "+small" class modifier.
						</div>
					</div>
				</CodeExample>

				<CodeExample>
					<div className="cps-fixed-focus">
						<div className="cps-flexible-masonry-card +small">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card +small">
							<div className="cps-flexible-masonry-card__title">
								Title of the note
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank.
							</div>
						</div>
						<div className="cps-flexible-masonry-card +small">
							<div className="cps-flexible-masonry-card__title">
								Title of the note goes here
							</div>
							<div className="cps-flexible-masonry-card__body">
								Salami venison spare ribs shankle landjaeger tongue, pork loin
								brisket sirloin tri-tip turducken doner pork t-bone. Porchetta
								landjaeger chicken, kielbasa frankfurter prosciutto ham rump
								tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl
								frankfurter. Andouille alcatra biltong brisket tri-tip venison
								pig ham rump shank.
							</div>
						</div>
					</div>
				</CodeExample>
			</div>
		);
	}
};
