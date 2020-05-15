import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class Matrix implements Transform {
  constructor(
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
    private readonly d: number,
    private readonly e: number,
    private readonly f: number
  ) {
    ValidateAnyNumber(a, `Matrix.a`);
    ValidateAnyNumber(b, `Matrix.b`);
    ValidateAnyNumber(c, `Matrix.c`);
    ValidateAnyNumber(d, `Matrix.d`);
    ValidateAnyNumber(e, `Matrix.e`);
    ValidateAnyNumber(f, `Matrix.f`);
  }

  render(): string {
    return `matrix(${this.a} ${this.b} ${this.c} ${this.d} ${this.e} ${this.f})`;
  }
}
