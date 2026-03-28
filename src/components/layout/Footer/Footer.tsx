import { Container } from "@/components/commons/Container/Container";
import { siteData } from '@/data/site';
import style from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={style.footer__container}>
            <Container>
                <div className={style.container__items}>
                    <p>{siteData.footerText}</p>
                    <p>{siteData.builtWith}</p>
                </div>
            </Container>
        </footer>

    )
}
