import {
  EllipticArcAbsolute,
  MoveToRelative,
  VerticalLineToAbsolute,
  Path,
  Value,
  Size,
  Color,
  Opacity,
  CommandSet,
} from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Path`, () => {
    describe(`empty`, () => {
      let renderCallback: jasmine.Spy;
      let path: Path<TestState>;
      beforeAll(() => {
        renderCallback = jasmine
          .createSpy(`renderCallback`)
          .and.returnValue({});
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

        it(`returns an empty attribute set`, () => {
          expect(rendered).toEqual({});
        });
      });
    });

    describe(`d`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ d: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`empty`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ d: [] });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
            d: [
              new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40),
              new MoveToRelative(-37, 43),
              new VerticalLineToAbsolute(67),
            ],
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

          it(`returns an attribute set containing a d command set`, () => {
            expect(rendered).toEqual({ d: jasmine.any(CommandSet) });
          });

          it(`returns an attribute set including the appropriate d value`, () => {
            expect(rendered.d.render()).toEqual(
              `A24 -18 37 1 0 -10 -40m-37 43V67`
            );
          });
        });
      });
    });

    describe(`strokeWidth`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 0 });
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

          it(`returns an attribute set containing a strokeWidth size`, () => {
            expect(rendered).toEqual({ strokeWidth: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate strokeWidth value`, () => {
            expect(rendered.strokeWidth.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 3287 });
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

          it(`returns an attribute set containing a strokeWidth size`, () => {
            expect(rendered).toEqual({ strokeWidth: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate strokeWidth value`, () => {
            expect(rendered.strokeWidth.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`strokeColor`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let strokeColor: Color;
        let path: Path<TestState>;
        beforeAll(() => {
          strokeColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor });
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

          it(`returns an attribute set including the appropriate strokeColor value`, () => {
            expect(rendered.strokeColor).toBe(strokeColor);
          });
        });
      });
    });

    describe(`strokeOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0 });
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

          it(`returns an attribute set containing a strokeOpacity opacity`, () => {
            expect(rendered).toEqual({ strokeOpacity: jasmine.any(Opacity) });
          });

          it(`returns an attribute set including the appropriate strokeOpacity value`, () => {
            expect(rendered.strokeOpacity.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0.4 });
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

          it(`returns an attribute set containing a strokeOpacity opacity`, () => {
            expect(rendered).toEqual({ strokeOpacity: jasmine.any(Opacity) });
          });

          it(`returns an attribute set including the appropriate strokeOpacity value`, () => {
            expect(rendered.strokeOpacity.render()).toEqual(`0.4`);
          });
        });
      });
    });

    describe(`fillColor`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let fillColor: Color;
        let path: Path<TestState>;
        beforeAll(() => {
          fillColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor });
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

          it(`returns an attribute set including the appropriate fillColor value`, () => {
            expect(rendered.fillColor).toBe(fillColor);
          });
        });
      });
    });

    describe(`fillOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: undefined });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0 });
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

          it(`returns an attribute set containing a fillOpacity opacity`, () => {
            expect(rendered).toEqual({ fillOpacity: jasmine.any(Opacity) });
          });

          it(`returns an attribute set including the appropriate fillOpacity value`, () => {
            expect(rendered.fillOpacity.render()).toEqual(`0`);
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let path: Path<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0.4 });
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

          it(`returns an attribute set containing a fillOpacity opacity`, () => {
            expect(rendered).toEqual({ fillOpacity: jasmine.any(Opacity) });
          });

          it(`returns an attribute set including the appropriate fillOpacity value`, () => {
            expect(rendered.fillOpacity.render()).toEqual(`0.4`);
          });
        });
      });
    });

    describe(`all defined`, () => {
      let strokeColor: Color;
      let fillColor: Color;
      let renderCallback: jasmine.Spy;
      let path: Path<TestState>;
      beforeAll(() => {
        strokeColor = new Color(0.2, 0.9, 0.45);
        fillColor = new Color(0.5, 0.4, 0.7);
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          d: [
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
            d: jasmine.any(CommandSet),
            strokeWidth: jasmine.any(Size),
            strokeColor: jasmine.any(Color),
            strokeOpacity: jasmine.any(Opacity),
            fillColor: jasmine.any(Color),
            fillOpacity: jasmine.any(Opacity),
          });
        });

        it(`returns an attribute set including the appropriate d value`, () => {
          expect(rendered.d.render()).toEqual(
            `A24 -18 37 1 0 -10 -40m-37 43V67`
          );
        });

        it(`returns an attribute set including the appropriate strokeWidth value`, () => {
          expect(rendered.strokeWidth.render()).toEqual(`2`);
        });

        it(`returns an attribute set including the appropriate strokeColor value`, () => {
          expect(rendered.strokeColor).toBe(strokeColor);
        });

        it(`returns an attribute set including the appropriate strokeOpacity value`, () => {
          expect(rendered.strokeOpacity.render()).toEqual(`0.4`);
        });

        it(`returns an attribute set including the appropriate fillColor value`, () => {
          expect(rendered.fillColor).toBe(fillColor);
        });

        it(`returns an attribute set including the appropriate fillOpacity value`, () => {
          expect(rendered.fillOpacity.render()).toEqual(`0.8`);
        });
      });
    });
  });
});
