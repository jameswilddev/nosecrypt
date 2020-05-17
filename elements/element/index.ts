import { Json, Value } from "../..";

export default interface Element<TState extends Json> {
  readonly tagName: string;

  readonly children: ReadonlyArray<Element<TState>>;

  render(state: TState): { readonly [attribute: string]: Value };
}
