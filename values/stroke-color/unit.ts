import { Color, StrokeColor } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`StrokeColor`, () => {
    Helpers.renders(
      `when undefined`,
      () => new StrokeColor(undefined),
      `inherit`
    );

    Helpers.renders(
      `when given a color`,
      () => new StrokeColor(new Color(0.35, 0.93456, 0.612)),
      `#5e9`
    );
  });
});
