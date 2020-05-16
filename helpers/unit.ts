import { Value } from "..";

export function throws(
  description: string,
  errorFactory: () => void,
  message: string
): void {
  describe(description, () => {
    let thrown: Error;
    beforeAll(() => {
      try {
        errorFactory();
      } catch (e) {
        thrown = e;
      }
    });

    it(`throws the expected error`, () => {
      expect(thrown).toEqual(new Error(message));
    });
  });
}

export function renders(
  description: string,
  valueFactory: () => Value,
  rendersTo: string
): void {
  describe(description, () => {
    let value: Value;
    beforeAll(() => {
      value = valueFactory();
    });
    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = value.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(rendersTo);
      });
    });
  });
}
