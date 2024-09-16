import { StyledButton } from './Button.styles';

function CartButton({count}) {
    if (count <= 0) {
        count = "";
    } else {
        count = "( " + count + " )";
    }
    return <div>
        <StyledButton>Cart <span>{count}</span></StyledButton>
    </div>;
}

export default CartButton;