import { Color } from "..";

describe(`Color`, () => {
  describe(`black`, () => {
    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = Color.black.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(`#000`);
      });
    });
  });

  describe(`grey50`, () => {
    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = Color.grey50.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(`#777`);
      });
    });
  });

  describe(`white`, () => {
    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = Color.white.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(`#fff`);
      });
    });
  });

  describe(`when all channels are within bounds`, () => {
    let color: Color;
    beforeAll(() => {
      color = new Color(0.35, 0.93456, 0.612);
    });
    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = color.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(`#5e9`);
      });
    });
  });

  describe(`when a channel is slightly`, () => {
    describe(`below a threshold`, () => {
      let color: Color;
      beforeAll(() => {
        color = new Color(0.35, 0.874, 0.612);
      });
      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = color.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`#5d9`);
        });
      });
    });

    describe(`above a threshold`, () => {
      let color: Color;
      beforeAll(() => {
        color = new Color(0.35, 0.876, 0.612);
      });
      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = color.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`#5e9`);
        });
      });
    });
  });

  describe(`when all channels are at the`, () => {
    describe(`lower bound`, () => {
      let color: Color;
      beforeAll(() => {
        color = new Color(0, 0, 0);
      });
      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = color.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`#000`);
        });
      });
    });

    describe(`upper bound`, () => {
      let color: Color;
      beforeAll(() => {
        color = new Color(1, 1, 1);
      });
      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = color.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`#fff`);
        });
      });
    });
  });

  describe(`when the`, () => {
    describe(`red channel is`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(Number.NaN, 0.93456, 0.612);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.red must be a number`));
        });
      });
      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(Number.POSITIVE_INFINITY, 0.93456, 0.612);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.red must be finite`));
        });
      });
      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(Number.NEGATIVE_INFINITY, 0.93456, 0.612);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.red must be finite`));
        });
      });
      describe(`beyond the`, () => {
        describe(`lower bound`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Color(-0.01, 0.93456, 0.612);
            } catch (e) {
              thrown = e;
            }
          });

          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Color.red must be greater than or equal to zero`)
            );
          });
        });
        describe(`upper bound`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Color(1.01, 0.93456, 0.612);
            } catch (e) {
              thrown = e;
            }
          });

          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Color.red must be less than or equal to one`)
            );
          });
        });
      });
    });

    describe(`green channel is`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(0.93456, Number.NaN, 0.612);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.green must be a number`));
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(0.93456, Number.POSITIVE_INFINITY, 0.612);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.green must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(0.93456, Number.NEGATIVE_INFINITY, 0.612);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.green must be finite`));
        });
      });

      describe(`beyond the`, () => {
        describe(`lower bound`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Color(0.93456, -0.01, 0.612);
            } catch (e) {
              thrown = e;
            }
          });

          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Color.green must be greater than or equal to zero`)
            );
          });
        });

        describe(`upper bound`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Color(0.93456, 1.01, 0.612);
            } catch (e) {
              thrown = e;
            }
          });

          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Color.green must be less than or equal to one`)
            );
          });
        });
      });
    });

    describe(`blue channel is`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(0.93456, 0.612, Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.blue must be a number`));
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(0.93456, 0.612, Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.blue must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new Color(0.93456, 0.612, Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });

        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`Color.blue must be finite`));
        });
      });

      describe(`beyond the`, () => {
        describe(`lower bound`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Color(0.93456, 0.612, -0.01);
            } catch (e) {
              thrown = e;
            }
          });

          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Color.blue must be greater than or equal to zero`)
            );
          });
        });

        describe(`upper bound`, () => {
          let thrown: Error;
          beforeAll(() => {
            try {
              new Color(0.93456, 0.612, 1.01);
            } catch (e) {
              thrown = e;
            }
          });

          it(`throws the expected error`, () => {
            expect(thrown).toEqual(
              new Error(`Color.blue must be less than or equal to one`)
            );
          });
        });
      });
    });
  });
});
