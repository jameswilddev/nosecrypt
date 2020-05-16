import { HorizontalLineToAbsolute } from "../..";

describe(`commands`, () => {
  describe(`HorizontalLineToAbsolute`, () => {
    let command: HorizontalLineToAbsolute;
    beforeAll(() => {
      command = new HorizontalLineToAbsolute(243.234);
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
          command: `H`,
          parameters: [243.234],
        });
      });
    });
  });
});
