import Transform from "../../transforms/transform";
import ValidateNotEmpty from "../../validation/validate-not-empty";
import Value from "../value";

export default class TransformSet implements Value {
  private readonly transforms: ReadonlyArray<Transform>;

  constructor(...transforms: ReadonlyArray<Transform>) {
    ValidateNotEmpty(transforms, `TransformSet.transforms`);

    this.transforms = transforms;
  }

  render(): string {
    return this.transforms.map((transform) => transform.render()).join(` `);
  }
}
