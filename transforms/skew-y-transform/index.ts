import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class SkewYTransform implements Transform {
  constructor(private readonly a: number) {
    ValidateAnyNumber(a, `SkewYTransform.a`);
  }

  render(): string {
    return `skewY(${this.a})`;
  }
}
