export function throws(
  description: string,
  errorFactory: () => void,
  message: string
): void {
  describe(description, () => {
    let thrown: Error;
    beforeAll(() => {
      try {
        errorFactory();
      } catch (e) {
        thrown = e;
      }
    });

    it(`throws the expected error`, () => {
      expect(thrown).toEqual(new Error(message));
    });
  });
}
