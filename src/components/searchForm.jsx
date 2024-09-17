import { StyledSearchForm } from "./searchForm.styles";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchForm() {
    return <StyledSearchForm>
        <input type="text" placeholder="Search" />
        <button type="submit"><MdOutlineSearch size={32} /></button>
    </StyledSearchForm>
}