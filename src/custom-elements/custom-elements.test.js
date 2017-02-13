import 'custom-event-polyfill';
import 'babel-polyfill';
import './force-polyfill.js';
import '@joeldenning/custom-elements';
import './definitions.js';

// https://github.com/webcomponents/custom-elements#differences-from-spec
customElements.enableFlush = true;
