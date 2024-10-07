import { StyledIndex, StyledHero, StyledHeroImage, StyledDiscover, StyledDiscoverItem , StyledAbout, StyledFilterBar, StyledSearchForm, StyledSorting, ProductContainer } from "./index.styles"
import { StyledLink, StyledAnchor } from "../components/Button.styles"
import ProductOnSale from "../components/product/productOnSale"
import ProductList from "../components/product/productList"
import useApi from "../hooks/useApi"
import Loader from "../components/loader"
import redBag from "../assets/images/4-bag-red.jpg"
import shampoo from "../assets/images/11-shampoo.jpg"
import toyCar from "../assets/images/12-toy-car.jpg"
import { useProductStore } from "../stores/useProductStore"
import { useEffect } from "react"
import { MdOutlineSearch } from "react-icons/md";
export default function IndexPage() {
    const { data , isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop/",);
    const { filteredProducts, setProducts } = useProductStore();
    useEffect(() => {
        if (data && !isLoading) {
            setProducts(data);
        }
    }, [data, isLoading, setProducts]);
    if (isLoading) { return <Loader />; }

    if (isError) { return <p>{isError}</p>; }
    return <StyledIndex>
        <StyledHero>
            <StyledHeroImage />
            <div>
                <h1>Discover The Latest Trends in Online Shopping</h1>
                <p>Welcome to our online store, where we offer a carefully curated selection of high-quality products that cater to your every need</p>
                <StyledAnchor href="#product-section">Shop Now</StyledAnchor>
            </div>
        </StyledHero>
        <StyledDiscover>
            <StyledDiscoverItem>
                <div><img src={redBag} alt="" /></div>
                <h3>Fashion</h3>
                Elevate your style with our  carefully curated collection
            </StyledDiscoverItem>
            <StyledDiscoverItem>
                <div><img src={shampoo} alt="" /></div>
                <h3>Fashion</h3>
                Elevate your style with our  carefully curated collection
            </StyledDiscoverItem>
            <StyledDiscoverItem>
                <div><img src={toyCar} alt="" /></div>
                <h3>Fashion</h3>
                Elevate your style with our  carefully curated collection
            </StyledDiscoverItem>
        </StyledDiscover>
        <StyledAbout>
            <div>
                <div>
                    <h2>About Us</h2>
                    <p>Welcome to QuickBox, your one-stop shop for everything you need! Our mission is simple: to make shopping easy, enjoyable, and tailored to your lifestyle.</p>
                    <p>At QuickBox, we believe in putting our customers first. Thats why we focus on providing top-notch customer service, quick delivery, and products that we stand behind. Every item in our store has been selected to meet high standards of quality, ensuring you get the best, no matter what you're shopping for.</p>
                </div>
            </div>
            <div>
                <ProductOnSale productData={data} />
            </div>
            
        </StyledAbout>
        <section id="product-section">
            <h2>Products</h2>
            <ProductContainer>
                <StyledSorting>
                    <SearchBar />
                    <FilterBar />
                    </StyledSorting>
                <ProductList data={filteredProducts} />
            </ProductContainer>
        </section>
    </StyledIndex>
}

function FilterBar() {
    const filterList = {};
    const { products, setFilterTag, setOnSale, clearFilter } = useProductStore();

    products.forEach(product => {
        product.tags.forEach(tag => {
            if (!filterList[tag]) {
                filterList[tag] = { count: 1 };
            } else {
                filterList[tag].count++;
            }
        });
    });
    const filterListArray = Object.keys(filterList).map((tag) => ({
        tag,
        count: filterList[tag].count,
    }));

    filterListArray.sort((a, b) => b.count - a.count);
    return (
            <StyledFilterBar>
                <button onClick={clearFilter}>All</button>
                <button onClick={setOnSale}>on sale</button>
                {filterListArray.map((filter) => (
                    <button key={filter.tag} onClick={() => setFilterTag(filter.tag)}>{filter.tag}</button>
                ))}
            </StyledFilterBar>
    );
}

function SearchBar() {
    const { searchQuery, setSearchQuery, clearFilter } = useProductStore();

    function handleSearch(event) {
        const query = event.target.value;
        setSearchQuery(query);
    }
    return (
        <StyledSearchForm>
            <MdOutlineSearch size={32} />
            <input 
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                aria-label="search"
            />
            <button onClick={clearFilter}>clear</button>
        </StyledSearchForm>
    )
}
