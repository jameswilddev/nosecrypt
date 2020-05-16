import { Value } from "../..";

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
