import { Circle, Value, Position, Size, Color, Opacity } from "../..";

type TestState = `Test State`;

describe(`elements`, () => {
  describe(`Circle`, () => {
    describe(`empty`, () => {
      let renderCallback: jasmine.Spy;
      let circle: Circle<TestState>;
      beforeAll(() => {
        renderCallback = jasmine
          .createSpy(`renderCallback`)
          .and.returnValue({});
        circle = new Circle<TestState>(renderCallback);
      });

      describe(`tagName`, () => {
        it(`is circle`, () => {
          expect(circle.tagName).toEqual(`circle`);
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

        it(`returns an empty attribute set`, () => {
          expect(rendered).toEqual({});
        });
      });
    });

    describe(`centerX`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerX: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerX: 3287 });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an attribute set containing a centerX position`, () => {
            expect(rendered).toEqual({ centerX: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate centerX value`, () => {
            expect(rendered.centerX.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`centerY`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerY: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerY: 3287 });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an attribute set containing a centerY position`, () => {
            expect(rendered).toEqual({ centerY: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate centerY value`, () => {
            expect(rendered.centerY.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`radius`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radius: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radius: 3287 });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an attribute set containing a radius size`, () => {
            expect(rendered).toEqual({ radius: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate radius value`, () => {
            expect(rendered.radius.render()).toEqual(`3287`);
          });
        });
      });
    });

    describe(`strokeWidth`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 3287 });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let strokeColor: Color;
        let circle: Circle<TestState>;
        beforeAll(() => {
          strokeColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeColor });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an attribute set including the appropriate strokeColor value`, () => {
            expect(rendered.strokeColor).toBe(strokeColor);
          });
        });
      });
    });

    describe(`strokeOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0.4 });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let fillColor: Color;
        let circle: Circle<TestState>;
        beforeAll(() => {
          fillColor = new Color(0.8, 0.2, 0.6);
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillColor });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an attribute set including the appropriate fillColor value`, () => {
            expect(rendered.fillColor).toBe(fillColor);
          });
        });
      });
    });

    describe(`fillOpacity`, () => {
      describe(`undefined`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: undefined });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`given`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0.4 });
          circle = new Circle<TestState>(renderCallback);
        });

        describe(`tagName`, () => {
          it(`is circle`, () => {
            expect(circle.tagName).toEqual(`circle`);
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
      let circle: Circle<TestState>;
      beforeAll(() => {
        strokeColor = new Color(0.2, 0.9, 0.45);
        fillColor = new Color(0.5, 0.4, 0.7);
        renderCallback = jasmine.createSpy(`renderCallback`).and.returnValue({
          centerX: 43,
          centerY: -64,
          radius: 12,
          strokeWidth: 2,
          strokeColor,
          strokeOpacity: 0.4,
          fillColor,
          fillOpacity: 0.8,
        });
        circle = new Circle<TestState>(renderCallback);
      });

      describe(`tagName`, () => {
        it(`is circle`, () => {
          expect(circle.tagName).toEqual(`circle`);
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
            centerX: jasmine.any(Position),
            centerY: jasmine.any(Position),
            radius: jasmine.any(Size),
            strokeWidth: jasmine.any(Size),
            strokeColor: jasmine.any(Color),
            strokeOpacity: jasmine.any(Opacity),
            fillColor: jasmine.any(Color),
            fillOpacity: jasmine.any(Opacity),
          });
        });

        it(`returns an attribute set including the appropriate centerX value`, () => {
          expect(rendered.centerX.render()).toEqual(`43`);
        });

        it(`returns an attribute set including the appropriate centerY value`, () => {
          expect(rendered.centerY.render()).toEqual(`-64`);
        });

        it(`returns an attribute set including the appropriate radius value`, () => {
          expect(rendered.radius.render()).toEqual(`12`);
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
