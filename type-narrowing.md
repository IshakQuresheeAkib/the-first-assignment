# Understanding Type Narrowing in TypeScript

Working with union types in TypeScript is common in everyday applications. A variable can hold a string, a number, or a complex object. When our API responds with data that could be in any shapes, TypeScript stops us from calling methods until we prove which type is active at runtime. Type narrowing solves this. It is the process where TypeScript refines a broad type into a specific type inside conditional branches.

The simplest check uses the `typeof` operator. This guard checks primitive values such as strings, numbers, and booleans. Once tested, TypeScript removes the other union members inside that `if` block.

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

For object instances, we rely on the `instanceof` guard. This operator inspects prototypes at runtime. It works reliably for built-in objects like `Date` or `Error`, as well as custom classes.

```ts
function parseDate(value: Date | string) {
  if (value instanceof Date) {
    return value.getFullYear();
  }
  return new Date(value).getFullYear();
}
```

Sometimes we handle plain objects that share no common class or tag. In those cases, the `in` operator checks whether a specific property exists on the object. If the property exists, TypeScript narrows the value to the matching shape.

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
