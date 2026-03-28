import type { ReactNode } from 'react';
import style from './CertificationsCard.module.css';
import { PiMedal } from 'react-icons/pi';
import type { CertificationsCardProps } from './CertificationsCard.types';
import { FiExternalLink } from 'react-icons/fi';

export const CertificationsCard = ({ title, issuer, url, icon }: CertificationsCardProps) => {

    const getIcon = (icon: string): ReactNode => {
        switch (icon) {
            case 'medal':
                return <PiMedal />
                    ;
        }
    }

    return (
        <div className={style.card__container}>
            <div className={style.item__container}>
                <div className={style.icon__item}>
                    {getIcon(icon)}
                </div>
                <div className={style.desc__items}>
                    <h3 className={style.title__item}>{title}</h3>
                    <p className={style.desc__item}>{issuer}</p>
                    <a href={url} target='_blank' className={style.url__item}>
                        <span>View credential</span>
                        <FiExternalLink />
                    </a>
                </div>
            </div>
            <div className={style.shadow}></div>
        </div>
    )
}
