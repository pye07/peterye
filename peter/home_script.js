window.onload = function() {
  var a = document.getElementById("mutebutton")

a.onclick = function() {
  document.getElementById("vids").removeAttribute("muted")
  document.getElementById("mutepic").setAttribute("src","https://cdn2.iconfinder.com/data/icons/media-controls-5/100/vol_up-512.png")
}

}
