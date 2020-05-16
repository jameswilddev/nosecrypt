import { LineToAbsolute } from "../..";

describe(`commands`, () => {
  describe(`LineToAbsolute`, () => {
    let command: LineToAbsolute;
    beforeAll(() => {
      command = new LineToAbsolute(243.234, 11.847456);
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
          command: `L`,
          parameters: [243.234, 11.847456],
        });
      });
    });
  });
});
