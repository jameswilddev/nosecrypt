import { SkewXTransform } from "../..";

describe(`transforms`, () => {
  describe(`SkewXTransform`, () => {
    let transform: SkewXTransform;
    beforeAll(() => {
      transform = new SkewXTransform(224.765);
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
            new SkewXTransform(Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`SkewXTransform.a must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewXTransform(Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewXTransform.a must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewXTransform(Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewXTransform.a must be finite`));
        });
      });
    });
  });
});
