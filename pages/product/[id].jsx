import React, { useEffect, useState } from "react"
import styles from '../../styles/SingleProduct.module.css';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { useRouter } from "next/router";
import Link from 'next/link';
import { getProduct } from "../../lib/products";
import useStore from '../../store/useStore';
import AddToCartButton from '../../components/cart/AddToCartButton';



const Product =  () => {
      
const [product,setProduct]=useState([])
const addItem = useStore((state) => state.addItem)
      

        const router = useRouter();
 
          const {id} = router.query
          
           console.log(id)
  
          
       useEffect(()=>{
        getProduct(id).then(product=>{
          console.log(product)
          setProduct(product)
      })
      console.log(id)
    
       },[])
       console.log(product)
          
      
    
  const handleAddCart = () => {
    addItem(product);

  };
        
   
    
    return (
      <div>
          <div className={styles.singleproduct}>
             <div className={styles.singleproduct_info}>
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
                    <Link href={{ pathname: '/unauthcashout' }}>
                      <button className={styles.button}> Buy Now</button>
                    </Link>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
      
              <div>
                <div>
                  <strong className={styles.singleproduct_info_text}>
                    <h3>Reviews</h3>
                  </strong>
                </div>
                <div>
                  <ul>
                 {product.reviews?.map((review)=>(
                   <li key={ review.name}>
          
                 <div>
                    <strong className={styles.singleproduct_info_text}>{review.name}</strong>
                  </div>
                  <span className={styles.singleproduct_info_text}>
                   {review.review}
                  </span>
          
                </li>
                    ))}
                    </ul>
                 
                </div>
            
                <br></br>
             
                <div>
                  <label htmlFor=' text' className={styles.singleproduct_info_text}>
                    <h4>
                      <strong>TELL US WHAT YOU THINK</strong>
                    </h4>
                  </label>
                </div>
      
                <div>
                  <div>
                    <h2>
                      You Need To <span className={styles.tex}>Sign In</span> To Tell Us What You Think!{' '}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        );
      };
      export default Product;
      
   