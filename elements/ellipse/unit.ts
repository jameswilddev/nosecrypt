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
    describe(`empty`, () => {
      let renderCallback: jasmine.Spy;
      let ellipse: Ellipse<TestState>;
      beforeAll(() => {
        renderCallback = jasmine
          .createSpy(`renderCallback`)
          .and.returnValue({});
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

        it(`returns an empty attribute set`, () => {
          expect(rendered).toEqual({});
        });
      });
    });

    describe(`transforms`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ transforms: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`empty`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ transforms: [] });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
            transforms: [
              new Scale(23, -18),
              new Translate(-4, 7),
              new Rotate(90),
            ],
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

    describe(`centerX`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerX: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerX: 0 });
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

          it(`returns an attribute set containing a cx position`, () => {
            expect(rendered).toEqual({ cx: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate cx value`, () => {
            expect(rendered.cx.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerX: 3287 });
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

          it(`returns an attribute set containing a cx position`, () => {
            expect(rendered).toEqual({ cx: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate cx value`, () => {
            expect(rendered.cx.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`centerY`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerY: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerY: 0 });
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

          it(`returns an attribute set containing a cy position`, () => {
            expect(rendered).toEqual({ cy: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate cy value`, () => {
            expect(rendered.cy.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerY: 3287 });
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

          it(`returns an attribute set containing a cy position`, () => {
            expect(rendered).toEqual({ cy: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate cy value`, () => {
            expect(rendered.cy.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`radiusX`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radiusX: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radiusX: 0 });
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

          it(`returns an attribute set containing a rx size`, () => {
            expect(rendered).toEqual({ rx: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate rx value`, () => {
            expect(rendered.rx.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radiusX: 3287 });
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

          it(`returns an attribute set containing a rx size`, () => {
            expect(rendered).toEqual({ rx: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate rx value`, () => {
            expect(rendered.rx.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`radiusY`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radiusY: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radiusY: 0 });
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

          it(`returns an attribute set containing a ry size`, () => {
            expect(rendered).toEqual({ ry: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate ry value`, () => {
            expect(rendered.ry.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radiusY: 3287 });
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

          it(`returns an attribute set containing a ry size`, () => {
            expect(rendered).toEqual({ ry: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate ry value`, () => {
            expect(rendered.ry.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`strokeWidth`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 0 });
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
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 3287 });
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
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let strokeColor: Color;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          strokeColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor });
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

          it(`returns an attribute set including the appropriate stroke-color value`, () => {
            expect(rendered[`stroke-color`]).toEqual(jasmine.any(StrokeColor));
          });

          it(`returns an attribute set including the appropriate stroke-color value`, () => {
            expect(rendered[`stroke-color`].render()).toEqual(`#c39`);
          });
        });
      });
    });

    describe(`strokeOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0 });
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
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0.4 });
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
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let fillColor: Color;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          fillColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor });
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

          it(`returns an attribute set including the appropriate fill-color value`, () => {
            expect(rendered[`fill-color`]).toEqual(jasmine.any(FillColor));
          });

          it(`returns an attribute set including the appropriate fill-color value`, () => {
            expect(rendered[`fill-color`].render()).toEqual(`#c39`);
          });
        });
      });
    });

    describe(`fillOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0 });
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
        let ellipse: Ellipse<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0.4 });
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
      let ellipse: Ellipse<TestState>;
      beforeAll(() => {
        strokeColor = new Color(0.2, 0.9, 0.45);
        fillColor = new Color(0.5, 0.4, 0.7);
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          transforms: [
            new Scale(23, -18),
            new Translate(-4, 7),
            new Rotate(90),
          ],
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
});
