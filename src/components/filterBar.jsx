import { useProductStore } from "../stores/useProductStore";
import { StyledFilterBar } from "./filterBar.styles";
export default function FilterBar({products}) {
    const filterList = {};
    const { setFilterTag, setOnSale, clearFilter } = useProductStore();

    products.forEach(product => {
        product.tags.forEach(tag => {
            if (!filterList[tag]) {
                filterList[tag] = {count: 1};
            } else {
                filterList[tag].count++;
            }
        });
    });
    const filterListArray = Object.keys(filterList).map((tag) => ({
        tag, 
        count: filterList[tag].count,
    }));

    filterListArray.sort((a,b) => b.count - a.count);
    return (
        <div style={{position: "relative", overflowX: "auto", marginBottom: "20px"}}>
        <StyledFilterBar>
            <button onClick={clearFilter}>All</button>
            <button onClick={setOnSale}>on sale</button>
            {filterListArray.map((filter) =>(
                <button key={filter.tag} onClick={() => setFilterTag(filter.tag)}>{filter.tag}</button>
            ))}
        </StyledFilterBar>
        </div>
    )
}