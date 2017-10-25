import {h, Component} from 'preact';
import styles from './tooltip-popup.styles.css';

export default class TooltipPopup extends Component {
	state = {
		top: window.innerHeight,
		left: window.innerWidth,
		waitingForDelayTime: true,
		showAbove: false,
	}
	componentDidMount() {
		this.setState(this.getPositionStyles());
		setTimeout(() => {
			this.setState({waitingForDelayTime: false}, () => {
				this.props.tooltipShown(this.el);
			});
		}, Number(this.props.delayTime || 0));
	}
	render() {
		let caretLeftOffset = 10;
		// if the element is set, by default we'll center the caret. otherwise, just set an arbitrary 10 from left.
		if (this.el) {
			// (width / 2) almost centers it, but then you have to subtract 5 more because .caretTop has border left & right of 5px and this will put the tip of the caret in the middle  
			caretLeftOffset = this.el.clientWidth / 2 - 5;
			if (this.props.caretLeft) {
				caretLeftOffset = 10
			} else if (this.props.caretRight) {
				caretLeftOffset = this.el.clientWidth - 20;
			}
		}

		const style = {top: `${this.state.top}px`, left: `${this.state.left}px`};
		if (this.props.useFixedPosition) {
			style.position = 'fixed';
		}

		return this.state.waitingForDelayTime
			? null
			: <div>
					{
						this.props.caretOnBottom ?
						<div
							className={styles.caretBottom}
							style={{top: `${this.state.top + (this.el && this.el.clientHeight)}px`, left: `${this.state.left + caretLeftOffset}px`}}
						/> :
						<div
							className={styles.caretTop}
							style={{top: `${this.state.top - 5}px`, left: `${this.state.left + caretLeftOffset}px`}}
						/>
					}

					<div
						className={styles.tooltip}
						style={style}
						ref={this.handleRef}
						dangerouslySetInnerHTML={{__html: this.props.html}}
					/>
				</div>
	}
	componentDidUpdate() {
		const newPosition = this.getPositionStyles();
		const tolerance = 3; // Num pixels to not care about updating for
		if (this.state.showAbove !== newPosition.showAbove || Math.abs(newPosition.top - this.state.top) > tolerance || Math.abs(newPosition.left - this.state.left) > tolerance) {
			this.setState(newPosition);
		}
	}
	handleRef = el => {
		this.el = el;
		if (this.props.allowInteraction && !this.mouseEventsAdded) {
			this.el.addEventListener('mouseover', this.props.keepTooltipOpen);
			this.el.addEventListener('mouseleave', this.props.closeTooltipNow);
			this.mouseEventsAdded = true;
		}
	}
	getPositionStyles = () => {
		const verticalMargin = 8;

		const targetEl = this.props.customElement;

		const tooltipCenter = targetEl.offsetLeft + (targetEl.offsetWidth / 2);
		let left;
		if (this.el) {
			left = tooltipCenter - (this.el.offsetWidth / 2);
			const numPixelsTooFarRight = (left + this.el.offsetWidth) - window.innerWidth;
			if (numPixelsTooFarRight > 0) {
				left -= numPixelsTooFarRight;
			}
		} else {
			left = targetEl.offsetLeft;
		}
		left = Math.max(0, left + this.props.startingLeft);

		let top;
		if (this.state.showAbove) {
			// Show tooltip above target
			top = targetEl.offsetTop - verticalMargin - this.el.offsetHeight;
		} else {
			// Show tooltip below target
			top = targetEl.offsetTop + targetEl.offsetHeight + verticalMargin;
		}

		top += this.props.startingTop;

		top = typeof this.props.top === 'number' ? this.props.top : top;
		left = typeof this.props.left === 'number' ? this.props.left : left;

		const showAbove = this.state.showAbove || Boolean(this.el && !this.showAbove && this.el.getBoundingClientRect().bottom > window.innerHeight)

		return {top, left, showAbove};
	}
}