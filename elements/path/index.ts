import Command from "../../commands/command";
import Element from "../element";
import Color from "../../values/color";
import CommandSet from "../../values/command-set";
import Opacity from "../../values/opacity";
import Size from "../../values/size";
import Value from "../../values/value";

export default class Path<TState> implements Element<TState> {
  readonly tagName: string = `path`;

  readonly children: ReadonlyArray<Element<TState>> = [];

  constructor(
    private readonly renderCallback: (
      state: TState
    ) => {
      readonly d?: ReadonlyArray<Command>;
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

    if (intermediate.d !== undefined && intermediate.d.length !== 0) {
      output.d = new CommandSet(intermediate.d);
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
