document.getElementById('btn-deposit').addEventListener('click',function(){
      // get number from deposit field 
      const InputFieldValue= getFieldValue('txt-deposit');

      // get number of deposit element 
      const elementFieldValue=getElementValue('show-deposit');
     

      // set number of deposit total 
      setMoney(InputFieldValue, elementFieldValue,'show-deposit');
      
      // get balance money 
      const balanceFieldvalue= getElementValue('show-balance');
      
      //set balance 
      setMoney(InputFieldValue,balanceFieldvalue,'show-balance');

})