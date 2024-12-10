import styled from "styled-components";

export const StyledCheckout = styled.main`
  ul {
    list-style: none;
    padding: 0;
  }
`;

export const StyledCheckoutItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  padding: 1em;
  border-bottom: 1px solid #78737385;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.5em;
  }
`;

export const StyledAlterQuantity = styled.div`
  width: 100px;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  padding: 0.5em;
  background: #fdeeed;
  button {
    display: flex;
    padding: 0.2em;
    border-radius: 50%;
  }
`;

export const StyledPayment = styled.fieldset`
  border-radius: 10px;
  padding: 10px 0;
  margin-bottom: 20px;
  legend {
    font-weight: bold;
    padding: 0 10px;
  }
`;
export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-left: 4px solid transparent;

  cursor: pointer;
  ${(props) =>
    props.checked &&
    `background-color: #FDEEED; font-weight: 600; border-color: #E1251A;`}
  input {
    display: none;
  }
  label {
    margin-left: 10px;
  }
`;
