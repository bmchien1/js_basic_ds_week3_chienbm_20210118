function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1.0],
    ["FIVE", 5.0],
    ["TEN", 10.0],
    ["TWENTY", 20.0],
    ["ONE HUNDRED", 100.0],
  ];

  let changeDue = cash - price;

  let totalCashInDrawer = cid
    .reduce((sum, denom) => sum + denom[1], 0)
    .toFixed(2);

  if (changeDue > totalCashInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue.toFixed(2) === totalCashInDrawer) {
    return { status: "CLOSED", change: cid };
  }

  let changeArray = [];
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    let currencyName = currencyUnits[i][0];
    let currencyValue = currencyUnits[i][1];
    let currencyAvailable = cid[i][1];
    let amountToReturn = 0;

    while (changeDue >= currencyValue && currencyAvailable >= currencyValue) {
      changeDue -= currencyValue;
      changeDue = changeDue.toFixed(2);
      currencyAvailable -= currencyValue;
      amountToReturn += currencyValue;
    }

    if (amountToReturn > 0) {
      changeArray.push([currencyName, amountToReturn]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
