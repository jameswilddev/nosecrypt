import { Size } from "../..";
import * as Helpers from "../../helpers/unit";
import * as ValueHelpers from "../helpers/unit";

describe(`values`, () => {
  describe(`Size`, () => {
    ValueHelpers.renders(`when zero`, () => new Size(0), `0`);

    ValueHelpers.renders(`when positive`, () => new Size(3123.542), `3123.542`);

    Helpers.throws(
      `when NaN`,
      () => new Size(Number.NaN),
      `Size.value must be a number`
    );

    Helpers.throws(
      `when positive infinity`,
      () => new Size(Number.POSITIVE_INFINITY),
      `Size.value must be finite`
    );

    Helpers.throws(
      `when negative infinity`,
      () => new Size(Number.NEGATIVE_INFINITY),
      `Size.value must be finite`
    );

    Helpers.throws(
      `when negative`,
      () => new Size(-0.01),
      `Size.value must be greater than or equal to zero`
    );
  });
});
