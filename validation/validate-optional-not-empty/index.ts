import ValidateNotEmpty from "../validate-not-empty";

export default function ValidateOptionalNotEmpty(
  array: null | undefined | ReadonlyArray<unknown>,
  description: string
): void {
  if (array !== null && array !== undefined) {
    ValidateNotEmpty(array, description);
  }
}
