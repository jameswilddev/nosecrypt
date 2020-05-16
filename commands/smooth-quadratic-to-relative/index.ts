import Command from "../command";

export default class SmoothQuadraticToRelative implements Command {
  constructor(private readonly x: number, private readonly y: number) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `t`,
      parameters: [this.x, this.y],
    };
  }
}
