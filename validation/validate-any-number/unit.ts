import { ValidateAnyNumber } from "../..";

describe(`validation`, () => {
  describe(`ValidateAnyNumber`, () => {
    describe(`zero`, () => {
      it(`does nothing`, () => {
        ValidateAnyNumber(0, `Test Description`);
      });
    });

    describe(`positive`, () => {
      it(`does nothing`, () => {
        ValidateAnyNumber(23.128, `Test Description`);
      });
    });

    describe(`negative`, () => {
      it(`does nothing`, () => {
        ValidateAnyNumber(-23.128, `Test Description`);
      });
    });

    describe(`NaN`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateAnyNumber(Number.NaN, `Test Description`);
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
          ValidateAnyNumber(Number.POSITIVE_INFINITY, `Test Description`);
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
          ValidateAnyNumber(Number.NEGATIVE_INFINITY, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(new Error(`Test Description must be finite`));
      });
    });
  });
});
