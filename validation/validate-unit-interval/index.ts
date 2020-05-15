import ValidateNonNegative from "../validate-non-negative";

export default function ValidateUnitInterval(
  unvalidated: number,
  description: string
): void {
  ValidateNonNegative(unvalidated, description);

  if (unvalidated > 1) {
    throw new Error(`${description} must be less than or equal to one`);
  }
}
