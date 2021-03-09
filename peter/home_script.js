window.onload = function() {
    var a = document.getElementById("mutebutton")

    a.onclick = function() {

        var att = document.createAttribute("muted")

        if (document.getElementById("vids").hasAttribute("muted") == true) {
            document.getElementById("mutepic").setAttribute("src", "https://cdn2.iconfinder.com/data/icons/media-controls-5/100/vol_up-512.png")
            document.getElementById("vids").removeAttribute("muted")
        }
        else {
            document.getElementById("mutepic").setAttribute("src", "https://cdn2.iconfinder.com/data/icons/media-controls-5/100/mute-512.png")
            document.getElementById("vids").setAttributeNode(att)
        }
    }

}
