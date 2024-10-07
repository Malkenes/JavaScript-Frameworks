import { MdOutlineRemove , MdOutlineAdd, MdOutlineCreditCard} from "react-icons/md";

import { StyledCheckout, StyledCheckoutItem, StyledAlterQuantity, StyledPayment, PaymentOption} from "./checkout.styles";
import { StyledButton } from "../components/Button.styles";
import { useCartStore } from "../stores/useCartStore";
import CheckoutButton from "../components/checkoutButton";
import Price from "../components/shared/price";
import { useState } from "react";
import { SiKlarna, SiPaypal } from "react-icons/si";
export default function Checkout() {
    const { cart, increaseQuantity, decreaseQuantity, clearCart } = useCartStore();
    const totalPrice = useCartStore((state) => state.totalPrice(state));
    const totalDiscountedPrice = useCartStore((state) => state.totalDiscountedPrice(state));
    return <StyledCheckout>
        <section>
        <h1>Checkout</h1>
        <ul>
            {cart.map((item) => (
                <StyledCheckoutItem key={item.id}>
                        <div>
                            <img src={item.image.url} alt={item.image.alt} />
                        </div>
                        <h2 style={{flexGrow: "1", textAlign: "center"}}>{item.title}</h2>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5em"}}>
                            <StyledAlterQuantity>
                                <button onClick={() => increaseQuantity(item.id)} aria-label="add one">
                                    <MdOutlineAdd />
                                </button>
                                {item.quantity}
                                <button onClick={() => decreaseQuantity(item.id)} aria-label="remove one">
                                    <MdOutlineRemove />
                                </button>
                            </StyledAlterQuantity>
                            <Price price={item.price} discountedPrice={item.discountedPrice}/>
                        </div>
                </StyledCheckoutItem>
            ))}
                {totalPrice === 0 
                ? (<p>Cart is empty</p>)
                : (                
                    <StyledCheckoutItem>
                    <h2>Total:</h2>
                    <Price price={totalPrice} discountedPrice={totalDiscountedPrice}/>
                    <button onClick={clearCart}>Clear Cart</button>
                </StyledCheckoutItem>
                )}
        </ul>
        </section>
        <section>
            <PaymentMethodSelector />
            <CheckoutButton />
        </section>
    </StyledCheckout>
}

function PaymentMethodSelector() {

    const [selectedOption, setSelectedOption] = useState('creditCard');

    return <StyledPayment>
        <legend>Choose Payment Method</legend>
        <PaymentOption checked={selectedOption === "creditCard"} onClick={() => setSelectedOption("creditCard")}>
            <MdOutlineCreditCard size={32} />
            <input type="radio" id="creditCard" name="paymentOption" value="creditCard" checked={selectedOption === "creditCard"} onChange={() => setSelectedOption("creditCard")} />
            <label htmlFor="creditCard">Credit Card</label>
        </PaymentOption>
        <PaymentOption checked={selectedOption === "klarna"} onClick={() => setSelectedOption("klarna")}>
            <SiKlarna size={32} />
            <input type="radio" id="klarna" name="paymentOption" value="klarna" checked={selectedOption === "klarna"} onChange={() => setSelectedOption("klarna")} />
            <label htmlFor="klarna">Klarna</label>
        </PaymentOption>
        <PaymentOption checked={selectedOption === "paypal"} onClick={() => setSelectedOption("paypal")}>
            <SiPaypal size={32} />
            <input type="radio" id="paypal" name="paymentOption" value="paypal" checked={selectedOption === "paypal"} onChange={() => setSelectedOption("paypal")} />
            <label htmlFor="paypal">PayPal</label>
        </PaymentOption>
    </StyledPayment>;
}
