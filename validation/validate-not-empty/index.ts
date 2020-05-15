export default function ValidateNotEmpty(
  array: ReadonlyArray<unknown>,
  description: string
): void {
  if (array.length === 0) {
    throw new Error(`${description} must not be empty`);
  }
}
