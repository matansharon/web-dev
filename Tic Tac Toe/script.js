heading = document.querySelector("h1");

restart_btn = document.getElementById("b");
restart_btn.addEventListener("click", function () {
  alert("you clicked me");
});
function check_for_end(index, sign) {
  if (index === 0) {
    if (check_row0(sign) || check_column0(sign) || check_left_diagonal(sign))
      return true;
    else return false;
  } else if (index === 1) {
    if (check_row0(sign) || check_column1(sign)) return true;
    else return false;
    // } else if (index === 2) {
    // }
  }
}
function check_row0(sign) {
  if (sign !== "") {
    if (box[0] === sign && box[1] === sign && box[2] === sign) return true;
    else return false;
  }
}
function check_row1(sign) {
  if (sign !== "") {
    if (box[3] === sign && box[4] === sign && box[5] === sign) return true;
    else return false;
  }
}
function check_row2(sign) {
  if (sign !== "") {
    if (box[6] === sign && box[7] === sign && box[8] === sign) return true;
    else return false;
  }
}
function check_column0(sign) {
  if (sign !== "") {
    if (box[0] === sign && box[3] === sign && box[6] === sign) return true;
    else return false;
  }
}
function check_column1(sign) {
  if (sign !== "") {
    if (box[1] === sign && box[4] === sign && box[7] === sign) return true;
    else return false;
  }
}
function check_column2(sign) {
  if (sign !== "") {
    if (box[2] === sign && box[5] === sign && box[8] === sign) return true;
    else return false;
  }
}
function check_left_diagonal(sign) {
  if (sign !== "") {
    if (box[0] === sign && box[5] === sign && box[8] === sign) return true;
    else return false;
  }
}
function check_right_diagonal(sign) {
  if (sign !== "") {
    if (box[2] === sign && box[5] === sign && box[6] === sign) return true;
    else return false;
  }
}

box = document.querySelectorAll("td");

for (let i = 0; i < 9; i++) {
  box[i].setAttribute("class", String(i));
  box[i].addEventListener("click", function () {
    if (box[i].textContent == "") box[i].textContent = "X";
    else if (box[i].textContent == "X") box[i].textContent = "O";
    else {
      box[i].textContent = "";
    }
    if (check_for_end(i, box[i].textContent)) alert("you won!!!");
  });
}
