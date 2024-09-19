import { MdOutlineCreditCard } from "react-icons/md";
import { SiKlarna, SiPaypal } from "react-icons/si";
import { useState } from "react";

import { StyledPayment, PaymentOption } from "./paymentMethodSelector.style"
export default function PaymentMethodSelector() {

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
        <input type="radio" id="paypal" name="paymentOption" value="paypal" checked={selectedOption === "paypal"} onChange={() => setSelectedOption("paypal")}/>
        <label htmlFor="paypal">PayPal</label>
        </PaymentOption>
    </StyledPayment>
}