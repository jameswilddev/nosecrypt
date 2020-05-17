import { Opacity } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`Opacity`, () => {
    Helpers.renders(`when undefined`, () => new Opacity(undefined), `1`);

    Helpers.renders(`when within bounds`, () => new Opacity(0.35), `0.35`);

    Helpers.renders(`when at the lower bound`, () => new Opacity(0), `0`);

    Helpers.renders(`when at the upper bound`, () => new Opacity(1), `1`);

    Helpers.throws(
      `when NaN`,
      () => new Opacity(Number.NaN),
      `Opacity.value must be a number when given`
    );

    Helpers.throws(
      `when positive infinity`,
      () => new Opacity(Number.POSITIVE_INFINITY),
      `Opacity.value must be finite when given`
    );

    Helpers.throws(
      `when negative infinity`,
      () => new Opacity(Number.NEGATIVE_INFINITY),
      `Opacity.value must be finite when given`
    );

    Helpers.throws(
      `when beyond the lower bound`,
      () => new Opacity(-0.01),
      `Opacity.value must be greater than or equal to zero when given`
    );

    Helpers.throws(
      `when beyond the upper bound`,
      () => new Opacity(1.01),
      `Opacity.value must be less than or equal to one when given`
    );
  });
});
