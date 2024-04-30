import React from "react";

const Dependents = ({
  dependentCount,
  handleDependentCountChange,
  discountDependentCount,
  handleDiscountDependentCountChange
}) => {
  
   /* 
   const plusD = () => {
   
      if (dependentCount < 3) {
      handleDependentCountChange(dependentCount + 1);
    }
     
  };

  const minusD = () => {
    if (dependentCount > 0) {
      handleDependentCountChange(dependentCount - 1);
    }
  };

  const plusDC = () => {
    if (discountDependentCount < 3) {
      handleDiscountDependentCountChange(discountDependentCount + 1);
    }
  };

  const minusDC = () => {
    if (discountDependentCount > 0) {
      handleDiscountDependentCountChange(discountDependentCount - 1);
    }
  };*/

  return (
    <>
      <div className="grid">
        <label className="block text-xl mb-1">Eltartottak száma:</label>
        <div className="flex items-center">
       
          <input
            type="number"
            id="dependentCount"
            max="3"
            min="0"
            value={dependentCount}
            onChange={handleDependentCountChange}
            className="border border-gray-300 rounded"
          />
         
        </div>
        <label className="block text-xl mb-1">
          Kedvezményesen eltartottak száma:
        </label>
        <div className="flex items-center">
          
          <input
            type="number"
            id="discountDependentCount"
            max="3"
            min="0"
            
            value={discountDependentCount}
            onChange={handleDiscountDependentCountChange}
            className="border border-gray-300 rounded "
          />
         
        </div>
      </div>
    </>
  );
};

export default Dependents;
