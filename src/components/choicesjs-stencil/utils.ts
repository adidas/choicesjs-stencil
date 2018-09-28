export type FilterObjectFn = (value: any, key: string | number, obj: object) => boolean;

/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
export function filterObject(obj: object, fn: FilterObjectFn): object {
  return Object.keys(obj).reduce((accum, next) => {
    const value = obj[next];

    if (fn(value, next, obj)) {
      accum[next] = value;
    }

    return accum;
  }, {});
}

/**
 * Check if given parameter is not undefined.
 *
 * @param value - value to check.
 * @returns whether the value is defined.
 */
export function isDefined(value: any): boolean {
  return typeof value !== 'undefined';
}
