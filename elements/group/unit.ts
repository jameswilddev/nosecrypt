import {
  Group,
  Rotate,
  Scale,
  Translate,
  Value,
  Size,
  Color,
  Opacity,
  TransformSet,
  FillColor,
  StrokeColor,
  Rectangle,
  Circle,
  Ellipse,
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Group`, () => {
    describe(`without children`, () => {
      let renderCallback: jasmine.Spy;
      let thrown: Error;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          transforms: [
            new Scale(23, -18),
            new Translate(-4, 7),
            new Rotate(90),
          ],
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
        });

        try {
          new Group<TestState>(renderCallback, []);
        } catch (e) {
          thrown = e;
        }
      });

      it(`throws the expected error`, () => {
        expect(thrown).toEqual(new Error(`Group.children must not be empty`));
      });

      it(`does not call the render callback`, () => {
        expect(renderCallback).not.toHaveBeenCalled();
      });
    });

    describe(`with one child`, () => {
      let renderCallback: jasmine.Spy;
      const childA = new Rectangle(() => ({}));
      let group: Group<TestState>;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          transforms: [
            new Scale(23, -18),
            new Translate(-4, 7),
            new Rotate(90),
          ],
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
        });
        group = new Group<TestState>(renderCallback, [childA]);
      });

      describe(`tagName`, () => {
        it(`is group`, () => {
          expect(group.tagName).toEqual(`group`);
        });
      });

      describe(`children`, () => {
        it(`contains the given children`, () => {
          expect(group.children).toEqual([childA]);
        });
      });

      describe(`render`, () => {
        let rendered: { readonly [attribute: string]: Value };
        beforeAll(() => {
          rendered = group.render(`Test State`);
        });

        it(`calls the render callback once`, () => {
          expect(renderCallback).toHaveBeenCalledTimes(1);
        });

        it(`passes the state to the render callback`, () => {
          expect(renderCallback).toHaveBeenCalledWith(`Test State`);
        });

        it(`returns an attribute set containing a the correct types`, () => {
          expect(rendered).toEqual({
            transform: jasmine.any(TransformSet),
            "stroke-width": jasmine.any(Size),
            "stroke-color": jasmine.any(StrokeColor),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(FillColor),
            "fill-opacity": jasmine.any(Opacity),
          });
        });

        it(`returns an attribute set including the appropriate transform value`, () => {
          expect(rendered.transform.render()).toEqual(
            `scale(23,-18) translate(-4 7) rotate(90)`
          );
        });

        it(`returns an attribute set including the appropriate stroke-width value`, () => {
          expect(rendered[`stroke-width`].render()).toEqual(`2`);
        });

        it(`returns an attribute set including the appropriate stroke-color value`, () => {
          expect(rendered[`stroke-color`].render()).toEqual(`#3e7`);
        });

        it(`returns an attribute set including the appropriate stroke-opacity value`, () => {
          expect(rendered[`stroke-opacity`].render()).toEqual(`0.4`);
        });

        it(`returns an attribute set including the appropriate fill-color value`, () => {
          expect(rendered[`fill-color`].render()).toEqual(`#76b`);
        });

        it(`returns an attribute set including the appropriate fill-opacity value`, () => {
          expect(rendered[`fill-opacity`].render()).toEqual(`0.8`);
        });
      });
    });

    describe(`with two children`, () => {
      let renderCallback: jasmine.Spy;
      const childA = new Rectangle(() => ({}));
      const childB = new Circle(() => ({}));
      let group: Group<TestState>;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          transforms: [
            new Scale(23, -18),
            new Translate(-4, 7),
            new Rotate(90),
          ],
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
        });
        group = new Group<TestState>(renderCallback, [childA, childB]);
      });

      describe(`tagName`, () => {
        it(`is group`, () => {
          expect(group.tagName).toEqual(`group`);
        });
      });

      describe(`children`, () => {
        it(`contains the given children`, () => {
          expect(group.children).toEqual([childA, childB]);
        });
      });

      describe(`render`, () => {
        let rendered: { readonly [attribute: string]: Value };
        beforeAll(() => {
          rendered = group.render(`Test State`);
        });

        it(`calls the render callback once`, () => {
          expect(renderCallback).toHaveBeenCalledTimes(1);
        });

        it(`passes the state to the render callback`, () => {
          expect(renderCallback).toHaveBeenCalledWith(`Test State`);
        });

        it(`returns an attribute set containing a the correct types`, () => {
          expect(rendered).toEqual({
            transform: jasmine.any(TransformSet),
            "stroke-width": jasmine.any(Size),
            "stroke-color": jasmine.any(StrokeColor),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(FillColor),
            "fill-opacity": jasmine.any(Opacity),
          });
        });

        it(`returns an attribute set including the appropriate transform value`, () => {
          expect(rendered.transform.render()).toEqual(
            `scale(23,-18) translate(-4 7) rotate(90)`
          );
        });

        it(`returns an attribute set including the appropriate stroke-width value`, () => {
          expect(rendered[`stroke-width`].render()).toEqual(`2`);
        });

        it(`returns an attribute set including the appropriate stroke-color value`, () => {
          expect(rendered[`stroke-color`].render()).toEqual(`#3e7`);
        });

        it(`returns an attribute set including the appropriate stroke-opacity value`, () => {
          expect(rendered[`stroke-opacity`].render()).toEqual(`0.4`);
        });

        it(`returns an attribute set including the appropriate fill-color value`, () => {
          expect(rendered[`fill-color`].render()).toEqual(`#76b`);
        });

        it(`returns an attribute set including the appropriate fill-opacity value`, () => {
          expect(rendered[`fill-opacity`].render()).toEqual(`0.8`);
        });
      });
    });

    describe(`with three children`, () => {
      let renderCallback: jasmine.Spy;
      const childA = new Rectangle(() => ({}));
      const childB = new Circle(() => ({}));
      const childC = new Ellipse(() => ({}));
      let group: Group<TestState>;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          transforms: [
            new Scale(23, -18),
            new Translate(-4, 7),
            new Rotate(90),
          ],
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
        });
        group = new Group<TestState>(renderCallback, [childA, childB, childC]);
      });

      describe(`tagName`, () => {
        it(`is group`, () => {
          expect(group.tagName).toEqual(`group`);
        });
      });

      describe(`children`, () => {
        it(`contains the given children`, () => {
          expect(group.children).toEqual([childA, childB, childC]);
        });
      });

      describe(`render`, () => {
        let rendered: { readonly [attribute: string]: Value };
        beforeAll(() => {
          rendered = group.render(`Test State`);
        });

        it(`calls the render callback once`, () => {
          expect(renderCallback).toHaveBeenCalledTimes(1);
        });

        it(`passes the state to the render callback`, () => {
          expect(renderCallback).toHaveBeenCalledWith(`Test State`);
        });

        it(`returns an attribute set containing a the correct types`, () => {
          expect(rendered).toEqual({
            transform: jasmine.any(TransformSet),
            "stroke-width": jasmine.any(Size),
            "stroke-color": jasmine.any(StrokeColor),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(FillColor),
            "fill-opacity": jasmine.any(Opacity),
          });
        });

        it(`returns an attribute set including the appropriate transform value`, () => {
          expect(rendered.transform.render()).toEqual(
            `scale(23,-18) translate(-4 7) rotate(90)`
          );
        });

        it(`returns an attribute set including the appropriate stroke-width value`, () => {
          expect(rendered[`stroke-width`].render()).toEqual(`2`);
        });

        it(`returns an attribute set including the appropriate stroke-color value`, () => {
          expect(rendered[`stroke-color`].render()).toEqual(`#3e7`);
        });

        it(`returns an attribute set including the appropriate stroke-opacity value`, () => {
          expect(rendered[`stroke-opacity`].render()).toEqual(`0.4`);
        });

        it(`returns an attribute set including the appropriate fill-color value`, () => {
          expect(rendered[`fill-color`].render()).toEqual(`#76b`);
        });

        it(`returns an attribute set including the appropriate fill-opacity value`, () => {
          expect(rendered[`fill-opacity`].render()).toEqual(`0.8`);
        });
      });
    });
  });
});
