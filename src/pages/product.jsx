import { useEffect, useState } from "react";
import { getProduct } from "../api/products/getProduct";
import Loader from "../components/loader";
import ProductDetails from "../components/productDetails";
export default function Product() {
    const [product, setProduct] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProduct();
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
    //"159fdd2f-2b12-46de-9654-d9139525ba87"
    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <p>{isError}</p>;
    }
    return (
        <div>
            {product && <ProductDetails product={product[0]} />}
        </div>
    );
}