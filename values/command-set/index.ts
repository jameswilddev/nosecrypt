import Command from "../../commands/command";
import ValidateGiven from "../../validation/validate-given";
import ValidateNotEmpty from "../../validation/validate-not-empty";
import Value from "../value";

export default class CommandSet implements Value {
  private readonly commands: ReadonlyArray<Command>;

  constructor(commands: undefined | ReadonlyArray<Command>) {
    this.commands = ValidateGiven(commands, `CommandSet.commands`);

    ValidateNotEmpty(this.commands, `CommandSet.commands`);
  }

  render(): string {
    return this.commands
      .map((command) => command.render())
      .map(
        (rendered) =>
          `${rendered.command}${rendered.parameters
            .map((parameter) => `${parameter}`)
            .join(` `)}`
      )
      .join(``);
  }
}
