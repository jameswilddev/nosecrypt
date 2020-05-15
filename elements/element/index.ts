import Value from "../../values/value";

export default interface Element<TState> {
  render(state: TState): { readonly [attribute: string]: Value };
}
