export default function ValidateContainsAtLeastTwoItems(
  array: ReadonlyArray<unknown>,
  description: string
): void {
  if (array.length < 2) {
    throw new Error(`${description} must contain at least two items`);
  }
}
