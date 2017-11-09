import React from "react";
import CodeExample from "../../code-example.component.js";

module.exports = class extends React.Component {
	render() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">Tables</div>
					<div className="cps-card__body">
						<p>
							Sometimes making an entire card a full table can be too heavy and
							not entirely relevent to the context of the rest of the card. For
							these situations we have created inset tables.
						</p>
						<p>
							CSS offers a range of 'display:' properties, namely the table,
							table-row, and table-cell properties which mimic their respective
							&lt;table&gt;, &lt;row&gt;, and &lt;td&gt;
						</p>
						<p>
							If you need to specifically size columns use the bootstrap grid
							system.
						</p>
					</div>
				</div>

				<CodeExample title="Inset table">
					<table className="cps-inset-table">
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
					</table>
				</CodeExample>

				<CodeExample title="Card table">
					<div className="cps-card-table cps-card">
						<table>
							<thead>
								<tr>
									<th>Filename</th>
									<th>Type</th>
									<th>Last Modified</th>
								</tr>
								<tr>
									<th colSpan="3" />
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>some_filename.pdf</td>
									<td>PDF</td>
									<td>
										Jan 21 <span className="cps-l-gray">Kurt Avarell</span>
									</td>
								</tr>
								<tr>
									<td>secondquarter-tracking.doc</td>
									<td>Document</td>
									<td>
										Jan 19 <span className="cps-l-gray">Kurt Avarell</span>
									</td>
								</tr>
								<tr>
									<td>client-list.docx</td>
									<td>Document</td>
									<td>
										Jan 02 <span className="cps-l-gray">Kurt Avarell</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CodeExample>

				<CodeExample title="Card table with header">
					<div className="cps-card-table cps-card">
						<div className="cps-card-table__headcontent">
							<div className="cps-card-table__actions">
								<div className="cps-card-table__actions__icons">
									<a className="cps-link">
										<i className="cps-icon cps-icon-download" />
									</a>
									<a className="cps-link">
										<i className="cps-icon cps-icon-notes" />
									</a>
									<a className="cps-link">
										<i className="cps-icon cps-icon-trash" />
									</a>
									<a className="cps-link">
										<i className="cps-icon cps-icon-sort" />
									</a>
								</div>
								<a href="#" className="cps-link">
									ADD A FILE
								</a>
							</div>
							<div className="cps-subheader">Files</div>
						</div>
						<table>
							<thead>
								<tr className="cps-card-table__thin">
									<th className="cps-card-table__select-column">
										<label className="cps-checkbox">
											<input type="checkbox" value="selectAll" />
											<span />
										</label>
									</th>
									<th>Filename</th>
									<th>Type</th>
									<th>Last Modified</th>
								</tr>
								<tr className="+thin">
									<th colSpan="3" />
								</tr>
							</thead>
							<tbody>
								<tr className="+active +hover">
									<td className="cps-card-table__select-column">
										<label className="cps-checkbox">
											<input type="checkbox" value="option1" />
											<span />
										</label>
									</td>
									<td>some_filename.pdf</td>
									<td>PDF</td>
									<td>
										Jan 21 <span className="cps-l-gray">Kurt Avarell</span>
									</td>
								</tr>
								<tr className="+hover">
									<td className="cps-card-table__select-column">
										<label className="cps-checkbox">
											<input type="checkbox" value="option2" />
											<span />
										</label>
									</td>
									<td>secondquarter-tracking.doc</td>
									<td>Word Document</td>
									<td>
										Jan 19 <span className="cps-l-gray">Kent McLean</span>
									</td>
								</tr>
								<tr className="+hover">
									<td className="cps-card-table__select-column">
										<label className="cps-checkbox">
											<input type="checkbox" value="option3" />
											<span />
										</label>
									</td>
									<td>client-list.docx</td>
									<td>Word Document</td>
									<td>
										Jan 02 <span className="cps-l-gray">Nate Sanders</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CodeExample>

				<CodeExample title="Flexbox table">
					<div className="cps-card-table cps-card">
						<div className="cps-flex-table">
							<div className="cps-flex-table__header">
								<div className="cps-flex-table__col">Filename</div>
								<div className="cps-flex-table__col">Type</div>
								<div className="cps-flex-table__col">Last Modified</div>
							</div>
							<div className="cps-flex-table__row">
								<div className="cps-flex-table__col">some_filename.pdf</div>
								<div className="cps-flex-table__col">PDF</div>
								<div className="cps-flex-table__col">
									Jan 21 <span className="cps-l-gray">Kurt Avarell</span>
								</div>
							</div>
							<div className="cps-flex-table__row">
								<div className="cps-flex-table__col">
									secondquarter-tracking.doc
								</div>
								<div className="cps-flex-table__col">Document</div>
								<div className="cps-flex-table__col">
									Jan 19 <span className="cps-l-gray">Kurt Avarell</span>
								</div>
							</div>
							<div className="cps-flex-table__row">
								<div className="cps-flex-table__col">client-list.docx</div>
								<div className="cps-flex-table__col">Document</div>
								<div className="cps-flex-table__col">
									Jan 02 <span className="cps-l-gray">Kurt Avarell</span>
								</div>
							</div>
						</div>
					</div>
				</CodeExample>
			</div>
		);
	}
};
