import { Container } from "@/components/commons/Container/Container"
import { Section } from "@/components/layout/Section/Section"
import { ContactInfo } from "./ContactInfo/ContactInfo"

export const Contact = () => {
    return (
        <Section id="contact">
            <Container>
                <ContactInfo />
            </Container>
        </Section>
    )
}
