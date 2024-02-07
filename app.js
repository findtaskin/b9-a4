function calculateMoney(ticketCount) {
  if (ticketCount < 0) {
    return "invalid number";
  }
  let result = ticketCount * 120 - (500 + 8 * 50);
  return result;
}
console.log(calculateMoney(-130));
