import Link from 'next/link';
import useStore from '../../store/useStore';

const ThanksForPurchase =()=>{

    

    return(
        <div>
             <h1 className="h-10 w-full bg-slate-700 py-2 text-center text-white w-90 "> Thank You For Your Purchase We Will Email You Soon</h1>
                <div className="pb-60">
               <h2 className="h-10 w-full bg-slate-700 py-2 text-center text-white w-90  " > Confirmation Number:{(Math.floor(Math.random()*100) )}                </h2>
               </div>
                   <div className=' flex items-center justify-center pb-16'>
                          <Link  href={ {pathname:'/'}} >
                         <button className="bg-amber-400 font-bold py-2 px-4  pb-3 rounded "
                         >Back To HomePage</button>
                         </Link>
                   </div>
        </div>
    )
}
export default ThanksForPurchase;