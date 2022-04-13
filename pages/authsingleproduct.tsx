import React,{useState} from "react"
import styles from '../styles/SingleProduct.module.css';
import Header from "../components/Header";
import Footer from '../components/Footer'
import { withRouter } from "next/router";


const Product = ({router:{query}}) => {

  
    const product =JSON.parse(query.object)
    return (
  <div>
         <Header/>

              <div className={styles.singleproduct}>                               
                                  <div className={styles.singleproduct_info} >
                                        <img src={product.image} className={styles.avatar_product} />
                                          <div>
                                                  <div>
                                                     <strong className={styles.singleproduct_info_text}>{product.name}</strong>
                                                  </div>
                                                  <div>
                                                     <span className={styles.singleproduct_info_text}>Brand: {product.category}</span>
                                                  </div>
                                                     <span className={styles.singleproduct_info_text}>Price:${product.price}</span>
                                                  <div>
                                                                          <br></br>
                                                  <div>
                                                     <strong className={styles.singleproduct_info_text}>About This Item</strong>
                                                 </div>
                                                     <span className={styles.singleproduct_info_text}>{product.description}</span>
                                                 </div>
                                                                          <br></br>
                                                   <div className={styles.buttontwo}>
                                                     <button className={styles.button} > Buy Now</button>
                                                     <button className={styles.button1} > Add To Cart</button>
                                                   </div>
                                          </div>
                                   </div> 

                  <div>
                            <div>
                           <strong className={styles.singleproduct_info_text}><h3>Reviews</h3></strong>
                            </div>
                            <div>
                                <div>
                                  <strong className={styles.singleproduct_info_text}>Steve R</strong>
                                </div> 
                                  <span className={styles.singleproduct_info_text}>I’ll start with what I dislike, it’s a real shame, but video cards are way overpriced! It’s a great card </span>
                          </div>
                                                   <br></br>
                          <div>
                              <div>
                                <strong className={styles.singleproduct_info_text}>Marie J</strong>
                              </div> 
                                <span className={styles.singleproduct_info_text}>I’ll start with what I dislike, it’s a real shame, but video cards are way overpriced! It’s a great card </span>
                         </div>
                    <div>
                           <label  htmlFor=" text" className={styles.singleproduct_info_text}><h4><strong>TELL US WHAT YOU THINK</strong></h4></label>
                    </div>

                 <div>
                 
                                    
                                   <div>
                                      <input type='text' id ='n' placeholder="TELL US WHAT YOU THINK"  width='50' height='50'/>
                                   </div>
                                   <br></br>
                                    <div>
                                   <button className={styles.button1} > Send Us!</button>
                                   </div>
                 </div>

                 </div>
                                       
                                                   
                                       
              </div>
         <Footer/>    
</div>        
         
    );
  };
  
  export default withRouter(Product) 