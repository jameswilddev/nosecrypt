import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";
import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";

export default class ScaleTransform implements Transform {
  constructor(xy: number);
  constructor(x: number, y: number);
  constructor(private readonly x: number, private readonly y?: number) {
    if (y === undefined) {
      ValidateAnyNumber(x, `ScaleTransform.xy`);
    } else {
      ValidateAnyNumber(x, `ScaleTransform.x`);
      ValidateAnyOptionalNumber(y, `ScaleTransform.y`);
    }
  }

  render(): string {
    if (this.y === undefined) {
      return `scale(${this.x})`;
    } else {
      return `scale(${this.x},${this.y})`;
    }
  }
}
