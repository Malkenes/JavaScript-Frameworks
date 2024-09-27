import { StyledCheckout, StyledCheckoutItem } from "./checkout.styles";
import { StyledButton } from "../components/Button.styles";
import PaymentMethodSelector from "../components/paymentMethodSelector";
import { useCartStore } from "../stores/useCartStore";
export default function Checkout() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCartStore();
    const totalPrice = useCartStore((state) => state.totalPrice(state));
    return <StyledCheckout>
        <h1>Checkout</h1>
        <ul>
            {cart.map((item) => (
                <StyledCheckoutItem key={item.id}>
                        <div>
                            <img src={item.image.url} alt="" />
                        </div>
                        <h2 style={{flexGrow: "1"}}>{item.title}</h2>
                        <div>
                            <div style={{padding: "0.5em", background:"#FDEEED", display: "flex", alignItems:"center", gap: "0.5em"}}>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                                {item.quantity}
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            </div>
                            {item.price !== item.discountedPrice ?
                            (<div><p>{item.discountedPrice*item.quantity}</p>
                                <s>{item.price*item.quantity}</s></div>
                            )
                            : (<p>{item.price*item.quantity}</p>)}
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </StyledCheckoutItem>
            ))}
            <div>
                {totalPrice === 0 
                ? (<p>Cart is empty</p>)
                : (                
                    <div style={{display:"flex", padding: "10em", justifyContent:"space-between"}}>
                    Total:
                    <div>
                        {totalPrice}
                    </div>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
                )}
            </div>
        </ul>
        <PaymentMethodSelector />
        <StyledButton>Continue to Payment</StyledButton>
    </StyledCheckout>
}