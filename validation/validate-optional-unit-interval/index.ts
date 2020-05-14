import ValidateAnyOptionalNumber from "../validate-any-optional-number";

export default function ValidateOptionalUnitInterval(
  unvalidated: null | undefined | number,
  description: string
): void {
  ValidateAnyOptionalNumber(unvalidated, description);

  if (unvalidated !== null && unvalidated !== undefined) {
    if (unvalidated < 0) {
      throw new Error(
        `${description} must be greater than or equal to zero when given`
      );
    }

    if (unvalidated > 1) {
      throw new Error(
        `${description} must be less than or equal to one when given`
      );
    }
  }
}
