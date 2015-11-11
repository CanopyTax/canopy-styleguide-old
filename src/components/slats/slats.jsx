var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card cps-margin-bottom-32">
					<div className="cps-card__header cps-subheader">
						Slats
					</div>
					<div className="cps-card__body">
						<strong>Note:</strong> Adding the class '+noclick' to a slat will remove the cursor:pointer and the background-color that appears on hover.
					</div>
				</div>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">Large slats</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Large slats have a max of two separate lines of slat content.
						<p>The first line of slat content should be a title or primary description for the slat.</p>
						<p>The second line should be meta data directly related to the slat.</p>
					</div>
				</div>

				<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
`<div class="cps-flexible-focus">
	<div class="cps-card">
		<a class="cps-slat-lg">
			<div class="cps-slat-lg__badge">
				<div class="cps-slat-lg__badge__main">21</div>
				<div class="cps-slat-lg__badge__sub">Jan</div>
			</div>
			<div class="cps-slat-lg__content">
				<div class="cps-slat-lg__content__title">
					Date Title
				</div>
				Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
				tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
				prosciutto ham rump tail.
			</div>
			<div class="cps-slat-lg__actions">
				2:30PM - 3:30PM
			</div>
		</a>
		<div class="cps-slat-lg">
			<div class="cps-slat-lg__content">
				<div class="cps-slat-lg__content__title">
					Date Title
				</div>
				Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
				tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
				prosciutto ham rump tail.
			</div>
			<div class="cps-slat-lg__actions +hover-show">
				<span class="cps-link cps-primary-green"><strong>PRIMARY link</strong></span>
			</div>
		</div>
		<a class="cps-slat-lg">
			<div class="cps-slat-lg__badge">
				<div class="cps-slat-lg__badge__main">21</div>
				<div class="cps-slat-lg__badge__sub">Jan</div>
			</div>
			<div class="cps-slat-lg__content">
				<div class="cps-slat-lg__content__title">
					Date Title
				</div>
				Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
				tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
				prosciutto ham rump tail.
			</div>
			<div class="cps-slat-lg__actions +hover-show">
				<i class="cps-icon cps-icon-trash"></i>
				<i class="cps-icon cps-icon-archive cps-margin-left-24"></i>
			</div>
		</a>
	</div>
</div>` } } />

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">Medium slats</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Medium slats have a max of one line of slat content. There needs to be a title and an option for descriptions. The primary description should be listed directly after the title.
					</div>
				</div>

				<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
`<div class="cps-flexible-focus">
	<div class="cps-card">
		<a class="cps-slat">
			<div class="cps-slat__badge">
				<i class="cps-icon cps-subheader cps-icon-taxes"></i>
			</div>
			<div class="cps-slat__content">
				<div class="cps-slat__content__title">
					Filename
				</div>
				<div class="cps-slat__content__description">
					Document
				</div>
			</div>
			<div class="cps-slat__actions">
				2:30PM - 3:30PM
			</div>
		</a>
		<div class="cps-slat">
			<div class="cps-slat__content">
				<div class="cps-slat__content__title">
					Filename
				</div>
				<div class="cps-slat__content__description">
					Document
				</div>
			</div>
			<div class="cps-slat__actions">
				2:30PM - 3:30PM
			</div>
		</div>
		<a class="cps-slat">
			<div class="cps-slat__badge">
				<i class="cps-icon cps-subheader cps-icon-taxes"></i>
			</div>
			<div class="cps-slat__content">
				<div class="cps-slat__content__title">
					Filename
				</div>
				<div class="cps-slat__content__description">
					Document
				</div>
			</div>
			<div class="cps-slat__actions +hover-show">
				<i class="cps-icon cps-icon-trash"></i>
				<i class="cps-icon cps-icon-archive cps-margin-left-24"></i>
				<span class="cps-link cps-primary-green cps-margin-left-12"><strong>Move</strong></span>
				<span class="cps-link cps-primary-green"><strong>Rename</strong></span>
			</div>
		</a>
	</div>
</div>` } } />


				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">Small slats</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Create a small slat by simply adding the class modifier +small to the medium slat
					</div>
				</div>

				<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
`<div class="cps-flexible-focus">
	<div class="cps-card">
		<a class="cps-slat +small">
			<div class="cps-slat__badge">
				<i class="cps-icon cps-subheader cps-icon-taxes"></i>
			</div>
			<div class="cps-slat__content">
				<div class="cps-slat__content__title">
					Filename
				</div>
				<div class="cps-slat__content__description">
					Document
				</div>
			</div>
			<div class="cps-slat__actions">
				2:30PM - 3:30PM
			</div>
		</a>
		<div class="cps-slat +small">
			<div class="cps-slat__content">
				<div class="cps-slat__content__title">
					Filename
				</div>
				<div class="cps-slat__content__description">
					Document
				</div>
			</div>
			<div class="cps-slat__actions">
				2:30PM - 3:30PM
			</div>
		</div>
		<a class="cps-slat +small">
			<div class="cps-slat__badge">
				<i class="cps-icon cps-subheader cps-icon-taxes"></i>
			</div>
			<div class="cps-slat__content">
				<div class="cps-slat__content__title">
					Filename
				</div>
				<div class="cps-slat__content__description">
					Document
				</div>
			</div>
			<div class="cps-slat__actions +hover-show">
				<i class="cps-icon cps-icon-trash"></i>
				<i class="cps-icon cps-icon-archive cps-margin-left-24"></i>
				<span class="cps-link cps-primary-green cps-margin-left-12"><strong>Move</strong></span>
				<span class="cps-link cps-primary-green"><strong>Rename</strong></span>
			</div>
		</a>
	</div>
</div>` } } />


				<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
`<div class="cps-flexible-focus">
	<div class="cps-card">
		<div class="cps-card__header cps-subheader">
			This slat appears within a card.
		</div>
		<a class="cps-slat-lg">
			<div class="cps-slat-lg__badge">
				<div class="cps-slat-lg__badge__main">21</div>
				<div class="cps-slat-lg__badge__sub">Jan</div>
			</div>
			<div class="cps-slat-lg__content">
				<div class="cps-slat-lg__content__title">
					Date Title
				</div>
				Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
				tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
				prosciutto ham rump tail.
			</div>
			<div class="cps-slat-lg__actions">
				2:30PM - 3:30PM
			</div>
		</a>
		<a class="cps-slat-lg">
			<div class="cps-slat-lg__badge">
				<div class="cps-slat-lg__badge__main">21</div>
				<div class="cps-slat-lg__badge__sub">Jan</div>
			</div>
			<div class="cps-slat-lg__content">
				<div class="cps-slat-lg__content__title">
					Date Title
				</div>
				Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
				tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
				prosciutto ham rump tail.
			</div>
			<div class="cps-slat-lg__actions">
				2:30PM - 3:30PM
			</div>
		</a>
	</div>
</div>` } } />


				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div id="title" className="cps-subheader-sm">Disabled slats</div>
					</div>
					<hr />
					<div className="cps-card__body">
						Create a visually "disabled" variation of a slat by adding the class modifier +disabled. This will
						remove the hover state, as well as the cursor change.
					</div>
				</div>

				<cp-edit-render-code dangerouslySetInnerHTML={ {__html:
`<div class="cps-flexible-focus">
	<div class="cps-card">
		<a class="cps-slat-lg +disabled">
			<div class="cps-slat-lg__content">
				<div class="cps-slat-lg__content__title">
					A disabled large slat
				</div>
				Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
				tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
				prosciutto ham rump tail.
			</div>
			<div class="cps-slat-lg__actions cps-margin-top-4">
				<i class="cps-icon cps-icon-lock"></i>
			</div>
		</a>
	</div>
</div>` } } />

			</div>
		)
	}
});
