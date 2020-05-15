import ValidateAnyNumber from "../../validation/validate-any-number";
import Value from "../value";

export default class Position implements Value {
  constructor(private readonly value: number) {
    ValidateAnyNumber(value, `Position.value`);
  }

  render(): string {
    return `${this.value}`;
  }
}
