import style from './SocialLinks.module.css';
import { siteData } from "@/data/site"
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl"

export const SocialLinks = () => {

    return (
        <div className={style.links__container}>
            {siteData.socialLinks.map((data) => (
                <a href={data.href} target="_blank" rel="noopener noreferrer" className={style.link__item}>
                    {data.label === 'GitHub' && <SlSocialGithub />}
                    {data.label === 'LinkedIn' && <SlSocialLinkedin />}
                </a>
            ))}
        </div>
    )
}
