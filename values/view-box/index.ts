import ValidateAnyOptionalNumber from "../../validation/validate-any-optional-number";
import ValidateAtLeastOne from "../../validation/validate-at-least-one";
import Value from "../value";

export default class ViewBox implements Value {
  constructor(width: number, height: number);
  constructor(
    width: number,
    height: number,
    leftX: undefined | number,
    topY: undefined | number
  );
  constructor(
    private readonly width: number,
    private readonly height: number,
    private readonly leftX?: number,
    private readonly topY?: number
  ) {
    ValidateAtLeastOne(width, `ViewBox.width`);
    ValidateAtLeastOne(height, `ViewBox.height`);
    ValidateAnyOptionalNumber(leftX, `ViewBox.leftX`);
    ValidateAnyOptionalNumber(topY, `ViewBox.topY`);
  }

  render(): string {
    const width = `${Math.round(this.width)}`;
    const height = `${Math.round(this.height)}`;
    const leftX = this.leftX === undefined ? `0` : `${Math.round(this.leftX)}`;
    const topY = this.topY === undefined ? `0` : `${Math.round(this.topY)}`;

    return `${width} ${height} ${leftX} ${topY}`;
  }
}
