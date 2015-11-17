var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
		
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header">
						<h3 className="cps-subheader">Buttons</h3>
					</div>
				</div>

				<cp-edit-render-code section-title="Raised Buttons" dangerouslySetInnerHTML={ {__html:
`<div class="cps-row cps-margin-bottom-12">
	<button class="cps-btn +primary">primary</button>
	<button class="cps-btn +secondary">secondary</button>
	<a href class="cps-btn +primary">PRIMARY link</a>
	<a href class="cps-btn +secondary">secondary link</a>
	<button class="cps-btn +primary"><span class="cps-icon cps-icon-upload"></span> primary</button>
	<a href class="cps-btn +primary">PRIMARY link <span class="cps-icon cps-icon-upload"></span></a>
</div>
<div class="cps-row">
	<button class="cps-btn +primary +disabled">PRIMARY</button>
	<button class="cps-btn +secondary" disabled>secondary</button>
	<a href class="cps-btn +primary +disabled">PRIMARY link</a>
	<a href class="cps-btn +secondary +disabled">secondary link</a>
	<button class="cps-btn +primary" disabled><span class="cps-icon cps-icon-upload"></span> primary</button>
	<a href class="cps-btn +primary" disabled>PRIMARY link <span class="cps-icon cps-icon-upload"></span></a>
</div>`} } />

				<cp-edit-render-code section-title="Flat Buttons" dangerouslySetInnerHTML={ {__html:
`<span class="cps-link cps-primary-green"><strong>PRIMARY link</strong></span

<a href class="cps-link">PRIMARY link</a>

<a href class="cps-link" disabled="disabled">PRIMARY link</a>

<a href class="cps-link"><span class="cps-icon cps-icon-lg-check"></span> ACCEPT</a>

<a href class="cps-link" disabled="disabled"><span class="cps-icon cps-icon-lg-check"></span> PRIMARY link</a>

<button class="cps-link">BUTTON</button>`} } />

				<cp-edit-render-code section-title="Icon Buttons" dangerouslySetInnerHTML={ {__html:
`<div class="cps-btn-icon">
	<a href class="cps-link"><span class="cps-icon cps-icon-work"></span></a>
	<a href class="cps-link"><span class="cps-icon cps-icon-cog"></span></a>
	<a href class="cps-link"><span class="cps-icon cps-icon-close"></span></a>
	<a href class="cps-link"><span class="cps-icon cps-icon-help"></span></a>
	<a href class="cps-link"><span class="cps-icon cps-icon-lg-check"></span></a>
</div>`} } />
	
				<cp-edit-render-code section-title="Links" dangerouslySetInnerHTML={ {__html: `<a href>this is a standard link</a>`} } />

			</div>
		)
	}
});
