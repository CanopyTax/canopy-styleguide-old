var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div style={{float:'right', "width": "calc(100% - 300px)"}}>
					<Highlight className="html">
						{
`
<div class="bss-secondarynav">
  <div class="bss-secondarynav__title">
    Some Title
  </div>
  <div class="bss-secondarynav__menu">
    <a href="#" class="bss-secondarynav__menu__item +expanded">
      <div class="bss-secondarynav__menu__item__bar"></div>
      <i class="bss-secondarynav__menu__item__icon bss-icon bss-icon-compass"></i>
      <span class="bss-secondarynav__menu__item__title">Planning</span>
      <i class="bss-icon bss-icon-lg-left-caret"></i>
    </a>
    <div class="bss-secondarynav__menu__sub +active">
      <a href="#" class="+active"><span>Power of Attorney</span></a>
      <a href="#"><span>Collection Survey</span></a>
    </div>
    <a href="#" class="bss-secondarynav__menu__item +expanded">
      <div class="bss-secondarynav__menu__item__bar"></div>
      <i class="bss-secondarynav__menu__item__icon bss-icon bss-icon-work"></i>
      <span class="bss-secondarynav__menu__item__title">Program</span>
      <i class="bss-icon bss-icon-lg-left-caret"></i>
    </a>
    <div class="bss-secondarynav__menu__sub +active">
      <a href="#"><span>Offer in Compromise</span></a>
      <a href="#"><span>Payment Plan</span></a>
      <a href="#"><span>Currently Not Collectible</span></a>
    </div>
    <a href="#" class="bss-secondarynav__menu__item">
      <div class="bss-secondarynav__menu__item__bar"></div>
      <i class="bss-secondarynav__menu__item__icon bss-icon bss-icon-taxes"></i>
      <span class="bss-secondarynav__menu__item__title">File & Complete</span>
    </a>
    <a href="#" class="bss-secondarynav__menu__item +active">
      <div class="bss-secondarynav__menu__item__bar"></div>
      <i class="bss-secondarynav__menu__item__icon bss-icon bss-icon-work"></i>
      <span class="bss-secondarynav__menu__item__title">Lock & Archive</span>
    </a>
    <a class="bss-secondarynav__menu__item +anchor-bottom">
      <i class="bss-secondarynav__menu__item__icon bss-icon bss-icon-cog"></i>
      <span class="bss-secondarynav__menu__item__title">Engagement Settings</span>
    </a>
  </div>
</div>
`
						}
					</Highlight>
				</div>
				<div className="bss-secondarynav" style={{position: "relative", height: "500px", float: "left"}}>
					<div className="bss-secondarynav__title">
						Some Title
					</div>
					<div className="bss-secondarynav__menu">
						<a href="#" className="bss-secondarynav__menu__item +expanded">
							<div className="bss-secondarynav__menu__item__bar"></div>
							<i className="bss-secondarynav__menu__item__icon bss-icon bss-icon-compass"></i>
							<span className="bss-secondarynav__menu__item__title">Planning</span>
							<i className="bss-icon bss-icon-lg-left-caret"></i>
						</a>
						<div className="bss-secondarynav__menu__sub +active">
							<a href="#" className="+active"><span>Power of Attorney</span></a>
							<a href="#"><span>Collection Survey</span></a>
						</div>
						<a href="#" className="bss-secondarynav__menu__item">
							<div className="bss-secondarynav__menu__item__bar"></div>
							<i className="bss-secondarynav__menu__item__icon bss-icon bss-icon-work"></i>
							<span className="bss-secondarynav__menu__item__title">Program</span>
							<i className="bss-icon bss-icon-lg-left-caret"></i>
						</a>
						<div className="bss-secondarynav__menu__sub">
							<a href="#"><span>Offer in Compromise</span></a>
							<a href="#"><span>Payment Plan</span></a>
							<a href="#"><span>Currently Not Collectible</span></a>
						</div>
						<a href="#" className="bss-secondarynav__menu__item">
							<div className="bss-secondarynav__menu__item__bar"></div>
							<i className="bss-secondarynav__menu__item__icon bss-icon bss-icon-taxes"></i>
							<span className="bss-secondarynav__menu__item__title">File & Complete</span>
						</a>
						<a href="#" className="bss-secondarynav__menu__item +active">
							<div className="bss-secondarynav__menu__item__bar"></div>
							<i className="bss-secondarynav__menu__item__icon bss-icon bss-icon-work"></i>
							<span className="bss-secondarynav__menu__item__title">Lock & Archive</span>
						</a>
						<a className="bss-secondarynav__menu__item +anchor-bottom">
							<i className="bss-secondarynav__menu__item__icon bss-icon bss-icon-cog"></i>
							<span className="bss-secondarynav__menu__item__title">Engagement Settings</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
});
