import {
  Svg,
  Value,
  Size,
  Color,
  Opacity,
  FillColor,
  StrokeColor,
  Rectangle,
  Circle,
  Ellipse,
  ViewBox,
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Svg`, () => {
    describe(`without children`, () => {
      let renderCallback: jasmine.Spy;
      let thrown: Error;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
          viewBox: new ViewBox(24, 47, 32, 11),
        });

        try {
          new Svg<TestState>(renderCallback, []);
        } catch (e) {
          thrown = e;
        }
      });

      it(`throws the expected error`, () => {
        expect(thrown).toEqual(new Error(`Svg.children must not be empty`));
      });

      it(`does not call the render callback`, () => {
        expect(renderCallback).not.toHaveBeenCalled();
      });
    });

    describe(`with one child`, () => {
      let renderCallback: jasmine.Spy;
      const childA = new Rectangle(() => ({}));
      let svg: Svg<TestState>;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
          viewBox: new ViewBox(24, 47, 32, 11),
        });
        svg = new Svg<TestState>(renderCallback, [childA]);
      });

      describe(`tagName`, () => {
        it(`is svg`, () => {
          expect(svg.tagName).toEqual(`svg`);
        });
      });

      describe(`children`, () => {
        it(`contains the given children`, () => {
          expect(svg.children).toEqual([childA]);
        });
      });

      describe(`render`, () => {
        let rendered: { readonly [attribute: string]: Value };
        beforeAll(() => {
          rendered = svg.render(`Test State`);
        });

        it(`calls the render callback once`, () => {
          expect(renderCallback).toHaveBeenCalledTimes(1);
        });

        it(`passes the state to the render callback`, () => {
          expect(renderCallback).toHaveBeenCalledWith(`Test State`);
        });

        it(`returns an attribute set containing a the correct types`, () => {
          expect(rendered).toEqual({
            "stroke-width": jasmine.any(Size),
            "stroke-color": jasmine.any(StrokeColor),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(FillColor),
            "fill-opacity": jasmine.any(Opacity),
            viewBox: jasmine.any(ViewBox),
          });
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

        it(`returns an attribute set including the appropriate viewBox value`, () => {
          expect(rendered.viewBox.render()).toEqual(`24 47 32 11`);
        });
      });
    });

    describe(`with two children`, () => {
      let renderCallback: jasmine.Spy;
      const childA = new Rectangle(() => ({}));
      const childB = new Circle(() => ({}));
      let svg: Svg<TestState>;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
          viewBox: new ViewBox(24, 47, 32, 11),
        });
        svg = new Svg<TestState>(renderCallback, [childA, childB]);
      });

      describe(`tagName`, () => {
        it(`is svg`, () => {
          expect(svg.tagName).toEqual(`svg`);
        });
      });

      describe(`children`, () => {
        it(`contains the given children`, () => {
          expect(svg.children).toEqual([childA, childB]);
        });
      });

      describe(`render`, () => {
        let rendered: { readonly [attribute: string]: Value };
        beforeAll(() => {
          rendered = svg.render(`Test State`);
        });

        it(`calls the render callback once`, () => {
          expect(renderCallback).toHaveBeenCalledTimes(1);
        });

        it(`passes the state to the render callback`, () => {
          expect(renderCallback).toHaveBeenCalledWith(`Test State`);
        });

        it(`returns an attribute set containing a the correct types`, () => {
          expect(rendered).toEqual({
            "stroke-width": jasmine.any(Size),
            "stroke-color": jasmine.any(StrokeColor),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(FillColor),
            "fill-opacity": jasmine.any(Opacity),
            viewBox: jasmine.any(ViewBox),
          });
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

        it(`returns an attribute set including the appropriate viewBox value`, () => {
          expect(rendered.viewBox.render()).toEqual(`24 47 32 11`);
        });
      });
    });

    describe(`with three children`, () => {
      let renderCallback: jasmine.Spy;
      const childA = new Rectangle(() => ({}));
      const childB = new Circle(() => ({}));
      const childC = new Ellipse(() => ({}));
      let svg: Svg<TestState>;
      beforeAll(() => {
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          strokeWidth: 2,
          strokeColor: new Color(0.2, 0.9, 0.45),
          strokeOpacity: 0.4,
          fillColor: new Color(0.5, 0.4, 0.7),
          fillOpacity: 0.8,
          viewBox: new ViewBox(24, 47, 32, 11),
        });
        svg = new Svg<TestState>(renderCallback, [childA, childB, childC]);
      });

      describe(`tagName`, () => {
        it(`is svg`, () => {
          expect(svg.tagName).toEqual(`svg`);
        });
      });

      describe(`children`, () => {
        it(`contains the given children`, () => {
          expect(svg.children).toEqual([childA, childB, childC]);
        });
      });

      describe(`render`, () => {
        let rendered: { readonly [attribute: string]: Value };
        beforeAll(() => {
          rendered = svg.render(`Test State`);
        });

        it(`calls the render callback once`, () => {
          expect(renderCallback).toHaveBeenCalledTimes(1);
        });

        it(`passes the state to the render callback`, () => {
          expect(renderCallback).toHaveBeenCalledWith(`Test State`);
        });

        it(`returns an attribute set containing a the correct types`, () => {
          expect(rendered).toEqual({
            "stroke-width": jasmine.any(Size),
            "stroke-color": jasmine.any(StrokeColor),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(FillColor),
            "fill-opacity": jasmine.any(Opacity),
            viewBox: jasmine.any(ViewBox),
          });
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

        it(`returns an attribute set including the appropriate viewBox value`, () => {
          expect(rendered.viewBox.render()).toEqual(`24 47 32 11`);
        });
      });
    });
  });
});
