import { MatrixTransform } from "../..";

describe(`transforms`, () => {
  describe(`MatrixTransform`, () => {
    let transform: MatrixTransform;
    beforeAll(() => {
      transform = new MatrixTransform(
        224.765,
        -14.52,
        1734.2875,
        16.62,
        -31.5446,
        20.45
      );
    });

    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = transform.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(
          `matrix(224.765 -14.52 1734.2875 16.62 -31.5446 20.45)`
        );
      });
    });

    describe(`a`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              Number.NaN,
              -14.52,
              1734.2875,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`MatrixTransform.a must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              Number.POSITIVE_INFINITY,
              -14.52,
              1734.2875,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.a must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              Number.NEGATIVE_INFINITY,
              -14.52,
              1734.2875,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.a must be finite`));
        });
      });
    });

    describe(`b`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              Number.NaN,
              1734.2875,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`MatrixTransform.b must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              Number.POSITIVE_INFINITY,
              1734.2875,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.b must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              Number.NEGATIVE_INFINITY,
              1734.2875,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.b must be finite`));
        });
      });
    });

    describe(`c`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              Number.NaN,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`MatrixTransform.c must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              Number.POSITIVE_INFINITY,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.c must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              Number.NEGATIVE_INFINITY,
              16.62,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.c must be finite`));
        });
      });
    });

    describe(`d`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              Number.NaN,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`MatrixTransform.d must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              Number.POSITIVE_INFINITY,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.d must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              Number.NEGATIVE_INFINITY,
              -31.5446,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.d must be finite`));
        });
      });
    });

    describe(`e`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              16.62,
              Number.NaN,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`MatrixTransform.e must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              16.62,
              Number.POSITIVE_INFINITY,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.e must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              16.62,
              Number.NEGATIVE_INFINITY,
              20.45
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.e must be finite`));
        });
      });
    });

    describe(`f`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              16.62,
              -31.5446,
              Number.NaN
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`MatrixTransform.f must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              16.62,
              -31.5446,
              Number.POSITIVE_INFINITY
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.f must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new MatrixTransform(
              224.765,
              -14.52,
              1734.2875,
              16.62,
              -31.5446,
              Number.NEGATIVE_INFINITY
            );
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`MatrixTransform.f must be finite`));
        });
      });
    });
  });
});
