export default function ValidateGiven<T>(
  unvalidated: null | undefined | T,
  description: string
): T {
  if (unvalidated === null || unvalidated === undefined) {
    throw new Error(`${description} must be given`);
  }

  return unvalidated;
}
