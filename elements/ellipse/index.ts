import {
  Json,
  Element,
  Transform,
  Color,
  Value,
  TransformSet,
  Position,
  Size,
  StrokeColor,
  Opacity,
  FillColor,
} from "../..";

export default class Ellipse<TState extends Json> implements Element<TState> {
  readonly tagName: string = `ellipse`;

  readonly children: ReadonlyArray<Element<TState>> = [];

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly transforms?: ReadonlyArray<Transform>;
      readonly centerX?: number;
      readonly centerY?: number;
      readonly radiusX?: number;
      readonly radiusY?: number;
      readonly strokeWidth?: number;
      readonly strokeColor?: Color;
      readonly strokeOpacity?: number;
      readonly fillColor?: Color;
      readonly fillOpacity?: number;
    }
  ) {}

  render(state: TState): { readonly [attribute: string]: Value } {
    const intermediate = this.renderCallback(state);

    return {
      transform: new TransformSet(intermediate.transforms),
      cx: new Position(intermediate.centerX),
      cy: new Position(intermediate.centerY),
      rx: new Size(intermediate.radiusX),
      ry: new Size(intermediate.radiusY),
      "stroke-width": new Size(intermediate.strokeWidth),
      "stroke-color": new StrokeColor(intermediate.strokeColor),
      "stroke-opacity": new Opacity(intermediate.strokeOpacity),
      "fill-color": new FillColor(intermediate.fillColor),
      "fill-opacity": new Opacity(intermediate.fillOpacity),
    };
  }
}
