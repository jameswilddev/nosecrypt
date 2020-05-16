import { Color } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`Color`, () => {
    Helpers.renders(`black`, () => Color.black, `#000`);
    Helpers.renders(`grey50`, () => Color.grey50, `#777`);
    Helpers.renders(`white`, () => Color.white, `#fff`);

    Helpers.renders(
      `when all channels are within bounds`,
      () => new Color(0.35, 0.93456, 0.612),
      `#5e9`
    );

    Helpers.renders(
      `when a channel is slightly below a threshold`,
      () => new Color(0.35, 0.874, 0.612),
      `#5d9`
    );

    Helpers.renders(
      `when a channel is slightly above a threshold`,
      () => new Color(0.35, 0.876, 0.612),
      `#5e9`
    );

    Helpers.renders(
      `when all channels are at the lower bound`,
      () => new Color(0, 0, 0),
      `#000`
    );

    Helpers.renders(
      `when all channels are at the upper bound`,
      () => new Color(1, 1, 1),
      `#fff`
    );

    Helpers.throws(
      `when the red channel is NaN`,
      () => new Color(Number.NaN, 0.93456, 0.612),
      `Color.red must be a number`
    );

    Helpers.throws(
      `when the red channel is positive infinity`,
      () => new Color(Number.POSITIVE_INFINITY, 0.93456, 0.612),
      `Color.red must be finite`
    );

    Helpers.throws(
      `when the red channel is negative infinity`,
      () => new Color(Number.NEGATIVE_INFINITY, 0.93456, 0.612),
      `Color.red must be finite`
    );

    Helpers.throws(
      `when the red channel is beyond the lower bound`,
      () => new Color(-0.01, 0.93456, 0.612),
      `Color.red must be greater than or equal to zero`
    );

    Helpers.throws(
      `when the red channel is beyond the upper bound`,
      () => new Color(1.01, 0.93456, 0.612),
      `Color.red must be less than or equal to one`
    );

    Helpers.throws(
      `when the green channel is NaN`,
      () => new Color(0.93456, Number.NaN, 0.612),
      `Color.green must be a number`
    );

    Helpers.throws(
      `when the green channel is positive infinity`,
      () => new Color(0.93456, Number.POSITIVE_INFINITY, 0.612),
      `Color.green must be finite`
    );

    Helpers.throws(
      `when the green channel is negative infinity`,
      () => new Color(0.93456, Number.NEGATIVE_INFINITY, 0.612),
      `Color.green must be finite`
    );

    Helpers.throws(
      `when the green channel is beyond the lower bound`,
      () => new Color(0.93456, -0.01, 0.612),
      `Color.green must be greater than or equal to zero`
    );

    Helpers.throws(
      `when the green channel is beyond the upper bound`,
      () => new Color(0.93456, 1.01, 0.612),
      `Color.green must be less than or equal to one`
    );

    Helpers.throws(
      `when the blue channel is NaN`,
      () => new Color(0.93456, 0.612, Number.NaN),
      `Color.blue must be a number`
    );

    Helpers.throws(
      `when the blue channel is positive infinity`,
      () => new Color(0.93456, 0.612, Number.POSITIVE_INFINITY),
      `Color.blue must be finite`
    );

    Helpers.throws(
      `when the blue channel is negative infinity`,
      () => new Color(0.93456, 0.612, Number.NEGATIVE_INFINITY),
      `Color.blue must be finite`
    );

    Helpers.throws(
      `when the blue channel is beyond the lower bound`,
      () => new Color(0.93456, 0.612, -0.01),
      `Color.blue must be greater than or equal to zero`
    );

    Helpers.throws(
      `when the blue channel is beyond the upper bound`,
      () => new Color(0.93456, 0.612, 1.01),
      `Color.blue must be less than or equal to one`
    );
  });
});
