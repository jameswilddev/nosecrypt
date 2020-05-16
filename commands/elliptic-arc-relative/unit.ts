import { EllipticArcRelative } from "../..";

describe(`commands`, () => {
  describe(`EllipticArcRelative`, () => {
    describe(`largeArcFlag false`, () => {
      describe(`sweepFlag false`, () => {
        let command: EllipticArcRelative;
        beforeAll(() => {
          command = new EllipticArcRelative(
            243.234,
            11.847456,
            83.367,
            false,
            false,
            6526.2546,
            254.2256
          );
        });
        describe(`render`, () => {
          let rendered: {
            readonly command: string;
            readonly parameters: ReadonlyArray<number>;
          };
          beforeAll(() => {
            rendered = command.render();
          });
          it(`returns a description of the SVG path command`, () => {
            expect(rendered).toEqual({
              command: `a`,
              parameters: [
                243.234,
                11.847456,
                83.367,
                0,
                0,
                6526.2546,
                254.2256,
              ],
            });
          });
        });
      });
      describe(`sweepFlag true`, () => {
        let command: EllipticArcRelative;
        beforeAll(() => {
          command = new EllipticArcRelative(
            243.234,
            11.847456,
            83.367,
            false,
            true,
            6526.2546,
            254.2256
          );
        });
        describe(`render`, () => {
          let rendered: {
            readonly command: string;
            readonly parameters: ReadonlyArray<number>;
          };
          beforeAll(() => {
            rendered = command.render();
          });
          it(`returns a description of the SVG path command`, () => {
            expect(rendered).toEqual({
              command: `a`,
              parameters: [
                243.234,
                11.847456,
                83.367,
                0,
                1,
                6526.2546,
                254.2256,
              ],
            });
          });
        });
      });
    });
    describe(`largeArcFlag true`, () => {
      describe(`sweepFlag false`, () => {
        let command: EllipticArcRelative;
        beforeAll(() => {
          command = new EllipticArcRelative(
            243.234,
            11.847456,
            83.367,
            true,
            false,
            6526.2546,
            254.2256
          );
        });
        describe(`render`, () => {
          let rendered: {
            readonly command: string;
            readonly parameters: ReadonlyArray<number>;
          };
          beforeAll(() => {
            rendered = command.render();
          });
          it(`returns a description of the SVG path command`, () => {
            expect(rendered).toEqual({
              command: `a`,
              parameters: [
                243.234,
                11.847456,
                83.367,
                1,
                0,
                6526.2546,
                254.2256,
              ],
            });
          });
        });
      });
      describe(`sweepFlag true`, () => {
        let command: EllipticArcRelative;
        beforeAll(() => {
          command = new EllipticArcRelative(
            243.234,
            11.847456,
            83.367,
            true,
            true,
            6526.2546,
            254.2256
          );
        });
        describe(`render`, () => {
          let rendered: {
            readonly command: string;
            readonly parameters: ReadonlyArray<number>;
          };
          beforeAll(() => {
            rendered = command.render();
          });
          it(`returns a description of the SVG path command`, () => {
            expect(rendered).toEqual({
              command: `a`,
              parameters: [
                243.234,
                11.847456,
                83.367,
                1,
                1,
                6526.2546,
                254.2256,
              ],
            });
          });
        });
      });
    });
  });
});
