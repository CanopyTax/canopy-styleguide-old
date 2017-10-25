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

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
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

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
	});

	it(`hides the tooltip even if mouseleave is never fired (but mouseover _is_ fired)`, done => {
		const html = `<i>Show this in the tooltip</i>`
		el.html = html;
		document.body.appendChild(el);

		setTimeout(() => {
			el.addEventListener('cps-tooltip:shown', evt => {
				expect(evt.detail.tooltipEl.innerHTML).toEqual(html);
				el.dispatchEvent(new CustomEvent('mouseout'));
			});

			el.addEventListener('cps-tooltip:hidden', done);

			setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
		}, 50);
	});

	it(`respects the delayTime property`, done => {
		el.delayTime = 12;
		document.body.appendChild(el);

		let timeHasElapsed = false;

		el.addEventListener('cps-tooltip:shown', evt => {
			if (!timeHasElapsed) {
				fail(`Tooltip should not have been shown for 10 milliseconds, but it was`);
			}
			done();
		});

		setTimeout(() => timeHasElapsed = true, 50);

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
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
			expect(rect.top).toBeGreaterThan(expectedTop - 4);
			expect(rect.top).toBeLessThan(expectedTop + 4);
			done();
		});

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
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
			expect(rect.top).toBeGreaterThan(expectedTop - 4);
			expect(rect.top).toBeLessThan(expectedTop + 4);
			parentEl.parentNode.removeChild(parentEl);
			done();
		});
		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
	});

	xit(`appends the tooltip as a child of the tooltipContainer property if that property exists`, done => {
		el.html = 'Html!';
		el.innerHTML = `<div style="height: 10px"></div>`;

		const parentOfEl = document.createElement('div');
		parentOfEl.style.position = 'absolute';
		parentOfEl.style.left = '30px';
		parentOfEl.style.top = '25px';

		const tooltipContainer = document.createElement('div');
		tooltipContainer.setAttribute('id', 'tooltipContainer1');

		document.body.appendChild(tooltipContainer);
		document.body.appendChild(parentOfEl);
		parentOfEl.appendChild(el);

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

		el.tooltipContainer = tooltipContainer;
		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
	});

	it(`will make the tooltip element fixed with useFixedPosition property`, done => {
		el.html = `Html!`;
		el.useFixedPosition = true;
		document.body.appendChild(el);
		el.addEventListener('cps-tooltip:shown', evt => {
			expect(getComputedStyle(evt.detail.tooltipEl).getPropertyValue('position')).toBe('fixed');
			done();
		});

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
	});

	it(`let's you specify 'left' and 'top' which are absolute positions`, done => {
		el.html = `Html!`;
		el.useFixedPosition = true;
		el.top = 54;
		el.left = 88;
		document.body.appendChild(el);
		el.addEventListener('cps-tooltip:shown', evt => {
			expect(evt.detail.tooltipEl.getBoundingClientRect().top).toEqual(54);
			expect(evt.detail.tooltipEl.getBoundingClientRect().left).toEqual(88);
			done();
		});

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
	});

	it(`respects the 'allowInteraction' property which gives the user time to mouse over the tooltip to keep it from hiding`, done => {
		let testStatus = 'start';
		el.html = `Tooltip html!`
		el.allowInteraction = true;
		document.body.appendChild(el);

		el.addEventListener('cps-tooltip:shown', evt => {
			expect(testStatus).toEqual('start');
			setTimeout(() => {
				testStatus = 'Tooltip about to disappear but user going to mouse over';
				evt.detail.tooltipEl.dispatchEvent(new CustomEvent('mouseover'));

				setTimeout(() => {
					testStatus = 'Tooltip should hide now';
					evt.detail.tooltipEl.dispatchEvent(new CustomEvent('mouseleave'));
				}, 200);
			}, 400); // 400 is less than the grace period for the user to get the mouse to the tooltip
		});

		el.addEventListener('cps-tooltip:hidden', evt => {
			expect(testStatus).toEqual('Tooltip should hide now');
			done();
		});

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
	});

	it(`hides the tooltip if the user moves the mouse off of <cps-tooltip> and never moves the mouse to the gray tooltip`, done => {
		el.html = 'html';
		el.allowInteraction = true;
		document.body.appendChild(el);

		let testStatus = 'waiting for hide event';

		const timeout = setTimeout(() => {
			expect(testStatus).toEqual('done');
		}, 1000);

		el.addEventListener('cps-tooltip:shown', evt => {
			el.dispatchEvent(new CustomEvent('mouseleave'));
		});

		el.addEventListener('cps-tooltip:hidden', evt => {
			testStatus = 'done';
			clearTimeout(timeout);
			done();
		});

		setTimeout(() => el.dispatchEvent(new CustomEvent('mouseover')), 50);
	});
});
