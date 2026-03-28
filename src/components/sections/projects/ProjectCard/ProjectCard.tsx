import { Badge } from "@/components/commons/Badge/Badge";
import style from './ProjectCard.module.css';
import type { ProjectCardProps } from "./ProjectCard.types";
import { Tag } from "@/components/commons/Tag/Tag";
import { FeaturedProjectCard } from "../FeaturedProjectCard/FeaturedProjectCard";
import { Button } from "@/components/commons/Button/Button";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialGithub } from "react-icons/sl";
import { LuBuilding2 } from "react-icons/lu";

export const ProjectCard = ({ data, index }: ProjectCardProps) => {

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    return (
        <div className={style.subitem__bottom} style={{ ...(index === 0 && isDesktop && { gridColumnStart: 1, gridColumnEnd: 3 }) }}>
            <div key={data.id} className={style.article__container}>
                <Badge text={data.badge} styles={{ marginBottom: '1.5rem' }} />
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className={style.tag__container}>
                    {data.stack.map((data, i) => (
                        <Tag key={i} text={data} />
                    ))}
                </div>
                <div className={style.list__container}>
                    {data.highlights.map((data, i) => (
                        <FeaturedProjectCard key={i} text={data} />
                    ))}
                </div>
                <div className={style.btns__container}>
                    {data.live && <Button type="ghost" text="Live Demo" link={data.live} left icon={<FiExternalLink size={20} />} />}
                    {data.github && <Button type="ghost" text="GitHub" link={data.github} left icon={<SlSocialGithub size={20} />} />}
                    {data.companySite && <Button type="ghost" text="Company Site" link={data.companySite} left icon={<FiExternalLink size={20} />} />}
                    {data.dashboard && <Button type="ghost" text="Dashboard" link={data.dashboard} left icon={<LuBuilding2 size={20} />} />}
                </div>
                {data.note && <span className={style.note__item}>{data.note}</span>}
                <div className={style.subarticle__shadow}></div>
            </div>
        </div>
    )
}
