import { ValidateAnyOptionalNumber } from "../..";

describe(`validation`, () => {
  describe(`ValidateAnyOptionalNumber`, () => {
    describe(`null`, () => {
      it(`does nothing`, () => {
        ValidateAnyOptionalNumber(null, `Test Description`);
      });
    });

    describe(`undefined`, () => {
      it(`does nothing`, () => {
        ValidateAnyOptionalNumber(undefined, `Test Description`);
      });
    });

    describe(`zero`, () => {
      it(`does nothing`, () => {
        ValidateAnyOptionalNumber(0, `Test Description`);
      });
    });

    describe(`positive`, () => {
      it(`does nothing`, () => {
        ValidateAnyOptionalNumber(23.128, `Test Description`);
      });
    });

    describe(`negative`, () => {
      it(`does nothing`, () => {
        ValidateAnyOptionalNumber(-23.128, `Test Description`);
      });
    });

    describe(`NaN`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateAnyOptionalNumber(Number.NaN, `Test Description`);
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
          ValidateAnyOptionalNumber(
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
          ValidateAnyOptionalNumber(
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
  });
});
