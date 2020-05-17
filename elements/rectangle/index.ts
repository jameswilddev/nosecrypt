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

export default class Rectangle<TState> implements Element<TState> {
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
    const output: { [attribute: string]: Value } = {};

    const intermediate = this.renderCallback(state);

    if (
      intermediate.transforms !== undefined &&
      intermediate.transforms.length !== 0
    ) {
      output.transform = new TransformSet(intermediate.transforms);
    }

    if (intermediate.leftX !== undefined) {
      output.x = new Position(intermediate.leftX);
    }

    if (intermediate.topY !== undefined) {
      output.y = new Position(intermediate.topY);
    }

    if (intermediate.width !== undefined) {
      output.width = new Size(intermediate.width);
    }

    if (intermediate.height !== undefined) {
      output.height = new Size(intermediate.height);
    }

    if (intermediate.strokeWidth !== undefined) {
      output[`stroke-width`] = new Size(intermediate.strokeWidth);
    }

    if (intermediate.strokeColor !== undefined) {
      output[`stroke-color`] = new StrokeColor(intermediate.strokeColor);
    }

    if (intermediate.strokeOpacity !== undefined) {
      output[`stroke-opacity`] = new Opacity(intermediate.strokeOpacity);
    }

    if (intermediate.fillColor !== undefined) {
      output[`fill-color`] = new FillColor(intermediate.fillColor);
    }

    if (intermediate.fillOpacity !== undefined) {
      output[`fill-opacity`] = new Opacity(intermediate.fillOpacity);
    }

    return output;
  }
}
