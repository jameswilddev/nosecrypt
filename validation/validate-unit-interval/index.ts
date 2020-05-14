import ValidateAnyNumber from "../validate-any-number";

export default function ValidateUnitInterval(
  unvalidated: number,
  description: string
): void {
  ValidateAnyNumber(unvalidated, description);

  if (unvalidated < 0) {
    throw new Error(`${description} must be greater than or equal to zero`);
  }

  if (unvalidated > 1) {
    throw new Error(`${description} must be less than or equal to one`);
  }
}
