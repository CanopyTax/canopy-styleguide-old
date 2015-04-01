var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="bss-flexible-focus bss-card">
					<div className="bss-card__header bss-subheader">
						Fixed Focus
					</div>
					<div className="bss-card__body">
						<p>
							This card is within a fixed focus layout.
							This layout encourages a focus on a particular type of content like files or dates.
							Generally the card grows vertically rather than stacking sequential cards.
						</p>
						<p>
							Fixed focus really only defines a max and min width for the content. It also centers it.
							<strong>The class name "bss-card" is what makes the card look with a white background.</strong>
							This same class name is used for the card look and feel of the slat and table components.
						</p>
					</div>
				</div>

				<Highlight className="html">
				{
`<div class="bss-flexible-focus bss-card">
  <div class="bss-card__header bss-subheader">
    The Header content goes here.
  </div>
  <div class="bss-card__body">
    Put card main content with a body tag.
  </div>
  <div class="bss-card__hr"></div>
  <div class="bss-card__body">
    There can be multiple body tags, generally separated by an hr
  </div>
</div>`
				}
				</Highlight>
				<div className="bss-fixed-masonry">
					<div className="bss-row">
						<div className="bss-col-xs-6">
							<div className="bss-fixed-masonry__card bss-card">
								<div className="bss-card__header">
									Card 1
								</div>
								<div className="bss-card__body">
									These cards are within a fixed masonry layout. The layout of these cards is arranged with bootstrap classes.
									The actual layout and structure of the cards are the same as others. The cards have a min height of 296px and
									 depending on the content cards may need manually defined max height.
								</div>
							</div>
						</div>
						<div className="bss-col-xs-6">
							<div className="bss-fixed-masonry__card bss-card">
								<div className="bss-card__header">
									Card 2
								</div>
							</div>
						</div>
					</div>
					<div className="bss-row">
						<div className="bss-col-xs-4">
							<div className="bss-fixed-masonry__card bss-card">
								<div className="bss-card__header">
									Card 3
								</div>
							</div>
						</div>
						<div className="bss-col-xs-4">
							<div className="bss-fixed-masonry__card bss-card">
								<div className="bss-card__header">
									Card 4
								</div>
							</div>
						</div>
						<div className="bss-col-xs-4">
							<div className="bss-fixed-masonry__card bss-card">
								<div className="bss-card__header">
									Card 5
								</div>
							</div>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<div class="bss-fixed-masonry">
  <div class="bss-row">
    <div class="bss-col-xs-6">
      <div class="bss-fixed-masonry__card bss-card">
        <div class="bss-card__header">
          Card 1
        </div>
        <div class="bss-card__body">
          Card Content
        </div>
      </div>
    </div>
    <div class="bss-col-xs-6">
      <div class="bss-fixed-masonry__card bss-card">
        <div class="bss-card__header">
          Card 2
        </div>
      </div>
    </div>
  </div>
</div>`
				}
				</Highlight>
				<div className="bss-flexible-masonry bss-flexible-focus">
					<div className="bss-flexible-masonry-card">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
						</div>
					</div>
					<div className="bss-flexible-masonry-card">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone.
						</div>
					</div>
					<div className="bss-flexible-masonry-card">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							iltong brisket tri-tip venison pig ham rump shank.
						</div>
					</div>
					<div className="bss-flexible-masonry-card">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
						</div>
					</div>
					<div className="bss-flexible-masonry-card">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
						</div>
					</div>
					<div className="bss-flexible-masonry-card">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
						</div>
					</div>
					<div className="bss-flexible-masonry-card">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
						</div>
					</div>
					<div className="bss-flexible-masonry-card +link">
						<div className="bss-flexible-masonry-card__title">
							Title of the note goes here
						</div>
						<div className="bss-flexible-masonry-card__body">
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter prosciutto ham rump tail. Kevin kielbasa pork, alcatra ground round spare ribs jowl frankfurter. Andouille alcatra biltong brisket tri-tip venison pig ham rump shank.
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`
<!-- The flexible masonry grid can be acheived purely in CSS or with the masonry JS lib available at http://masonry.desandro.com/ -->
<!-- If you want to have the CSS functionality, wrapp all the cards in a "bss-flexible-masonry class". -->
<!-- Give the cards a link style by adding the "+link" modifier -->
<div class="bss-flexible-masonry bss-flexible-focus">
  <div class="bss-flexible-masonry-card +link">
    <div class="bss-flexible-masonry-card__title">
      Title of the note goes here
    </div>
    <div class="bss-flexible-masonry-card__body">
      Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone.
    </div>
  </div>
  <div class="bss-flexible-masonry-card">
    <div class="bss-flexible-masonry-card__title">
      Title of the note goes here
    </div>
    <div class="bss-flexible-masonry-card__body">
      Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner pork t-bone.
    </div>
  </div>
</div>
`
				}
				</Highlight>
			</div>
		)
	}
});
