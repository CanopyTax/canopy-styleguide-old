import {Component, h} from 'preact';
import styles from './cps-datepicker.styles.css';
import { toShortMonth } from './cps-datepicker.helpers.js';
import { chunk, partial } from 'lodash';

export default class FourByThree extends Component {
	render() {
		const square = Math.floor(this.props.width / 4);
		return (
			<div>
				{buildRangeGrid(this.props.display, this.props.date)
					.map((range, rangeIndex) => {
						return (
							<div
								key={rangeIndex}
								className={styles.range}>
								{range.map((item, itemIndex) => {
									return (
										<div
											style={{
												minHeight: `${square}px`,
												minWidth: `${square}px`,
												borderRadius: `${(square / 4)}px`,
											}}
											key={itemIndex}
											onClick={partial(
												this.props.pickRangeChangeDisplay,
												this.props.display === 'month'
													? (itemIndex + (rangeIndex * 4))
													: item,
												getDisplayChange(this.props.display)
											)}
											className={styles.rangeItem}>
											{item}
										</div>
									)
								})}
							</div>
						)
					})
				}
			</div>
		)
	}
}

const blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function buildRangeGrid(display, date) {
	if (display === 'month')
		return chunk(blocks.map(toShortMonth), 4);
	if (display === 'year') {
		const decade = Math.floor(date.year() / 10) * 10;
		return chunk(blocks.map(num => (num - 1) + decade), 4);
	}
	if (display === 'decade') {
		const century = Math.floor(date.year() / 100) * 100;
		return chunk(blocks.map(num => ((num - 1) * 10) + century), 4);
	}
}

function getDisplayChange(display) {
	if (display === 'month')
		return 'day';
	if (display === 'year')
		return 'month';
	if (display === 'decade')
		return 'year';
}
