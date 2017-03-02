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

	it(`puts the tooltip at the correct top when the custom element's nearest positioned ancestor is the document.body`, done => {
		el.html = 'Html!';
		el.innerHTML = `<div style="position: relative; top: 5px; left: 22px; width: 20px; height: 10px;"></div>`;
		document.body.appendChild(el);

		el.addEventListener('cps-tooltip:shown', evt => {
			const rect = evt.detail.tooltipEl.getBoundingClientRect();
			const documentBodyTop = document.body.getBoundingClientRect().top;
			// 5 px top + 10px height + 8px tooltip buffer + document.body's top
			const expectedTop = 5 + 10 + 8 + documentBodyTop;

			// Assert the position is +/- 2 pixels from manual calculation
			expect(rect.top).toBeGreaterThan(expectedTop - 2);
			expect(rect.top).toBeLessThan(expectedTop + 2);
			done();
		});
		el.dispatchEvent(new CustomEvent('mouseover'));
	});

	it(`puts the tooltip at the correct top when the custom element's nearest positioned ancestor is not document.body`, done => {
		el.html = 'Html!';
		el.innerHTML = `<div style="position: relative; top: 5px; left: 22px; width: 20px; height: 10px;"></div>`;

		const parentEl = document.createElement('div');
		parentEl.style.position = 'absolute';
		parentEl.style.top = '11px';
		document.body.appendChild(parentEl);
		parentEl.appendChild(el);

		el.addEventListener('cps-tooltip:shown', evt => {
			const rect = evt.detail.tooltipEl.getBoundingClientRect();
			const parentTop = parentEl.getBoundingClientRect().top;
			// 5 px el top + 10px height + 8px tooltip buffer + parentEl's top
			const expectedTop = 5 + 10 + 8 + parentTop;

			// Assert the position is +/- 2 pixels from manual calculation
			expect(rect.top).toBeGreaterThan(expectedTop - 2);
			expect(rect.top).toBeLessThan(expectedTop + 2);
			parentEl.parentNode.removeChild(parentEl);
			done();
		});
		el.dispatchEvent(new CustomEvent('mouseover'));
	});

	it(`appends the tooltip as a child of the tooltipContainer property if that property exists`, done => {
		el.html = 'Html!';
		el.innerHTML = `<div style="height: 10px"></div>`;

		const parentOfEl = document.createElement('div');
		parentOfEl.style.position = 'absolute';
		parentOfEl.style.left = '30px';
		parentOfEl.style.top = '25px';

		const tooltipContainer = document.createElement('div');
		tooltipContainer.setAttribute('id', 'tooltipContainer1');
		document.body.appendChild(tooltipContainer);

		el.tooltipContainer = tooltipContainer;
		el.addEventListener('cps-tooltip:shown', evt => {
			let node = evt.detail.tooltipEl;
			let testFailed = true;
			while (node = node.parentNode) {
				if (node === tooltipContainer) {
					testFailed = false;
					break;
				}
			}

			if (testFailed) {
				fail(`The tooltip element should have been appended as a child of the specified tooltipContainer`);
			}

			const rect = evt.detail.tooltipEl.getBoundingClientRect();
			// Even though we're appending the tooltip to a different container, it needs to respect parentOfEl's position
			const expectedTop = el.getBoundingClientRect().bottom + 8;
			expect(rect.top).toBeGreaterThan(expectedTop - 2);
			expect(rect.top).toBeLessThan(expectedTop + 2);

			parentOfEl.parentNode.removeChild(parentOfEl);
			tooltipContainer.parentNode.removeChild(tooltipContainer);

			done();
		});

		document.body.appendChild(parentOfEl);
		parentOfEl.appendChild(el);
		el.dispatchEvent(new CustomEvent('mouseover'));
	});

	it(`will make the tooltip element fixed with useFixedPosition property`, done => {
		el.html = `Html!`;
		el.useFixedPosition = true;
		document.body.appendChild(el);
		el.addEventListener('cps-tooltip:shown', evt => {
			expect(getComputedStyle(evt.detail.tooltipEl).getPropertyValue('position')).toBe('fixed');
			done();
		});

		el.dispatchEvent(new CustomEvent('mouseover'));
	});
});
