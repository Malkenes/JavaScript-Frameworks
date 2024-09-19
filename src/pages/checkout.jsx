import { StyledCheckout } from "./checkout.styles";
import { StyledButton } from "../components/Button.styles";
import PaymentMethodSelector from "../components/paymentMethodSelector";
export default function Checkout() {

    return <StyledCheckout>
        <h1>Checkout</h1>
        <PaymentMethodSelector />
        <StyledButton>Continue to Payment</StyledButton>
    </StyledCheckout>
}