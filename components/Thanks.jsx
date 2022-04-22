import React from "react";
import styles from "../styles/Thanks.module.css";
import Link from 'next/link'


const Thanks = () => {
    return(
        <div className={styles.parent}>
            <div className={styles.fristChild}>
                <div className={styles.secondChild}>
                    <h1 className={styles.heading}>Thank you for contacting us, we will reply you soon. </h1>
                </div>
                <Link href='/'><h4 className={styles.goTo}>Go to Home</h4></Link>
            </div>
        </div>
    )
}

export default Thanks;