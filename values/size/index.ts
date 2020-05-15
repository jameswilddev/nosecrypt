import ValidateNonNegative from "../../validation/validate-non-negative";
import Value from "../value";

export default class Size implements Value {
  static readonly zero = new Size(0);
  static readonly one = new Size(1);

  constructor(private readonly value: number) {
    ValidateNonNegative(value, `Size.value`);
  }

  render(): string {
    return `${this.value}px`;
  }
}
