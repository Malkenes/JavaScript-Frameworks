import { NavButton } from "./Button.styles";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCartStore } from "../stores/useCartStore";

export default function CartButton() {
  const totalItems = useCartStore((state) => state.totalItems(state));
  return (
    <NavButton $totalItems={totalItems} to={"/checkout"}>
      <MdOutlineShoppingCart size={20} /> Cart
      {totalItems === 0 ? (
        <small style={{ display: "none" }}>({totalItems})</small>
      ) : (
        <small>({totalItems})</small>
      )}
    </NavButton>
  );
}
