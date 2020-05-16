import { QuadraticToRelative } from "../..";

describe(`commands`, () => {
  describe(`QuadraticToRelative`, () => {
    let command: QuadraticToRelative;
    beforeAll(() => {
      command = new QuadraticToRelative(243.234, 11.847456, 254.2256, 65.275);
    });
    describe(`render`, () => {
      let rendered: {
        readonly command: string;
        readonly parameters: ReadonlyArray<number>;
      };
      beforeAll(() => {
        rendered = command.render();
      });
      it(`returns a description of the SVG path command`, () => {
        expect(rendered).toEqual({
          command: `q`,
          parameters: [243.234, 11.847456, 254.2256, 65.275],
        });
      });
    });
  });
});
