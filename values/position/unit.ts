import { Position } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`Position`, () => {
    Helpers.renders(`when zero`, () => new Position(0), `0`);

    Helpers.renders(
      `when negative`,
      () => new Position(-3123.542),
      `-3123.542`
    );

    Helpers.renders(`when positive`, () => new Position(3123.542), `3123.542`);

    Helpers.throws(
      `when NaN`,
      () => new Position(Number.NaN),
      `Position.value must be a number`
    );

    Helpers.throws(
      `when positive infinity`,
      () => new Position(Number.POSITIVE_INFINITY),
      `Position.value must be finite`
    );

    Helpers.throws(
      `when negative infinity`,
      () => new Position(Number.NEGATIVE_INFINITY),
      `Position.value must be finite`
    );
  });
});
