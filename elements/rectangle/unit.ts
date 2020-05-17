import {
  Rectangle,
  Rotate,
  Scale,
  Translate,
  Value,
  Position,
  Size,
  Color,
  Opacity,
  TransformSet,
  FillColor,
  StrokeColor,
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Rectangle`, () => {
    let strokeColor: Color;
    let fillColor: Color;
    let renderCallback: jasmine.Spy;
    let rectangle: Rectangle<TestState>;
    beforeAll(() => {
      strokeColor = new Color(0.2, 0.9, 0.45);
      fillColor = new Color(0.5, 0.4, 0.7);
      renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
        transforms: [new Scale(23, -18), new Translate(-4, 7), new Rotate(90)],
        leftX: 43,
        topY: -64,
        width: 12,
        height: 20,
        strokeWidth: 2,
        strokeColor,
        strokeOpacity: 0.4,
        fillColor,
        fillOpacity: 0.8,
      });
      rectangle = new Rectangle<TestState>(renderCallback);
    });

    describe(`tagName`, () => {
      it(`is rect`, () => {
        expect(rectangle.tagName).toEqual(`rect`);
      });
    });

    describe(`children`, () => {
      it(`is empty`, () => {
        expect(rectangle.children).toEqual([]);
      });
    });

    describe(`render`, () => {
      let rendered: { readonly [attribute: string]: Value };
      beforeAll(() => {
        rendered = rectangle.render(`Test State`);
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
          x: jasmine.any(Position),
          y: jasmine.any(Position),
          width: jasmine.any(Size),
          height: jasmine.any(Size),
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

      it(`returns an attribute set including the appropriate x value`, () => {
        expect(rendered.x.render()).toEqual(`43`);
      });

      it(`returns an attribute set including the appropriate y value`, () => {
        expect(rendered.y.render()).toEqual(`-64`);
      });

      it(`returns an attribute set including the appropriate width value`, () => {
        expect(rendered.width.render()).toEqual(`12`);
      });

      it(`returns an attribute set including the appropriate height value`, () => {
        expect(rendered.height.render()).toEqual(`20`);
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
