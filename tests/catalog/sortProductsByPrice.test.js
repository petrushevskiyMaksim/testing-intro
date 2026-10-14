const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
    test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
        const ascSortIds = sortProductsByPrice(products, 'asc').map((p) => p.id);
        expect(ascSortIds).toEqual([3, 6, 5, 4, 2, 1]);
    });
    test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
        const defaultSortIds = sortProductsByPrice(products, 'asc').map((p) => p.id);
        expect(defaultSortIds).toEqual([3, 6, 5, 4, 2, 1]);
    });
    test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
        const targetIds = [1, 3, 4];
        const filteredProductsId = products.filter((p) => targetIds.includes(p.id));

        const ascSortIds = sortProductsByPrice(filteredProductsId, 'asc').map((p) => p.id);

        expect(ascSortIds).toEqual([3, 4, 1]);
    });
    test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
        const descSortIds = sortProductsByPrice(products, 'desc').map((p) => p.id);
        expect(descSortIds).toEqual([1, 2, 4, 5, 6, 3]);
    });
    test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
        const targetIds = [3, 1, 4];
        const filteredProductsId = products.filter((p) => targetIds.includes(p.id));

        const descSortIds = sortProductsByPrice(filteredProductsId, 'desc').map((p) => p.id);

        expect(descSortIds).toEqual([1, 4, 3]);
    });
    test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
        const targetIds = [5, 2, 6];
        const filteredProductsId = products.filter((p) => targetIds.includes(p.id));

        const descSortIds = sortProductsByPrice(filteredProductsId, 'desc').map((p) => p.id);

        expect(descSortIds).toEqual([2, 5, 6]);
    });
    test("'asc' не меняет исходный массив [1, 3, 4]", () => {
        const original = [1, 3, 4];

        const ascSort = sortProductsByPrice(original, 'asc');

        expect(ascSort).toEqual(original);
    });
    test("'desc' не меняет исходный массив [1, 3, 4]", () => {
        const original = [1, 3, 4];

        const descSort = sortProductsByPrice(original, 'desc');

        expect(descSort).toEqual(original);
    });
    test('направление по умолчанию не меняет исходный массив всех товаров', () => {
        const copyProducts = [...products];

        sortProductsByPrice(products);

        expect(products).toEqual(copyProducts);
    });
});
