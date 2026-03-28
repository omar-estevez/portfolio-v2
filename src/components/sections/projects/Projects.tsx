import { SectionTitle } from "@/components/commons/SectionTitle/SectionTitle";
import { Section } from "@/components/layout/Section/Section";
import { projects } from "@/data/projects";
import style from './Projects.module.css';
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { Container } from "@/components/commons/Container/Container";


export const Projects = () => {
    return (
        <Section id='projects'>
            <Container>
                <div className={style.item__top}>
                    <SectionTitle text="Featured Projects" />
                    <p className={style.top__p}>A selection of projects that showcase my approach to frontend development and problem-solving.</p>
                </div>
                <div className={style.item__bottom}>
                    {projects.map((project, i) => (
                        <ProjectCard data={project} index={i} />
                    ))}
                </div>
            </Container>



        </Section>
    );
}
