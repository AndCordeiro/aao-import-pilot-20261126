/** Adds two finite numbers; anything else is refused. */
export function add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('add expects two finite numbers');
  }
  return a + b;
}
