import {
  CommandSet,
  EllipticArcAbsolute,
  MoveToRelative,
  VerticalLineToAbsolute,
} from "../..";

describe(`values`, () => {
  describe(`CommandSet`, () => {
    describe(`empty`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          new CommandSet();
        } catch (e) {
          thrown = e;
        }
      });

      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(`CommandSet.commands must not be empty`)
        );
      });
    });

    describe(`with one command`, () => {
      let commandSet: CommandSet;
      beforeAll(() => {
        commandSet = new CommandSet(
          new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40)
        );
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = commandSet.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`A24 -18 37 1 0 -10 -40`);
        });
      });
    });

    describe(`with two commands`, () => {
      let commandSet: CommandSet;
      beforeAll(() => {
        commandSet = new CommandSet(
          new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40),
          new MoveToRelative(-37, 43)
        );
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = commandSet.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`A24 -18 37 1 0 -10 -40m-37 43`);
        });
      });
    });

    describe(`with three commands`, () => {
      let commandSet: CommandSet;
      beforeAll(() => {
        commandSet = new CommandSet(
          new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40),
          new MoveToRelative(-37, 43),
          new VerticalLineToAbsolute(67)
        );
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = commandSet.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`A24 -18 37 1 0 -10 -40m-37 43V67`);
        });
      });
    });
  });
});
