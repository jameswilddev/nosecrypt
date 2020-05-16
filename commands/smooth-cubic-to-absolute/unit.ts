import { SmoothCubicToAbsolute } from "../..";

describe(`commands`, () => {
  describe(`SmoothCubicToAbsolute`, () => {
    let command: SmoothCubicToAbsolute;
    beforeAll(() => {
      command = new SmoothCubicToAbsolute(83.367, 6526.2546, 254.2256, 65.275);
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
          command: `S`,
          parameters: [83.367, 6526.2546, 254.2256, 65.275],
        });
      });
    });
  });
});
