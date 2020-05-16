import Transform from "../../transforms/transform";
import ValidateNotEmpty from "../../validation/validate-not-empty";
import Value from "../value";

export default class TransformSet implements Value {
  constructor(private readonly transforms: ReadonlyArray<Transform>) {
    ValidateNotEmpty(transforms, `TransformSet.transforms`);
  }

  render(): string {
    return this.transforms.map((transform) => transform.render()).join(` `);
  }
}
