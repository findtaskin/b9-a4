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

function password(givenObject) {
  let name = givenObject.name;
  let birthYear = givenObject.birthYear;
  let siteName = givenObject.siteName;

  if (birthYear == undefined || siteName == undefined || name == undefined) {
    return "invalid";
  }

  if (birthYear < 1000 || birthYear > 9999) {
    return "invalid";
  }

  let capSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
  return capSiteName + "#" + name + "@" + birthYear;
}

function monthlySavings(allPayments, livingCost) {
  if (!Array.isArray(allPayments)) {
    return "invalid input";
  }
  if (typeof livingCost !== "number") {
    return "invalid input";
  }
  if (isNaN(livingCost)) {
    return "invalid input";
  }

  let totalPayment = 0;
  let totalTax = 0;

  for (let i = 0; i < allPayments.length; i++) {
    totalPayment = totalPayment + allPayments[i];
    if (allPayments[i] >= 3000) {
      totalTax = totalTax + allPayments[i] * 0.2;
    }
  }
  let savings = totalPayment - (totalTax + livingCost);
  if (savings < 0) {
    return "earn more";
  } else {
    return savings;
  }
}
