function calculateMoney(ticketCount) {
  if (ticketCount < 0) {
    return "invalid number";
  }
  let result = ticketCount * 120 - (500 + 8 * 50);
  return result;
}
// a, y, i , e , o , u, w

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
console.log(checkName());
