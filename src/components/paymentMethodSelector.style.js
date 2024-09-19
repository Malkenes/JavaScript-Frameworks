import styled from "styled-components";

export const StyledPayment = styled.fieldset`
border-radius: 10px;
padding: 10px 0;
legend {
font-weight: bold;
padding: 0 10px; 
}
`
export const PaymentOption = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-left: 4px solid transparent;

    cursor: pointer;
    ${(props) => props.checked && `background-color: #FDEEED; font-weight: 600; border-color: #E1251A;`}
    input {
        display: none;
    }
    label {
        margin-left: 10px;
    }
`