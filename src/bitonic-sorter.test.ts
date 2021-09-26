import { sort, SortOrder } from "./bitonic-sorter";

describe('bitonic sort numbers', () => {
    const tests = [
        {
            name: "Sort number in ascending order",
            x: [10, 30, 11, 20, 4, 330, 21, 110],
            up: SortOrder.Ascending,
            want: [4, 10, 11, 20, 21, 30, 110, 330]
        },
        {
            name: "Sort number in descending order",
            x: [10, 30, 11, 20, 4, 330, 21, 110],
            up: SortOrder.Descending,
            want: [330, 110, 30, 21, 20, 11, 10, 4]
        },
        {
            name: "sort numbers that not have power of two elements",
            x: [10, 30, 11, 20, 4, 330, 21],
            up: SortOrder.Descending,
            want: "The length of x is not a power of two. (x.length:7)"
        }
    ];

    for (const t of tests) {
        test(t.name, () => {
            expect(sort(t.x, t.up, (e) => { return e?.message })).toStrictEqual(t.want)
        })
    }
})

describe('bitonic sort strings', () => {
    const tests = [
        {
            name: "Sort string in ascending order",
            x: ["Rust", "is", "fast", "and", "memoryefficient", "with", "no", "GC"],
            up: SortOrder.Ascending,
            want: ["GC", "Rust", "and", "fast", "is", "memoryefficient", "no", "with"]
        },
        {
            name: "Sort string in descending order",
            x: ["Rust", "is", "fast", "and", "memoryefficient", "with", "no", "GC"],
            up: SortOrder.Descending,
            want: ["with", "no", "memoryefficient", "is", "fast", "and", "Rust", "GC"]
        }
    ];

    for (const t of tests) {
        test(t.name, () => {
            expect(sort(t.x, t.up, (e) => { return e?.message })).toStrictEqual(t.want)
        })
    }
})