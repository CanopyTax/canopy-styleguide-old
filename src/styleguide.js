// Global css
import './components.less';
import './custom-elements/force-polyfill.js';
import '@joeldenning/custom-elements';
import './custom-elements/definitions.js';

const el = document.createElement('link'); 
el.setAttribute("rel", "stylesheet");
/* Asap only has font-weights of 400 and 700. All of our references to font-weight: 600
 * will be rendered as font-weight 700 because of the CSS specification. See
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight "Fallback" section
 */
el.setAttribute("href", "https://fonts.googleapis.com/css?family=Asap:400,400i,700,700i");
el.setAttribute("type","text/css");
const head = document.getElementsByTagName('head')[0];
head.appendChild(el);

exports.CprButton = require('./custom-elements/cps-button/cps-button.js').CprButton;
exports.CprTooltip = require('./custom-elements/cps-tooltip/cps-tooltip.js').CprTooltip;
