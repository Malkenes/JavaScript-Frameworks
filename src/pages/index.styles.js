import styled from "styled-components";
import productsdisplay from "../assets/images/productsdisplay.png";
export const StyledIndex = styled.main`
`

export const StyledHero = styled.section`
display: flex;
flex-direction: column;
gap: 20px;
min-height: 100vh;
background: #F6F8FA;
@media (min-width: 786px) {
    flex-direction: row;
    align-items: center;
}
`
export const StyledHeroImage = styled.div`
min-height: 80vh;
background: url(${productsdisplay});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
@media (min-width: 786px) {
    width: 100%;
}
`
export const StyledDiscover = styled.section`
display: flex;
gap: 20px;
flex-direction: column;
align-items: center;
@media (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
`

export const StyledDiscoverItem = styled.div`
max-width: 350px;
div {
    display: block;
}
img {
    width: 100%;
}
`

export const StyledAbout = styled.section`
display: flex;
flex-direction: column;
gap: 40px;
align-items: center;
@media (min-width: 786px) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
    > div {
        display: flex;
        justify-content: center;
        width: 50%;
    }
}

`