import React, {useState} from "react"
import { MdOutlineMenu } from "react-icons/md";
import { StyledNavBar } from "./navBar.styles";
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return <StyledNavBar $isOpen={isOpen}>
        <button onClick={() => {setIsOpen(!isOpen)}}><MdOutlineMenu size={32} /></button>
        <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Home</li>
        </ul>
    </StyledNavBar>
}