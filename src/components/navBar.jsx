import React, {useState} from "react"
import { MdOutlineMenu } from "react-icons/md";
import { StyledNavBar } from "./navBar.styles";
export default function NavBar({isOpen, setIsOpen}) {
    return <StyledNavBar $isOpen={isOpen}>
        <button onClick={() => {setIsOpen(!isOpen)}}><MdOutlineMenu size={32} /></button>
        <div>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li><s>About</s></li>
        </ul>
        </div>
    </StyledNavBar>
}