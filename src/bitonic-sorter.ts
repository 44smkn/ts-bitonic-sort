export enum SortOrder {
    Ascending,
    Descending,
}

export function sort<T>(x: T[], order: SortOrder, callback: (e?: Error) => any): T[] {
    if (!isPowerOfTwo(x.length)) {
        return callback(new Error(`The length of x is not a power of two. (x.length:${x.length})`));
    }
    switch (order) {
        case SortOrder.Ascending:
            return do_sort(x, true);
        case SortOrder.Descending:
            return do_sort(x, false);
    }
}

function isPowerOfTwo(x: number): boolean {
    if (x === 0) {
        return false;
    }
    return (x & (x - 1)) === 0;
}

/**
 * implements bitonic sort
 * @param x array
 * @param up sort order
 */
function do_sort<T>(x: T[], up: boolean): T[] {
    if (x.length === 1) {
        return x
    }
    let midPoint = x.length / 2;
    let first = do_sort(x.slice(0, midPoint), true);
    let second = do_sort(x.slice(midPoint, x.length), false);
    return subSort(first.concat(second), up);
}

function subSort<T>(x: T[], up: boolean): T[] {
    if (x.length === 1) {
        return x
    }
    compareAndSwap(x, up);
    let midPoint = x.length / 2;
    let first = subSort(x.slice(0, midPoint), up);
    let second = subSort(x.slice(midPoint, x.length), up);
    return first.concat(second)
}

function compareAndSwap<T>(x: T[], up: boolean): void {
    let midPoint = x.length / 2;
    for (const i of Array.from(Array(midPoint).keys())) {
        if ((x[i] > x[midPoint + i]) === up) {
            [x[i], x[midPoint + i]] = [x[midPoint + i], x[i]];
        }
    }
}