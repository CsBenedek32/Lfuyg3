import React from "react";
import Dependents from "./Dependents";

const Family = ({familyDiscount,handleFamilyDiscountChange,dependentCount,handleDependentCountChange,discountDependentCount,handleDiscountDependentCountChange}) =>{
   return(
     <>
     <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Családi kedvezmény:</span> 
          <input type="checkbox" checked={familyDiscount} onChange={handleFamilyDiscountChange} className="checkbox" />
        </label>
      </div>
        {familyDiscount && 
        ( <Dependents dependentCount={dependentCount} handleDependentCountChange={handleDependentCountChange} discountDependentCount={discountDependentCount} handleDiscountDependentCountChange={handleDiscountDependentCountChange} />)}
      </>
   )
}

export default Family