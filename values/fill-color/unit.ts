import { Color, FillColor } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`FillColor`, () => {
    Helpers.renders(
      `when undefined`,
      () => new FillColor(undefined),
      `inherit`
    );

    Helpers.renders(
      `when given a color`,
      () => new FillColor(new Color(0.35, 0.93456, 0.612)),
      `#5e9`
    );
  });
});
