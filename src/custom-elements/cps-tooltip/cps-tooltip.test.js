describe(`<cps-tooltip />`, () => {
	let el;

	beforeAll(done => {
		customElements
		.whenDefined('cps-tooltip')
		.then(done)
		.catch(fail);
	});

	beforeEach(() => {
		el = document.createElement('cps-tooltip');
	});

	afterEach(() => {
		el.parentNode.removeChild(el);
	});

	it(`actually upgrades the element to be a custom element`, () => {
		document.body.appendChild(el);
		expect(el instanceof customElements.get('cps-tooltip')).toBe(true);
	});

	it(`fires events when the tooltip is shown or hidden`, done => {
		el.html = 'tooltip text';
		document.body.appendChild(el);

		let shown = false;

		el.addEventListener('cps-tooltip:shown', () => {
			shown = true;
			el.dispatchEvent(new CustomEvent('mouseleave'));
		});
		el.addEventListener('cps-tooltip:hidden', () => {
			if (!shown) {
				fail(`Tooltip should have been shown before hidden`);
			}
			done();
		});

		el.dispatchEvent(new CustomEvent('mouseover'));
	});

	it(`respects the html property`, done => {
		const html = `<i>Show this in the tooltip</i>`
		el.html = html;
		document.body.appendChild(el);

		el.addEventListener('cps-tooltip:shown', evt => {
			expect(evt.detail.tooltipEl.innerHTML).toEqual(html);
			el.dispatchEvent(new CustomEvent('mouseleave'));
		});

		el.addEventListener('cps-tooltip:hidden', done);

		el.dispatchEvent(new CustomEvent('mouseover'));
	});

	it(`respects the delayTime property`, done => {
		el.delayTime = 10;
		document.body.appendChild(el);

		let timeHasElapsed = false;

		el.addEventListener('cps-tooltip:shown', evt => {
			if (!timeHasElapsed) {
				fail(`Tooltip should not have been shown for 10 milliseconds, but it was`);
			}
			done();
		});

		setTimeout(() => timeHasElapsed = true, 9);

		el.dispatchEvent(new CustomEvent('mouseover'));
	});
});
