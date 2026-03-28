import style from './Badge.module.css';
import type { BadgeProps } from './Badge.types';

export const Badge = ({ text, icon, styles }: BadgeProps) => {
    return (
        <div className={style.badge__container} style={styles}>
            {icon && <div className={style.badge__icon}>{icon}</div>}
            <span className={style.badge__text}>{text}</span>
        </div>
    )
}
