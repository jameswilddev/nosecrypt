import { LineToRelative } from "../..";

describe(`commands`, () => {
  describe(`LineToRelative`, () => {
    let command: LineToRelative;
    beforeAll(() => {
      command = new LineToRelative(243.234, 11.847456);
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
          command: `l`,
          parameters: [243.234, 11.847456],
        });
      });
    });
  });
});
