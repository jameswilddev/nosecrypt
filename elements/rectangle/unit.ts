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
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Rectangle`, () => {
    describe(`empty`, () => {
      let renderCallback: jasmine.Spy;
      let rectangle: Rectangle<TestState>;
      beforeAll(() => {
        renderCallback = jasmine
          .createSpy(`renderCallback`)
          .and.returnValue({});
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

        it(`returns an empty attribute set`, () => {
          expect(rendered).toEqual({});
        });
      });
    });

    describe(`transforms`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ transforms: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`empty`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ transforms: [] });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
            transforms: [
              new Scale(23, -18),
              new Translate(-4, 7),
              new Rotate(90),
            ],
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

          it(`returns an attribute set containing a transform transform set`, () => {
            expect(rendered).toEqual({ transform: jasmine.any(TransformSet) });
          });

          it(`returns an attribute set including the appropriate transform value`, () => {
            expect(rendered.transform.render()).toEqual(
              `scale(23,-18) translate(-4 7) rotate(90)`
            );
          });
        });
      });
    });

    describe(`leftX`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ leftX: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ leftX: 0 });
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

          it(`returns an attribute set containing a x position`, () => {
            expect(rendered).toEqual({ x: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate x value`, () => {
            expect(rendered.x.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ leftX: 3287 });
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

          it(`returns an attribute set containing a x position`, () => {
            expect(rendered).toEqual({ x: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate x value`, () => {
            expect(rendered.x.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`topY`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ topY: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ topY: 0 });
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

          it(`returns an attribute set containing a y position`, () => {
            expect(rendered).toEqual({ y: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate y value`, () => {
            expect(rendered.y.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ topY: 3287 });
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

          it(`returns an attribute set containing a y position`, () => {
            expect(rendered).toEqual({ y: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate y value`, () => {
            expect(rendered.y.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`width`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ width: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ width: 0 });
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

          it(`returns an attribute set containing a width size`, () => {
            expect(rendered).toEqual({ width: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate width value`, () => {
            expect(rendered.width.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ width: 3287 });
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

          it(`returns an attribute set containing a width size`, () => {
            expect(rendered).toEqual({ width: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate width value`, () => {
            expect(rendered.width.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`height`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ height: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ height: 0 });
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

          it(`returns an attribute set containing a height size`, () => {
            expect(rendered).toEqual({ height: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate height value`, () => {
            expect(rendered.height.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ height: 3287 });
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

          it(`returns an attribute set containing a height size`, () => {
            expect(rendered).toEqual({ height: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate height value`, () => {
            expect(rendered.height.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`strokeWidth`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 0 });
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

          it(`returns an attribute set containing a stroke-width size`, () => {
            expect(rendered).toEqual({ "stroke-width": jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate stroke-width value`, () => {
            expect(rendered[`stroke-width`].render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 3287 });
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

          it(`returns an attribute set containing a stroke-width size`, () => {
            expect(rendered).toEqual({ "stroke-width": jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate stroke-width value`, () => {
            expect(rendered[`stroke-width`].render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`strokeColor`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let strokeColor: Color;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          strokeColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor });
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

          it(`returns an attribute set including the appropriate stroke-color value`, () => {
            expect(rendered[`stroke-color`]).toBe(strokeColor);
          });
        });
      });
    });

    describe(`strokeOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0 });
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

          it(`returns an attribute set containing a stroke-opacity opacity`, () => {
            expect(rendered).toEqual({
              "stroke-opacity": jasmine.any(Opacity),
            });
          });

          it(`returns an attribute set including the appropriate stroke-opacity value`, () => {
            expect(rendered[`stroke-opacity`].render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0.4 });
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

          it(`returns an attribute set containing a stroke-opacity opacity`, () => {
            expect(rendered).toEqual({
              "stroke-opacity": jasmine.any(Opacity),
            });
          });

          it(`returns an attribute set including the appropriate stroke-opacity value`, () => {
            expect(rendered[`stroke-opacity`].render()).toEqual(`0.4`);
          });
        });
      });
    });

    describe(`fillColor`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let fillColor: Color;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          fillColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor });
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

          it(`returns an attribute set including the appropriate fill-color value`, () => {
            expect(rendered[`fill-color`]).toBe(fillColor);
          });
        });
      });
    });

    describe(`fillOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0 });
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

          it(`returns an attribute set containing a fill-opacity opacity`, () => {
            expect(rendered).toEqual({ "fill-opacity": jasmine.any(Opacity) });
          });

          it(`returns an attribute set including the appropriate fill-opacity value`, () => {
            expect(rendered[`fill-opacity`].render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let rectangle: Rectangle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0.4 });
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

          it(`returns an attribute set containing a fill-opacity opacity`, () => {
            expect(rendered).toEqual({ "fill-opacity": jasmine.any(Opacity) });
          });

          it(`returns an attribute set including the appropriate fill-opacity value`, () => {
            expect(rendered[`fill-opacity`].render()).toEqual(`0.4`);
          });
        });
      });
    });

    describe(`all defined`, () => {
      let strokeColor: Color;
      let fillColor: Color;
      let renderCallback: jasmine.Spy;
      let rectangle: Rectangle<TestState>;
      beforeAll(() => {
        strokeColor = new Color(0.2, 0.9, 0.45);
        fillColor = new Color(0.5, 0.4, 0.7);
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          transforms: [
            new Scale(23, -18),
            new Translate(-4, 7),
            new Rotate(90),
          ],
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
            "stroke-color": jasmine.any(Color),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(Color),
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
          expect(rendered[`stroke-color`]).toBe(strokeColor);
        });

        it(`returns an attribute set including the appropriate stroke-opacity value`, () => {
          expect(rendered[`stroke-opacity`].render()).toEqual(`0.4`);
        });

        it(`returns an attribute set including the appropriate fill-color value`, () => {
          expect(rendered[`fill-color`]).toBe(fillColor);
        });

        it(`returns an attribute set including the appropriate fill-opacity value`, () => {
          expect(rendered[`fill-opacity`].render()).toEqual(`0.8`);
        });
      });
    });
  });
});
