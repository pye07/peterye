
function one() {
  document.getElementById("code").innerHTML += "1"
  check()
}

function two() {
  document.getElementById("code").innerHTML += "2"
  check()
}

function three() {
  document.getElementById("code").innerHTML += "3"
  check()
}

function four() {
  document.getElementById("code").innerHTML += "4"
  check()
}

function five() {
  document.getElementById("code").innerHTML += "5"
  check()
}

function six() {
  document.getElementById("code").innerHTML += "6"
  check()
}

function seven() {
  document.getElementById("code").innerHTML += "7"
  check()
}

function eight() {
  document.getElementById("code").innerHTML += "8"
  check()
}

function nine() {
  document.getElementById("code").innerHTML += "9"
  check()
}


function check() {
  if (document.getElementById("code").innerHTML === "1612") {
    document.getElementById("success").innerHTML = "SUCCESS"
    setTimeout(function(){alert("it's the key!")},1);
    window.location.assign("/eddy/heart.html")
  } else if (document.getElementById("code").innerHTML.length == 4) {
    document.getElementById("error").innerHTML = "ERROR";
    setTimeout(function(){window.location.reload(true)},500);
  }
}
