import {
  EllipticArcAbsolute,
  MoveToRelative,
  VerticalLineToAbsolute,
  Path,
  Rotate,
  Scale,
  Translate,
  Value,
  Size,
  Color,
  Opacity,
  CommandSet,
  TransformSet,
  StrokeColor,
  FillColor,
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Path`, () => {
    let strokeColor: Color;
    let fillColor: Color;
    let renderCallback: jasmine.Spy;
    let path: Path<TestState>;
    beforeAll(() => {
      strokeColor = new Color(0.2, 0.9, 0.45);
      fillColor = new Color(0.5, 0.4, 0.7);
      renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
        transforms: [new Scale(23, -18), new Translate(-4, 7), new Rotate(90)],
        commands: [
          new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40),
          new MoveToRelative(-37, 43),
          new VerticalLineToAbsolute(67),
        ],
        strokeWidth: 2,
        strokeColor,
        strokeOpacity: 0.4,
        fillColor,
        fillOpacity: 0.8,
      });
      path = new Path<TestState>(renderCallback);
    });

    describe(`tagName`, () => {
      it(`is path`, () => {
        expect(path.tagName).toEqual(`path`);
      });
    });

    describe(`children`, () => {
      it(`is empty`, () => {
        expect(path.children).toEqual([]);
      });
    });

    describe(`render`, () => {
      let rendered: { readonly [attribute: string]: Value };
      beforeAll(() => {
        rendered = path.render(`Test State`);
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
          d: jasmine.any(CommandSet),
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

      it(`returns an attribute set including the appropriate d value`, () => {
        expect(rendered.d.render()).toEqual(`A24 -18 37 1 0 -10 -40m-37 43V67`);
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
