import React from 'react';
import styles from '../styles/CashOut.module.css';
import Footer from '../components/Footer';

const CashOut = () => {
  return (
    <div>
      <div>
        <div className={styles.photos}>
          <div>
            <h2>
              <strong>CheckOut</strong>
            </h2>
            <br></br>
            <div>
              <h3>Discount:</h3>
              <br></br>
              <span>Totat: $900</span>
              <br></br>
              <span>Shipping: $9</span>
              <br></br>
              <span>Discount: $200</span>
              <br></br>
              <span>Total After Discount: $709</span>
            </div>
            <br></br>
            <div>
              <div>
                <span>
                  {' '}
                  <strong>Items To Deliver:4</strong>
                </span>
              </div>

              <div className={styles.photos}>
                <img src={'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png'} className={styles.avatar1} />
                <img src={'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png'} className={styles.avatar1} />
                <img src={'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png'} className={styles.avatar1} />
                <img src={'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png'} className={styles.avatar1} />
              </div>
              <button className={styles.button}>
                {' '}
                <span className={styles.main1}>Back To Cart</span>{' '}
              </button>
            </div>
          </div>

          <div className={styles.center}>
            <div>
              <div>
                <h2>DELIVERY ADDRESS:</h2>
                <address>4517 Washington Ave. Manchester, Kentucky 39495 </address>
              </div>
              <br></br>
              <div>
                <h2>PAYMENT METHOD:</h2>
              </div>
              <br></br>
              <div>
                <input id='Cash' name='CashOnDelivery' type='radio' value='COD' />
                <label htmlFor='COD'> Cash On Delivery</label>
              </div>
              <div>
                <input id='Card' name='PayByCard' type='radio' value='PBC' />
                <label htmlFor='PBC'> Pay By Card</label>
              </div>
              <br></br>
              <div>
                <h2>CARD DETAILS:</h2>
              </div>
              <br></br>
              <div className={styles.photos}>
                <div>
                  <div>
                    <div>
                      <label htmlFor='PBC'>Card Number</label>
                    </div>
                    <div>
                      <input type='card' id='number' placeholder='Card Number' />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor='PBC'>CardHolder Name</label>
                    </div>
                    <div>
                      <input type='card' id='number' placeholder='CardHolder Name' />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <label htmlFor='PBC'>Expiry Code</label>
                    </div>
                    <div>
                      <input type='card' id='number' placeholder='card Expiry Code' />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor='PBC'>Security Code</label>
                    </div>
                    <div>
                      <input type='tel' id='phone' placeholder='Security Code' />
                    </div>
                  </div>
                </div>
              </div>

              <button className={styles.button}>
                <span className={styles.main1}>Confirm</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default CashOut;
