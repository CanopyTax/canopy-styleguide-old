var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="bss-fixed-focus">
				<div className="bss-card">
					<div className="bss-card__body">
						<table className="bss-inset-table">
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
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- Sometimes making an entire card a full table can be too heavy and not entirely relavent  -->
<!-- to the context of the rest of the card. For these situations we have created inset tables-->
<!-- If you need to specifically size columns use the bootstrap grid system.                  -->
<table class="bss-inset-table">
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
`
				}
				</Highlight>
				<div className="bss-card-table bss-card">
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
								<td>Jan 21 <span className="bss-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr>
								<td>secondquarter-tracking.doc</td>
								<td>Document</td>
								<td>Jan 19 <span className="bss-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr>
								<td>client-list.docx</td>
								<td>Document</td>
								<td>Jan 02 <span className="bss-l-gray">Kurt Avarell</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<Highlight className="html">
				{
`<!-- Card table  -->
<div class="bss-card-table bss-card">
  <table>
    <thead>
      <tr>
        <th>Filename</th>
        <th>Type</th>
        <th>Last Modified</th>
      </tr>
      <tr>
        <th colspan="3"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>some_filename.pdf</td>
        <td>PDF</td>
        <td>Jan 21 <span class="bss-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr>
        <td>secondquarter-tracking.doc</td>
        <td>Document</td>
        <td>Jan 19 <span class="bss-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr>
        <td>client-list.docx</td>
        <td>Document</td>
        <td>Jan 02 <span class="bss-l-gray">Kurt Avarell</span></td>
      </tr>
    </tbody>
  </table>
</div>
`
				}
				</Highlight>

				<div className="bss-card-table bss-card">
					<div className="bss-card-table__headcontent">
						<div className="bss-pull-right">
							<a className="bss-link right-lg-space"><i className="bss-icon bss-icon-sort"></i></a>
							<a href="#" className="bss-link">ADD A FILE</a>
						</div>
						<div className="bss-subheader">Files</div>
					</div>
					<table>
						<thead>
							<tr className="bss-card-table__thin">
								<th>Filename</th>
								<th>Type</th>
								<th>Last Modified</th>
							</tr>
							<tr className="+thin">
								<th colSpan="3"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>some_filename.pdf</td>
								<td>PDF</td>
								<td>Jan 21 <span className="bss-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr>
								<td>secondquarter-tracking.doc</td>
								<td>Document</td>
								<td>Jan 19 <span className="bss-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr>
								<td>client-list.docx</td>
								<td>Document</td>
								<td>Jan 02 <span className="bss-l-gray">Kurt Avarell</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<Highlight className="html">
				{
`<!-- Card table with a header  -->
<div class="bss-card-table bss-card">
  <div class="bss-card-table__headcontent">
    <div class="bss-pull-right">
      <a class="bss-link right-lg-space"><i class="bss-icon bss-icon-sort"></i></a>
      <a href="#" class="bss-link">ADD A FILE</a>
    </div>
    <div class="bss-subheader">Files</div>
  </div>
  <table>
    <thead>
      <tr class="bss-card-table__thin">
        <th>Filename</th>
        <th>Type</th>
        <th>Last Modified</th>
      </tr>
      <tr class="+thin">
        <th colspan="3"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>some_filename.pdf</td>
        <td>PDF</td>
        <td>Jan 21 <span class="bss-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr>
        <td>secondquarter-tracking.doc</td>
        <td>Document</td>
        <td>Jan 19 <span class="bss-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr>
        <td>client-list.docx</td>
        <td>Document</td>
        <td>Jan 02 <span class="bss-l-gray">Kurt Avarell</span></td>
      </tr>
    </tbody>
  </table>
</div>
`
				}
				</Highlight>
			</div>
		);
	}
});
