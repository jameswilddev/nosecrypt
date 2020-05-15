import ValidateUnitInterval from "../../validation/validate-unit-interval";
import Value from "../value";

export default class Color implements Value {
  static readonly black = new Color(0, 0, 0);
  static readonly grey50 = new Color(0.5, 0.5, 0.5);
  static readonly white = new Color(1, 1, 1);

  constructor(
    private readonly red: number,
    private readonly green: number,
    private readonly blue: number
  ) {
    ValidateUnitInterval(red, `Color.red`);
    ValidateUnitInterval(green, `Color.green`);
    ValidateUnitInterval(blue, `Color.blue`);
  }

  private renderChannel(value: number): string {
    return Math.floor(value * 15.9999999).toString(16);
  }

  render(): string {
    const red = this.renderChannel(this.red);
    const green = this.renderChannel(this.green);
    const blue = this.renderChannel(this.blue);
    return `#${red}${green}${blue}`;
  }
}
