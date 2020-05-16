import { SmoothQuadraticToAbsolute } from "../..";

describe(`commands`, () => {
  describe(`SmoothQuadraticToAbsolute`, () => {
    let command: SmoothQuadraticToAbsolute;
    beforeAll(() => {
      command = new SmoothQuadraticToAbsolute(254.2256, 65.275);
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
          command: `T`,
          parameters: [254.2256, 65.275],
        });
      });
    });
  });
});
