import {Component, h} from 'preact';
import styles from './cps-datepicker.styles.css';
import {customElementToReact} from '../react-interop.js';
import {preactToCustomElement} from '../preact-to-custom-element.js';
import moment from 'moment';
import {partial} from 'lodash';

import Header from './header.component.js';
import Days from './days.component.js';
import FourByThree from './four-by-three.component.js';

export default class CpsCalendar extends Component {
	constructor(props) {
		super();
		this.state = {
			display: 'day',
			date: props.date ? moment(props.date) : moment(),
		}
	}
	render() {
		const width = this.props.width || 264;
		const pickedDate = this.props.date ? moment(this.props.date) : null;
		return (
			<div
				style={{width: `${width}px`}}
				className={styles.datepicker}>
				<div className={styles.datepickerBody}>
					<Header
						changeRange={this.changeRange}
						changeDisplay={this.changeDisplay}
						date={this.state.date}
						display={this.state.display}/>
					{this.state.display === 'day'
						? <Days
								width={width}
								pickedDate={pickedDate}
								selectDate={this.selectDate}
								date={this.state.date}/>
						: <FourByThree
								width={width}
								pickRangeChangeDisplay={this.pickRangeChangeDisplay}
								display={this.state.display}
								date={this.state.date}/>
					}
				</div>
				{this.props.removeDateOption &&
					<div
						onClick={partial(this.selectDate, null)}
						className={`${styles.removeDateFooter} cps-primary-green cps-wt-bold`}>
						{this.props.removeDateText || 'Remove date'}
					</div>
				}
			</div>
		)
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.date && !moment(nextProps.date).isSame(this.state.date)) {
			this.setState({date: nextProps.date})
		}
	}
	selectDate = date => {
		if (this.props.customElement) {
			this.props.customElement.dispatchEvent(new CustomEvent('datechange', {
				detail: date ? new Date(date) : null,
			}))
		} else if (this.props.selectDate) {
			this.props.selectDate(date);
		}
	}
	changeDisplay = display => {
		this.setState({
			display
		});
	}
	changeRange = modifier => {
		this.setState(prevState => ({
			date: getRangeDate(prevState.display, modifier, prevState.date)
		}))
	}
	pickRangeChangeDisplay = (range, display) => {
		const newDate = moment(this.state.date);
		newDate[this.state.display === 'month' ? 'month' : 'year'](range);
		this.setState({
			display,
			date: newDate,
		})
	}
}

function getRangeDate(subject, modifier, oldDate) {
	const date = moment(oldDate);
	if (subject === 'day')
		return date.month(oldDate.month() + modifier)
	if (subject === 'month')
		return date.year(oldDate.year() + modifier)
	if (subject === 'year')
		return date.year(oldDate.year() + (modifier * 10))
	if (subject === 'decade')
		return date.year(oldDate.year() + (modifier * 100))
}

const cpsCalendarProps = [
	'date', 'removeDateOption', 'removeDateText', 'width'
];
const customElement = preactToCustomElement(
	CpsCalendar,
	{
		parentClass: HTMLElement,
		properties: cpsCalendarProps
	}
);
customElements.define('cps-calendar', customElement);
export const CprCalendar = customElementToReact({name: 'cps-calendar'});
