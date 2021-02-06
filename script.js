
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let result = document.getElementById('result');
let under = document.getElementById('under');
let exactly = document.getElementById('exactly');
let over = document.getElementById('over');
let reset = document.getElementById('reset');
let help = document.getElementById('help');
let helpDetails = document.getElementById('help-details') 
let balance = document.getElementById('balance');
let myBalance = 10;

under.addEventListener('click', function(){
  let stake = document.getElementById('stake').value;
  if(stake >= 0.30 && stake <= myBalance){
    var number1 = Math.floor((Math.random()*6)+1);
    var number2 = Math.floor((Math.random()*6)+1);
    var total = number1 + number2;
    diceImageChange(number1, number2);
    if(total < 7){
      myBalance += (stake*2.33);
      result.style.color= 'white';
      result.style.backgroundColor= '#1E8449';
      result.innerHTML= `You Won $${(stake*2.33).toFixed(2)}`;
      balance.innerHTML= `Total Balance: $${myBalance.toFixed(2)}`
    }
    else if(total >= 7){
      myBalance -= stake;
      result.style.color= 'white';
      result.style.backgroundColor= '#E74C3C';
      result.innerHTML= `You Lost $${(stake*1).toFixed(2)}`;
      balance.innerHTML= `Total Balance: $${myBalance.toFixed(2)}`
    }
  }
  else{
    result.style.color = 'black';
    result.style.backgroundColor = '#E5D68A';
    result.innerHTML= `Enter a valid amount`
  }
});

exactly.addEventListener('click', function(){
  let stake = document.getElementById('stake').value;
  if(stake >= 0.30 && stake <= myBalance){
    var number1 = Math.floor((Math.random()*6)+1);
    var number2 = Math.floor((Math.random()*6)+1);
    var total = number1 + number2;
    diceImageChange(number1, number2);
    if(total == 7){
      myBalance += (stake*5.5);
      result.style.color= 'white';
      result.style.backgroundColor= '#1E8449';
      result.innerHTML= `You Won $${(stake*5.5).toFixed(2)} !!!`;
      balance.innerHTML= `Total Balance: $${myBalance.toFixed(2)}`
    }
    else if(total < 7 || total > 7){
      myBalance -= stake;
      result.style.color= 'white';
      result.style.backgroundColor= '#E74C3C';
      result.innerHTML= `You Lost $${(stake*1).toFixed(2)}`;
      balance.innerHTML= `Total Balance: $${myBalance.toFixed(2)}`
    }
  }
  else{
    result.style.color = 'black';
    result.style.backgroundColor = '#E5D68A';
    result.innerHTML= `Enter a valid amount`
  }
});

over.addEventListener('click', function(){
  let stake = document.getElementById('stake').value;
  if(stake >= 0.30 && stake <= myBalance){
    var number1 = Math.floor((Math.random()*6)+1);
    var number2 = Math.floor((Math.random()*6)+1);
    var total = number1 + number2;
    diceImageChange(number1, number2);
    if(total > 7){
      myBalance += (stake*2.33);
      result.style.color= 'white';
      result.style.backgroundColor= '#1E8449';
      result.innerHTML= `You Won $${(stake*2.33).toFixed(2)}`;
      balance.innerHTML= `Total Balance: $${myBalance.toFixed(2)}`
    }
    else if(total <= 7){
      myBalance -= stake;
      result.style.color= 'white';
      result.style.backgroundColor= '#E74C3C';
      result.innerHTML= `You Lost $${(stake*1).toFixed(2)}`;
      balance.innerHTML= `Total Balance: $${myBalance.toFixed(2)}`
    }
  }
  else{
    result.style.color = 'black';
    result.style.backgroundColor = '#E5D68A';
    result.innerHTML= `Enter a valid amount`
  }
});


reset.addEventListener('click', function(){
  // let permission = prompt('Do you want to proceed?(Y/n): ').toLowerCase();
  // if(permission == 'y'){
    location.reload();
  // }
})

help.addEventListener('click', function(){
  helpDetails.style.visibility = 'visible';
  let hide = document.getElementById('hide');
  hide.addEventListener('click', function(){
    helpDetails.style.visibility = 'hidden';
  })
})


// Function-- Chnage dice image after roll
function diceImageChange(number1, number2){
  if(number1 == 1){
    img1.src="/dice/dice1.png";
  }
  if(number1 == 2){
    img1.src="/dice/dice2.png";
  }
  if(number1 == 3){
    img1.src="/dice/dice3.png";
  }
  if(number1 == 4){
    img1.src="/dice/dice4.png";
  }
  if(number1 == 5){
    img1.src="/dice/dice5.png";
  }
  if(number1 == 6){
    img1.src="/dice/dice6.png";
  }
  if(number2 == 1){
    img2.src="/dice/dice1.png"
  }
  if(number2 == 2){
    img2.src="/dice/dice2.png"
  }
  if(number2 == 3){
    img2.src="/dice/dice3.png"
  }
  if(number2 == 4){
    img2.src="/dice/dice4.png"
  }
  if(number2 == 5){
    img2.src="/dice/dice5.png"
  }
  if(number2 == 6){
    img2.src="/dice/dice6.png"
  }
}