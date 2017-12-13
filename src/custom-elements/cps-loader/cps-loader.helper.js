import { h } from 'preact';

const eventLoaderMap = getEventLoaderMap()
const baseSpecialOccasionStyles = getBaseSpecialOccasionStyles(getOccasion())

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
    backgroundColor: props.color || '#e0e0e0',
    width: size,
    height: size,
    marginLeft: size,
    ...baseSpecialOccasionStyles
  };

  if (last) styles.marginRight = size;

  return <span style={styles} />;
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
    const forcedEvent = window.localStorage.getItem('cp-loader:force-occasion')
    if (forcedEvent) {
      return forcedEvent
    } else {
      return ''
    }
  }
}

export function getBaseSpecialOccasionStyles(occasion) {
  const noEasterEggs = localStorage.getItem('cp:no-easter-eggs') === 'true'
  if (noEasterEggs) {
    return {}
  } else {
    return eventLoaderMap[occasion] || {}
  }
}

function getEventLoaderMap() {
  const imageCommon = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'transparent'
  }
  return {
    december: {
      backgroundImage: "url('https://cdn.canopytax.com/images/light_lit.svg')",
      ...imageCommon
    },
  }
}
