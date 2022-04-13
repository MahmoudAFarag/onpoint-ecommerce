import React,{useState} from "react"
import styles from '../styles/SingleProduct.module.css';
import { withRouter } from "next/router";


const Product = ({router:{query}})=> {
  const [counter,setCounter]=useState(0);
     const AddToCart =()=>{
       setCounter(1)
     }
   
     const product =JSON.parse(query.object)
    return (

<div className={styles.singleproduct}>
  <div className={styles.singleproduct_cart}>
    <h4>{counter}</h4>
   <img
              
          src={"https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"}
          
           className={styles.avatar}
             /> 
             </div>
             
         <div className={styles.singleproduct_info} >
           <img
          src={product.image}
           alt='singleProduct image'
            className={styles.avatar_product}
             /> 
          <p> <h3 className={styles.singleproduct_info_text}>{product.description}</h3></p>
         </div>

         <button className={styles.button} onClick={AddToCart}> Add To Cart</button>
         <button className={styles.button} > Buy Now</button>
  
</div>
     
    );
  };
  
  export default withRouter(Product);
  