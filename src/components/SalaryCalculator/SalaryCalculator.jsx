import React, { useState,useEffect  } from 'react';
import Brutto from './components/Brutto.jsx';
import Name from './components/Name.jsx';
import Age from './components/Age.jsx';
import Married from './components/Married.jsx';
import Discount from './components/Discount.jsx';
import Family from './components/Family.jsx';
import DisplayNetto from './components/DisplayNetto.jsx';

const SalaryCalculator = ({familyMembersData,getFamilyMemberByID,currentID,editPersonDataById}) => {
  const [name, setName] = useState('');
  const [grossSalary, setGrossSalary] = useState('');
  
  const [age, setAge] = useState('');
  const [married, setMarried] = useState('');
  const [discount, setDiscount] = useState('');

  const [marriageDate, setMarriageDate] = useState('');
  const [jogos, setjogos] = useState(false);

  const [familyDiscount, setFamilyDiscount] = useState(false);
  const [dependentCount, setDependentCount] = useState(0);
  const [discountDependentCount, setDiscountDependentCount] = useState(0);

  useEffect(() => {
    console.log(familyMembersData);
    if (currentID !== -1) {
      let currentMemberData = getFamilyMemberByID(currentID);
      setGrossSalary(currentMemberData.brutto);
      setName(currentMemberData.name);
      setAge(currentMemberData.age);
      setMarried(currentMemberData.married);
      setDiscount(currentMemberData.discount);
      
      setFamilyDiscount(currentMemberData.familyD || false);
      setDependentCount(currentMemberData.elt || 0);
      setDiscountDependentCount(currentMemberData.kelt || 0);
  }
    
  }, [currentID]);


   const handleFamilyDiscountChange = (e) => {
    const newValue = e.target.checked;
    setFamilyDiscount(newValue);
    editPersonDataById(currentID, { familyD: newValue });
  };

  const handleDependentCountChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue >= discountDependentCount) {
      setDependentCount(newValue);
       editPersonDataById(currentID, { elt: newValue });
    }
  };

  const handleDiscountDependentCountChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= dependentCount) {
      setDiscountDependentCount(newValue);
      editPersonDataById(currentID, { kelt: newValue });
    }
  };

   const handleAgeChange = (e) => {
    const newValue = e.target.checked;
    
    setAge(newValue);
    
     editPersonDataById(currentID, { age: newValue });
  };

 const handleMarriedChange = (e) => {
    const newValue = e.target.checked;
    setMarried(newValue);
    if (!newValue) {
      setMarriageDate(''); 
    }
    editPersonDataById(currentID, { married: newValue, marriedDate: newValue ? marriageDate : null });
  };

  const handleMarriageDateChange = (e) => {
    const newDate = e.target.value;
    setMarriageDate(newDate);
    
    editPersonDataById(currentID, { marriedDate: newDate });
    jog(newDate)
  };

  const handleDiscountChange = (e) => {
    const newValue = e.target.checked;
    
    setDiscount(newValue);
   
     editPersonDataById(currentID, { discount: newValue });
  };


  let jog = (marriageDate) => {
    
  if (!married || marriageDate == '') {
    setjogos(false);
    return;
  }
  var today = new Date();
  var mday = new Date(marriageDate);
  
  var ydiff = today.getFullYear() - mday.getFullYear();
  
  if (today.getMonth() < mday.getMonth() || 
     (today.getMonth() === mday.getMonth() && 
      today.getDate() <= mday.getDate())) {
        ydiff--;
  }

    if (ydiff >= 2) {
        setjogos(false);
    } else {
       
      if(today.getMonth() === mday.getMonth() && today.getFullYear() === mday.getFullYear()){
         
          setjogos(false)
        }
          else{ setjogos(true);}
       
    }
};



  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(e.target.value);
    console.log(newName);
    editPersonDataById(currentID, { name: newName });
  };

 const handleSalaryChange = (e) => {
  const newGrossSalary = e.target.value;
  setGrossSalary(newGrossSalary);
  editPersonDataById(currentID, { brutto: newGrossSalary });
};

useEffect(() => {
  let netto = grossSalary;
  let tax = 0

  if (age) {
      if (grossSalary > 499952) {
        const difference = grossSalary - 499952;
        tax += difference * 0.15;
        
      }
  } else {
      tax  += grossSalary * 0.15; 
  }
  
  if (discount) {
      tax -= 77300;
      tax = Math.max(0, tax);
  }
  if (familyDiscount) {
      let familyDiscountAmount = 0;
      if (discountDependentCount === 1) {
        familyDiscountAmount = 10000 * dependentCount;
      } else if (discountDependentCount === 2) {
        familyDiscountAmount = 20000 * dependentCount;
      } else if (discountDependentCount >= 3) {
        familyDiscountAmount = 33000 * dependentCount;
      }
      tax -= familyDiscountAmount;
       tax = Math.max(0, tax);
  }

  netto -= tax;

  if (married && jogos) {
      netto = netto + 5000
  }

  editPersonDataById(currentID, { netto: netto });
}, [grossSalary, age, married, discount, marriageDate, familyDiscount, dependentCount, discountDependentCount]);
   


  return (
    <div>
      <p className='text-5xl py-5 '>{getFamilyMemberByID(currentID).name} Bérének kiszámitása: </p>
      <Name 
        name={name} 
        handleNameChange={handleNameChange} 
        currentID={currentID} 
        getFamilyMemberByID={getFamilyMemberByID}
        />
      <Brutto  
        grossSalary={grossSalary} 
        handleSalaryChange={handleSalaryChange} /> 
      <div className='divider'></div>
      <Age age={age} 
        handleAgeChange={handleAgeChange} />
      <Married 
        married={married} 
        handleMarriedChange={handleMarriedChange} 
        marriageDate={marriageDate} 
        handleMarriageDateChange={handleMarriageDateChange} 
        jogos={jogos} />
      <Discount 
        discount={discount} 
        handleDiscountChange={handleDiscountChange} />
      <Family 
        familyDiscount={familyDiscount} 
        handleFamilyDiscountChange={handleFamilyDiscountChange} 
        dependentCount={dependentCount}
        handleDependentCountChange={handleDependentCountChange}
        discountDependentCount={discountDependentCount}
        handleDiscountDependentCountChange={handleDiscountDependentCountChange}
        />
         <div className='divider'></div>
      <DisplayNetto currentID={currentID} familyMembersData={familyMembersData}/>

    </div>
  
  
  );
};

export default SalaryCalculator;
