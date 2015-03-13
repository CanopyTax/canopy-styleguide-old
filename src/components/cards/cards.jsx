var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="bss-fixed-focus bss-card">
					<div className="bss-card__header bss-subheader">
						Fixed Focus
					</div>
					<div className="bss-card__body">
						<p>
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
`<div className="bss-fixed-focus bss-card">
  <div className="bss-card__header bss-subheader">
    The Header content goes here.
  </div>
  <div className="bss-card__body">
    Put card main content with a body tag.
  </div>
  <div className="bss-card__hr"></div>
  <div className="bss-card__body">
    There can be multiple body tags, generally separated by an hr
  </div>
</div>`
				}
				</Highlight>
				<div className="bss-fixed-masonry">
					<div className="bss-fixed-masonry__row">
						<div className="bss-fixed-masonry__card bss-card col-xs-5">
							Hello
						</div>
						<div className="bss-fixed-masonry__card bss-card col-xs-5">
							Hello
						</div>
					</div>
				</div>
			</div>
		)
	}
});
