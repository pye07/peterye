window.onload = function() {
  var a = document.getElementById("lp1")
  var b = document.getElementById("lp2")
  var c = document.getElementById("lp3")
  a.onclick = function() {
    document.getElementById("gl").innerHTML = "Early Elementary"
    document.getElementById("lo").innerHTML = "1.	Students accurately match pitch when singing<br>2.	Students learn about high and low notes."
    document.getElementById("irm").innerHTML = "N/A"
    document.getElementById("is").innerHTML = "1. Teach perfect singing posture (PSP).<br>2.	Have the class sing a note with the teacher and move body up and down with pitch.<br>3.	I will sing different notes and the class will match them<br>4. Have everyone sing the same pitch, then divide the class into two groups. Assign each group to a hand,<br>and have the groups go up and down in pitch along with each hand."
    document.getElementById("la").innerHTML = "1.	Match pitch with the teacher.<br>2.	Students will have the opportunity to lead after each activity."
    document.getElementById("ia").innerHTML = "1.	Listen if students are matching pitch.<br>2.	Observe if students are moving pitch accurately in time and in accordance with movement."
    return false
  }

  b.onclick = function() {
    document.getElementById("gl").innerHTML = "Early Elementary"
    document.getElementById("lo").innerHTML = "1.	Students accurately match pitch when singing<br>2.	Students learn about high and low notes."
    document.getElementById("irm").innerHTML = "N/A"
    document.getElementById("is").innerHTML = "1.	Get everyone to stand up to reinforce PSP<br>2.	Teacher claps a steady beat (4/4 time). Teacher will sing a note for four beats, and the class will repeat the note for four beats. Informal assessment of accuracy in matching pitch.<br>3.	Talk about low notes and high notes. Use the same exercise as last time except sing “this is a low note” on low notes and “this is a high note” on high notes.<br>4.	Teach a song “We Are Going Higher” first by singing the song in full using Kodaly hand signs (just teacher). Then sing the song phrase by phrase, with the class repeating in between each phrase. Finally, sing the song with fun motions."
    document.getElementById("la").innerHTML = "1.	Students will be repeating and modeling the teacher often.<br>2.	Using hand signs to reinforce high and low pitches, as well as tonal center.<br>3.	Singing along to a beat to feel a sense of rhythm."
    document.getElementById("ia").innerHTML = "1.	See if students are accurately matching pitch and singing in time according to rhythm set by the teacher."
    return false
    }

    c.onclick = function() {
      document.getElementById("gl").innerHTML = "Early Elementary"
      document.getElementById("lo").innerHTML = "1.	Students are able to beat time in rhythm with music<br>2. Students can identify concepts of slow and fast tempo"
      document.getElementById("irm").innerHTML = "<a href='https://youtu.be/Mxrh1CrMmTY?t=45' target='_blank'> Washington Post March</a><br><a href = https://youtu.be/p5rQHoaQpTw?t=11 target='_blank'>Benny and the Jets</a><br><a href=https://youtu.be/KKny_ia8Fvo?t=30 target='_blank'>Don’t Stop Me Now</a>"
      document.getElementById("is").innerHTML = "1.	Talk about tempo in terms of a train. Move (march and clap) in time with each other like a train. When the railroad is flat, the speed is medium; when the railroad is going uphill, the speed is slow; when the railroad is going downhill, the speed is fast.<br>2.	Play music for students to march around to. Play a fast piece (Don’t Stop Me Now), a slow piece (Benny and the Jets), and a medium piece (Washington Post March), to display the concept of tempo.<br>3.	If there is time, teach the song “Everyone Born in…” to further ingrain movement and rhythm. Students will sing and clap along with the song. Everyone will be doing different, rhythmic dance moves depending on what season they are born in."
      document.getElementById("la").innerHTML = "1.	Students will march along to music played by the teacher.<br>2.	Students will dance, clap, and sing in time.<br>3.	Students will voice their opinion on whether they think a song is slow, medium, or fast."
      document.getElementById("ia").innerHTML = "1.	After each of the four songs in class, ask students whether they thought the song was fast, slow, or medium.<br>2.	Observe if students are marching and clapping with the music."
      return false
      }

}
