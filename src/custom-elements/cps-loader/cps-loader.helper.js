import { h } from 'preact';

export function determineDotWidth(props) {
	let size = parseInt(props.dotSize);
	if (isNaN(size)) {
		size = props.page ? 42 : 8;
	}
	return size;
}

export function makeDots(props) {
	let dots = [];
	for (let i = 0; i < 3; i++) {
		dots.push(makeDot(props, i === 2));
	}
	return dots;
}

export function makeDot(props, last) {
	const size = determineDotWidth(props);
	const styles = {
		backgroundColor: props.color || 'orange',
		width: size,
		height: size,
		marginLeft: size,
	};

	if (last) styles.marginRight = size;

	return <span style={styles} />;
}
