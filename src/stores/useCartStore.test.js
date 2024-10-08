import { describe, it, expect, afterEach } from "vitest";
import { useCartStore } from "./useCartStore";

describe("Cart Store", () => {
    afterEach(() => {
        useCartStore.getState().clearCart();
    })
    it("should add product to cart", () => {
        const { addToCart } = useCartStore.getState();

        addToCart({id: 1, title: "Product A"});

        const { cart } = useCartStore.getState();
        expect(cart).toHaveLength(1);
        expect(cart[0]).toEqual({id: 1, title: "Product A", quantity: 1});
    });

    it("should add quantity if product is in cart", () => {
        useCartStore.setState({
            cart: [{id: 1, title: "Product A", quantity: 1}]
        });

        const { addToCart } = useCartStore.getState();

        addToCart({id: 1, title: "Product A"});

        const { cart } = useCartStore.getState();
        expect(cart).toHaveLength(1);
        expect(cart[0]).toEqual({id: 1, title: "Product A", quantity: 2});
    });

    it("should remove product from cart", () => {
        useCartStore.setState({
            cart: [{id: 1, title: "Product A", quantity: 1}, {id: 2, title: "Product B", quantity: 1}]
        });

        const { removeFromCart } = useCartStore.getState();

        removeFromCart(1);

        const { cart } = useCartStore.getState();
        expect(cart).toHaveLength(1);
        expect(cart[0]).toEqual({id: 2, title: "Product B", quantity: 1});
    });

    it("should increase quantity", () => {
        useCartStore.setState({
            cart: [{id: 1, title: "Product A", quantity: 1}]
        });
        const { increaseQuantity } = useCartStore.getState();

        // 1 is ID
        increaseQuantity(1);
        const { cart } = useCartStore.getState();
        expect(cart).toHaveLength(1);
        expect(cart[0]).toEqual({ id: 1, title: "Product A", quantity: 2 });
    });

    it("should decrease quantity", () => {
        useCartStore.setState({
            cart: [{id: 1, title: "Product A", quantity: 2}]
        });

        const { decreaseQuantity } = useCartStore.getState();
        decreaseQuantity(1);
        const { cart } = useCartStore.getState();
        expect(cart).toHaveLength(1);
        expect(cart[0]).toEqual({ id: 1, title: "Product A", quantity: 1 });
    });

    it("should remove product if quantity is 0", () => {
        useCartStore.setState({
            cart: [{id: 1, title: "Product A", quantity: 1}]
        });

        const { decreaseQuantity } = useCartStore.getState();
        decreaseQuantity(1);
        const { cart } = useCartStore.getState();
        expect(cart).toHaveLength(0);
    });
});