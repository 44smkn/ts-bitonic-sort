import { sort, SortOrder } from "./bitonic-sorter";

var x = [10, 30, 11, 20, 4, 330, 21, 110];
var result = sort(x, SortOrder.Ascending)

console.log(result)