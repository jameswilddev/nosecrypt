import { Element, ListAllElements } from "..";

type TestState = `Test State`;

describe(`ListAllElements`, () => {
  let root: Element<TestState>;
  let childA: Element<TestState>;
  let childB: Element<TestState>;
  let childBA: Element<TestState>;
  let childBB: Element<TestState>;
  let childBBA: Element<TestState>;
  let childBBB: Element<TestState>;
  let childBC: Element<TestState>;
  let childC: Element<TestState>;
  let childCA: Element<TestState>;
  let childCB: Element<TestState>;
  let childD: Element<TestState>;
  let childE: Element<TestState>;
  let output: ReadonlyArray<Element<TestState>>;

  beforeAll(() => {
    function createDummyElement(
      children: ReadonlyArray<Element<TestState>>
    ): Element<TestState> {
      return {
        tagName: `Test Tag Name`,
        children,
        render() {
          throw new Error(`Unimplemented`);
        },
      };
    }

    childA = createDummyElement([]);
    childBA = createDummyElement([]);
    childBBA = createDummyElement([]);
    childBBB = createDummyElement([]);
    childBB = createDummyElement([childBBA, childBBB]);
    childBC = createDummyElement([]);
    childB = createDummyElement([childBA, childBB, childBC]);
    childCA = createDummyElement([]);
    childCB = createDummyElement([]);
    childC = createDummyElement([childCA, childCB]);
    childD = createDummyElement([]);
    childE = createDummyElement([]);
    root = createDummyElement([childA, childB, childC, childD, childE]);

    output = ListAllElements(root);
  });

  it(`returns every element in the tree`, () => {
    expect(output).toEqual([
      root,
      childA,
      childB,
      childBA,
      childBB,
      childBBA,
      childBBB,
      childBC,
      childC,
      childCA,
      childCB,
      childD,
      childE,
    ]);
  });
});
