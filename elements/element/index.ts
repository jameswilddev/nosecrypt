import Value from "../../values/value";

export default interface Element<TState> {
  readonly tagName: string;

  readonly children: ReadonlyArray<Element<TState>>;

  render(state: TState): { readonly [attribute: string]: Value };
}
