import Transform from "../transform";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class MatrixTransform implements Transform {
  constructor(
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
    private readonly d: number,
    private readonly e: number,
    private readonly f: number
  ) {
    ValidateAnyNumber(a, `MatrixTransform.a`);
    ValidateAnyNumber(b, `MatrixTransform.b`);
    ValidateAnyNumber(c, `MatrixTransform.c`);
    ValidateAnyNumber(d, `MatrixTransform.d`);
    ValidateAnyNumber(e, `MatrixTransform.e`);
    ValidateAnyNumber(f, `MatrixTransform.f`);
  }

  render(): string {
    return `matrix(${this.a} ${this.b} ${this.c} ${this.d} ${this.e} ${this.f})`;
  }
}
