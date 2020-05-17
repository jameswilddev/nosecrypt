import { ValidateOptionalNonNegative } from "../..";

describe(`validation`, () => {
  describe(`ValidateOptionalNonNegative`, () => {
    describe(`undefined`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNonNegative(undefined, `Test Description`);
      });
    });

    describe(`null`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNonNegative(null, `Test Description`);
      });
    });

    describe(`zero`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNonNegative(0, `Test Description`);
      });
    });

    describe(`greater than zero`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNonNegative(23.238, `Test Description`);
      });
    });

    describe(`NaN`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateOptionalNonNegative(Number.NaN, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(`Test Description must be a number when given`)
        );
      });
    });

    describe(`positive infinity`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateOptionalNonNegative(
            Number.POSITIVE_INFINITY,
            `Test Description`
          );
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(`Test Description must be finite when given`)
        );
      });
    });

    describe(`negative infinity`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateOptionalNonNegative(
            Number.NEGATIVE_INFINITY,
            `Test Description`
          );
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(`Test Description must be finite when given`)
        );
      });
    });

    describe(`less than zero`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateOptionalNonNegative(-0.00235, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(
            `Test Description must be greater than or equal to zero when given`
          )
        );
      });
    });
  });
});
