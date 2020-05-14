import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class SkewXTransform implements Transform {
  constructor(private readonly a: number) {
    ValidateAnyNumber(a, `SkewXTransform.a`);
  }

  render(): string {
    return `skewX(${this.a})`;
  }
}
