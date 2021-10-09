import { Suite, Event } from 'benchmark';
import { sort as seqSort, SortOrder } from './bitonic-sorter-not-async';
import { sort as concurrentSort } from './bitonic-sorter';

benchmark();

function benchmark(): void {
    let suite = new Suite;
    let x = generateRandomNumberArray(65536, 0, 1000000);
    let y = Array.from(x);
    suite
        .add("seq sort", () => {
            seqSort(x, SortOrder.Ascending, (e) => { console.log(e) });
        })
        .add('concurrent sort', () => {
            concurrentSort(y, SortOrder.Ascending, (e) => { console.log(e) })
        })
        .on('cycle', (event: Event) => {
            console.log(String(event.target))
        })
        .on('complete', function () {
            console.log(`Faster is ${suite.filter('fastest').map('name')}`);
        })
        .run({ async: true });
}

function generateRandomNumberArray(len: number, min: number, max: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < len; i++) {
        array.push(getRandomNumber(min, max));
    }
    return array;
}

function getRandomNumber(min: number, max: number): number {
    return Math.random() * ((max + 1) - min) + min;
}