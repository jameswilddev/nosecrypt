import { HorizontalLineToRelative } from "../..";

describe(`commands`, () => {
  describe(`HorizontalLineToRelative`, () => {
    let command: HorizontalLineToRelative;
    beforeAll(() => {
      command = new HorizontalLineToRelative(243.234);
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
          command: `h`,
          parameters: [243.234],
        });
      });
    });
  });
});
