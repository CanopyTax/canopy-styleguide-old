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
	componentDidMount() {
		document.body.addEventListener('click', this.bodyClick);
		this.datepicker.addEventListener('click', e => {
			e.stopPropagation();
		});
	}
	componentWillUnmount() {
		document.body.removeEventListener('click', this.bodyClick);
	}
	render() {
		return (
			<div
				ref={ref => this.datepicker = ref}
				className={`${styles.container}`}>
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
	bodyClick = e => {
		if (this.state.datepicker) {
			this.setState({
				datepicker: false,
			});
		}
	}
	dontBlur = () => {
		this.stopBlurEvent = true;
	}
	selectDate = date => {
		this.props.customElement.dispatchEvent(new CustomEvent('datechange', {
			detail: date ? new Date(date) : null,
		}));
		this.setState({
			datepicker: false,
		})
		this.stopBlurEvent = false;
		this.blurNoChange = true;
		this.input.blur();
	}
	handleChange = e => {
		this.setState({
			dateString: e.target.value,
		});
	}
	handleFocus = e => {
		this.props.customElement.dispatchEvent(new CustomEvent(e));
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
		if (this.blurNoChange) {
			this.blurNoChange = false;
			return;
		}
		const date = moment(e.target.value).isValid() ? new Date(e.target.value) : new Date();
		this.props.customElement.dispatchEvent(new CustomEvent('datechange', {
			detail: e.target.value ? date : null,
		}));
		this.props.customElement.dispatchEvent(new CustomEvent(e));
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
