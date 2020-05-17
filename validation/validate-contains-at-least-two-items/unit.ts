import { ValidateContainsAtLeastTwoItems } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`validation`, () => {
  describe(`ValidateContainsAtLeastTwoItems`, () => {
    Helpers.throws(
      `empty`,
      () => ValidateContainsAtLeastTwoItems([], `Test Description`),
      `Test Description must contain at least two items`
    );

    Helpers.throws(
      `empty`,
      () =>
        ValidateContainsAtLeastTwoItems([`Test Item A`], `Test Description`),
      `Test Description must contain at least two items`
    );

    describe(`two items`, () => {
      it(`does nothing`, () => {
        ValidateContainsAtLeastTwoItems(
          [`Test Item A`, `Test Item B`],
          `Test Description`
        );
      });
    });

    describe(`three items`, () => {
      it(`does nothing`, () => {
        ValidateContainsAtLeastTwoItems(
          [`Test Item A`, `Test Item B`, `Test Item C`],
          `Test Description`
        );
      });
    });
  });
});
