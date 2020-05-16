import Command from "../../commands/command";
import ValidateNotEmpty from "../../validation/validate-not-empty";
import Value from "../value";

export default class CommandSet implements Value {
  private readonly commands: ReadonlyArray<Command>;

  constructor(...commands: ReadonlyArray<Command>) {
    ValidateNotEmpty(commands, `CommandSet.commands`);

    this.commands = commands;
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
