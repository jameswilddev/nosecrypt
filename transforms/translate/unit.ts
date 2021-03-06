import { Translate } from "../..";

describe(`transforms`, () => {
  describe(`Translate`, () => {
    describe(`without a y axis`, () => {
      let transform: Translate;
      beforeAll(() => {
        transform = new Translate(224.765);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transform.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`translate(224.765)`);
        });
      });

      describe(`x`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(Number.NaN);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Translate.x must be a number`));
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(Number.POSITIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Translate.x must be finite`));
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(Number.NEGATIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Translate.x must be finite`));
          });
        });
      });
    });

    describe(`with a y axis`, () => {
      let transform: Translate;
      beforeAll(() => {
        transform = new Translate(224.765, -14.52);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transform.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`translate(224.765 -14.52)`);
        });
      });

      describe(`x`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(Number.NaN, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Translate.x must be a number`));
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(Number.POSITIVE_INFINITY, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Translate.x must be finite`));
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(Number.NEGATIVE_INFINITY, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Translate.x must be finite`));
          });
        });
      });

      describe(`y`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(1734.2875, Number.NaN);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Translate.y must be a number when given`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(1734.2875, Number.POSITIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Translate.y must be finite when given`)
            );
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Translate(1734.2875, Number.NEGATIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Translate.y must be finite when given`)
            );
          });
        });
      });
    });
  });
});
