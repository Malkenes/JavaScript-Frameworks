import { StyledContact, ContactPageWrapper, FormWrapper } from "./contact.styles"
export default function Contact() {
    return <StyledContact>
        <h1>Contact Us</h1>
        <ContactPageWrapper><FormWrapper>ContactForm</FormWrapper></ContactPageWrapper>
    </StyledContact>
}