import React from "react";

const MarriedAge = ({marriageDate,handleMarriageDateChange,jogos}) =>{
   const setDateOpen = () => {
   const modal = document.getElementById('setDateModal');
        if (modal) {
            modal.showModal();
        }
    };
    
    const setDateClose = () => {
    const modal = document.getElementById('setDateModal');
        if (modal) {
         modal.close();
         }
    };
   
    return(
     <div>
        <button className="btn" onClick={setDateOpen}>Hazaságkötés datum hozzáadása</button>
    <dialog id="setDateModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
         <label htmlFor="marriageDate" className="block font-bold mb-1">Házasságkötés dátuma:</label>
          <input
            type="date"
            id="marriageDate"
            value={marriageDate}
            onChange={handleMarriageDateChange}
            className="border border-gray-300 rounded px-2 py-1"
          />
         <div className="modal-action">
            <button className="btn" onClick={setDateClose}>Mégse</button>
         </div>
      </div>
   </dialog>
   
    {jogos ? <span className="px-8 text-xl">jogosult</span> : <span  className=" px-8 text-xl">nem jogosult</span>}
     </div>
   )
}

export default MarriedAge