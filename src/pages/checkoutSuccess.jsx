import * as S from "./checkoutSuccess.styles";
import { Link } from "react-router-dom";
import { MdOutlineCheck } from "react-icons/md";

export default function CheckoutSuccess() {
  return (
    <main>
      <S.StyledCheckoutSuccess>
        <S.CheckContainer>
          <MdOutlineCheck size={148} />
        </S.CheckContainer>
        <h1>Thank you for the purchase!</h1>
        <p>We have magically recived your payment and delivery details</p>
        <p>Anticipate your order&apos;s arrival on November 31.</p>
        <Link to={"/"}>Back to Store</Link>
      </S.StyledCheckoutSuccess>
    </main>
  );
}
