import { filterObject, isDefined, getValues } from '../../../../../src/components/choicesjs-stencil/utils';

describe('Utils', () => {
  describe('filterObject()', () => {
    it('should remove all matching properties from an object', () => {
      const obj = {
        foo: 'foo',
        bar: 'bar'
      };

      expect(filterObject(obj, (value) => value === 'foo')).toEqual({
        foo: 'foo'
      });
    });

    it('should create a different instance of object', () => {
      const obj = {};
      const identityFn = () => true;

      expect(filterObject(obj, identityFn)).not.toBe(obj);
      expect(filterObject(obj, identityFn)).toEqual(obj);
    });
  });

  describe('isDefined()', () => {
    it('should return true if value is defined', () => {
      expect(isDefined(0)).toBe(true);
    });

    it('should return false if value is undefined', () => {
      expect(isDefined(undefined)).toBe(false);
    });
  });

  describe('getValues()', () => {
    it('should return an empty array if there is no values', () => {
      expect(getValues()).toHaveLength(0);
    });

    it('should return the same array as the input if the input type is array', () => {
      const values = [ 'v1', 'v2', 'v3' ];

      expect(getValues(values)).toEqual(values);
    });

    it('should return an array with an empty element if it is given as input', () => {
      const values = '';

      expect(getValues(values)).toEqual([ '' ]);
    });

    it('should return an array with the value given as string', () => {
      const values = 'v1';

      expect(getValues(values)).toEqual([ 'v1' ]);
    });

    it('should return an array with the values of a comma separated string', () => {
      const values = 'v1,v2,v3';

      expect(getValues(values)).toEqual([ 'v1', 'v2', 'v3' ]);
    });
  });
});
