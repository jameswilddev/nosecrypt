import { ValidateUnitInterval } from "../..";

describe(`validation`, () => {
  describe(`ValidateUnitInterval`, () => {
    describe(`zero`, () => {
      it(`does nothing`, () => {
        ValidateUnitInterval(0, `Test Description`);
      });
    });

    describe(`between zero and one`, () => {
      it(`does nothing`, () => {
        ValidateUnitInterval(0.3462, `Test Description`);
      });
    });

    describe(`one`, () => {
      it(`does nothing`, () => {
        ValidateUnitInterval(1, `Test Description`);
      });
    });

    describe(`NaN`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateUnitInterval(Number.NaN, `Test Description`);
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
          ValidateUnitInterval(Number.POSITIVE_INFINITY, `Test Description`);
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
          ValidateUnitInterval(Number.NEGATIVE_INFINITY, `Test Description`);
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
          ValidateUnitInterval(-0.00235, `Test Description`);
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

    describe(`greater than one`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateUnitInterval(1.00235, `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(`Test Description must be less than or equal to one`)
        );
      });
    });
  });
});
