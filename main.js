// Matthew Rennie
// Web & App Dev, 4/19/24
// Evidence: JavaScript Basic Math

// Input
const number1 = Number(prompt('Enter a number'));
const number2 = Number(prompt('Enter another number'));

// Process
const total = number1 + number2;
const difference = number1 - number2;
const product = number1 * number2;
const quotient = number1 / number2;

const output1 = `${number1} + ${number2} = ${total}`;
const output2 = `${number1} - ${number2} = ${difference}`
const output3 = `${number1} * ${number2} = ${product}`
const output4 = `${number1} / ${number2} = ${quotient}`

// Output
console.log(`
Matthew Rennie
Web & App Dev, 4/19/24
Evidence: JavaScript Basic Math

Number 1: ${number1}
Number 2: ${number2}

${output1}
${output2}
${output3}
${output4}
`)