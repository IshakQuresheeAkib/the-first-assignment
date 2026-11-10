# Type Aliases vs Interfaces in TypeScript

TypeScript gives us interfaces and type aliases to describe data shapes in our code. We usually treat them as similar tools. But they are differently in key areas.

Interfaces focus on defining object shapes and contracts. Their most unique feature is declaration conflict. If you declare the same interface twice in the same scope, TypeScript merges their properties automatically so we can extend existing types without touching the source. This merging makes interfaces popular for library authors and global configs.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
// User now requires both name and age
```

Type aliases work differently. A type alias creates a name for any valid type expression. Unlike an interface, you cannot declare the same type alias twice. TypeScript throws an error if you duplicate a type name. Type aliases can represent unions, tuples, and primitive values directly. Interfaces cannot model raw unions or tuples on their own.

```ts
type Status = "idle" | "loading" | "success";
type Point = [number, number];
```

Choosing between them comes down to your data structure. I prefer interfaces when designing object structures, API payloads, and class contracts. Interfaces offer clean error messages and straightforward extension with `extends`. On the other hand, I pick type aliases whenever I need union types, mapped types, or tuple definitions. Knowing this distinction keeps your types predictable and clean.
