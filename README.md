# ts-bitonic-sort

## Setup

```console
$ npm init -y
$ npm install typescript --save-dev
$ npm install @types/node --save-dev
$ npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

$ npm install --save-dev jest ts-jest @types/jest ts-node
$ npx jest --init
The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … no

$ npm i --save benchmark
$ npm i --save-dev @types/benchmark
```

Update `jest.config.ts`

```typescript
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "src"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
```

## Task description

- Implement simple bitonic sort functions
  - Know How to define function and variables
- Write unit test
  - Know unit test library
- Use generics for sorting both numbers and strings
- Improve redability with SortOrder enum
  - `switch` syntax
- Add error handling with a callback function
- Pass comparator function to allow to sort
  - Define `Student` class
- Call sort function asynchronously

## Benchmark

```sh
$ npm run benchmark
seq sort x 1.57 ops/sec ±3.06% (8 runs sampled)
concurrent sort x 1.12 ops/sec ±56.14% (9 runs sampled)
Faster is seq sort,concurrent sort
```
