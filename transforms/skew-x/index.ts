import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class SkewX implements Transform {
  constructor(private readonly a: number) {
    ValidateAnyNumber(a, `SkewX.a`);
  }

  render(): string {
    return `skewX(${this.a})`;
  }
}
