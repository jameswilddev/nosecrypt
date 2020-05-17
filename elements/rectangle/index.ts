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

export default class Rectangle<TState extends Json> implements Element<TState> {
  readonly tagName: string = `rect`;

  readonly children: ReadonlyArray<Element<TState>> = [];

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly transforms?: ReadonlyArray<Transform>;
      readonly leftX?: number;
      readonly topY?: number;
      readonly width?: number;
      readonly height?: number;
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
      x: new Position(intermediate.leftX),
      y: new Position(intermediate.topY),
      width: new Size(intermediate.width),
      height: new Size(intermediate.height),
      "stroke-width": new Size(intermediate.strokeWidth),
      "stroke-color": new StrokeColor(intermediate.strokeColor),
      "stroke-opacity": new Opacity(intermediate.strokeOpacity),
      "fill-color": new FillColor(intermediate.fillColor),
      "fill-opacity": new Opacity(intermediate.fillOpacity),
    };
  }
}
