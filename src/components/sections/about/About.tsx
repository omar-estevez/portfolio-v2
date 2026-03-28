import { SectionTitle } from "@/components/commons/SectionTitle/SectionTitle";
import { Section } from "@/components/layout/Section/Section";
import style from './About.module.css';
import { siteData } from "@/data/site";
import { AboutHighlights } from "./AboutHighlights/AboutHighlights";
import { Container } from "@/components/commons/Container/Container";

export const About = () => {
    return (
        <Section id="about">
            <Container>
                <div className={style.items_container}>
                    <div className={style.item__left}>
                        <SectionTitle text="About me" />
                    </div>
                    <div className={style.item__rigth}>
                        <div className={style.subitems__top}>
                            <p className={style.subitem__p}>{siteData.about.paragraphOne}</p>
                            <p className={style.subitem__p}>{siteData.about.paragraphTwo}</p>
                        </div>
                        <div className={style.subitems__bottom}>
                            {siteData.about.highlights.map((data, i) => (
                                <AboutHighlights key={i} text={data} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
