var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus">
				<div className="bss-slat-lg">
					<div className="bss-slat-lg__badge">
						<div className="bss-slat-lg__badge__main">21</div>
						<div className="bss-slat-lg__badge__sub">Jan</div>
					</div>
					<div className="bss-slat-lg__content">
						<div className="bss-slat-lg__content__title">
							Date Title
						</div>
						Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
						tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
						prosciutto ham rump tail.
					</div>
					<div className="bss-slat-lg__actions">
						2:30PM - 3:30PM
					</div>
				</div>

				<Highlight className="html">
				{
`<!-- Large slats have a max of two separate lines of slat content. The first line  -->
<!-- of slat content should be a title or primary description for the slat. The    -->
<!-- second line should be meta data directly related to the slat.                 -->
<div class="bss-slat-lg">
  <div class="bss-slat-lg__badge">
    <div class="bss-slat-lg__badge__main">21</div>
    <div class="bss-slat-lg__badge__sub">Jan</div>
  </div>
  <div class="bss-slat-lg__content">
    <div class="bss-slat-lg__content__title">Date Title</div>
    <span>Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner... </span>
  </div>
  <div class="bss-slat-lg__actions">2:30PM - 3:30PM</div>
</div>
`
				}
				</Highlight>

				<div className="bss-slat">
					<div className="bss-slat__badge">
						<i className="bss-icon bss-subheader bss-icon-taxes"></i>
					</div>
					<div className="bss-slat__content">
						<div className="bss-slat__content__title">
							Filename
						</div>
						<div className="bss-slat__content__description">
							Document
						</div>
					</div>
					<div className="bss-slat__actions">
						2:30PM - 3:30PM
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- Medium slats have a max of one line of slat content. There needs to be a title  -->
<!-- and an option for descriptions. The primary description should be listed        -->
<!-- directly after the title.                                                       -->
<div class="bss-slat">
  <div class="bss-slat__badge">
    <i class="bss-icon bss-subheader bss-icon-taxes"></i>
  </div>
  <div class="bss-slat__content">
    <div class="bss-slat__content__title">Filename</div>
    <div class="bss-slat__content__description">Document</div>
  </div>
  <div class="bss-slat__actions">2:30PM - 3:30PM</div>
</div>
`
				}
				</Highlight>

				<div className="bss-slat +small">
					<div className="bss-slat__badge">
						<i className="bss-icon bss-subheader bss-icon-taxes"></i>
					</div>
					<div className="bss-slat__content">
						<div className="bss-slat__content__title">
							Filename
						</div>
						<div className="bss-slat__content__description">
							Document
						</div>
					</div>
					<div className="bss-slat__actions">
						2:30PM - 3:30PM
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- Crate a small slat by simply adding the class modifier +small to the medium slat -->
<div class="bss-slat +small">
  <div class="bss-slat__badge">
    <i class="bss-icon bss-subheader bss-icon-taxes"></i>
  </div>
  <div class="bss-slat__content">
    <div class="bss-slat__content__title">Filename</div>
    <div class="bss-slat__content__description">Document</div>
  </div>
  <div class="bss-slat__actions">2:30PM - 3:30PM</div>
</div>
`
				}
				</Highlight>

				<div className="bss-card">
					<div className="bss-card__header bss-subheader">
						This slat appears within a card.
					</div>
					<div className="bss-slat-lg">
						<div className="bss-slat-lg__badge">
							<div className="bss-slat-lg__badge__main">21</div>
							<div className="bss-slat-lg__badge__sub">Jan</div>
						</div>
						<div className="bss-slat-lg__content">
							<div className="bss-slat-lg__content__title">
								Date Title
							</div>
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
							tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
							prosciutto ham rump tail.
						</div>
						<div className="bss-slat-lg__actions">
							2:30PM - 3:30PM
						</div>
					</div>
				</div>
				<Highlight className="html">
					{
`<div class="bss-card">
  <div class="bss-card__header bss-subheader">
    This slat appears within a card.
  </div>
  <div class="bss-slat-lg">
    <div class="bss-slat-lg__badge">
      <div class="bss-slat-lg__badge__main">21</div>
      <div class="bss-slat-lg__badge__sub">Jan</div>
    </div>
    <div class="bss-slat-lg__content">
      <div class="bss-slat-lg__content__title">
        Date Title
      </div>
      Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
      tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
      prosciutto ham rump tail.
    </div>
    <div class="bss-slat-lg__actions">
      2:30PM - 3:30PM
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
