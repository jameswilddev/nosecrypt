import Command from "../command";

export default class SmoothCubicToRelative implements Command {
  constructor(
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
      command: `s`,
      parameters: [this.x2, this.y2, this.x, this.y],
    };
  }
}
