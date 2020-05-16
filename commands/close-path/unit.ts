import { ClosePath } from "../..";

describe(`commands`, () => {
  describe(`ClosePath`, () => {
    let command: ClosePath;
    beforeAll(() => {
      command = new ClosePath();
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
          command: `Z`,
          parameters: [],
        });
      });
    });
  });
});
