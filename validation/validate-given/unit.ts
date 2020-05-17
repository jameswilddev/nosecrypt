import { ValidateGiven } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`validation`, () => {
  describe(`ValidateGiven`, () => {
    Helpers.throws(
      `null`,
      () => ValidateGiven(null, `Test Description`),
      `Test Description must be given`
    );

    Helpers.throws(
      `undefined`,
      () => ValidateGiven(undefined, `Test Description`),
      `Test Description must be given`
    );

    function accepts<T>(description: string, value: T): void {
      describe(description, () => {
        let returned: T;
        beforeAll(() => {
          returned = ValidateGiven(value, `Test Description`);
        });
        it(`returns the given value`, () => {
          expect(returned).toBe(value);
        });
      });
    }

    accepts(`empty strings`, ``);

    accepts(`non-empty strings`, `Test Non-Empty String`);

    accepts(`zero`, 0);

    accepts(`negative integers`, -32);

    accepts(`negative floats`, -3.2);

    accepts(`positive integers`, 32);

    accepts(`positive floats`, 3.2);

    accepts(`false`, false);

    accepts(`true`, true);

    accepts(`empty arrays`, []);

    accepts(`non-empty arrays`, [3, false, `Test String`]);

    accepts(`empty objects`, {});

    accepts(`non-empty objects`, {
      testKeyB: 3,
      testKeyA: false,
      testKeyC: `Test String`,
    });
  });
});
