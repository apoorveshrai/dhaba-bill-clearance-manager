const billAmount = document.querySelector("#nett-bill-amount");
const cashGiven = document.querySelector("#cash-given");
 const button = document.querySelector("#check-button");
 const errorMsg = document.querySelector("#errmessage");
 const numbofNotes = document.querySelectorAll(".notes-count");
const notesDenomination = [2000, 1000, 500, 100, 50, 10, 1];

 button.addEventListener("click", function checkbillAmountandcash(){
  deleteWarning();

  if(billAmount.value <=0){
    displayMsg("Bill amount is always more than zero. ");
  }else if(cashGiven.value<=0){
    displayMsg("Cash amount is always more than zero.");
  }else if(cashGiven.value<billAmount.value){
    displayMsg("Customer cannot give cash less than the bill amount");
  }else{
      const moneytoReturn = cashGiven.value - billAmount.value;
      computeChange(moneytoReturn);
    }
  }
);

function computeChange(moneytoReturn){
  for(let i=0; i<notesDenomination.length; i++){
    const countofNotes = Math.trunc(moneytoReturn/notesDenomination[i]);
    moneytoReturn %= notesDenomination[i];
    numbofNotes[i].innerText = countofNotes;
  }
}

function deleteWarning(){
  errorMsg.style.display = "none";
}

function displayMsg(errMsg){
  errorMsg.style.display = "block";
  errorMsg.innerText = errMsg;
}
