const money = (coins) => {
  var saverCoins = 0;
  saverCoins += coins;
  console.log('MoneyBox: $${saveCoins}');
}

moneyBox(5);
moneyBox(10);

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