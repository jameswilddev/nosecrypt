import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";
import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";

export default class RotateTransform implements Transform {
  constructor(angle: number);
  constructor(angle: number, x: number, y: number);
  constructor(
    private readonly angle: number,
    private readonly x?: number,
    private readonly y?: number
  ) {
    ValidateAnyNumber(angle, `RotateTransform.angle`);
    ValidateAnyOptionalNumber(x, `RotateTransform.x`);
    ValidateAnyOptionalNumber(y, `RotateTransform.y`);
  }

  render(): string {
    if (this.x === undefined) {
      return `rotate(${this.angle})`;
    } else {
      return `rotate(${this.angle},${this.x},${this.y})`;
    }
  }
}
