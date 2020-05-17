import Transform from "../../transforms/transform";
import Value from "../value";

export default class TransformSet implements Value {
  constructor(
    private readonly transforms: undefined | ReadonlyArray<Transform>
  ) {}

  render(): string {
    if (this.transforms === undefined || this.transforms.length === 0) {
      return `none`;
    }

    return this.transforms.map((transform) => transform.render()).join(` `);
  }
}
