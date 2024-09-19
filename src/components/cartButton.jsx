import { NavButton } from './Button.styles';
import { MdOutlineShoppingCart } from "react-icons/md";

export default function CartButton({count}) {
    if (count <= 0) {
        count = "";
    } else {
        count = "( " + count + " )";
    }
    return <NavButton><MdOutlineShoppingCart size={20} /> Cart <span>{count}</span></NavButton>;
}