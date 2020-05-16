export default interface Command {
  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  };
}
