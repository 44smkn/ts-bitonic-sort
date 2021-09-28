import { sort, SortOrder } from "./bitonic-sorter";

var x = [10, 30, 11, 20, 4, 330, 21, 110];
sort(x, SortOrder.Ascending, (e) => {
    console.log(e)
}).then(result => console.log(result))

