import { SkewYTransform } from "../..";

describe(`transforms`, () => {
  describe(`SkewYTransform`, () => {
    let transform: SkewYTransform;
    beforeAll(() => {
      transform = new SkewYTransform(224.765);
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
            new SkewYTransform(Number.NaN);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(
            new Error(`SkewYTransform.a must be a number`)
          );
        });
      });

      describe(`positive infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewYTransform(Number.POSITIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewYTransform.a must be finite`));
        });
      });

      describe(`negative infinity`, () => {
        let thrown: Error;
        beforeAll(() => {
          try {
            new SkewYTransform(Number.NEGATIVE_INFINITY);
          } catch (e) {
            thrown = e;
          }
        });
        it(`throws the expected error`, () => {
          expect(thrown).toEqual(new Error(`SkewYTransform.a must be finite`));
        });
      });
    });
  });
});
