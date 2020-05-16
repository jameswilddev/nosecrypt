import { SmoothCubicToRelative } from "../..";

describe(`commands`, () => {
  describe(`SmoothCubicToRelative`, () => {
    let command: SmoothCubicToRelative;
    beforeAll(() => {
      command = new SmoothCubicToRelative(83.367, 6526.2546, 254.2256, 65.275);
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
          command: `s`,
          parameters: [83.367, 6526.2546, 254.2256, 65.275],
        });
      });
    });
  });
});
