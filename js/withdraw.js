document.getElementById('btn-withdraw').addEventListener('click',function(){
        // get number from deposit field 
        let InputFieldValue= getFieldValue('txt-withdraw');

        // get number of deposit element 
        const elementFieldValue=getElementValue('show-withdraw');
       
  
        // set number of deposit total 
        setMoney(InputFieldValue, elementFieldValue,'show-withdraw');
        
        // get balance money 
        const balanceFieldvalue= getElementValue('show-balance');
        
        //set balance 
      InputFieldValue= -InputFieldValue;
       setMoney(InputFieldValue,balanceFieldvalue,'show-balance');
})