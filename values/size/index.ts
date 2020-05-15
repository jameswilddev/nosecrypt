import ValidateNonNegative from "../../validation/validate-non-negative";
import Value from "../value";

export default class Size implements Value {
  constructor(private readonly value: number) {
    ValidateNonNegative(value, `Size.value`);
  }

  render(): string {
    return `${this.value}`;
  }
}
