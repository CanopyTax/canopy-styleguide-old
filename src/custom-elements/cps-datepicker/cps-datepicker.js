import {Component, h} from 'preact';
import styles from './cps-datepicker.styles.css';
import {customElementToReact} from '../react-interop.js';
import {preactToCustomElement} from '../preact-to-custom-element.js';
import moment from 'moment';
import Calendar from './cps-calendar.component.js';

class CpsDatepicker extends Component {
	constructor(props) {
		super();
		if (props.date && !moment(props.date).isValid()) {
			throw Error('Date provided to CpsDatepicker was not valid.');
		}
		this.state = {
			datepicker: false,
			dateString: props.date ? moment(props.date).format(props.format || 'MM/DD/YYYY') : "",
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.date && !moment(nextProps.date).isValid()) {
			throw Error('Date provided to CpsDatepicker was not valid.');
		}
		this.setState({
			dateString: nextProps.date ? moment(nextProps.date).format(nextProps.format || 'MM/DD/YYYY') : "",
		});
	}
	render() {
		return (
			<div className={`${styles.container}`}>
				{this.state.datepicker &&
					<div
						onMouseDown={this.dontBlur}
						style={getOrientation(this.props.orientation, this.props.positionAdjustment)}
						className={`${this.props.nonPopup ? "" : styles.popupDatepicker}`}>
						<Calendar
							width={this.props.width}
							removeDateOption={this.props.removeDateOption}
							removeDateText={this.props.removeDateText}
							selectDate={this.selectDate}
							date={this.props.date}/>
					</div>
				}
				<input
					type="text"
					ref={ref => this.input = ref}
					placeholder={this.props.placeholder}
					value={this.state.dateString}
					onChange={this.handleChange}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					className={this.props.inputClass}/>
			</div>
		)
	}
	dontBlur = () => {
		this.stopBlurEvent = true;
	}
	blurWithoutDateChange = () => {
		this.noDateChange = true;
		this.stopBlurEvent = false;
		this.input.blur();
	}
	selectDate = date => {
		this.props.customElement.dispatchEvent(new CustomEvent('date-change', {
			detail: date ? new Date(date) : null,
		}));
		this.setState({
			datepicker: false,
		})
		this.blurWithoutDateChange();
	}
	handleChange = e => {
		this.setState({
			dateString: e.target.value,
		});
	}
	handleFocus = e => {
		this.props.customElement.dispatchEvent(new Event(e));
		this.setState({
			datepicker: true,
		});
	}
	handleBlur = e => {
		if (this.stopBlurEvent) {
			e.preventDefault();
			this.stopBlurEvent = false;
			e.target.focus();
			return;
		}
		const date = moment(e.target.value).isValid() ? new Date(e.target.value) : new Date();
		this.setState({
			datepicker: false,
			dateString: e.target.value ? moment(date).format(this.props.format || 'MM/DD/YYYY') : "",
		});
		if (this.noDateChange) {
			this.noDateChange = false;
		}
		else {
			this.props.customElement.dispatchEvent(new CustomEvent('date-change', {
				detail: e.target.value ? date : null,
			}));
		}
		this.props.customElement.dispatchEvent(new Event(e));
	}
}

function getOrientation(orientation, adjustment = {}) {
	const { top, bottom, right, left } = adjustment;

	if (orientation === 'bottom')
		return {top: `calc(100% + ${4 + (bottom || 0)}px)`};

	if (orientation === 'bottom left')
		return {top: `calc(100% + ${4 + (bottom || 0)}px)`, right: `${0 + left || 0}px`};

	if (orientation === 'bottom right')
		return {top: `calc(100% + ${4 + (bottom || 0)}px)`, left: `${0 + right || 0}px`};

	if (orientation === 'top')
		return {bottom: `calc(100% + ${4 + (top || 0)}px)`};

	if (orientation === 'top left')
		return {bottom: `calc(100% + ${4 + (top || 0)}px)`, right: `${0 + left || 0}px`};

	if (orientation === 'top right')
		return {bottom: `calc(100% + ${4 + (top || 0)}px)`, left: `${0 + right || 0}px`};
}

const cpsDatepickerProps = [
	'date', 'format', 'orientation',
	'inputClass', 'placeholder',
	'removeDateOption', 'removeDateText',
	'positionAdjustment', 'width',
];

const customElement = preactToCustomElement(
	CpsDatepicker,
	{
		parentClass: HTMLElement,
		properties: cpsDatepickerProps
	}
);
customElements.define('cps-datepicker', customElement);
export const CprDatepicker = customElementToReact({name: 'cps-datepicker'});
