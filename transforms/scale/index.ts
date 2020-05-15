import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";
import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";

export default class Scale implements Transform {
  constructor(xy: number);
  constructor(x: number, y: number);
  constructor(private readonly x: number, private readonly y?: number) {
    if (y === undefined) {
      ValidateAnyNumber(x, `Scale.xy`);
    } else {
      ValidateAnyNumber(x, `Scale.x`);
      ValidateAnyOptionalNumber(y, `Scale.y`);
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
