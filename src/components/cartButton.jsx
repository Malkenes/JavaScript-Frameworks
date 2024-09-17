import { NavButton } from './Button.styles';

export default function CartButton({count}) {
    if (count <= 0) {
        count = "";
    } else {
        count = "( " + count + " )";
    }
    return <NavButton>Cart <span>{count}</span></NavButton>;
}