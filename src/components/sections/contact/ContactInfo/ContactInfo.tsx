import { SectionTitle } from "@/components/commons/SectionTitle/SectionTitle";
import { siteData } from '@/data/site';
import { ContactCard } from "../ContactCard/ContactCard";
import style from './ContactInfo.module.css';

export const ContactInfo = () => {
    return (
        <div className={style.items__container}>
            <div className={style.top__items}>
                <SectionTitle text={siteData.contactTitle} />
                <p>{siteData.contactDescription}</p>
            </div>
            <div>
                {siteData.contactLinks.map((data) => (
                    <ContactCard key={data.id} label={data.label} link={data.href} value={data.value} icon={data.id} />
                ))}
            </div>
        </div>
    )
}
