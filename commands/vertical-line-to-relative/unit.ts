import { VerticalLineToRelative } from "../..";

describe(`commands`, () => {
  describe(`VerticalLineToRelative`, () => {
    let command: VerticalLineToRelative;
    beforeAll(() => {
      command = new VerticalLineToRelative(243.234);
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
          command: `v`,
          parameters: [243.234],
        });
      });
    });
  });
});
