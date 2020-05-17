import ValidateOptionalNonNegative from "../../validation/validate-optional-non-negative";
import Value from "../value";

export default class Size implements Value {
  constructor(private readonly value: undefined | number) {
    ValidateOptionalNonNegative(value, `Size.value`);
  }

  render(): string {
    if (this.value === undefined) {
      return `0`;
    }

    return `${this.value}`;
  }
}
