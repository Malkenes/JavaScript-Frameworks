import CartButton from "./cartButton"
import NavBar from "./navBar"
import SearchForm from "./searchForm"
import QuickBoxLogo from "../assets/QuickBox.svg"
import { LogoWrapper, SearchWrapper, StyledHeader } from "./header.styles"
export default function Header({count}) {
    return <StyledHeader>
        <LogoWrapper><img src={QuickBoxLogo} alt="QuickBox logo" /></LogoWrapper>
        <CartButton count={count} />
        <NavBar />
        <SearchWrapper><SearchForm></SearchForm></SearchWrapper>
    </StyledHeader>
}