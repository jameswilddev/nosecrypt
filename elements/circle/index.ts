import Element from "../element";
import Transform from "../../transforms/transform";
import Color from "../../color";
import FillColor from "../../values/fill-color";
import StrokeColor from "../../values/stroke-color";
import Opacity from "../../values/opacity";
import Position from "../../values/position";
import Size from "../../values/size";
import TransformSet from "../../values/transform-set";
import Value from "../../values/value";
import Json from "../../json";

export default class Circle<TState extends Json> implements Element<TState> {
  readonly tagName: string = `circle`;

  readonly children: ReadonlyArray<Element<TState>> = [];

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly transforms?: ReadonlyArray<Transform>;
      readonly centerX?: number;
      readonly centerY?: number;
      readonly radius?: number;
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
      r: new Size(intermediate.radius),
      "stroke-width": new Size(intermediate.strokeWidth),
      "stroke-color": new StrokeColor(intermediate.strokeColor),
      "stroke-opacity": new Opacity(intermediate.strokeOpacity),
      "fill-color": new FillColor(intermediate.fillColor),
      "fill-opacity": new Opacity(intermediate.fillOpacity),
    };
  }
}
