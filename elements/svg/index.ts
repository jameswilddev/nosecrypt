import {
  Element,
  Color,
  ValidateNotEmpty,
  ViewBox,
  Value,
  Size,
  StrokeColor,
  Opacity,
  FillColor,
} from "../..";

export default class Svg<TState> implements Element<TState> {
  readonly tagName: string = `svg`;

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly strokeWidth?: number;
      readonly strokeColor?: Color;
      readonly strokeOpacity?: number;
      readonly fillColor?: Color;
      readonly fillOpacity?: number;
      readonly viewBox: ViewBox;
    },
    public readonly children: ReadonlyArray<Element<TState>>
  ) {
    ValidateNotEmpty(children, `Svg.children`);
  }

  render(state: TState): { readonly [attribute: string]: Value } {
    const intermediate = this.renderCallback(state);

    return {
      "stroke-width": new Size(intermediate.strokeWidth),
      "stroke-color": new StrokeColor(intermediate.strokeColor),
      "stroke-opacity": new Opacity(intermediate.strokeOpacity),
      "fill-color": new FillColor(intermediate.fillColor),
      "fill-opacity": new Opacity(intermediate.fillOpacity),
      viewBox: intermediate.viewBox,
    };
  }
}
