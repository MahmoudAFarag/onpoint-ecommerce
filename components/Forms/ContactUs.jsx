import React from "react";
import styles from '../..//styles/ContactUs.module.css';
import Link from "next/link";


const ContactUs = ()=>{
    return(
        <div className={styles.contactUs}>
            <form className={styles.contactForm}>
            <h2>Contact Us</h2>
            <label>
                Your Name:
                <input type="text" name="name" placeholder="Your Name" />
            </label>
            <label>
                Subject:
                <input type="text" name="name" placeholder="Subject" />
            </label>
            <label>
                Message:
                <textarea type="text" name="name" placeholder="Message" />
            </label>
            <Link href='/Thanks' ><input className={styles.btn} type="submit" value="Send" /></Link>
            </form>
        </div>
    )
}
export default ContactUs;