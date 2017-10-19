import { Component, h } from 'preact';
import { NavContent } from 'primary-navbar!sofe';
import { customElementToReact } from '../react-interop.js';
import { preactToCustomElement } from '../preact-to-custom-element.js';
import styles from './cps-slide-dialog.styles.css';

class CpsSlideDialog extends Component {
	componentDidMount() {
		this.dialog.addEventListener('animationend', this.OnShowComplete, false);
	}

	state = {
		beenDismissed: false,
	};

	render() {
		console.log('in here');

		return (
			<NavContent
				hasTopnavSecondary={false}
				contactMenuPossible={true}
				style={{ marginLeft: 0, width: '100%', padding: 0 }}>
				<div
					ref={el => {
						this.dialog = el;
					}}
					className={`${styles.slideDialog} ${this.state.beenDismissed ? styles.out : styles.in}`}>
					<div className={`cps-card__height-3 cps-padding-24 ${styles.card}`}>
						<TheX />
						<div>
							{this.props.children({
								show,
								hide,
								destroy,
								onShowReady,
								onShowComplete,
								onHideComplete,
							})}
						</div>
					</div>
				</div>
			</NavContent>
		);
	}

	componentWillUnmount() {
		this.dialog.removeEventListener('animationend', this.onShowComplete, false);
	}

	onShowReady() {}

	onShowComplete() {}

	onHideComplete() {}

	show = () => {
		this.setState((prevProps, props) => ({
			show: true,
		}));
	};

	hide = () => {
		this.setState((prevProps, props) => ({
			show: false,
		}));
	};

	destroy = () => {};

	TheX = () => {
		return (
			this.props.hideX && (
				<div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
					<a className="cps-link">
						<span className="cps-icon cps-icon-close" />
					</a>
				</div>
			)
		);
	};
}

const customElement = preactToCustomElement(CpsSlideDialog, {
	parentClass: HTMLElement,
	properties: ['hideX'],
});
customElements.define('cps-slide-dialog', customElement);
export const CprSlideDialog = customElementToReact({
	name: 'cps-slide-dialog',
});
