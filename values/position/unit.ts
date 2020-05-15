import { Position } from "../..";

describe(`values`, () => {
  describe(`Position`, () => {
    describe(`zero`, () => {
      let position: Position;
      beforeAll(() => {
        position = new Position(0);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = position.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`0`);
        });
      });
    });

    describe(`negative`, () => {
      let position: Position;
      beforeAll(() => {
        position = new Position(-3123.542);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = position.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`-3123.542`);
        });
      });
    });

    describe(`positive`, () => {
      let position: Position;
      beforeAll(() => {
        position = new Position(3123.542);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = position.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`3123.542`);
        });
      });
    });

    describe(`when`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Position(Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Position.value must be a number`));
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Position(Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Position.value must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Position(Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Position.value must be finite`));
        });
      });
    });
  });
});
