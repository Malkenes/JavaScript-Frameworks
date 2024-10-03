import { StyledCheckoutSuccess, CheckContainer } from "./checkoutSuccess.styles";
import { MdOutlineCheck } from "react-icons/md";
export default function CheckoutSuccess() {
    return (
    <main>
        <StyledCheckoutSuccess>
            <CheckContainer>
                <MdOutlineCheck size={148} />
            </CheckContainer>
            <p>Thank you for the purchase!</p>
            <p>We have magically recived your payment and delivery details</p>
            <p>Anticipate your order's arrival on November 31.</p>
        </StyledCheckoutSuccess>
    </main>
    );
}