import ValidateUnitInterval from "../../validation/validate-unit-interval";
import Value from "../value";

export default class Opacity implements Value {
  static readonly transparent = new Opacity(0);
  static readonly opaque = new Opacity(1);

  constructor(private readonly value: number) {
    ValidateUnitInterval(value, `Opacity.value`);
  }

  render(): string {
    return `${this.value}`;
  }
}
