# Responsive Web Design Reflections

## General

- Resolution in the viewport has Device Independent Pixel (DIP).
- Device screens are made up of real pixels, and their viewport has a Device Pixel radio.
- The device pixel ratio is the ratio between the CSS pixels and the device pixels.
- Fonts: the optimal characters per line (CPL) is ~65. Use atleast 16px / 1.2em line-height

## Methods
- Use the viewport meta: <meta name="viewport" content="width=device-width, initial-scale: 1.0">
- Make images responsive by styling width to 100%, or make images smaller than most screens.
- Tappable elements should have a min-width and min-height of 48x (standard tap size).
- Design for mobile first, then larger screens. Designing for the small viewport first makes you think about performance first.
- Use media queries to load dependent files:
    <link rel="stylesheet" media="screen and (min-width: 500px)" href="over500px.css">
    @media screen and (min-width: 500px) { color: red; }
- (min-width: 800px) means styles will activate when viewport is more than 800px
- (max-width: 800px) means styles will activate when viewport is less than 800px
- Using @import will hurt performance
- The point at which a page changes layout is called a 'break point'. A site may have multiple breakpoints.
- Picking breakpoints: Look at the content of the website to find the right breakpoints. Setting device-dependent breakpoint is a nightmare.

## Flexbox
- The default flex direction is row, while html block level elements are aligned in column direction.
- Setting display:flex style to the containing element will initiate the flexbox
- Setting the order: num; property will overwrite the default order of how elements appear in the dom
  - A flexbox with an order value of -1 will appear first
- wrap flexbox containers within another container for complicated layouts.



