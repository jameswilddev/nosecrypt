import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";
import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";

export default class Rotate implements Transform {
  constructor(degrees: number);
  constructor(degrees: number, x: number, y: number);
  constructor(
    private readonly degrees: number,
    private readonly x?: number,
    private readonly y?: number
  ) {
    ValidateAnyNumber(degrees, `Rotate.degrees`);
    ValidateAnyOptionalNumber(x, `Rotate.x`);
    ValidateAnyOptionalNumber(y, `Rotate.y`);
  }

  render(): string {
    if (this.x === undefined) {
      return `rotate(${this.degrees})`;
    } else {
      return `rotate(${this.degrees} ${this.x} ${this.y})`;
    }
  }
}
