import {
  Json,
  Element,
  Transform,
  Color,
  ValidateNotEmpty,
  Value,
  TransformSet,
  Size,
  StrokeColor,
  Opacity,
  FillColor,
} from "../..";

export default class Group<TState extends Json> implements Element<TState> {
  readonly tagName: string = `group`;

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly transforms?: ReadonlyArray<Transform>;
      readonly strokeWidth?: number;
      readonly strokeColor?: Color;
      readonly strokeOpacity?: number;
      readonly fillColor?: Color;
      readonly fillOpacity?: number;
    },
    public readonly children: ReadonlyArray<Element<TState>>
  ) {
    ValidateNotEmpty(children, `Group.children`);
  }

  render(state: TState): { readonly [attribute: string]: Value } {
    const intermediate = this.renderCallback(state);

    return {
      transform: new TransformSet(intermediate.transforms),
      "stroke-width": new Size(intermediate.strokeWidth),
      "stroke-color": new StrokeColor(intermediate.strokeColor),
      "stroke-opacity": new Opacity(intermediate.strokeOpacity),
      "fill-color": new FillColor(intermediate.fillColor),
      "fill-opacity": new Opacity(intermediate.fillOpacity),
    };
  }
}
