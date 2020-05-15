import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class SkewY implements Transform {
  constructor(private readonly a: number) {
    ValidateAnyNumber(a, `SkewY.a`);
  }

  render(): string {
    return `skewY(${this.a})`;
  }
}
