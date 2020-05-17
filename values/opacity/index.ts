import ValidateOptionalUnitInterval from "../../validation/validate-optional-unit-interval";
import Value from "../value";

export default class Opacity implements Value {
  constructor(private readonly value: undefined | number) {
    ValidateOptionalUnitInterval(value, `Opacity.value`);
  }

  render(): string {
    if (this.value === undefined) {
      return `1`;
    }

    return `${this.value}`;
  }
}
