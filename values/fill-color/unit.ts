import { Color, FillColor } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`FillColor`, () => {
    Helpers.renders(
      `renders the wrapped color`,
      () => new FillColor(new Color(0.35, 0.93456, 0.612)),
      `#5e9`
    );
  });
});
