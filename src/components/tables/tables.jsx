var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Tables
					</div>
					<div className="cps-card__body">
						<p>
							Sometimes making an entire card a full table can be too heavy and not entirely relevent to the context of the rest of the card.
							For these situations we have created inset tables.
						</p>
						<p>
							CSS offers a range of 'display:' properties, namely the table, table-row, and table-cell properties which mimic their respective &lt;table&gt;, &lt;row&gt;, and &lt;td&gt;
						</p>
						<p>
							If you need to specifically size columns use the bootstrap grid system.
						</p>
					</div>
				</div>

				<cp-edit-render-code section-title="Inset table" dangerouslySetInnerHTML={ {__html:
`<table class="cps-inset-table">
	<thead>
		<tr>
			<th>Date</th>
			<th>Transaction #</th>
			<th>Billed</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>02/03/15</td>
			<td>LK35JKL221DIIE</td>
			<td>$ 105.00</td>
		</tr>
		<tr>
			<td>02/03/15</td>
			<td>PJ22DNVZ7199</td>
			<td>$ 105.00</td>
		</tr>
		<tr>
			<td>02/03/15</td>
			<td>LK35JKL221DIIE</td>
			<td>$ 105.00</td>
		</tr>
	</tbody>
</table>`} } />


				<cp-edit-render-code section-title="Card table" dangerouslySetInnerHTML={ {__html:
`<div class="cps-card-table cps-card">
	<table>
		<thead>
			<tr>
				<th>Filename</th>
				<th>Type</th>
				<th>Last Modified</th>
			</tr>
			<tr>
				<th colSpan="3"></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>some_filename.pdf</td>
				<td>PDF</td>
				<td>Jan 21 <span class="cps-l-gray">Kurt Avarell</span></td>
			</tr>
			<tr>
				<td>secondquarter-tracking.doc</td>
				<td>Document</td>
				<td>Jan 19 <span class="cps-l-gray">Kurt Avarell</span></td>
			</tr>
			<tr>
				<td>client-list.docx</td>
				<td>Document</td>
				<td>Jan 02 <span class="cps-l-gray">Kurt Avarell</span></td>
			</tr>
		</tbody>
	</table>
</div>`} } />

				<cp-edit-render-code section-title="Card table with header" dangerouslySetInnerHTML={ {__html:
`<div class="cps-card-table cps-card">
	<div class="cps-card-table__headcontent">
		<div class="cps-card-table__actions">
			<div class="cps-card-table__actions__icons">
				<a class="cps-link"><i class="cps-icon cps-icon-download"></i></a>
				<a class="cps-link"><i class="cps-icon cps-icon-notes"></i></a>
				<a class="cps-link"><i class="cps-icon cps-icon-trash"></i></a>
				<a class="cps-link"><i class="cps-icon cps-icon-sort"></i></a>
			</div>
			<a href="#" class="cps-link">ADD A FILE</a>
		</div>
		<div class="cps-subheader">Files</div>
	</div>
	<table>
		<thead>
			<tr class="cps-card-table__thin">
				<th class="cps-card-table__select-column">
					<label class="cps-checkbox">
						<input type="checkbox" value="selectAll"/><span></span>
					</label>
				</th>
				<th>Filename</th>
				<th>Type</th>
				<th>Last Modified</th>
			</tr>
			<tr class="+thin">
				<th colSpan="3"></th>
			</tr>
		</thead>
		<tbody>
			<tr class="+active +hover">
				<td class="cps-card-table__select-column">
					<label class="cps-checkbox">
						<input type="checkbox" value="option1"/><span></span>
					</label>
				</td>
				<td>some_filename.pdf</td>
				<td>PDF</td>
				<td>Jan 21 <span class="cps-l-gray">Kurt Avarell</span></td>
			</tr>
			<tr class="+hover">
				<td class="cps-card-table__select-column">
					<label class="cps-checkbox">
						<input type="checkbox" value="option2"/><span></span>
					</label>
				</td>
				<td>secondquarter-tracking.doc</td>
				<td>Word Document</td>
				<td>Jan 19 <span class="cps-l-gray">Kent McLean</span></td>
			</tr>
			<tr class="+hover">
				<td class="cps-card-table__select-column">
					<label class="cps-checkbox">
						<input type="checkbox" value="option3"/><span></span>
					</label>
				</td>
				<td>client-list.docx</td>
				<td>Word Document</td>
				<td>Jan 02 <span class="cps-l-gray">Nate Sanders</span></td>
			</tr>
		</tbody>
	</table>
</div>`} } />

				<cp-edit-render-code section-title="Flexbox table" dangerouslySetInnerHTML={ {__html:
`<div class="cps-card-table cps-card">
	<div class="cps-flex-table">
		<div class="cps-flex-table__header">
			<div class="cps-flex-table__col">Filename</div>
			<div class="cps-flex-table__col">Type</div>
			<div class="cps-flex-table__col">Last Modified</div>
		</div>
		<div class="cps-flex-table__row">
			<div class="cps-flex-table__col">some_filename.pdf</div>
			<div class="cps-flex-table__col">PDF</div>
			<div class="cps-flex-table__col">Jan 21 <span class="cps-l-gray">Kurt Avarell</span></div>
		</div>
		<div class="cps-flex-table__row">
			<div class="cps-flex-table__col">secondquarter-tracking.doc</div>
			<div class="cps-flex-table__col">Document</div>
			<div class="cps-flex-table__col">Jan 19 <span class="cps-l-gray">Kurt Avarell</span></div>
		</div>
		<div class="cps-flex-table__row">
			<div class="cps-flex-table__col">client-list.docx</div>
			<div class="cps-flex-table__col">Document</div>
			<div class="cps-flex-table__col">Jan 02 <span class="cps-l-gray">Kurt Avarell</span></div>
		</div>
	</div>
</div>`} } />

			</div>
		);
	}
});
