import React, {useState} from "react"
import { MdOutlineMenu } from "react-icons/md";
import { StyledNavBar } from "./navBar.styles";
import { Link } from "react-router-dom";
export default function NavBar({isOpen, setIsOpen}) {
    return <StyledNavBar $isOpen={isOpen}>
        <button onClick={() => {setIsOpen(!isOpen)}}><MdOutlineMenu size={32} /></button>
        <div>
        <ul>
            <li>
                <Link to="/" onClick={() => {setIsOpen(false)}}>Home</Link>
            </li>
            <li>
                <Link to="/contact" onClick={() => {setIsOpen(false)}}>Contact</Link>
            </li>
            <li><s>About</s></li>
        </ul>
        </div>
    </StyledNavBar>
}