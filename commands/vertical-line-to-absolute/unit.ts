import { VerticalLineToAbsolute } from "../..";

describe(`commands`, () => {
  describe(`VerticalLineToAbsolute`, () => {
    let command: VerticalLineToAbsolute;
    beforeAll(() => {
      command = new VerticalLineToAbsolute(243.234);
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
          command: `V`,
          parameters: [243.234],
        });
      });
    });
  });
});
