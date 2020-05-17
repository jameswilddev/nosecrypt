import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";
import Value from "../value";

export default class Position implements Value {
  constructor(private readonly value: undefined | number) {
    ValidateAnyOptionalNumber(value, `Position.value`);
  }

  render(): string {
    if (this.value === undefined) {
      return `0`;
    }

    return `${this.value}`;
  }
}
