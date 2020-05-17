import { ValidateAtLeastOne } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`validation`, () => {
  describe(`ValidateAtLeastOne`, () => {
    describe(`one`, () => {
      it(`does nothing`, () => {
        ValidateAtLeastOne(1, `Test Description`);
      });
    });

    describe(`greater than one`, () => {
      it(`does nothing`, () => {
        ValidateAtLeastOne(23.53, `Test Description`);
      });
    });

    Helpers.throws(
      `negative`,
      () => ValidateAtLeastOne(-6.245, `Test Description`),
      `Test Description must be greater than or equal to one`
    );

    Helpers.throws(
      `zero`,
      () => ValidateAtLeastOne(0, `Test Description`),
      `Test Description must be greater than or equal to one`
    );

    Helpers.throws(
      `positive less than one`,
      () => ValidateAtLeastOne(0.9, `Test Description`),
      `Test Description must be greater than or equal to one`
    );

    Helpers.throws(
      `NaN`,
      () => ValidateAtLeastOne(Number.NaN, `Test Description`),
      `Test Description must be a number`
    );

    Helpers.throws(
      `positive infinity`,
      () => ValidateAtLeastOne(Number.POSITIVE_INFINITY, `Test Description`),
      `Test Description must be finite`
    );

    Helpers.throws(
      `negative infinity`,
      () => ValidateAtLeastOne(Number.NEGATIVE_INFINITY, `Test Description`),
      `Test Description must be finite`
    );
  });
});
