describe(`<button is="cps-button" />`, () => {
	beforeAll(done => {
		customElements
		.whenDefined('cps-button')
		.then(done)
		.catch(fail);
	});

	it(`actually upgrades a button to be a cps-button`, () => {
		var el = document.createElement('button', {is: 'cps-button'});
		document.body.appendChild(el);

		expect(el instanceof customElements.get('cps-button')).toBe(true);
	});

	it(`respects the actionType property values of 'primary' and 'secondary'`, () => {
		var el = document.createElement('button', {is: 'cps-button'});
		// Set the actionType before even appending to doc
		el.actionType = 'primary';
		document.body.appendChild(el);

		expect(getComputedStyle(el).backgroundColor).toEqual('rgb(0, 191, 75)');

		el.actionType = 'secondary';
		expect(getComputedStyle(el).backgroundColor).toEqual('rgb(244, 244, 244)');

		el.actionType = 'primary';
		expect(getComputedStyle(el).backgroundColor).toEqual('rgb(0, 191, 75)');
	});

	it(`respects the showLoader property`, () => {
		var el = document.createElement('button', {is: 'cps-button'});
		el.textContent = 'Button text'
		document.body.appendChild(el);

		expect(el.querySelector('.cps-loader')).toBeFalsy();

		el.showLoader = true;
		expect(el.querySelector('.cps-loader')).toBeTruthy();
		expect(el.textContent).toBe('');

		el.showLoader = false;
		expect(el.querySelector('.cps-loader')).toBeFalsy();
		expect(el.textContent).toBe('Button text'); // Restores the text from before loader was activated
	});

	it(`respects the disableOnClick property`, done => {
		var el = document.createElement('button', {is: 'cps-button'});
		document.body.appendChild(el);

		el.disableOnClick = true;
		expect(el.disabled).toBe(false);

		el.click();
		setTimeout(() => {
			expect(el.disabled).toBe(true)
			done();
		});
	});
});
