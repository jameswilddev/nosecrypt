import ValidateAnyNumber from "../validate-any-number";

export default function ValidateAtLeastOne(
  unvalidated: number,
  description: string
): void {
  ValidateAnyNumber(unvalidated, description);

  if (unvalidated < 1) {
    throw new Error(`${description} must be greater than or equal to one`);
  }
}
