import { ValidateNotEmpty } from "../..";

describe(`validation`, () => {
  describe(`ValidateNotEmpty`, () => {
    describe(`empty`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          ValidateNotEmpty([], `Test Description`);
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
        ValidateNotEmpty([`Test Item A`], `Test Description`);
      });
    });

    describe(`two items`, () => {
      it(`does nothing`, () => {
        ValidateNotEmpty([`Test Item A`, `Test Item B`], `Test Description`);
      });
    });

    describe(`three items`, () => {
      it(`does nothing`, () => {
        ValidateNotEmpty(
          [`Test Item A`, `Test Item B`, `Test Item C`],
          `Test Description`
        );
      });
    });
  });
});
