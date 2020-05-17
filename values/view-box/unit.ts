import { ViewBox } from "../..";
import * as Helpers from "../../helpers/unit";

describe(`values`, () => {
  describe(`Position`, () => {
    describe(`width`, () => {
      Helpers.renders(
        `rounds down`,
        () => new ViewBox(24.4, 1, -23, 47),
        `24 1 -23 47`
      );
      Helpers.renders(
        `rounds up`,
        () => new ViewBox(24.6, 1, -23, 47),
        `25 1 -23 47`
      );

      Helpers.throws(
        `negative`,
        () => new ViewBox(-6.245, 1, -23, 47),
        `ViewBox.width must be greater than or equal to one`
      );

      Helpers.throws(
        `zero`,
        () => new ViewBox(0, 1, -23, 47),
        `ViewBox.width must be greater than or equal to one`
      );

      Helpers.throws(
        `positive less than one`,
        () => new ViewBox(0.9, 1, -23, 47),
        `ViewBox.width must be greater than or equal to one`
      );

      Helpers.throws(
        `NaN`,
        () => new ViewBox(Number.NaN, 1, -23, 47),
        `ViewBox.width must be a number`
      );

      Helpers.throws(
        `positive infinity`,
        () => new ViewBox(Number.POSITIVE_INFINITY, 1, -23, 47),
        `ViewBox.width must be finite`
      );

      Helpers.throws(
        `negative infinity`,
        () => new ViewBox(Number.NEGATIVE_INFINITY, 1, -23, 47),
        `ViewBox.width must be finite`
      );
    });

    describe(`height`, () => {
      Helpers.renders(
        `rounds down`,
        () => new ViewBox(1, 24.4, -23, 47),
        `1 24 -23 47`
      );
      Helpers.renders(
        `rounds up`,
        () => new ViewBox(1, 24.6, -23, 47),
        `1 25 -23 47`
      );

      Helpers.throws(
        `negative`,
        () => new ViewBox(1, -6.245, -23, 47),
        `ViewBox.height must be greater than or equal to one`
      );

      Helpers.throws(
        `zero`,
        () => new ViewBox(1, 0, -23, 47),
        `ViewBox.height must be greater than or equal to one`
      );

      Helpers.throws(
        `positive less than one`,
        () => new ViewBox(1, 0.9, -23, 47),
        `ViewBox.height must be greater than or equal to one`
      );

      Helpers.throws(
        `NaN`,
        () => new ViewBox(1, Number.NaN, -23, 47),
        `ViewBox.height must be a number`
      );

      Helpers.throws(
        `positive infinity`,
        () => new ViewBox(1, Number.POSITIVE_INFINITY, -23, 47),
        `ViewBox.height must be finite`
      );

      Helpers.throws(
        `negative infinity`,
        () => new ViewBox(1, Number.NEGATIVE_INFINITY, -23, 47),
        `ViewBox.height must be finite`
      );
    });

    describe(`leftX`, () => {
      Helpers.renders(
        `rounds down negative`,
        () => new ViewBox(1, 1, -23.7, 47),
        `1 1 -24 47`
      );

      Helpers.renders(
        `rounds up negative`,
        () => new ViewBox(1, 1, -23.3, 47),
        `1 1 -23 47`
      );

      Helpers.renders(`zero`, () => new ViewBox(1, 1, 0, 47), `1 1 0 47`);

      Helpers.renders(
        `rounds down positive`,
        () => new ViewBox(1, 1, 23.3, 47),
        `1 1 23 47`
      );

      Helpers.renders(
        `rounds up positive`,
        () => new ViewBox(1, 1, 23.7, 47),
        `1 1 24 47`
      );

      Helpers.throws(
        `NaN`,
        () => new ViewBox(1, 1, Number.NaN, 47),
        `ViewBox.leftX must be a number`
      );

      Helpers.throws(
        `positive infinity`,
        () => new ViewBox(1, 1, Number.POSITIVE_INFINITY, 47),
        `ViewBox.leftX must be finite`
      );

      Helpers.throws(
        `negative infinity`,
        () => new ViewBox(1, 1, Number.NEGATIVE_INFINITY, 47),
        `ViewBox.leftX must be finite`
      );
    });

    describe(`topY`, () => {
      Helpers.renders(
        `rounds down negative`,
        () => new ViewBox(1, 1, 47, -23.7),
        `1 1 47 -24`
      );

      Helpers.renders(
        `rounds up negative`,
        () => new ViewBox(1, 1, 47, -23.3),
        `1 1 47 -23`
      );

      Helpers.renders(`zero`, () => new ViewBox(1, 1, 47, 0), `1 1 47 0`);

      Helpers.renders(
        `rounds down positive`,
        () => new ViewBox(1, 1, 47, 23.3),
        `1 1 47 23`
      );

      Helpers.renders(
        `rounds up positive`,
        () => new ViewBox(1, 1, 47, 23.7),
        `1 1 47 24`
      );

      Helpers.throws(
        `NaN`,
        () => new ViewBox(1, 1, 47, Number.NaN),
        `ViewBox.topY must be a number`
      );

      Helpers.throws(
        `positive infinity`,
        () => new ViewBox(1, 1, 47, Number.POSITIVE_INFINITY),
        `ViewBox.topY must be finite`
      );

      Helpers.throws(
        `negative infinity`,
        () => new ViewBox(1, 1, 47, Number.NEGATIVE_INFINITY),
        `ViewBox.topY must be finite`
      );
    });
  });
});
