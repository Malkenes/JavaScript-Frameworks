import { StyledSearchForm } from "./searchForm.styles";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchForm({setIsOpen}) {
    return <StyledSearchForm>
        <input onFocus={() => {setIsOpen(false)}} type="text" placeholder="Search" />
        <button type="submit"><MdOutlineSearch size={32} /></button>
    </StyledSearchForm>
}