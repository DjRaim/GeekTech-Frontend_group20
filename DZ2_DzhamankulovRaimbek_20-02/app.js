var bankCard = {
  CardNumber: "1337 3322 2283 7331",
  ExpireDate: "22.02.24",
  CardHolder: 'RaimbekDzhamankulov',
  CardType: "VISA",
  CVC: 228,
  CardTransaction: 'MoneyGram',
}

var bank = {
  BankCode: 332,
  BankName: 'OmegaBank',
  BankWorkTime: '8:00-19:00',
  BankEveningWork: true,
  BankAddress: {
    City: 'Bishkek',
    Street: 'Ibraimova',
    House: '312'
  },
}

switch (bankCard.CardTransaction) {
  case "Unistream":
    console.log("money was transacted by Unistream");
    break;
  case "RIA":
    console.log("money was transacted by Contact");
    break;
  case "Contact":
    console.log("money was transacted by Contact");
    break;
  case "MoneyGram":
    console.log("money was transacted by MoneyGram");
    break;
  default:
    console.log("Invalid transaction");
}

var number = Number (prompt('Введите число 1-9'))

if (number === 1){
  numberRome = 'I'
}else if (number === 2){
  numberRome = 'II'
}else if (number === 3){
  numberRome = 'III'
}else if (number === 4){
  numberRome = 'IV'
}else if (number === 5){
  numberRome = 'V'
}else if (number === 6){
  numberRome = 'VI'
}else if (number === 7){
  numberRome = 'VII'
}else if (number === 8){
  numberRome = 'VIII'
}else if (number === 9){
  numberRome = 'IX'
}else {
  console.error('Unknown Number');
}
console.log(numberRome);

var customerType = 2;
if (customerType === 1) {
  customerTypeAsText = "Физ.лицо";
} else if (customerType === 2){
  customerTypeAsText = "Юр.лицо";
}else {
  console.warn('неизвестное лицо')
}
console.log(customerTypeAsText);