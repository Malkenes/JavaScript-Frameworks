import React, {useState} from "react"
import CartButton from "../../cartButton"
import NavBar from "./navBar"
import QuickBoxLogo from "../../../assets/QuickBox.svg"
import { HeaderWrapper, LogoWrapper, StyledHeader } from "./header.styles"
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return <StyledHeader>
        <HeaderWrapper>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <LogoWrapper><img src={QuickBoxLogo} alt="QuickBox logo" /></LogoWrapper>
        <CartButton />
        </HeaderWrapper>
    </StyledHeader>
}