import {
  Circle,
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
  describe(`Circle`, () => {
    let renderCallback: jasmine.Spy;
    let circle: Circle<TestState>;
    beforeAll(() => {
      renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
        transforms: [new Scale(23, -18), new Translate(-4, 7), new Rotate(90)],
        centerX: 43,
        centerY: -64,
        radius: 12,
        strokeWidth: 2,
        strokeColor: new Color(0.2, 0.9, 0.45),
        strokeOpacity: 0.4,
        fillColor: new Color(0.5, 0.4, 0.7),
        fillOpacity: 0.8,
      });
      circle = new Circle<TestState>(renderCallback);
    });

    describe(`tagName`, () => {
      it(`is circle`, () => {
        expect(circle.tagName).toEqual(`circle`);
      });
    });

    describe(`children`, () => {
      it(`is empty`, () => {
        expect(circle.children).toEqual([]);
      });
    });

    describe(`render`, () => {
      let rendered: { readonly [attribute: string]: Value };
      beforeAll(() => {
        rendered = circle.render(`Test State`);
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
          r: jasmine.any(Size),
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

      it(`returns an attribute set including the appropriate r value`, () => {
        expect(rendered.r.render()).toEqual(`12`);
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
