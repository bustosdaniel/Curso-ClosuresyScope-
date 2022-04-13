var a = 'hello'

function hello() { 
  let b = 'Hello World';
  const c = 'Hello World!';
  if (true) {
    let d = 'Helos World!!'
    debugger
  }
}

hello();

const MoneyBox = () => {
  var saveCoins = 0;
  const  countCoins = () => {
    saverCoins += coins;
    console.log('MoneyBox: $${saveCoins}');
  }
  return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);