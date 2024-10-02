import Loader from "../components/loader";
import ProductDetails from "../components/product/productDetails";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { filterByTag, getProductById } from "../utils/productFilterUtils";
import ProductList from "../components/productList";
export default function Product() {
    let { id } = useParams();
    const { data, isLoading, isError } = useApi(`https://v2.api.noroff.dev/online-shop/`);
    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <p>{isError}</p>;
    }
    const product = data;
    const productById = getProductById(data, id);
    return (
        <main>
            {product && <ProductDetails product={productById} />}
            <section>
            {productById.tags.map((tag) => {
                const relatedProducts = filterByTag(product, tag, productById);
                return (
                    <div key={tag}>
                        <h3>More from {tag}</h3>
                        {relatedProducts.length > 0 ? (
                            <ProductList data={relatedProducts.slice(0,3)} />
                        ) : (
                            <p>No related Products</p>
                        )}
                    </div>
                );
            })}
            </section>
        </main>
    );
}