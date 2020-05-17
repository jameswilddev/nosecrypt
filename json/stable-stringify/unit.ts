import { stableStringify } from "../../";

describe(`json`, () => {
  describe(`stableStringify`, () => {
    it(`stringifies null`, () =>
      expect(JSON.parse(stableStringify(null))).toBeNull());

    it(`stringifies empty strings`, () =>
      expect(JSON.parse(stableStringify(``))).toBe(``));

    it(`stringifies non-empty strings`, () =>
      expect(
        JSON.parse(stableStringify(`Test \t  \r   \n Non-Empty \\ String`))
      ).toBe(`Test \t  \r   \n Non-Empty \\ String`));

    it(`stringifies zero`, () =>
      expect(JSON.parse(stableStringify(0))).toBe(0));

    it(`stringifies negative integers`, () =>
      expect(JSON.parse(stableStringify(-32))).toBe(-32));

    it(`stringifies negative floats`, () =>
      expect(JSON.parse(stableStringify(-3.2))).toBe(-3.2));

    it(`stringifies positive integers`, () =>
      expect(JSON.parse(stableStringify(32))).toBe(32));

    it(`stringifies positive floats`, () =>
      expect(JSON.parse(stableStringify(3.2))).toBe(3.2));

    it(`stringifies false`, () =>
      expect(JSON.parse(stableStringify(false))).toBeFalse());

    it(`stringifies true`, () =>
      expect(JSON.parse(stableStringify(true))).toBeTrue());

    it(`stringifies empty arrays`, () =>
      expect(JSON.parse(stableStringify([]))).toEqual([]));

    it(`stringifies non-empty arrays`, () =>
      expect(JSON.parse(stableStringify([3, false, `Test String`]))).toEqual([
        3,
        false,
        `Test String`,
      ]));

    it(`stringifies empty objects`, () =>
      expect(JSON.parse(stableStringify({}))).toEqual({}));

    it(`stringifies non-empty objects`, () =>
      expect(
        JSON.parse(
          stableStringify({
            testKeyB: 3,
            testKeyA: false,
            testKeyC: `Test String`,
          })
        )
      ).toEqual({
        testKeyB: 3,
        testKeyA: false,
        testKeyC: `Test String`,
      }));

    it(`stringifies non-empty objects identically if their contents are equivalent`, () =>
      expect(
        stableStringify({
          testKeyB: 3,
          testKeyA: false,
          testKeyC: `Test String`,
        })
      ).toBe(
        stableStringify({
          testKeyA: false,
          testKeyC: `Test String`,
          testKeyB: 3,
        })
      ));

    it(`stringifies objects in arrays identically if their contents are equivalent`, () =>
      expect(
        stableStringify([
          3,
          {
            testKeyB: 3,
            testKeyA: false,
            testKeyC: `Test String`,
          },
          true,
        ])
      ).toBe(
        stableStringify([
          3,
          {
            testKeyA: false,
            testKeyC: `Test String`,
            testKeyB: 3,
          },
          true,
        ])
      ));

    it(`stringifies objects in objects identically if their contents are equivalent`, () =>
      expect(
        stableStringify({
          number: 3,
          object: {
            testKeyB: 3,
            testKeyA: false,
            testKeyC: `Test String`,
          },
          boolean: true,
        })
      ).toBe(
        stableStringify({
          number: 3,
          object: {
            testKeyA: false,
            testKeyC: `Test String`,
            testKeyB: 3,
          },
          boolean: true,
        })
      ));
  });
});
