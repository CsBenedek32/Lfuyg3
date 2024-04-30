import React from "react";

const Brutto = ({grossSalary,handleSalaryChange}) =>{
   return(
   <div>
        <label htmlFor="grossSalary" className="block mb-1">Brutto Bér:</label>
        <input
          type="number"
          id="grossSalary"
          value={grossSalary}
          onChange={handleSalaryChange}
          className="border border-gray-300 rounded px-2 py-1"
          placeholder="Brutto bér?"
        />
        <p className='text-xl'>adja meg a brutto bérét</p>
      </div>)
}

export default Brutto