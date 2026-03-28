import { Container } from "@/components/commons/Container/Container";
import { Section } from "@/components/layout/Section/Section";
import { StrengthCard } from "./StrengthCard/StrengthCard";
import { SectionTitle } from "@/components/commons/SectionTitle/SectionTitle";
import { strengths } from "@/data/strengths";
import style from './Strengths.module.css';

export const Strengths = () => {
    return (
        <Section id='strengths'>
            <Container>
                <div className={style.top__items}>
                    <SectionTitle text="What I Bring" />
                    <p>Core competencies and skills I bring to every project.</p>
                </div>
                <div className={style.bottom__items}>
                    {strengths.map((data) => (
                        <StrengthCard key={data.id} icon={data.icon} title={data.title} description={data.description} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}
