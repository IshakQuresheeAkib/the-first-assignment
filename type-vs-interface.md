# Type Aliases vs Interfaces in TypeScript

TypeScript gives us two main tools to define custom data shapes: type aliases and interfaces. Both describe object models cleanly, but their underlying behavior differs as your codebase grows.

Interfaces define object shapes. When we declare the same interface name twice in the same module scope, TypeScript merges those individual property definitions together into a single unified object contract without throwing errors. This behavior helps library authors expose extensible definitions that external consumers can augment later.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// User now requires both name and age
```

Type aliases name any valid type expression. Unlike interfaces, a type alias cannot be declared more than once in the same scope. Writing duplicate type names causes TypeScript to raise a compile error immediately. Type aliases can directly represent unions, tuples, and primitive aliases.

```ts
type Status = "idle" | "loading" | "success";
type Point = [number, number];
```

Use interfaces when modeling standard objects, data contracts, and class architectures in object-oriented modules. Use type aliases when you combine types using unions, intersections, or tuple structures. Sticking to this separation keeps your project organized and prevents duplicate type confusion.
