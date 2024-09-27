import ProductCard from "./productCard";
import { StyledProductList } from "./productList.styles";
import { StyledLink } from "./Button.styles";
export default function ProductList({data}) {
    const products = data.data;
    return (
        <StyledProductList>
            {products.map((product) => (
                <div key={product.id}><ProductCard  data={product}/><div style={{padding: "0 1em 1em 1em"}}><StyledLink to={`/product/${product.id}`}>View</StyledLink></div></div>
            ))}
        </StyledProductList>
    );
}