import { PointSet } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`PointSet`, () => {
    Helpers.throws(
      `when undefined`,
      () => new PointSet(undefined),
      `PointSet.points must be given`
    );

    Helpers.throws(
      `when empty`,
      () => new PointSet([]),
      `PointSet.points must contain at least two items`
    );

    Helpers.throws(
      `with one point`,
      () => new PointSet([[24.3, -18.7]]),
      `PointSet.points must contain at least two items`
    );

    Helpers.renders(
      `with two points`,
      () =>
        new PointSet([
          [24.3, -18.7],
          [10.8, 33.1],
        ]),
      `24 -19 11 33`
    );

    Helpers.renders(
      `with three commands`,
      () =>
        new PointSet([
          [24.3, -18.7],
          [10.8, 33.1],
          [-17.2, -12.6],
        ]),
      `24 -19 11 33 -17 -13`
    );
  });
});
