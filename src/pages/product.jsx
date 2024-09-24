import { useEffect, useState } from "react";
import { getProduct } from "../api/products/getProduct";
import Loader from "../components/loader";
import ProductDetails from "../components/productDetails";
import { useParams } from "react-router-dom";
export default function Product() {
    const [product, setProduct] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(null);
    let { id } = useParams();
    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProduct(id);
                setProduct(data);
                console.log(data);
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
        <div>
            {product && <ProductDetails product={product} />}
        </div>
    );
}