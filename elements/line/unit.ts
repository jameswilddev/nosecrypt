import {
  Line,
  Rotate,
  Scale,
  Translate,
  Value,
  Size,
  Position,
  Color,
  Opacity,
  TransformSet,
  StrokeColor,
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Line`, () => {
    let renderCallback: jasmine.Spy;
    let line: Line<TestState>;
    beforeAll(() => {
      renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
        transforms: [new Scale(23, -18), new Translate(-4, 7), new Rotate(90)],
        x1: 122,
        x2: -47,
        y1: -80,
        y2: 21,
        strokeWidth: 2,
        strokeColor: new Color(0.2, 0.9, 0.45),
        strokeOpacity: 0.4,
      });
      line = new Line<TestState>(renderCallback);
    });

    describe(`tagName`, () => {
      it(`is line`, () => {
        expect(line.tagName).toEqual(`line`);
      });
    });

    describe(`children`, () => {
      it(`is empty`, () => {
        expect(line.children).toEqual([]);
      });
    });

    describe(`render`, () => {
      let rendered: { readonly [attribute: string]: Value };
      beforeAll(() => {
        rendered = line.render(`Test State`);
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
          x1: jasmine.any(Position),
          x2: jasmine.any(Position),
          y1: jasmine.any(Position),
          y2: jasmine.any(Position),
          "stroke-width": jasmine.any(Size),
          "stroke-color": jasmine.any(StrokeColor),
          "stroke-opacity": jasmine.any(Opacity),
        });
      });

      it(`returns an attribute set including the appropriate transform value`, () => {
        expect(rendered.transform.render()).toEqual(
          `scale(23,-18) translate(-4 7) rotate(90)`
        );
      });

      it(`returns an attribute set including the appropriate x1 value`, () => {
        expect(rendered.x1.render()).toEqual(`122`);
      });

      it(`returns an attribute set including the appropriate x2 value`, () => {
        expect(rendered.x2.render()).toEqual(`-47`);
      });

      it(`returns an attribute set including the appropriate y1 value`, () => {
        expect(rendered.y1.render()).toEqual(`-80`);
      });

      it(`returns an attribute set including the appropriate y2 value`, () => {
        expect(rendered.y2.render()).toEqual(`21`);
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
    });
  });
});
