import React, {useState} from "react"
import { StyledNavBar } from "./navBar.styles";
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return <StyledNavBar $isOpen={isOpen}>
        <button onClick={() => {setIsOpen(!isOpen)}}>Menu</button>
        <ul>
            <li>Contact</li>
        </ul>
    </StyledNavBar>
}