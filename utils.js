function calculateTotal(cartItems) {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateItemCount(cartItems) {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
}

module.exports = {
    calculateTotal,
    calculateItemCount
};
