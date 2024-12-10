import { filterOnSale, getRandomProduct } from "../../utils/productFilterUtils";
import { Link } from "react-router-dom";
import ProductCard from "./productCard";
import { StyledAnchor } from "../Button.styles";
import { StyledProductOnSale } from "./productOnSale.styles";
import { useProductStore } from "../../stores/useProductStore";
import { useEffect, useState } from "react";

export default function ProductOnSale({ productData }) {
  const { setOnSale } = useProductStore();
  const products = filterOnSale(productData);
  const [randomProduct, setProducts] = useState(getRandomProduct(products));
  useEffect(() => {
    setProducts(getRandomProduct(products));
  }, []);

  return (
    <StyledProductOnSale>
      <span>
        Save {Math.floor(randomProduct.price - randomProduct.discountedPrice)}{" "}
        kr
      </span>
      <Link to={`/product/${randomProduct.id}`}>
        <ProductCard data={randomProduct} />
      </Link>
      <StyledAnchor onClick={setOnSale} href="#product-section">
        Discover Limited Time Offers
      </StyledAnchor>
    </StyledProductOnSale>
  );
}
