import ValidateGiven from "../../validation/validate-given";
import ValidateContainsAtLeastTwoItems from "../../validation/validate-contains-at-least-two-items";
import Value from "../value";
import ValidateAnyNumber from "../../validation/validate-any-number";

export default class PointSet implements Value {
  private readonly points: ReadonlyArray<readonly [number, number]>;

  constructor(points: undefined | ReadonlyArray<readonly [number, number]>) {
    this.points = ValidateGiven(points, `PointSet.points`);

    ValidateContainsAtLeastTwoItems(this.points, `PointSet.points`);

    this.points.forEach((point, pointIndex) => {
      point.forEach((axis, axisIndex) => {
        ValidateAnyNumber(axis, `PointSet.points[${pointIndex}][${axisIndex}]`);
      });
    });
  }

  render(): string {
    const flattened: number[] = [];

    for (const point of this.points) {
      for (const axis of point) {
        flattened.push(Math.round(axis));
      }
    }

    return flattened.join(` `);
  }
}
