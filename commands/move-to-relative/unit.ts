import { MoveToRelative } from "../..";

describe(`commands`, () => {
  describe(`MoveToRelative`, () => {
    let command: MoveToRelative;
    beforeAll(() => {
      command = new MoveToRelative(243.234, 11.847456);
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
          command: `m`,
          parameters: [243.234, 11.847456],
        });
      });
    });
  });
});
