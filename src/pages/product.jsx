import Loader from "../components/loader";
import ProductDetails from "../components/productDetails";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
export default function Product() {
    
    let { id } = useParams();
    const { data, isLoading, isError } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`);
    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <p>{isError}</p>;
    }
    const product = data.data;
    return (
        <div>
            {product && <ProductDetails product={product} />}
        </div>
    );
}