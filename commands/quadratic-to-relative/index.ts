import Command from "../command";

export default class QuadraticToRelative implements Command {
  constructor(
    private readonly x1: number,
    private readonly y1: number,
    private readonly x: number,
    private readonly y: number
  ) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `q`,
      parameters: [this.x1, this.y1, this.x, this.y],
    };
  }
}
