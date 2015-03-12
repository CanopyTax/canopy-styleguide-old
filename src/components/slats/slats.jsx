var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="bss-slat-lg">
					<div className="bss-slat-lg__desc">
						<div className="bss-slat-lg__desc__main">21</div>
						<div className="bss-slat-lg__desc__sub">Jan</div>
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
`<div class="bss-slat-lg">
  <div class="bss-slat-lg__desc">
    <div class="bss-slat-lg__desc__main">21</div>
    <div class="bss-slat-lg__desc__sub">Jan</div>
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
			</div>
		)
	}
});
