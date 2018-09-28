import { filterObject, isDefined } from '../../../../../src/components/choicesjs-stencil/utils';

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
});
