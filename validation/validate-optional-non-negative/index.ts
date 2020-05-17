import ValidateAnyOptionalNumber from "../validate-any-optional-number";

export default function ValidateOptionalNonNegative(
  unvalidated: null | undefined | number,
  description: string
): void {
  if (unvalidated !== null && unvalidated !== undefined) {
    ValidateAnyOptionalNumber(unvalidated, description);

    if (unvalidated < 0) {
      throw new Error(
        `${description} must be greater than or equal to zero when given`
      );
    }
  }
}
