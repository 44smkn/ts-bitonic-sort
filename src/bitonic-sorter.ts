export enum SortOrder {
    Ascending,
    Descending,
}

export enum Ordering {
    Greater,
    Less
}

export function sort<T>(x: T[], order: SortOrder, callback: (e?: Error) => any): T[] {
    switch (order) {
        case SortOrder.Ascending:
            return sortBy(x, (a: T, b: T) => { return a > b ? Ordering.Greater : Ordering.Less }, callback);
        case SortOrder.Descending:
            return sortBy(x, (a: T, b: T) => { return a < b ? Ordering.Greater : Ordering.Less }, callback);
    }
}

export function sortBy<T>(x: T[], comparator: (one: T, another: T) => Ordering, callback: (e?: Error) => any): T[] {
    if (!isPowerOfTwo(x.length)) {
        return callback(new Error(`The length of x is not a power of two. (x.length:${x.length})`));
    }
    return do_sort(x, true, comparator)
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
function do_sort<T>(x: T[], forward: boolean, comparator: (one: T, another: T) => Ordering): T[] {
    if (x.length === 1) {
        return x
    }
    let midPoint = x.length / 2;
    let first = do_sort(x.slice(0, midPoint), true, comparator);
    let second = do_sort(x.slice(midPoint, x.length), false, comparator);
    return subSort(first.concat(second), forward, comparator);
}

function subSort<T>(x: T[], forward: boolean, comparator: (one: T, another: T) => Ordering): T[] {
    if (x.length === 1) {
        return x
    }
    compareAndSwap(x, forward, comparator);
    let midPoint = x.length / 2;
    let first = subSort(x.slice(0, midPoint), forward, comparator);
    let second = subSort(x.slice(midPoint, x.length), forward, comparator);
    return first.concat(second)
}

function compareAndSwap<T>(x: T[], forward: boolean, comparator: (one: T, another: T) => Ordering): void {
    let swapCondition = forward ? Ordering.Greater : Ordering.Less;
    let midPoint = x.length / 2;
    for (const i of Array.from(Array(midPoint).keys())) {
        if (comparator(x[i], x[midPoint + i]) === swapCondition) {
            [x[i], x[midPoint + i]] = [x[midPoint + i], x[i]];
        }
    }
}