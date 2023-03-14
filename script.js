const c = document.querySelector("#c--button");
const input = document.querySelector("#input");
const numbers = document.querySelector("#numbers");
input.value = "";
c.addEventListener("click", () => {
  input.value = "";
  if (document.querySelector(".selected")) {
    document.querySelector(".selected").classList.remove("selected");
  }
});

numbers.addEventListener("click", (e) => {
  //   console.log(
  //     document.querySelector(".selected") &&
  //       document.querySelector(".selected").classList.remove(".selected")
  //   );
  if (e.target.id == "numbers") return;
  if (document.querySelector(".selected")) {
    document.querySelector(".selected").classList.remove("selected");
  }
  e.target.classList.add("selected");
  if (e.target.innerHTML == "=") {
    if (
      input.value.length &&
      input.value[input.value.length - 1] != "+" &&
      input.value[input.value.length - 1] != "-" &&
      input.value[input.value.length - 1] != "/" &&
      input.value[input.value.length - 1] != "x"
    ) {
      let arr = input.value;
      arr = strToArray(arr);
      input.value = arr;
    }
  } else {
    if (
      e.target.innerHTML == "+" ||
      e.target.innerHTML == "-" ||
      e.target.innerHTML == "/" ||
      e.target.innerHTML == "x" ||
      e.target.innerHTML == "."
    ) {
      if (
        input.value.length &&
        input.value[input.value.length - 1] != "+" &&
        input.value[input.value.length - 1] != "-" &&
        input.value[input.value.length - 1] != "/" &&
        input.value[input.value.length - 1] != "x" &&
        input.value[input.value.length - 1] != "."
      ) {
        console.log(input.value[input.value.length - 1]);
        input.value += e.target.innerHTML;
      }
    } else input.value += e.target.innerHTML;
  }
});

function strToArray(input) {
  let arr = [];
  let i = 0;
  for (let item of input) {
    if (item == "+") {
      i++;
      arr[i] = item;

      i++;
    } else if (item == "-") {
      i++;
      arr[i] = item;

      i++;
    } else if (item == "/") {
      i++;
      arr[i] = item;

      i++;
    } else if (item == "x") {
      i++;
      arr[i] = item;

      i++;
    } else {
      if (arr[i]) arr[i] += item;
      else arr[i] = item;
    }
  }
  return math(arr);
}

function math(arr) {
  let index;

  index = arr.findIndex((element) => element == "x");

  while (index != -1) {
    arr = multiply(arr, index);
    console.log(arr);
    index = arr.findIndex((element) => element == "x");
    console.log(index);
  }
  index = arr.findIndex((element) => element == "/");

  while (index != -1) {
    arr = division(arr, index);
    console.log(arr);
    index = arr.findIndex((element) => element == "/");
    console.log(index);
  }
  index = arr.findIndex((element) => element == "+");
  console.log("do", index);
  while (index != -1) {
    arr = sum(arr, index);
    console.log(arr);
    index = arr.findIndex((element) => element == "+");
    console.log(index);
  }
  index = arr.findIndex((element) => element == "-");
  console.log("do", index);
  while (index != -1) {
    arr = subtraction(arr, index);
    console.log(arr);
    index = arr.findIndex((element) => element == "-");
    console.log(index);
  }
  return arr;
}

function multiply(arr, index) {
  let n = arr[index - 1] * arr[index + 1];

  arr.splice(index - 1, 3, n);
  console.log(arr);
  return arr;
}
function sum(arr, index) {
  let n = parseFloat(arr[index - 1]) + parseFloat(arr[index + 1]);

  arr.splice(index - 1, 3, n);
  console.log(arr);
  return arr;
}
function division(arr, index) {
  let n = arr[index - 1] / arr[index + 1];

  arr.splice(index - 1, 3, n);
  console.log(arr);
  return arr;
}
function subtraction(arr, index) {
  let n = arr[index - 1] - arr[index + 1];

  arr.splice(index - 1, 3, n);
  console.log(arr);
  return arr;
}
