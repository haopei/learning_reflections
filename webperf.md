# webperf

## Summary
  - the index.html is received and HTML parsing begins
  - if css file is encountered:
    * it begins downloading and CSSOM building
    * HTML parsing and Dom building continues, but rendering is blocked
  - if js file is encountered (unless async):
    * parsing pauses and gives control to JS runtime
    * if CSSOM is not available yet, js execution pauses.
    * when CSSOM is available, js executes
    * HTML parsing re-continues
  - when CSSOM and DOM becomes available
    * Rendering tree is built
    * Layout event calculates elements geometry, size and position
    * Paint setup and paint event occurs.

## Ways to Optimize:
- Shorten critical rendering path
- reduce number of critical resources
- inline critical css
- reduce size of critical bytes (minification)
- use correct sized images. Actual size should reflect styled size.
- Keep request resources below 14.6kb compressed, to prevent additional round trips.
- Put js files below the fold so they do not block DOM building
- Make js files async when they do not affect the DOM on load
- optimize expensive loops to shorten js execution
- decouple reflow and repaint events
- CSS media queries (these files are downloaded with priority)
- general css style selectors are faster than specific ones (example: span{} vs div.class span{})
- batch layout and repaint updates to avoid multiple unnecessary events.
- cache resource files
- download required subsets of font libraries.
- some styles like box-shadow takes longer to paint
- avoid unnecessary reflow-repaint cycles.

## CSSOM (blocks JS execution and rendering/painting; allows DOM building)
- CSSOM does not build incrementally, unlike DOM. Must load entire file to continue
- the building of CSSOM blocks JS execution, because JS might need manipulate the CSSOM
- CSSOM blocks HTML rendering (or painting), but does not block DOM building

## Javascript
- when the html parser encounters a JS code, it gives control to the JS runtime. If the CSSOM has not yet been loaded by now, JS execution pauses. When the CSSOM is available, the JS executes, and resume building the DOM
- blocks html parsing unless declared async
- Inline JS is not spotted by pre-load scanner
- long js executions affect load time and paint time and, consequently, frame rate.

## Rendering and Layout
- Rendering or painting is the event where pixels are painted on the browser.
- Repaint occurs when there is a change in made in styles or structure.
- Layout is when elements' geometries are calculated and positioned on the screen
- rendering tree is built only after DOM and CSSOM have finished building.
- browser should only repaint the current viewport, not the entire website.


## Blocking
[CSSOM BUILDING] >>> [JS EXECUTION] >>> [HTML PARSING] >>> [DOM BUILDING]


## Jank
- frame rate is rate at which images are consecutively produced on screen
- jank is break in consistent frame rate
- paint speed affects frame rate
- optimized experience by producing at 16.67ms per frame; or 60 frames per second. For low-end devices, 8-10ms per frame.
- stuffing too much js in an onscroll handler will cause jank; putting work in a rendering pipeline, by place it in a rAF() provides more headroom.
- using translate() functions for animation is better than changing the position styles of the element.
- rAF(callback) tells the browser to call a specific function which updates the animation before the next repaint. The callback itself must contain a rAF() if the next frame requires animation.

## Scrolling
- the browser looks at the DOM and find things that it thinks will look the same when you scroll. It then groups these things together, and take a picture of them called the 'layer'. Each layer need to be repainted and rasterized to a texture, and then composited together to form the image on the screen.
- by grouping things into layers (also called compositor layers), we only need to update a specific layer's texture when something inside that layer has changed, and paint that part. Less painting is better.

## Fonts
- @font-face defines the location of the font resource.
- Font resource request is only initiated when the browser knows it requires the font.
- Therefore, requests are delayed until render tree is built, relaying text rendering.
- Some browsers wait 3 seconds to use a fallback font, while others wait for font to load.


