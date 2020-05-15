import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class SkewY implements Transform {
  constructor(private readonly degrees: number) {
    ValidateAnyNumber(degrees, `SkewY.degrees`);
  }

  render(): string {
    return `skewY(${this.degrees})`;
  }
}
