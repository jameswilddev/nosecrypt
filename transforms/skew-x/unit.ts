import { SkewX } from "../..";

describe(`transforms`, () => {
  describe(`SkewX`, () => {
    let transform: SkewX;
    beforeAll(() => {
      transform = new SkewX(224.765);
    });

    describe(`render`, () => {
      let rendered: string;
      beforeAll(() => {
        rendered = transform.render();
      });
      it(`returns a SVG-compatible string`, () => {
        expect(rendered).toEqual(`skewX(224.765)`);
      });
    });

    describe(`a`, () => {
      describe(`NaN`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewX(Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewX.a must be a number`));
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewX(Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewX.a must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewX(Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewX.a must be finite`));
        });
      });
    });
  });
});
