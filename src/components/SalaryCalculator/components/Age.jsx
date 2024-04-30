import React from "react";

const Age = ({age,handleAgeChange}) =>{
   return(
     <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">25 év alatti kedvezmény:</span> 
          <input type="checkbox" checked={age} onChange={handleAgeChange} className="checkbox" />
        </label>
      </div>
   )
}

export default Age