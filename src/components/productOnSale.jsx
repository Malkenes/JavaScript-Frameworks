import Loader from "./loader";
import { filterOnSale , getRandomProduct } from "../utils/productFilterUtils";
import { Link } from "react-router-dom";
import ProductCard from "./productCard";
import { FullButton } from "./Button.styles";
import useApi from "../hooks/useApi";
import { StyledProductOnSale } from "./productOnSale.styles";

export default function ProductOnSale() {
    const { data, isLoading, isError } = useApi();
    if (isLoading) { return <Loader />; }

    if (isError) { return <p>{isError}</p>; }

    const productsOnSale = filterOnSale(data.data);
    const randomProduct = getRandomProduct(productsOnSale);
    return (
        <StyledProductOnSale>
            <span>Save {Math.floor(randomProduct.price - randomProduct.discountedPrice)} kr</span>
            <Link to={`/product/${randomProduct.id}`}>
                <ProductCard  data={randomProduct}/>
            </Link>
            <FullButton>Discover Limited Time Offers</FullButton>
        </StyledProductOnSale>
    )
}