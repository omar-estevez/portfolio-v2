import clsx from "clsx";
import styles from './ProfileCard.module.css';
import myImage from '/images/hero/suit_me.jpg';
import { siteData } from '@/data/site';
import { TbPointFilled } from "react-icons/tb";
import { useState } from "react";

export const ProfileCard = () => {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={clsx(styles.card__container)}>
            <div className={styles.card__pic}>
                {!loaded || error ? (<p className={styles.card__pic__text}>{siteData.shortName}</p>) : null}
                <img src={myImage}
                    alt="OE"
                    style={{ display: loaded && !error ? "block" : "none" }}
                    onLoad={() => setLoaded(true)}
                    onError={() => {
                        setError(true);
                        setLoaded(false);
                    }}
                />
            </div>
            <div>
                {siteData.profileHighlights.map((data, i) => (
                    <div key={i} className={styles.card__info}>
                        <TbPointFilled className={styles.card__info__point} />
                        <span>{data}</span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
