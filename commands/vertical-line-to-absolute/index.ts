import Command from "../command";

export default class VerticalLineToAbsolute implements Command {
  constructor(private readonly y: number) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `V`,
      parameters: [this.y],
    };
  }
}
