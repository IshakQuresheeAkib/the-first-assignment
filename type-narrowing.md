# Understanding Type Narrowing in TypeScript

TypeScript variables usually hold union types with multiple possible shapes. Type narrowing is the process where TypeScript refines a broad type into a more specific type within conditional code branches. This lets us call methods safely without runtime failures.

Types narrow quickly. The `typeof` operator checks primitive values like strings, numbers, and booleans. When you test a variable with `typeof`, TypeScript removes the other union members inside that block.

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

The `instanceof` guard inspects class instances and prototypes at runtime. This check works well for standard library objects like Date or Error instances.

```ts
function parseDate(value: Date | string) {
  if (value instanceof Date) {
    return value.getFullYear();
  }
  return new Date(value).getFullYear();
}
```

The `in` operator confirms whether a specific property exists on an object before you read that property. When working with disparate object shapes that lack a shared discriminator field, testing for a distinct key helps the compiler distinguish between valid candidate interfaces without casting.

```ts
type Bird = { fly: () => void };
type Fish = { swim: () => void };

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

Type narrowing bridges dynamic JavaScript runtime checks with static TypeScript type analysis. Using `typeof`, `instanceof`, and the `in` operator eliminates type errors and keeps our runtime code reliable.
