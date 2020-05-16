import Command from "../command";

export default class HorizontalLineToRelative implements Command {
  constructor(private readonly x: number) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `h`,
      parameters: [this.x]
    };
  }
}
