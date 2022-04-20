import React, { useEffect, useState } from "react"
import styles from '../../styles/SingleProduct.module.css';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useRouter } from "next/router";
import Link from 'next/link';
import { getProduct } from "../../lib/products";
import { async } from "@firebase/util";



const Product =  () => {
      
const [product,setProduct]=useState({})
    
      
        
  
    

     

        const router = useRouter();

       
          const {id} = router.query
          
           console.log(id)
     
         
         
        
          
         
          
       useEffect(()=>{
        getProduct(id).then(data=>{
          console.log(data)
          setProduct(data)
      }).catch(err=>{
          console.log(err)
      })
      console.log(id)
    
       },[])
       console.log(product)
          
      
        
       
      

      

        


      
       
      
         
    
    return (
  <>
   
         <Header/>

              <div className={styles.singleproduct}>                               
                                  <div className={styles.singleproduct_info} >
                                        <img src={product.image} className={styles.avatar_product} />
                                          <div>
                                                  <div>
                                                    
                                                     <strong className={styles.singleproduct_info_text}></strong>
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
                                                   <Link href={{pathname:'/unauthcashout'}}>
                                                     <button className={styles.button} > Buy Now </button>
                                                     </Link>
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
                                     <h2>You Need To <span className={styles.tex}>Sign In</span> To Tell Us What You Think! </h2>
                                 </div>   
                 </div>

                 </div>
                                       
                                                   
                                       
              </div>
         <Footer/>    
</>        
         
    );
  };
  export default Product;