import Command from "../command";

export default class VerticalLineToRelative implements Command {
  constructor(private readonly y: number) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `v`,
      parameters: [this.y]
    };
  }
}
