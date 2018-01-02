# Canopy Styleguide
The Canopy Styleguide is a css and javascript library that provides leaf-node ui components for web applications. It exposes
global css classes and [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements).

[![Sauce Test Status](https://saucelabs.com/browser-matrix/canopytax.svg)](https://saucelabs.com/u/canopytax)

## Usage
The styleguide is imported as a [sofe service](https://github.com/CanopyTax/sofe).

```
SystemJS.import('canopy-styleguide!sofe');
```

## Documentation
Global css classes are documented in a web application that can be viewed by running `npm run website`. The custom elements
are documented in the [custom-elements](/src/custom-elements) directory.

## Fonts
Getting the fonts to install/work can be a chore. Here's a basic guide
* [Install all the dependencies](https://github.com/FontCustom/fontcustom#installation)
  * If you run into issues on `brew install fontforge --with-python`, then try [this](https://github.com/Homebrew/brew/issues/3228#issuecomment-332679274)
  * If you run into issues on `gem install fontcustom`, then try [this](https://github.com/rbenv/rbenv/issues/938#issuecomment-285342541)
* `yarn build-icons` or `npm run build-icons`