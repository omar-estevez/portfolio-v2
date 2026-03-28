import { Button } from "@/components/commons/Button/Button";
import styles from "./HeroActions.module.css";
import { PiDownloadSimple } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { CiMail } from "react-icons/ci";

export const HeroActions = () => {
    return (
        <div className={styles.btn__container}>
            <Button type="primary-scroll" text="View Projects" link="#projects" right icon={<GoArrowRight size={20} />} />
            <Button type="secondary" text="Download Resume" link="/resume/Omar_Estevez_Neira_Resume.pdf" left icon={<PiDownloadSimple size={20} />} />
            <Button type="ghost" text="Contact Me" link="mailto:estevezneira_2005@hotmail.com" left icon={<CiMail size={20} />} />
        </div>
    )
}
