import Value from "../../values/value";

export default interface Element<TState> {
  readonly tagName: string;

  render(state: TState): { readonly [attribute: string]: Value };
}
