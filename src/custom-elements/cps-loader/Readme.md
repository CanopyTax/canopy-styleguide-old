# cps-loader
Provides a loading indicator with 3 dots

## HTML Usage in React
```html
<CprLoader dotSize="24" page="true" color="orange"/>
```

## HTML Usage in Angular
```html
<cps-loader page="true" color="#ff0000"/>
```

### Attributes
- `page`
    - Not required
    - Will change the default with of the loading dots from 8 pixels to 42 pixels
- `dotSize`
    - Not required
    - Determines the width in pixels of the loading dots
    - Takes precedence over the page property
- `color`
    - Not required
    - Will change the color of the dots
    - defaults to a light gray (#e0e0e0)