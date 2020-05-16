import { SmoothQuadraticToRelative } from "../..";

describe(`commands`, () => {
  describe(`SmoothQuadraticToRelative`, () => {
    let command: SmoothQuadraticToRelative;
    beforeAll(() => {
      command = new SmoothQuadraticToRelative(254.2256, 65.275);
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
          command: `t`,
          parameters: [254.2256, 65.275],
        });
      });
    });
  });
});
