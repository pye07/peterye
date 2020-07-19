function checkPassword(){
  var password = document.getElementById('waiting');
  window.name = password.value;
    if (window.name == "" || null) {
        return false
    } else {
        document.getElementById('love').innerHTML = "hi " + window.name + ", <br>is that who you are?"
        setTimeout(msg,2000)
        return false
    }
}

function msg() {
    document.getElementById("love2").innerHTML = "I'll remember that."
    setTimeout(dining,1000)
      function dining() {
        window.location.assign("/house/dining-room.html")
      }
}
