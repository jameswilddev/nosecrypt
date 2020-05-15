import { SkewY } from "../..";

describe(`transforms`, () => {
  describe(`SkewY`, () => {
    let transform: SkewY;
    beforeAll(() => {
      transform = new SkewY(224.765);
    });

    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = transform.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(`skewY(224.765)`);
      });
    });

    describe(`a`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewY(Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewY.a must be a number`));
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewY(Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewY.a must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewY(Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewY.a must be finite`));
        });
      });
    });
  });
});
