import type { ReactNode } from 'react';
import style from './ContactCard.module.css';
import type { ContactCardProps } from './ContactCard.types';
import { CiMail } from 'react-icons/ci';
import { SlLocationPin, SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';

export const ContactCard = ({ label, link, value, icon }: ContactCardProps) => {

    const getIcon = (icon: string): ReactNode => {
        switch (icon) {
            case 'email':
                return <CiMail />;
            case 'linkedin':
                return <SlSocialLinkedin />;
            case 'github':
                return <SlSocialGithub />;
            case 'location':
                return <SlLocationPin />;
        }
    }

    return (
        <div className={style.card__container}>
            <a href={link}>
                <div className={style.subitem}>
                    <div className={style.subitem__icon}>
                        {getIcon(icon)}
                    </div>
                    <span className={style.subitem__text}>{label}</span>
                    <span className={style.subitem__text__two}>{value}</span>
                </div>
            </a>
        </div>
    )
}
