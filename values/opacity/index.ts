import ValidateUnitInterval from "../../validation/validate-unit-interval";
import Value from "../value";

export default class Opacity implements Value {
  constructor(private readonly value: number) {
    ValidateUnitInterval(value, `Opacity.value`);
  }

  render(): string {
    return `${this.value}`;
  }
}
