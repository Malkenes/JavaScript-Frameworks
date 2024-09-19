import styled from "styled-components";
import sunDown from "../assets/images/sundownBackground.jpeg";
export const StyledContact = styled.main`
background: url(${sunDown});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
h1 {
font-size: 32px;
}
`

export const ContactPageWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`
export const FormWrapper = styled.div`
background: rgba(255, 255, 255, 0.6);
min-height: 200px;
min-width: 200px;
padding: 20px;
border-radius: 16px;
`

