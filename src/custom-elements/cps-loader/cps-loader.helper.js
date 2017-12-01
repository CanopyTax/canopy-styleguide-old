import { h } from 'preact';
import { merge } from 'lodash'

const eventLoaderMap = getEventLoaderMap()
const occasion = getOccasion()
const baseSpecialOccasionStyles = getBaseSpecialOccasionStyles(occasion)
const isSpecialOccasion = !!baseSpecialOccasionStyles

export function makeDots(props) {
  let dots = [];
  props.specialOccasionStyles = baseSpecialOccasionStyles
  for (let i = 0; i < 3; i++) {
    dots.push(makeDot(props, i === 2));
  }
  return dots;
}

export function makeDot(props, last) {
  const size = determineDotWidth(props);
  const styles = {
    backgroundColor: props.color || '#e0e0e0',
    width: size,
    height: size,
    marginLeft: size,
  };

  const mergedStyles = merge({}, styles, props.specialOccasionStyles)

  if (last) styles.marginRight = size;

  return <span style={mergedStyles} />;
}

export function determineDotWidth(props) {
  let size = parseInt(props.dotSize);
  if (isNaN(size)) {
    size = props.page ? 42 : 8;
  }
  return size;
}

export function getOccasion() {
  if (window.spalpatineInitialTime) {
    const date = new Date(window.spalpatineInitialTime)
    if (date.getMonth() === 11) {
      return 'december'
    } else {
      return undefined
    }
  }
}

export function getBaseSpecialOccasionStyles(occasion) {
  return eventLoaderMap[occasion]
}

function getEventLoaderMap() {
  return {
    december: {
      backgroundImage: "url('https://cdn.canopytax.com/images/light_lit.svg')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: 'transparent'
    },
  }
}
