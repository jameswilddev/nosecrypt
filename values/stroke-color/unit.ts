import { Color, StrokeColor } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`StrokeColor`, () => {
    Helpers.renders(
      `renders the wrapped color`,
      () => new StrokeColor(new Color(0.35, 0.93456, 0.612)),
      `#5e9`
    );
  });
});
