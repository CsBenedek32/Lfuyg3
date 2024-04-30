import React, { useState, useEffect } from 'react';
import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import MainContent from './MainContent';

const HouseholdSalaryCalculator = () => {
  
  
  const [familyMembersData, setfamilyMembersData] = useState([]);
  const [currentID, setCurrentID] = useState(-1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [id, setId] = useState(0);

  useEffect(() => {
    setIsDrawerOpen(true);
  }, []);
  

  const createFamilyMember = (name, brutto, age, married, marriedDate, discount,familyD,elt,kelt ,netto) => {
    const newID = id+1;
    const newPerson = { name, brutto, age, married, marriedDate, discount, familyD, elt, kelt, netto ,newID};
    console.log(newPerson);
    setId(newID);
    setfamilyMembersData(prevPersons => [...prevPersons, newPerson]);
    setCurrentID(newPerson.newID);
  };

   
 
    const getFamilyMemberByID = (id) => {
    const person = familyMembersData.find(p => p.newID === id);
    return person ? person: null;
  };
  
  const editPersonDataById = (id, newData) => {
    setfamilyMembersData(prevData => {
      return prevData.map(person => {
        if (person.newID === id) {
          return { ...person, ...newData };
        }
        return person;
      });
    });
  };
  

  

  
  
  return (
   <>
<div className="navbar sticky  w-100  py-4 bg-neutral text-neutral-content">
   <div className='navbar-start'><label htmlFor="my-drawer" className="btn text-2xl btn-primary drawer-button">Felhasznaló valtás</label></div>
   <div className='navbar-end'><button className="btn  btn-ghost text-4xl">Bérkalkulátor alkalmazás</button></div>
</div>
<div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={() => setIsDrawerOpen(!isDrawerOpen)} />
   <div className="drawer-content">
      <MainContent 
         familyMembersData={familyMembersData}
        
         currentID={currentID}

        
         editPersonDataById={editPersonDataById}

     
         getFamilyMemberByID={getFamilyMemberByID}
         
         />
   </div>
   <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
         <FamilyMemberTabs 
            familyMembersData={familyMembersData} 
            setfamilyMembersData={setfamilyMembersData} 
            createFamilyMember={createFamilyMember} 
            currentID={currentID}
            setCurrentID={setCurrentID}
            />
      </ul>
   </div>
</div>

</>
);
};

export default HouseholdSalaryCalculator;
