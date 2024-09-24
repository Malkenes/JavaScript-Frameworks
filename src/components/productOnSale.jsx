import { useEffect, useState } from "react";
import Loader from "./loader";
import { filterOnSale , getRandomProduct } from "../utils/productFilterUtils";
import { getProduct } from "../api/products/getProduct";
import { Link } from "react-router-dom";
import ProductCard from "./productCard";
import { FullButton } from "./Button.styles";

export default function ProductOnSale() {
    const [saleProduct, setSaleProduct] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(null);
    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProduct();
                const saleProduct = filterOnSale(data);
                const randomProduct = getRandomProduct(saleProduct);
                setSaleProduct(randomProduct);
                console.log(randomProduct);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [])
    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <p>{isError}</p>;
    }
    return (
        <Link to={`/product/${saleProduct.id}`}>
            <p>{Math.floor(saleProduct.price - saleProduct.discountedPrice)}</p>
            <ProductCard  data={saleProduct}/>
            <FullButton>Discover Limited Time Offers</FullButton>
        </Link>
    )
}