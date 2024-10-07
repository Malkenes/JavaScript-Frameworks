import { StyledContact, ContactPageWrapper, FormWrapper } from "./contact.styles"
import ContactForm from "../components/contactForm"
export default function Contact() {
    return <StyledContact>
        <ContactPageWrapper>
            <FormWrapper>
                <h1>Contact Us</h1>
                <ContactForm />
            </FormWrapper>
        </ContactPageWrapper>
    </StyledContact>
}