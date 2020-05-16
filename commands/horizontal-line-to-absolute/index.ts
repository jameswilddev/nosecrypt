import Command from "../command";

export default class HorizontalLineToAbsolute implements Command {
  constructor(private readonly x: number) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `H`,
      parameters: [this.x],
    };
  }
}
