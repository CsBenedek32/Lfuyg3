import React from "react";
import MarriedAge from "./MarriedDate";

const Married = ({married,handleMarriedChange,marriageDate,handleMarriageDateChange,jogos}) =>{
   return(
    <>
     <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-xl">Friss házasok kedvezménye:</span> 
          <input type="checkbox" checked={married} onChange={handleMarriedChange} className="checkbox" />
        </label>
      </div>
      {married && ( <MarriedAge marriageDate={marriageDate} handleMarriageDateChange={handleMarriageDateChange} jogos={jogos}/> )}
      
    </>
   )
}

export default Married