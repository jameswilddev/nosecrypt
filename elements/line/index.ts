import Element from "../element";
import Transform from "../../transforms/transform";
import Color from "../../color";
import StrokeColor from "../../values/stroke-color";
import Opacity from "../../values/opacity";
import Size from "../../values/size";
import TransformSet from "../../values/transform-set";
import Value from "../../values/value";
import { Position } from "../..";

export default class Line<TState> implements Element<TState> {
  readonly tagName: string = `line`;

  readonly children: ReadonlyArray<Element<TState>> = [];

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly transforms?: ReadonlyArray<Transform>;
      readonly x1?: number;
      readonly x2?: number;
      readonly y1?: number;
      readonly y2?: number;
      readonly strokeWidth?: number;
      readonly strokeColor?: Color;
      readonly strokeOpacity?: number;
    }
  ) {}

  render(state: TState): { readonly [attribute: string]: Value } {
    const intermediate = this.renderCallback(state);

    return {
      transform: new TransformSet(intermediate.transforms),
      x1: new Position(intermediate.x1),
      x2: new Position(intermediate.x2),
      y1: new Position(intermediate.y1),
      y2: new Position(intermediate.y2),
      "stroke-width": new Size(intermediate.strokeWidth),
      "stroke-color": new StrokeColor(intermediate.strokeColor),
      "stroke-opacity": new Opacity(intermediate.strokeOpacity),
    };
  }
}
