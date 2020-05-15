import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class SkewX implements Transform {
  constructor(private readonly degrees: number) {
    ValidateAnyNumber(degrees, `SkewX.degrees`);
  }

  render(): string {
    return `skewX(${this.degrees})`;
  }
}
