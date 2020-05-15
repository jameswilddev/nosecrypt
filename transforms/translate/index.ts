import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";
import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";

export default class Translate implements Transform {
  constructor(x: number);
  constructor(x: number, y: number);
  constructor(private readonly x: number, private readonly y?: number) {
    ValidateAnyNumber(x, `Translate.x`);
    ValidateAnyOptionalNumber(y, `Translate.y`);
  }

  render(): string {
    if (this.y === undefined) {
      return `translate(${this.x})`;
    } else {
      return `translate(${this.x} ${this.y})`;
    }
  }
}
