import Element from "../element";
import Color from "../../values/color";
import Opacity from "../../values/opacity";
import Position from "../../values/position";
import Size from "../../values/size";
import Value from "../../values/value";

export default class Circle<TState> implements Element<TState> {
  readonly tagName: string = `circle`;

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
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
    const output: { [attribute: string]: Value } = {};

    const intermediate = this.renderCallback(state);

    if (intermediate.centerX !== undefined) {
      output.centerX = new Position(intermediate.centerX);
    }

    if (intermediate.centerY !== undefined) {
      output.centerY = new Position(intermediate.centerY);
    }

    if (intermediate.radius !== undefined) {
      output.radius = new Size(intermediate.radius);
    }

    if (intermediate.strokeWidth !== undefined) {
      output.strokeWidth = new Size(intermediate.strokeWidth);
    }

    if (intermediate.strokeColor !== undefined) {
      output.strokeColor = intermediate.strokeColor;
    }

    if (intermediate.strokeOpacity !== undefined) {
      output.strokeOpacity = new Opacity(intermediate.strokeOpacity);
    }

    if (intermediate.fillColor !== undefined) {
      output.fillColor = intermediate.fillColor;
    }

    if (intermediate.fillOpacity !== undefined) {
      output.fillOpacity = new Opacity(intermediate.fillOpacity);
    }

    return output;
  }
}
