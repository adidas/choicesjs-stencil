export type FilterObjectFn = (value: any, key: string | number, obj: object) => boolean;

/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
export function filterObject(obj: object, fn: FilterObjectFn): object {
  return Object.keys(obj).reduce((accum, property) => {
    const value = obj[property];

    if (fn(value, property, obj)) {
      accum[property] = value;
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

/**
 * Create the select options.
 *
 * @param value - List of values used as value and displayed text.
 * @returns List of option elements as JSX element.
 */
export function createSelectOptions(value: string | Array<string>): Array<JSX.Element> {
  const values = [].concat(typeof value === 'string' ? (value ? value.split(',') : []) : value);

  return values.map((value) => <option value={ value }>{ value }</option>);
}
