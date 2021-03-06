import Command from "../command";

export default class MoveToAbsolute implements Command {
  constructor(private readonly x: number, private readonly y: number) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `M`,
      parameters: [this.x, this.y],
    };
  }
}
