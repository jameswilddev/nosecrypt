export default function ValidateAnyOptionalNumber(
  unvalidated: null | undefined | number,
  description: string
): void {
  if (unvalidated !== null && unvalidated !== undefined) {
    if (Number.isNaN(unvalidated)) {
      throw new Error(`${description} must be a number when given`);
    }

    if (!Number.isFinite(unvalidated)) {
      throw new Error(`${description} must be finite when given`);
    }
  }
}
