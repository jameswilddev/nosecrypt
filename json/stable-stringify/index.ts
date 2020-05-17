import Json from "..";

export default function stableStringify(json: Json): string {
  if (json !== null && typeof json === `object`) {
    if (Array.isArray(json)) {
      const items = json.map(stableStringify).join(`,`);
      return `[${items}]`;
    } else {
      const items = Object.keys(json)
        .sort()
        .map(
          (key) =>
            `${JSON.stringify(key)}:${stableStringify(
              // Workaround for https://github.com/microsoft/TypeScript/issues/17002 .
              (json as { readonly [key: string]: Json })[key]
            )}`
        );

      return `{${items}}`;
    }
  }

  return JSON.stringify(json);
}
