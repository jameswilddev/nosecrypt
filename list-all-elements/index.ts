import { Element } from "..";

export default function ListAllElements<TState>(
  root: Element<TState>
): ReadonlyArray<Element<TState>> {
  const output: Element<TState>[] = [];

  function recurse(element: Element<TState>): void {
    output.push(element);

    for (const child of element.children) {
      recurse(child);
    }
  }

  recurse(root);

  return output;
}
