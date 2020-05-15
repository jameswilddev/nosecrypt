import { Size } from "../..";

describe(`values`, () => {
  describe(`Size`, () => {
    describe(`zero`, () => {
      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = Size.zero.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`0px`);
        });
      });
    });

    describe(`one`, () => {
      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = Size.one.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`1px`);
        });
      });
    });

    describe(`when within bounds`, () => {
      let size: Size;
      beforeAll(() => {
        size = new Size(3123.542);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = size.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`3123.542px`);
        });
      });
    });

    describe(`when at the`, () => {
      describe(`lower bound`, () => {
        let size: Size;
        beforeAll(() => {
          size = new Size(0);
        });

        describe(`render`, () => {
          let rendered: string;
          beforeAll(() => {
            rendered = size.render();
          });
          it(`returns a SVG-compatible string`, () => {
            expect(rendered).toEqual(`0px`);
          });
        });
      });
    });

    describe(`when`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Size(Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Size.value must be a number`));
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Size(Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Size.value must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Size(Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Size.value must be finite`));
        });
      });
    });

    describe(`when beyond the`, () => {
      describe(`lower bound`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Size(-0.01);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`Size.value must be greater than or equal to zero`)
          );
        });
      });
    });
  });
});
