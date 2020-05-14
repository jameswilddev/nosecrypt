import { RotateTransform } from "../..";

describe(`transforms`, () => {
  describe(`RotateTransform`, () => {
    describe(`without a point around which to rotate`, () => {
      let transform: RotateTransform;
      beforeAll(() => {
        transform = new RotateTransform(224.765);
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

      describe(`angle`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(Number.NaN);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.angle must be a number`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(Number.POSITIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.angle must be finite`)
            );
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(Number.NEGATIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.angle must be finite`)
            );
          });
        });
      });
    });
    describe(`with a point around which to rotate`, () => {
      let transform: RotateTransform;
      beforeAll(() => {
        transform = new RotateTransform(224.765, -14.52, 1734.2875);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transform.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`rotate(224.765,-14.52,1734.2875)`);
        });
      });

      describe(`angle`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(Number.NaN, -14.52, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.angle must be a number`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(Number.POSITIVE_INFINITY, -14.52, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.angle must be finite`)
            );
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(Number.NEGATIVE_INFINITY, -14.52, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.angle must be finite`)
            );
          });
        });
      });

      describe(`x`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(-14.52, Number.NaN, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.x must be a number when given`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(-14.52, Number.POSITIVE_INFINITY, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.x must be finite when given`)
            );
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(-14.52, Number.NEGATIVE_INFINITY, 1734.2875);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.x must be finite when given`)
            );
          });
        });
      });

      describe(`y`, () => {
        describe(`NaN`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(-14.52, 1734.2875, Number.NaN);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.y must be a number when given`)
            );
          });
        });

        describe(`positive infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(-14.52, 1734.2875, Number.POSITIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.y must be finite when given`)
            );
          });
        });

        describe(`negative infinity`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new RotateTransform(-14.52, 1734.2875, Number.NEGATIVE_INFINITY);
            } catch (e) {
              thrown = e;
            }
          });
          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`RotateTransform.y must be finite when given`)
            );
          });
        });
      });
    });
  });
});
