import Command from "../command";

export default class ClosePath implements Command {
  render(): {
    readonly command: string;
    readonly parameters: ReadonlyArray<number>;
  } {
    return {
      command: `Z`,
      parameters: []
    };
  }
}
