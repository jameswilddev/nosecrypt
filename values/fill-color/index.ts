import Color from "../../color";
import Value from "../value";

export default class FillColor implements Value {
  constructor(private readonly color: Color) {}

  render(): string {
    return this.color.render();
  }
}
