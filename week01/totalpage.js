function totalPage(items, perPage) {
    if (perPage <=0) {
        throw new Error("items per page must be greater than zero.");
    }
  return Math.ceil(items / perPage);
}
number.isII

let pages = totalPage(0, 5);
let pages2 = totalPage(25, 5);
console.log(pages);
console.log(pages2);
