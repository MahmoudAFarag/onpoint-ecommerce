import { FaCcVisa, FaFacebook, FaTwitter, FaGithub, FaInstagram, FaCcMastercard, FaCreditCard, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='sticky top-[100vh] bg-gray-100 p-8 shadow-inner'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <span className='block whitespace-nowrap text-2xl font-semibold uppercase tracking-wider first-letter:text-yellow-500'>
            OnPoint
          </span>
        </div>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <FaCcVisa className='mr-2 h-6 w-6 fill-slate-900 md:h-7 md:w-7' />
              <FaCcMastercard className='mr-2 h-6 w-6 fill-slate-900 md:h-7 md:w-7' />
              <FaCreditCard className='mr-2 h-6 w-6 fill-slate-900 md:h-7 md:w-7' />

              <a className='flex items-center text-sm text-gray-600 md:text-base' href='mailto:support@onpoint.com'>
                <HiOutlineMail className='ml-4 mr-2 h-5 w-5 fill-yellow-500 md:h-6 md:w-6' />
                Email Us
              </a>

              <Link href='/contact'>
                <a className='flex items-center text-sm text-gray-600 md:text-base'>
                  <FaPhoneAlt className='ml-4 mr-2 fill-gray-700' />
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center'>
          © {new Date().getFullYear() + ' '}
          <a href='https://onpoint-ecommerce.vercel.app/' className='hover:underline'>
            Onpoint™
          </a>
          . All Rights Reserved.
        </span>
        <div className='mt-4 flex items-center space-x-6 sm:mt-0 sm:justify-center'>
          <a href='#' className='text-gray-500 hover:text-gray-900'>
            <FaFacebook className='h-5 w-5' />
          </a>
          <a href='#' className='text-gray-500 hover:text-gray-900'>
            <FaInstagram className='h-5 w-5' />
          </a>
          <a href='#' className='text-gray-500 hover:text-gray-900'>
            <FaTwitter className='h-5 w-5' />
          </a>
          <a href='#' className='text-gray-500 hover:text-gray-900'>
            <FaGithub className='h-5 w-5' />
          </a>
        </div>
      </div>
    </footer>
    // <footer className={styles.footer}>
    //   <div className={styles.pay_methode}>
    //     <a href="#" id={styles.Visa}>
    //       <FaCcVisa />
    //     </a>
    //     <a href="#" id={styles.mastercard}>
    //       <FaCcMastercard />
    //     </a>
    //     <a href="#" id={styles.credit_card}>
    //       <FaCreditCard />
    //     </a>
    //   </div>
    //   <div className={styles.Contact}>
    //     <span>Follow Us</span>
    //     <div className={styles.social}>
    //       <a href="#" className={styles.fb}>
    //         <FaFacebookF />
    //       </a>
    //       <a href="#" className={styles.tw}>
    //         <FaTwitter />
    //       </a>
    //       <a href="#" className={styles.ln}>
    //         <FaLinkedin />
    //       </a>
    //       <a href="#" className={styles.ins}>
    //         <FaInstagram />
    //       </a>
    //     </div>
    //     <div className={styles.contact_btns}>
    //       <a href="#Gmail.com" className={styles.env}>
    //         Mail Us
    //       </a>
    //       <Link href="/ContactUs">
    //         <a>Contact Us</a>
    //       </Link>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
