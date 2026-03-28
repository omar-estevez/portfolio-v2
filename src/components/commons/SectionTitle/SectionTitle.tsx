import style from './SectionTitle.module.css';
import type { SectionTitleProps } from './SectionTitle.type';

export const SectionTitle = ({ text }: SectionTitleProps) => {
    return (
        <h2 className={style.section__title}>{text}</h2>
    )
}
