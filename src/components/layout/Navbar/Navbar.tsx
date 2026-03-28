import style from './Navbar.module.css';
import { siteData } from '@/data/site';
import { navigationLinks } from '@/data/navigation';
import { Button } from '@/components/commons/Button/Button';
import { GrDocumentDownload } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (!open) {
                setScrolled(window.scrollY > 40);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [open]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <nav className={clsx(style.nav__container, scrolled && style.nav__container__scroll)}>
            <div className={style.nav__subcontainer}>
                <div className={style.items__container}>
                    <a className={style.item__name} href="#">{siteData.name}</a>
                    <button className={style.menu__toggle} onClick={() => setOpen(!open)} > {open ? <FiX /> : <FiMenu />}</button>
                    <div className={clsx(style.list__container, open && style.active)}>
                        {navigationLinks.map((data) => (
                            <a key={data.href} className={style.list__item} href={data.href} onClick={() => setOpen(false)}>{data.label}</a>
                        ))}
                        <Button type="primary" text="Resume" link="/resume/Omar_Estevez_Neira_Resume.pdf" left icon={<GrDocumentDownload />} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
