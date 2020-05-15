import { Rotate } from "../..";

describe(`transforms`, () => {
  describe(`Rotate`, () => {
    describe(`without a point around which to rotate`, () => {
      let transform: Rotate;
      beforeAll(() => {
        transform = new Rotate(224.765);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transform.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`rotate(224.765)`);
        });
      });

      describe(`degrees`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(Number.NaN);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.degrees must be a number`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(Number.POSITIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Rotate.degrees must be finite`));
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(Number.NEGATIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Rotate.degrees must be finite`));
          });
        });
      });
    });
    describe(`with a point around which to rotate`, () => {
      let transform: Rotate;
      beforeAll(() => {
        transform = new Rotate(224.765, -14.52, 1734.2875);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transform.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`rotate(224.765 -14.52 1734.2875)`);
        });
      });

      describe(`degrees`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(Number.NaN, -14.52, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.degrees must be a number`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(Number.POSITIVE_INFINITY, -14.52, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Rotate.degrees must be finite`));
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(Number.NEGATIVE_INFINITY, -14.52, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(new Error(`Rotate.degrees must be finite`));
          });
        });
      });

      describe(`x`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(-14.52, Number.NaN, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.x must be a number when given`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(-14.52, Number.POSITIVE_INFINITY, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.x must be finite when given`)
            );
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(-14.52, Number.NEGATIVE_INFINITY, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.x must be finite when given`)
            );
          });
        });
      });

      describe(`y`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(-14.52, 1734.2875, Number.NaN);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.y must be a number when given`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(-14.52, 1734.2875, Number.POSITIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.y must be finite when given`)
            );
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Rotate(-14.52, 1734.2875, Number.NEGATIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Rotate.y must be finite when given`)
            );
          });
        });
      });
    });
  });
});
