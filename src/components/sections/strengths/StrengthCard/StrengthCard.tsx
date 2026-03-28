import type { StrengthCardProps } from "./StrengthCard.types";
import style from './StrengthCard.module.css';
import { FiMonitor, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { TbLayoutGrid } from "react-icons/tb";
import { LuPlug } from "react-icons/lu";
import { MdOutlinePalette } from "react-icons/md";
import type { ReactNode } from "react";

export const StrengthCard = ({ icon, title, description }: StrengthCardProps) => {

    const getIcon = (icon: string): ReactNode => {
        switch (icon) {
            case 'monitor':
                return <FiMonitor />;
            case 'layout-grid':
                return <TbLayoutGrid />;
            case 'plug':
                return <LuPlug />;
            case 'smartphone':
                return <FiSmartphone />;
            case 'palette':
                return <MdOutlinePalette />;
            case 'trending-up':
                return <FiTrendingUp />;
        }
    }

    return (
        <div className={style.card__container}>
            <div className={style.icon__item}>
                {getIcon(icon)}
            </div>
            <h3 className={style.title__item}>{title}</h3>
            <p className={style.desc__item}>{description}</p>
            <div className={style.shadow}></div>
        </div>
    )
}
