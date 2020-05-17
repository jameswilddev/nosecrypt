import {
  Ellipse,
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
  describe(`Ellipse`, () => {
    let strokeColor: Color;
    let fillColor: Color;
    let renderCallback: jasmine.Spy;
    let ellipse: Ellipse<TestState>;
    beforeAll(() => {
      strokeColor = new Color(0.2, 0.9, 0.45);
      fillColor = new Color(0.5, 0.4, 0.7);
      renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
        transforms: [new Scale(23, -18), new Translate(-4, 7), new Rotate(90)],
        centerX: 43,
        centerY: -64,
        radiusX: 12,
        radiusY: 20,
        strokeWidth: 2,
        strokeColor,
        strokeOpacity: 0.4,
        fillColor,
        fillOpacity: 0.8,
      });
      ellipse = new Ellipse<TestState>(renderCallback);
    });

    describe(`tagName`, () => {
      it(`is ellipse`, () => {
        expect(ellipse.tagName).toEqual(`ellipse`);
      });
    });

    describe(`children`, () => {
      it(`is empty`, () => {
        expect(ellipse.children).toEqual([]);
      });
    });

    describe(`render`, () => {
      let rendered: { readonly [attribute: string]: Value };
      beforeAll(() => {
        rendered = ellipse.render(`Test State`);
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
          cx: jasmine.any(Position),
          cy: jasmine.any(Position),
          rx: jasmine.any(Size),
          ry: jasmine.any(Size),
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

      it(`returns an attribute set including the appropriate cx value`, () => {
        expect(rendered.cx.render()).toEqual(`43`);
      });

      it(`returns an attribute set including the appropriate cy value`, () => {
        expect(rendered.cy.render()).toEqual(`-64`);
      });

      it(`returns an attribute set including the appropriate rx value`, () => {
        expect(rendered.rx.render()).toEqual(`12`);
      });

      it(`returns an attribute set including the appropriate ry value`, () => {
        expect(rendered.ry.render()).toEqual(`20`);
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
