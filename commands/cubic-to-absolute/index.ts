import Command from "../command";

export default class CubicToAbsolute implements Command {
  constructor(
    private readonly x1: number,
    private readonly y1: number,
    private readonly x2: number,
    private readonly y2: number,
    private readonly x: number,
    private readonly y: number
  ) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `C`,
      parameters: [this.x1, this.y1, this.x2, this.y2, this.x, this.y],
    };
  }
}
