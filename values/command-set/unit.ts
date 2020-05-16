import {
  CommandSet,
  EllipticArcAbsolute,
  MoveToRelative,
  VerticalLineToAbsolute,
} from "../..";
import * as Helpers from "../../helpers/unit";
import * as ValueHelpers from "../helpers/unit";

describe(`values`, () => {
  describe(`CommandSet`, () => {
    Helpers.throws(
      `when empty`,
      () => new CommandSet([]),
      `CommandSet.commands must not be empty`
    );

    ValueHelpers.renders(
      `with one command`,
      () =>
        new CommandSet([
          new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40),
        ]),
      `A24 -18 37 1 0 -10 -40`
    );

    ValueHelpers.renders(
      `with two commands`,
      () =>
        new CommandSet([
          new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40),
          new MoveToRelative(-37, 43),
        ]),
      `A24 -18 37 1 0 -10 -40m-37 43`
    );

    ValueHelpers.renders(
      `with three commands`,
      () =>
        new CommandSet([
          new EllipticArcAbsolute(24, -18, 37, true, false, -10, -40),
          new MoveToRelative(-37, 43),
          new VerticalLineToAbsolute(67),
        ]),
      `A24 -18 37 1 0 -10 -40m-37 43V67`
    );
  });
});
