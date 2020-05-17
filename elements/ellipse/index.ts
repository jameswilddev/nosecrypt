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

export default class Ellipse<TState> implements Element<TState> {
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
    const output: { [attribute: string]: Value } = {};

    const intermediate = this.renderCallback(state);

    if (
      intermediate.transforms !== undefined &&
      intermediate.transforms.length !== 0
    ) {
      output.transform = new TransformSet(intermediate.transforms);
    }

    if (intermediate.centerX !== undefined) {
      output.cx = new Position(intermediate.centerX);
    }

    if (intermediate.centerY !== undefined) {
      output.cy = new Position(intermediate.centerY);
    }

    if (intermediate.radiusX !== undefined) {
      output.rx = new Size(intermediate.radiusX);
    }

    if (intermediate.radiusY !== undefined) {
      output.ry = new Size(intermediate.radiusY);
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
