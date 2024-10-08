// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  if (Array.isArray(objA) !== Array.isArray(objB)) {
    return false;
  }

  const [keysA, keysB] = [Object.keys(objA), Object.keys(objB)];

  if (keysA.length !== keysB.length) {
    return false;
  }

  return keysA.every((key) => objA[key] === objB[key]);
}
