# Animaiton
###### http://www.html5rocks.com/en/tutorials/speed/animations/

## General
- Decouple events from animation
- avoid animations that result in repaint-reflow loops
- only call raf when you have updates to do.
- debouncing: the process of decoupling animations from any input that affects it.
- applying css styles to dom elements will trigger a repaint.
- a reflow operation occurs when the browser recalculates the real positions of dom elements
- requestAnimationFrame() handles visual updates at the most convenient time for the browser.
-

