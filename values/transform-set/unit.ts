import { TransformSet, Scale, Translate, Rotate } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`TransformSet`, () => {
    Helpers.renders(
      `when undefined`,
      () => new TransformSet(undefined),
      `none`
    );

    Helpers.renders(`when empty`, () => new TransformSet([]), `none`);

    Helpers.renders(
      `with one transform`,
      () => new TransformSet([new Scale(23, -18)]),
      `scale(23,-18)`
    );

    Helpers.renders(
      `with two transforms`,
      () => new TransformSet([new Scale(23, -18), new Translate(-4, 7)]),
      `scale(23,-18) translate(-4 7)`
    );

    Helpers.renders(
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
