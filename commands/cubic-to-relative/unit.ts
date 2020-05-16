import { CubicToRelative } from "../..";

describe(`commands`, () => {
  describe(`CubicToRelative`, () => {
    let command: CubicToRelative;
    beforeAll(() => {
      command = new CubicToRelative(
        243.234,
        11.847456,
        83.367,
        6526.2546,
        254.2256,
        65.275
      );
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
          command: `c`,
          parameters: [243.234, 11.847456, 83.367, 6526.2546, 254.2256, 65.275],
        });
      });
    });
  });
});
