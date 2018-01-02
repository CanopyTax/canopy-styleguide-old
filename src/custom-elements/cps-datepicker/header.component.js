import {Component, h} from 'preact';
import styles from './cps-datepicker.styles.css';
import { partial } from 'lodash';

export default class Header extends Component {
	render() {
		return (
			<div
				style={{
					padding: `0px ${this.props.width / 10}px`,
					paddingBottom: "8px",
				}}
				className={`${styles.header} cps-light-gray`}>
				<span
					className={`cps-icon cps-icon-sm-caret-left ${styles.headerArrow}`}
					onClick={partial(this.props.changeRange, -1)}
					role="button"
					aria-label="Previous month"
				/>
				<span
					className={`${styles.headerDisplay}`}
					onClick={partial(this.props.changeDisplay, getDisplayChange(this.props.display))}>
					{this.getHeaderDisplay()}
				</span>
				<span
					className={`cps-icon cps-icon-sm-caret-right ${styles.headerArrow}`}
					onClick={partial(this.props.changeRange, 1)}
					role="button"
					aria-label="Next month"
				/>
			</div>
		)
	}
	getHeaderDisplay = () => {
		const { date } = this.props;
		if (this.props.display === 'day') {
			return this.props.date.format("MMMM YYYY");
		}
		else if (this.props.display === 'month') {
			return this.props.date.year();
		}
		else if (this.props.display === 'year') {
			const prefix = Math.floor(date.year() / 10);
			return `${prefix}0 - ${prefix}9`;
		}
		else if (this.props.display === 'decade') {
			const prefix = Math.floor(date.year() / 100);
			return `${prefix}00 - ${prefix}90`;
		}
	}
}

function getDisplayChange(display) {
	if (display === 'day')
		return 'month';
	if (display === 'month')
		return 'year';
	if (display === 'year')
		return 'decade';
	if (display === 'decade')
		return 'decade';
}
