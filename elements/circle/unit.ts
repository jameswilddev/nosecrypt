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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerX: 0 });
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ centerY: 0 });
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

          it(`returns an attribute set containing a cy position`, () => {
            expect(rendered).toEqual({ cy: jasmine.any(Position) });
          });

          it(`returns an attribute set including the appropriate cy value`, () => {
            expect(rendered.cy.render()).toEqual(`3287`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ radius: 0 });
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

          it(`returns an attribute set containing a r size`, () => {
            expect(rendered).toEqual({ r: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate r value`, () => {
            expect(rendered.r.render()).toEqual(`0`);
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

          it(`returns an attribute set containing a r size`, () => {
            expect(rendered).toEqual({ r: jasmine.any(Size) });
          });

          it(`returns an attribute set including the appropriate r value`, () => {
            expect(rendered.r.render()).toEqual(`3287`);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeWidth: 0 });
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

          it(`returns an attribute set including the appropriate stroke-color value`, () => {
            expect(rendered[`stroke-color`]).toBe(strokeColor);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ strokeOpacity: 0 });
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

          it(`returns an attribute set including the appropriate fill-color value`, () => {
            expect(rendered[`fill-color`]).toBe(fillColor);
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

          it(`returns an empty attribute set`, () => {
            expect(rendered).toEqual({});
          });
        });
      });

      describe(`zero`, () => {
        let renderCallback: jasmine.Spy;
        let circle: Circle<TestState>;
        beforeAll(() => {
          renderCallback = jasmine
            .createSpy(`renderCallback`)
            .and.returnValue({ fillOpacity: 0 });
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
            cx: jasmine.any(Position),
            cy: jasmine.any(Position),
            r: jasmine.any(Size),
            "stroke-width": jasmine.any(Size),
            "stroke-color": jasmine.any(Color),
            "stroke-opacity": jasmine.any(Opacity),
            "fill-color": jasmine.any(Color),
            "fill-opacity": jasmine.any(Opacity),
          });
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
