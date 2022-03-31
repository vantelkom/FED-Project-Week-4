window.alert(
            "@Author Ivan Aditya Maulana\n" + 
            "Selamat datang di aplikasi kalkulator!");

//Add event handler untuk input
document.addEventListener("keydown", keyboardInputHandler);

//Fungsi input
function keyboardInputHandler(e) {
  //Livescreen
  let tot = document.getElementById("total");

  //Conditional statement penomoran
  if (e.key === "0") {
    tot.value += "0";
  } else if (e.key === "1") {
    tot.value += "1";
  } else if (e.key === "2") {
    tot.value += "2";
  } else if (e.key === "3") {
    tot.value += "3";
  } else if (e.key === "4") {
    tot.value += "4";
  } else if (e.key === "5") {
    tot.value += "5";
  } else if (e.key === "6") {
    tot.value += "6";
  } else if (e.key === "7") {
    tot.value += "7";
  } else if (e.key === "7") {
    tot.value += "7";
  } else if (e.key === "8") {
    tot.value += "8";
  } else if (e.key === "9") {
    tot.value += "9";
  }

  //Conditional statement operator
  if (e.key === "+") {
    tot.value += "+";
  } else if (e.key === "-") {
    tot.value += "-";
  } else if (e.key === "*") {
    tot.value += "*";
  } else if (e.key === "/") {
    tot.value += "/";
  }

  //Desimal
  if (e.key === ".") {
    tot.value += ".";
  }

  //Enter untuk total
  if (e.key === "Enter") {
    tot.value = eval(total.value || null);
  }

  //Backspace untuk hapus last input
  if (e.key === "Backspace") {
    let totalInput = tot.value;

    //Fungsi hapus last input
    tot.value = totalInput.substring(0, tot.value.length - 1);
  }
}

//Fungsi all-clear
function clearScreen() {
  document.getElementById("total").value = "";
}
//Tampilan nilai dilayar
function liveScreen(value) {
  let tot = document.getElementById("total");
  if (!tot.value) {
    tot.value = "";
  }
  tot.value += value;
}