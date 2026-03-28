import type { StackCardProps } from './StackCard.types';
import style from './StackCard.module.css';
import { Tag } from '@/components/commons/Tag/Tag';

export const StackCard = ({ title, items }: StackCardProps) => {
    return (
        <div className={style.card__container}>
            <h3 className={style.title__item}>{title}</h3>
            <div className={style.tags__container}>
                {items.map((data) => (
                    <Tag text={data} variant={style.tag__container} />
                ))}
            </div>
        </div>
    )
}
