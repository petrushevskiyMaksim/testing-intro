const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
    test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
        const productsId = filterByCategory(products, 'all').map((product) => product.id);
        expect(productsId).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
        const productsId = filterByCategory(products, undefined).map((product) => product.id);
        expect(productsId).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
        const productsId = filterByCategory(products, '').map((product) => product.id);
        expect(productsId).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("'electronics' возвращает товары с ID [1, 2]", () => {
        const productsId = filterByCategory(products, 'electronics').map((product) => product.id);
        expect(productsId).toEqual([1, 2]);
    });
    test("'books' возвращает товары с ID [3, 6]", () => {
        const productsId = filterByCategory(products, 'books').map((product) => product.id);
        expect(productsId).toEqual([3, 6]);
    });
    test("'home' возвращает товары с ID [4, 5]", () => {
        const productsId = filterByCategory(products, 'home').map((product) => product.id);
        expect(productsId).toEqual([4, 5]);
    });
    test("'clothes' возвращает пустой массив", () => {
        expect(filterByCategory(products, 'clothes')).toEqual([]);
    });
    test("'toys' возвращает пустой массив", () => {
        expect(filterByCategory(products, 'toys')).toEqual([]);
    });
    test("'sports' возвращает пустой массив", () => {
        expect(filterByCategory(products, 'sports')).toEqual([]);
    });
});
