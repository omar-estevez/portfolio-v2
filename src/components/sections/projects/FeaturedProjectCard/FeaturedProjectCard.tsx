import { TbPointFilled } from 'react-icons/tb';
import style from './FeaturedProjectCard.module.css';
import type { FeaturesProjectCardProps } from './FeaturedProjectCard.types';

export const FeaturedProjectCard = ({ text }: FeaturesProjectCardProps) => {
    return (
        <div className={style.list__item}>
            <TbPointFilled className={style.icon} />
            <span className={style.list__text}>{text}</span>
        </div>
    )
}
