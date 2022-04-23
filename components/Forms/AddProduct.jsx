import React from "react";

const AddProduct= ()=>{
  
    return(

 <div>
     <h1 className="bg-white font-bold pb-4 ">Add Product</h1>

<form className="pb-4">
   <div className="flex pb-4  " >
        <div className="flex flex-col">
           <label className="pb-2">
                Title
            </label>
   
           <input type="text" name="name" placeholder="Title" className="bg-slate-400 resize rounded-md"  />
     </div>
   <div className="flex flex-col pl-5 pb-4 ">
      <label >
           Price
      </label>
         <div className="flex ">
           <input type="text" name="name" placeholder="Price"  className="bg-slate-400 resize rounded-md "/>
           <h4 className="bg-slate-900 text-white resize rounded-md pl-1 pr-1 ">$</h4>
           </div>


   </div>
    </div>
    <div className="flex flex-col pb-4" >
      <label className="pb-2">
           Description
      </label>
   
           <textarea type="text" name="name" placeholder="Description" className="bg-slate-400 resize rounded-md w-1/3"  />
     </div>
     <div className="flex flex-col pb-4">
      <label className="pb-2">
           Images
      </label>
   
           <input type="file" name="upload" placeholder="Upload" accep="image/*"   />
     </div>
     <div className="flex flex-col pb-4">
      <label className="pb-2">
      Choose a  Catagory
      </label>
   
           <select id="catagory" name="catagory" className="w-1/6">
               <option value="cloth">
                  Cloth
               </option>
               <option value="cloth">
                 Games
               </option>

           </select>
     </div>
     
     <div className="flex flex-col pb-4">
           <label className="pb-2">
              Choose a  Brand
          </label>
   
                <select id="catagory" name="catagory" className="w-1/6" >
                     <option value="LG">
                         LG
                     </option>
                     <option value="SONY">
                         SONY
                     </option>

                    </select>
       </div>

 </form>
   <button className="bg-amber-400 font-bold py-2 px-4 rounded"> Add</button>




                              </div>
    )

}

export default AddProduct