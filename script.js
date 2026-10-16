let pole = "";
let pole2 = "";

if (pole !== "" && pole2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

let number = 7;
let number2 = 5;

let suma = number + number2;

if (suma > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

let javascript = "JavaScript";

if (javascript.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

let numberr = 18;

if (numberr > 10 && numberr < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

let name = "matvii";
let email = "matvii@gmail.com";
let password = "dpasppp";

if (
  name.length >= 3 &&
  email.includes("@") &&
  email.indexOf(".") > email.indexOf("@") &&
  password.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
