import React from "react";
import styles from "../styles/Footer.module.css";
import {
  FaCcVisa,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaCcMastercard,
  FaCreditCard,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pay_methode}>
        <a href="#" id={styles.Visa}>
          <FaCcVisa />
        </a>
        <a href="#" id={styles.mastercard}>
          <FaCcMastercard />
        </a>
        <a href="#" id={styles.credit_card}>
          <FaCreditCard />
        </a>
      </div>
      <div className={styles.Contact}>
        <span>Follow Us</span>
        <div className={styles.social}>
          <a href="#" className={styles.fb}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.tw}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.ln}>
            <FaLinkedin />
          </a>
          <a href="#" className={styles.ins}>
            <FaInstagram />
          </a>
        </div>
        <div className={styles.contact_btns}>
          <a href="#Gmail.com" className={styles.env}>
            Mail Us
          </a>
          <Link href="/ContactUs">
            <a>Contact Us</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
