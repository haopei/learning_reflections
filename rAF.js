var latestKnownScroll = 0,
    ticking = false;

function onScroll() {
  latestKnownScroll = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  requestAnimationFrame(update);
  var scroll = latestKnownScroll;

  // assume domElements has been declared
  // by this point :)
  for(var i = 0; i < domElements.length; i++) {

    // read offset of DOM elements
    // to determine visibility - a reflow

    // then apply some CSS classes
    // to the visible items - a repaint

  }
}
requestAnimationFrame(update);

window.addEventListener('scroll', onScroll, false);