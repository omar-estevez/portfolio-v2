import { Container } from "@/components/commons/Container/Container";
import { SectionTitle } from "@/components/commons/SectionTitle/SectionTitle";
import { Section } from "@/components/layout/Section/Section";
import style from './Stack.module.css';
import { stackCategories } from "@/data/stack";
import { StackCard } from "./StackCard/StackCard";

export const Stack = () => {
    return (
        <Section id='stack'>
            <Container>
                <div className={style.top__items}>
                    <SectionTitle text="Tech Stack" />
                    <p>Technologies and tools I work with regularly.</p>
                </div>
                <div className={style.bottom__items}>
                    {stackCategories.map((data) => (
                        <StackCard key={data.id} title={data.title} items={data.items} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}
