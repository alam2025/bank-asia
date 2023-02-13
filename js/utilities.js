// get value from input field 
function getFieldValue(inputFieldId){
      const inputField = document.getElementById(inputFieldId);
      const valueInString= inputField.value;
      const valueInNumber= parseFloat(valueInString);
      if(isNaN(valueInNumber)){
            alert('Please Input number type value');
            inputField.value='';
      }
      else{
            inputField.value='';
            return valueInNumber;
      }     
}


// get number of element 
function getElementValue(elementId){
      const element= document.getElementById(elementId);
      const elementValueInString = element.innerText;
      const elementNumber = parseFloat(elementValueInString);
      return elementNumber;     
}


// set money 

function setMoney(inputMoney, previousMoney, Id){
      const field= document.getElementById(Id);
      const total= inputMoney + previousMoney;
      if(total<0 && inputMoney<0){
            alert("Insufficient Balance ...");
            const withdraw =document.getElementById('show-withdraw');
            const withdrawValue=parseFloat(withdraw.innerText);
            withdraw.innerText= withdrawValue + inputMoney;
      }
      else if(isNaN(total)){
            field.innerText = previousMoney;
      }
      else{
            field.innerText=total;
      }
}

