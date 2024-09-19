import React, {useState} from "react"
import CartButton from "./cartButton"
import NavBar from "./navBar"
import SearchForm from "./searchForm"
import QuickBoxLogo from "../assets/QuickBox.svg"
import { HeaderWrapper, LogoWrapper, SearchWrapper, StyledHeader } from "./header.styles"
export default function Header({count}) {
    const [isOpen, setIsOpen] = useState(false);
    return <StyledHeader>
        <HeaderWrapper>
        <LogoWrapper><img src={QuickBoxLogo} alt="QuickBox logo" /></LogoWrapper>
        <CartButton count={count} />
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <SearchWrapper><SearchForm isOpen={isOpen} setIsOpen={setIsOpen}></SearchForm></SearchWrapper>
        </HeaderWrapper>
    </StyledHeader>
}