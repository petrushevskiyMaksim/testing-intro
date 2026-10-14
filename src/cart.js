function notImplemented() {
    throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
    if (quantity <= 0) throw new RangeError();
    if (quantity > product.stock) throw new RangeError();

    const existsProduct = cart.find((item) => item.id === product.id);

    if (existsProduct) {
        existsProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    return cart;
}

function changeQuantity(cart, productId, quantity) {
    if (quantity <= 0) throw new RangeError();

    const findProduct = cart.find((p) => p.id === productId);

    if (findProduct) {
        if (quantity > findProduct.stock) throw new RangeError();
        findProduct.quantity = quantity;
    }

    return cart;
}

function removeFromCart(cart, removeProductId) {
    const filtersCart = cart.filter((p) => p.id !== removeProductId);

    return filtersCart;
}
function calculateCartSubtotal(cart) {
    let subtotal = 0;

    if (cart.length <= 0) return subtotal;
    if (cart.length === 1) return (subtotal = cart[0].price * cart[0].quantity);

    for (let i = 0; i < cart.length; i += 1) {
        subtotal += cart[i].price * cart[i].quantity;
    }

    return subtotal;
}
function calculateOrderTotal(cart, promo) {
    subtotal = calculateCartSubtotal(cart);

    let discount = 0;
    if (subtotal >= 20000 && promo === 'SAVE10') {
        discount = subtotal * 0.1;
    }

    const delivery = subtotal >= 50000 ? 0 : 30000;

    const total = subtotal + delivery - discount;

    return {
        subtotal,
        discount,
        delivery,
        total,
    };
}

const cartApi = {
    addToCart,
    changeQuantity,
    removeFromCart,
    calculateCartSubtotal,
    calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
