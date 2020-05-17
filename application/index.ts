import { Json, Svg } from "..";

export default interface Application<TState extends Json> {
  initalState: TState;

  root: Svg<TState>;
}
