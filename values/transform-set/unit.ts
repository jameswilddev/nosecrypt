import { TransformSet, Scale, Translate, Rotate } from "../..";

describe(`values`, () => {
  describe(`TransformSet`, () => {
    describe(`empty`, () => {
      let thrown: Error;
      beforeAll(() => {
        try {
          new TransformSet([]);
        } catch (e) {
          thrown = e;
        }
      });

      it(`throws the expected error`, () => {
        expect(thrown).toEqual(
          new Error(`TransformSet.transforms must not be empty`)
        );
      });
    });

    describe(`with one transform`, () => {
      let transformSet: TransformSet;
      beforeAll(() => {
        transformSet = new TransformSet([new Scale(23, -18)]);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transformSet.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`scale(23,-18)`);
        });
      });
    });

    describe(`with two transforms`, () => {
      let transformSet: TransformSet;
      beforeAll(() => {
        transformSet = new TransformSet([
          new Scale(23, -18),
          new Translate(-4, 7),
        ]);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transformSet.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`scale(23,-18) translate(-4 7)`);
        });
      });
    });

    describe(`with three transforms`, () => {
      let transformSet: TransformSet;
      beforeAll(() => {
        transformSet = new TransformSet([
          new Scale(23, -18),
          new Translate(-4, 7),
          new Rotate(90),
        ]);
      });

      describe(`render`, () => {
        let rendered: string;
        beforeAll(() => {
          rendered = transformSet.render();
        });
        it(`returns a SVG-compatible string`, () => {
          expect(rendered).toEqual(`scale(23,-18) translate(-4 7) rotate(90)`);
        });
      });
    });
  });
});
