// deposit money -----------------------------------------------------------------------

document.getElementById('btn-deposit').addEventListener('click', function () {
      let depositInput = document.getElementById('txt-deposit').value;
      depositInput = parseInt(depositInput);
      // console.log(depositInput);
      if (isNaN(depositInput)) {
            alert('please enter integer value.');
            document.getElementById('txt-deposit').value = '';
      }
      else {
            setDeposit(depositInput);
      }
})


//setDeposit money
function setDeposit(depositMoney) {
      // deposit set 
      const depositField = parseInt(document.getElementById('show-deposit').innerText);
      const totalDeposit = depositField + depositMoney;
      document.getElementById('show-deposit').innerText = totalDeposit;

      // balnce set 
      const balance = parseInt(document.getElementById('show-balance').innerText);
      totalBalance = balance + depositMoney;
      document.getElementById('show-balance').innerText = totalBalance;
      document.getElementById('txt-deposit').value = '';
}

// withdraw money ----------------------------------------

document.getElementById('btn-withdraw').addEventListener('click', function () {
      let withdrawMoney = parseInt(document.getElementById('txt-withdraw').value);
      if (isNaN(withdrawMoney)) {
            alert('please enter integer value.');
            document.getElementById('txt-withdraw').value = '';
      }
      else {
            setWithdraw(withdrawMoney);
      }
})
//set withdraw money 
function setWithdraw(withdrawMoney) {
      const withdrawField = parseInt(document.getElementById('show-withdraw').innerText);
      const totalWithdraw = withdrawField + withdrawMoney;
      document.getElementById('show-withdraw').innerText = totalWithdraw;

      const balance = parseInt(document.getElementById('show-balance').innerText);
      totalBalance = balance - withdrawMoney;
      if (totalBalance >=0) {
            document.getElementById('show-balance').innerText = totalBalance;

      } else {
            alert('Insufficient Balance . Please Deposit');
      }
      document.getElementById('txt-withdraw').value = '';
}
