import clsx from 'clsx';
import style from './Tag.module.css';
import type { TagProps } from './Tag.types';

export const Tag = ({ text, variant }: TagProps) => {
    return (
        <span className={clsx(style.tag__container, variant && variant)}>{text}</span>
    )
}
