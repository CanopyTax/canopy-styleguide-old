const fs = require('fs');
const rework = require('rework');

process.stdout.write("Removing non woff fonts...");
const css = fs.readFileSync('build/canopy-icons.css', 'utf8');
const formattedCss = rework(css)
	.use(ast => {
		// Remove non woff fonts. This is because they will be base64 inlined within
		// the styleguide. Woff is cross browser supported and inlining all of them
		// makes the styleguide over twice as large.
		const declarations = ast.rules[1].declarations;
		ast.rules.splice(2, 1);
		declarations.splice(1, 1);
		declarations[1].value = 'url("./canopy-icons.woff") format("woff")';
	})
	.toString();

fs.writeFileSync('build/canopy-icons.css', formattedCss);
console.log('success');
