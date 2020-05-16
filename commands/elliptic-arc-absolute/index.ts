import Command from "../command";

export default class EllipticArcAbsolute implements Command {
  constructor(
    private readonly rx: number,
    private readonly ry: number,
    private readonly xAxisRotation: number,
    private readonly largeArcFlag: boolean,
    private readonly sweepFlag: boolean,
    private readonly x: number,
    private readonly y: number
  ) {}

  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `A`,
      parameters: [
        this.rx,
        this.ry,
        this.xAxisRotation,
        this.largeArcFlag ? 1 : 0,
        this.sweepFlag ? 1 : 0,
        this.x,
        this.y,
      ],
    };
  }
}
