import {
  Polygon,
  Rotate,
  Scale,
  Translate,
  Value,
  Size,
  Color,
  Opacity,
  TransformSet,
  StrokeColor,
  FillColor,
  PointSet,
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Polygon`, () => {
    let renderCallback: jasmine.Spy;
    let polygon: Polygon<TestState>;
    beforeAll(() => {
      renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
        transforms: [new Scale(23, -18), new Translate(-4, 7), new Rotate(90)],
        points: [
          [24.3, -18.7],
          [10.8, 33.1],
          [-17.2, -12.6],
        ],
        strokeWidth: 2,
        strokeColor: new Color(0.2, 0.9, 0.45),
        strokeOpacity: 0.4,
        fillColor: new Color(0.5, 0.4, 0.7),
        fillOpacity: 0.8,
      });
      polygon = new Polygon<TestState>(renderCallback);
    });

    describe(`tagName`, () => {
      it(`is polygon`, () => {
        expect(polygon.tagName).toEqual(`polygon`);
      });
    });

    describe(`children`, () => {
      it(`is empty`, () => {
        expect(polygon.children).toEqual([]);
      });
    });

    describe(`render`, () => {
      let rendered: { readonly [attribute: string]: Value };
      beforeAll(() => {
        rendered = polygon.render(`Test State`);
      });

      it(`calls the render callback once`, () => {
        expect(renderCallback).toHaveBeenCalledTimes(1);
      });

      it(`passes the state to the render callback`, () => {
        expect(renderCallback).toHaveBeenCalledWith(`Test State`);
      });

      it(`returns an attribute set containing all correct types`, () => {
        expect(rendered).toEqual({
          transform: jasmine.any(TransformSet),
          points: jasmine.any(PointSet),
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

      it(`returns an attribute set including the appropriate points value`, () => {
        expect(rendered.points.render()).toEqual(`24 -19 11 33 -17 -13`);
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
