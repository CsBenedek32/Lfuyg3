import React from "react";

const DisplayNetto = ({ currentID, familyMembersData }) => {
  const member = familyMembersData.find(member => member.newID === currentID);
  const netto = member ? member.netto : "N/A";

  return (
    
    <div>
      
        <p>
          <strong> Netto:</strong>{Math.round(netto)}
        </p>
      
    </div>
  );
};

export default DisplayNetto;
