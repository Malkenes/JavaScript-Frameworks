import Loader from "./loader";
import { filterOnSale , getRandomProduct } from "../utils/productFilterUtils";
import { Link } from "react-router-dom";
import ProductCard from "./productCard";
import { FullButton } from "./Button.styles";
import useApi from "../hooks/useApi";

export default function ProductOnSale() {
    const { data, isLoading, isError } = useApi();

    if (isLoading) { return <Loader />; }

    if (isError) { return <p>{isError}</p>; }

    const productsOnSale = filterOnSale(data.data);
    const randomProduct = getRandomProduct(productsOnSale);
    return (
        <Link to={`/product/${randomProduct.id}`}>
            <p>{Math.floor(randomProduct.price - randomProduct.discountedPrice)}</p>
            <ProductCard  data={randomProduct}/>
            <FullButton>Discover Limited Time Offers</FullButton>
        </Link>
    )
}