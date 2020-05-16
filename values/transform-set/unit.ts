import { TransformSet, Scale, Translate, Rotate } from "../..";
import * as Helpers from "../../helpers/unit";
import * as ValueHelpers from "../helpers/unit";

describe(`values`, () => {
  describe(`TransformSet`, () => {
    Helpers.throws(
      `when empty`,
      () => new TransformSet([]),
      `TransformSet.transforms must not be empty`
    );

    ValueHelpers.renders(
      `with one transform`,
      () => new TransformSet([new Scale(23, -18)]),
      `scale(23,-18)`
    );

    ValueHelpers.renders(
      `with two transforms`,
      () => new TransformSet([new Scale(23, -18), new Translate(-4, 7)]),
      `scale(23,-18) translate(-4 7)`
    );

    ValueHelpers.renders(
      `with three transforms`,
      () =>
        new TransformSet([
          new Scale(23, -18),
          new Translate(-4, 7),
          new Rotate(90),
        ]),
      `scale(23,-18) translate(-4 7) rotate(90)`
    );
  });
});
