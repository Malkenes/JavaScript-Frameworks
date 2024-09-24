import { StyledIndex, StyledHero, StyledHeroImage, StyledDiscover, StyledDiscoverItem , StyledAbout } from "./index.styles"
import { FullButton } from "../components/Button.styles"
import ProductOnSale from "../components/productOnSale"
import redBag from "../assets/images/4-bag-red.jpg"
import shampoo from "../assets/images/11-shampoo.jpg"
import toyCar from "../assets/images/12-toy-car.jpg"
export default function IndexPage() {
    return <StyledIndex>
        <StyledHero><StyledHeroImage></StyledHeroImage><div><h1>Discover The Latest Trends in Online Shopping</h1>Welcome to our online store, where we offer a carefully curated selection of high-quality products that cater to your every need<FullButton>Shop Now</FullButton></div></StyledHero>
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
            <h2>About Us</h2>
            <div>
            <div>
                <p>Welcome to QuickBox, your one-stop shop for everything you need! Our mission is simple: to make shopping easy, enjoyable, and tailored to your lifestyle.</p>
                <p>At QuickBox, we believe in putting our customers first. Thats why we focus on providing top-notch customer service, quick delivery, and products that we stand behind. Every item in our store has been selected to meet high standards of quality, ensuring you get the best, no matter what you're shopping for.</p>
            </div>
            <div>
                Sale item
                <ProductOnSale />
            </div>
            </div>
            
        </StyledAbout>
    </StyledIndex>
}