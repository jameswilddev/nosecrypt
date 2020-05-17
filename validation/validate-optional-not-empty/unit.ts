import { ValidateOptionalNotEmpty } from "../..";

describe(`validation`, () => {
  describe(`ValidateOptionalNotEmpty`, () => {
    describe(`undefined`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNotEmpty(undefined, `Test Description`);
      });
    });

    describe(`null`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNotEmpty(null, `Test Description`);
      });
    });

    describe(`empty`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateOptionalNotEmpty([], `Test Description`);
        } catch (e) {
          thrown = e;
        }
      });
      it(`throws the expected error`, () => {
        expect(thrown).toEqual(new Error(`Test Description must not be empty`));
      });
    });

    describe(`one item`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNotEmpty([`Test Item A`], `Test Description`);
      });
    });

    describe(`two items`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNotEmpty(
          [`Test Item A`, `Test Item B`],
          `Test Description`
        );
      });
    });

    describe(`three items`, () => {
      it(`does nothing`, () => {
        ValidateOptionalNotEmpty(
          [`Test Item A`, `Test Item B`, `Test Item C`],
          `Test Description`
        );
      });
    });
  });
});
