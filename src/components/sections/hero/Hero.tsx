import { siteData } from '@/data/site';
import { HeroActions } from './HeroActions/HeroActions';
import { ProfileCard } from './ProfileCard/ProfileCard';
import { SocialLinks } from './SocialLinks/SocialLinks';
import style from './Hero.module.css';
import { Badge } from '@/components/commons/Badge/Badge';
import { TbPointFilled } from 'react-icons/tb';
import { Section } from '@/components/layout/Section/Section';
import { Container } from '@/components/commons/Container/Container';

export const Hero = () => {
    return (
        <Section id='hero'>
            <Container>
                <div className={style.subcontainer}>
                    <div className={style.item__site}>
                        <Badge text={siteData.availabilityBadge} icon={<TbPointFilled />} />
                        <div className={style.title__container}>
                            <h1 className={style.subitem__header}>{siteData.name}</h1>
                            <p className={style.subitem__title}>{siteData.title}</p>
                        </div>

                        <p className={style.subitem__description}>{siteData.heroDescription}</p>

                        <HeroActions />
                        <SocialLinks />
                    </div>
                    <div className={style.item__site}>
                        <ProfileCard />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
