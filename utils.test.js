const { calculateTotal, calculateItemCount } = require('./utils');

describe('Cart Utilities', () => {
    test('should calculate total price correctly', () => {
        const cartItems = [
            { id: 1, name: 'Headphones', price: 79.99, quantity: 1 },
            { id: 2, name: 'Smart Watch', price: 199.99, quantity: 2 }
        ];

        const total = calculateTotal(cartItems);
        expect(total).toBe(479.97);
    });

    test('should calculate item count correctly', () => {
        const cartItems = [
            { id: 1, name: 'Headphones', price: 79.99, quantity: 1 },
            { id: 2, name: 'Smart Watch', price: 199.99, quantity: 2 }
        ];

        const count = calculateItemCount(cartItems);
        expect(count).toBe(3);
    });

    test('should handle empty cart', () => {
        const cartItems = [];
        const total = calculateTotal(cartItems);
        expect(total).toBe(0);
    });
});
