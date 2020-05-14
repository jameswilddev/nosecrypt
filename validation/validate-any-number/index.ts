export default function ValidateAnyNumber(
  unvalidated: number,
  description: string
): void {
  if (Number.isNaN(unvalidated)) {
    throw new Error(`${description} must be a number`);
  }

  if (!Number.isFinite(unvalidated)) {
    throw new Error(`${description} must be finite`);
  }
}
