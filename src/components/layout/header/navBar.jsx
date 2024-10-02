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
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li><s>About</s></li>
        </ul>
        </div>
    </StyledNavBar>
}