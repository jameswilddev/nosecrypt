import { ValidateOptionalUnitInterval } from "../..";

describe(`validation`, () => {
  describe(`ValidateOptionalUnitInterval`, () => {
    describe(`null`, () => {
      it(`does nothing`, () => {
        ValidateOptionalUnitInterval(null, `Test Description`);
      });
    });

    describe(`undefined`, () => {
      it(`does nothing`, () => {
        ValidateOptionalUnitInterval(undefined, `Test Description`);
      });
    });

    describe(`zero`, () => {
      it(`does nothing`, () => {
        ValidateOptionalUnitInterval(0, `Test Description`);
      });
    });

    describe(`between zero and one`, () => {
      it(`does nothing`, () => {
        ValidateOptionalUnitInterval(0.3462, `Test Description`);
      });
    });

    describe(`one`, () => {
      it(`does nothing`, () => {
        ValidateOptionalUnitInterval(1, `Test Description`);
      });
    });

    describe(`NaN`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateOptionalUnitInterval(Number.NaN, `Test Description`);
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
          ValidateOptionalUnitInterval(
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
          ValidateOptionalUnitInterval(
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
          ValidateOptionalUnitInterval(-0.00235, `Test Description`);
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

    describe(`greater than one`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateOptionalUnitInterval(1.00235, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(
            `Test Description must be less than or equal to one when given`
          )
        );
      });
    });
  });
});
