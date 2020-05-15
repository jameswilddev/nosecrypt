import { Opacity } from "../..";

describe(`values`, () => {
  describe(`Opacity`, () => {
    describe(`when within bounds`, () => {
      let opacity: Opacity;
      beforeAll(() => {
        opacity = new Opacity(0.35);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = opacity.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`0.35`);
        });
      });
    });

    describe(`when at the`, () => {
      describe(`lower bound`, () => {
        let opacity: Opacity;
        beforeAll(() => {
          opacity = new Opacity(0);
        });

        describe(`render`, () => {
          let rendered: string;
          beforeAll(() => {
            rendered = opacity.render();
          });
          it(`returns a SVG-compatible string`, () => {
            expect(rendered).toEqual(`0`);
          });
        });
      });

      describe(`upper bound`, () => {
        let opacity: Opacity;
        beforeAll(() => {
          opacity = new Opacity(1);
        });

        describe(`render`, () => {
          let rendered: string;
          beforeAll(() => {
            rendered = opacity.render();
          });
          it(`returns a SVG-compatible string`, () => {
            expect(rendered).toEqual(`1`);
          });
        });
      });
    });

    describe(`when`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Opacity(Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Opacity.value must be a number`));
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Opacity(Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Opacity.value must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Opacity(Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Opacity.value must be finite`));
        });
      });
    });

    describe(`when beyond the`, () => {
      describe(`lower bound`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Opacity(-0.01);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`Opacity.value must be greater than or equal to zero`)
          );
        });
      });

      describe(`upper bound`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Opacity(1.01);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`Opacity.value must be less than or equal to one`)
          );
        });
      });
    });
  });
});
