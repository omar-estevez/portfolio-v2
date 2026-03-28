import type { SectionProps } from "./Section.type";
import style from './Section.module.css';
import { motion } from "framer-motion";

export const Section = ({ children, id }: SectionProps) => {
    return (
        <motion.section
            id={id}
            className={style.section__container}
            style={{
                ...(id === 'hero' && { minHeight: '100vh' }),
                ...((id === 'projects' || id === 'stack' || id === 'contact') && { background: 'color-mix(in srgb, #121922 50%, transparent)' })
            }}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.section>
    )
}
