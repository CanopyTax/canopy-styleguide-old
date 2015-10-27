var React = require('react'); 

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Navigation
					</div>
				</div>
				<cp-edit-render-code section-title="(rendered output should appear to the left)" dangerouslySetInnerHTML={ {__html:
`<div style="position: absolute; left: 350px;"> <!-- NOTE: These inline styles are only present for the placement of the rendered output -->
	<div class="cps-secondarynav" style="top: 85px; height: 800px;"> <!-- NOTE: These inline styles are only present for the placement of the rendered output -->
		<div class="cps-secondarynav__title">
			Some Title
		</div>
		<div class="cps-secondarynav__menu">
			<a href="#" class="cps-secondarynav__menu__item +expanded">
				<div class="cps-secondarynav__menu__item__bar"></div>
				<i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-compass"></i>
				<span class="cps-secondarynav__menu__item__title">Planning</span>
				<i class="cps-icon cps-icon-left-caret"></i>
			</a>
			<div class="cps-secondarynav__menu__sub +active">
				<a href="#" class="+active"><span>Power of Attorney</span></a>
				<a href="#"><span>Collection Survey</span></a>
			</div>
			<a href="#" class="cps-secondarynav__menu__item +expanded">
				<div class="cps-secondarynav__menu__item__bar"></div>
				<i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-work"></i>
				<span class="cps-secondarynav__menu__item__title">Program</span>
				<i class="cps-icon cps-icon-left-caret"></i>
			</a>
			<div class="cps-secondarynav__menu__sub +active">
				<a href="#"><span>Offer in Compromise</span></a>
				<a href="#"><span>Payment Plan</span></a>
				<a href="#"><span>Currently Not Collectible</span></a>
			</div>
			<a href="#" class="cps-secondarynav__menu__item">
				<div class="cps-secondarynav__menu__item__bar"></div>
				<i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-taxes"></i>
				<span class="cps-secondarynav__menu__item__title">File & Complete</span>
			</a>
			<a href="#" class="cps-secondarynav__menu__item +active">
				<div class="cps-secondarynav__menu__item__bar"></div>
				<i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-work"></i>
				<span class="cps-secondarynav__menu__item__title">Lock & Archive</span>
			</a>
			<a class="cps-secondarynav__menu__item +anchor-bottom">
				<i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-cog"></i>
				<span class="cps-secondarynav__menu__item__title">Engagement Settings</span>
			</a>
		</div>
	</div>
</div>`} } />
			</div>
		);
	}
});
