import { sort } from "./bitonic-sorter";

describe('sort() function', () => {
    const tests = [
        {
            name: "Sort in ascending order",
            x: [10, 30, 11, 20, 4, 330, 21, 110],
            up: true,
            want: [4, 10, 11, 20, 21, 30, 110, 330]
        },
        {
            name: "Sort in descending order",
            x: [10, 30, 11, 20, 4, 330, 21, 110],
            up: false,
            want: [330, 110, 30, 21, 20, 11, 10, 4]
        }
    ];

    for (const t of tests) {
        test(t.name, () => {
            expect(sort(t.x, t.up)).toStrictEqual(t.want)
        })
    }
})