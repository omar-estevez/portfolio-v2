import { Container } from "@/components/commons/Container/Container";
import { certifications } from "@/data/certifications";
import style from './Certifications.module.css';
import { Section } from "@/components/layout/Section/Section";
import { SectionTitle } from "@/components/commons/SectionTitle/SectionTitle";
import { CertificationsCard } from "./CertificationsCard/CertificationsCard";

export const Certifications = () => {
    return (
        <Section id='certification'>
            <Container>
                <div className={style.top__items}>
                    <SectionTitle text="Certifications" />
                    <p>Continuous learning and professional development.</p>
                </div>
                <div className={style.bottom__items}>
                    {
                        certifications.map((cert) => (
                            <CertificationsCard key={cert.id} title={cert.title} issuer={cert.issuer} url={cert.credentialUrl} icon="medal" />
                        ))
                    }
                </div>
            </Container>
        </Section>
    )
}
