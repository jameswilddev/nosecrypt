import ValidateAnyNumber from "../../validation/validate-any-number";
import ValidateAtLeastOne from "../../validation/validate-at-least-one";
import Value from "../value";

export default class ViewBox implements Value {
  constructor(
    private readonly width: number,
    private readonly height: number,
    private readonly leftX: number,
    private readonly topY: number
  ) {
    ValidateAtLeastOne(width, `ViewBox.width`);
    ValidateAtLeastOne(height, `ViewBox.height`);
    ValidateAnyNumber(leftX, `ViewBox.leftX`);
    ValidateAnyNumber(topY, `ViewBox.topY`);
  }

  render(): string {
    const width = `${Math.round(this.width)}`;
    const height = `${Math.round(this.height)}`;
    const leftX = `${Math.round(this.leftX)}`;
    const topY = `${Math.round(this.topY)}`;

    return `${width} ${height} ${leftX} ${topY}`;
  }
}
