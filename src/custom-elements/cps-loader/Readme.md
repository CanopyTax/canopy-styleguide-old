# cps-loader
Provieds a loading indicator with 3 dots

## HTML Usage
```html
<CprLoader dotSize="24" page="true" color="orange"/>
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
    - Will change the color of the dots
    - defaults to a light gray (#e0e0e0)
