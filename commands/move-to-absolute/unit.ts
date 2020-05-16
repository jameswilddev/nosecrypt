import { MoveToAbsolute } from "../..";

describe(`commands`, () => {
  describe(`MoveToAbsolute`, () => {
    let command: MoveToAbsolute;
    beforeAll(() => {
      command = new MoveToAbsolute(243.234, 11.847456);
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
          command: `M`,
          parameters: [243.234, 11.847456],
        });
      });
    });
  });
});
