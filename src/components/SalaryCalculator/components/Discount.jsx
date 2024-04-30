import React from "react";

const Discount = ({discount,handleDiscountChange}) =>{
   return(
     <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Személyi adó kedvezmény:</span> 
          <input type="checkbox" checked={discount} onChange={handleDiscountChange} className="checkbox" />
        </label>
      </div>
   )
}

export default Discount