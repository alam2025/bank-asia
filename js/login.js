document.getElementById('btn-submit').addEventListener('click',function(){
      const email= document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if(email !="" && password !=""){
            if(email === 'alamhossain13100852@gmail.com' && password==='1234'){
                  window.location.href='bank.html';
            }
            else{
                  alert('Invalid User');
            }
      }
      else{
            alert('Please fill the email and password box');
      }
})