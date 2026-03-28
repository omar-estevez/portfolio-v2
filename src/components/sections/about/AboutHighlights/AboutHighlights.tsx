import type { AboutProps } from './About.types';
import style from './AboutHighlights.module.css';

export const AboutHighlights = ({ text }: AboutProps) => {
    return (
        <div className={style.highlights__container} >
            <span className={style.highlights__text}>{text}</span>
        </div>
    )
}