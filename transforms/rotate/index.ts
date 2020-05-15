import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";
import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";

export default class Rotate implements Transform {
  constructor(angle: number);
  constructor(angle: number, x: number, y: number);
  constructor(
    private readonly angle: number,
    private readonly x?: number,
    private readonly y?: number
  ) {
    ValidateAnyNumber(angle, `Rotate.angle`);
    ValidateAnyOptionalNumber(x, `Rotate.x`);
    ValidateAnyOptionalNumber(y, `Rotate.y`);
  }

  render(): string {
    if (this.x === undefined) {
      return `rotate(${this.angle})`;
    } else {
      return `rotate(${this.angle},${this.x},${this.y})`;
    }
  }
}
