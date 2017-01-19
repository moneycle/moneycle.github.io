
function toggle(selector, klass = 'hidden') {
  el = d3.select(selector);
  el.classed(klass, !el.classed(klass));
}
