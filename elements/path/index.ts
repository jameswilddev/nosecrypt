import Command from "../../commands/command";
import Element from "../element";
import Transform from "../../transforms/transform";
import Color from "../../values/color";
import CommandSet from "../../values/command-set";
import Opacity from "../../values/opacity";
import Size from "../../values/size";
import TransformSet from "../../values/transform-set";
import Value from "../../values/value";

export default class Path<TState> implements Element<TState> {
  readonly tagName: string = `path`;

  readonly children: ReadonlyArray<Element<TState>> = [];

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly transforms?: ReadonlyArray<Transform>;
      readonly commands?: ReadonlyArray<Command>;
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

    if (
      intermediate.commands !== undefined &&
      intermediate.commands.length !== 0
    ) {
      output.d = new CommandSet(intermediate.commands);
    }

    if (intermediate.strokeWidth !== undefined) {
      output[`stroke-width`] = new Size(intermediate.strokeWidth);
    }

    if (intermediate.strokeColor !== undefined) {
      output[`stroke-color`] = intermediate.strokeColor;
    }

    if (intermediate.strokeOpacity !== undefined) {
      output[`stroke-opacity`] = new Opacity(intermediate.strokeOpacity);
    }

    if (intermediate.fillColor !== undefined) {
      output[`fill-color`] = intermediate.fillColor;
    }

    if (intermediate.fillOpacity !== undefined) {
      output[`fill-opacity`] = new Opacity(intermediate.fillOpacity);
    }

    return output;
  }
}
