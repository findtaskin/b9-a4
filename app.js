function calculateMoney(ticketCount) {
  if (ticketCount < 0) {
    return "invalid number";
  }
  let result = ticketCount * 120 - (500 + 8 * 50);
  return result;
}

function checkName(givenName) {
  if (typeof givenName === "string") {
    let goodDecider = "ayieouw";
    let goodPointer = givenName.charAt(givenName.length - 1);
    if (goodDecider.includes(goodPointer.toLowerCase())) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
}

function deleteInvalids(givenArray) {
  if (Array.isArray(givenArray)) {
    let numberArray = [];
    for (let i = 0; i < givenArray.length; i++) {
      if (typeof givenArray[i] === "number") {
        if (!isNaN(givenArray[i])) {
          numberArray.push(givenArray[i]);
        }
      }
    }
    return numberArray;
  } else {
    return "Invalid Array";
  }
}
