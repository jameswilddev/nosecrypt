import Color from "../../color";
import Value from "../value";

export default class StrokeColor implements Value {
  constructor(private readonly color: undefined | Color) {}

  render(): string {
    if (this.color === undefined) {
      return `inherit`;
    }

    return this.color.render();
  }
}
