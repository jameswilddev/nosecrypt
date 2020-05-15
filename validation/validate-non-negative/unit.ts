import { ValidateNonNegative } from "../..";

describe(`validation`, () => {
  describe(`ValidateNonNegative`, () => {
    describe(`zero`, () => {
      it(`does nothing`, () => {
        ValidateNonNegative(0, `Test Description`);
      });
    });

    describe(`greater than zero`, () => {
      it(`does nothing`, () => {
        ValidateNonNegative(23.238, `Test Description`);
      });
    });

    describe(`NaN`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateNonNegative(Number.NaN, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(new Error(`Test Description must be a number`));
      });
    });

    describe(`positive infinity`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateNonNegative(Number.POSITIVE_INFINITY, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(new Error(`Test Description must be finite`));
      });
    });

    describe(`negative infinity`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateNonNegative(Number.NEGATIVE_INFINITY, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(new Error(`Test Description must be finite`));
      });
    });

    describe(`less than zero`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateNonNegative(-0.00235, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(`Test Description must be greater than or equal to zero`)
        );
      });
    });
  });
});
