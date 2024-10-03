import { StyledLink } from "./Button.styles";
import { useCartStore } from '../stores/useCartStore';

export default function CheckoutButton() {
    const {clearCart} = useCartStore();
    const totalItems = useCartStore((state) => state.totalItems(state));
    if (totalItems > 0) {
        return (
            <StyledLink to={"/checkoutSuccess"} onClick={clearCart}>Checkout</StyledLink>
        )
    }

}