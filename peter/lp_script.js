window.onload = function() {
  var a = document.getElementById("lp1")
  var b = document.getElementById("lp2")
  var c = document.getElementById("lp3")
  var d = document.getElementById("lp4")
  var e = document.getElementById("lp5")
  a.onclick = function() {
    document.getElementById("gl").innerHTML = "Early Elementary"
    document.getElementById("lo").innerHTML = "1.	Students accurately match pitch when singing<br>2.	Students learn about high and low notes."
    document.getElementById("irm").innerHTML = "N/A"
    document.getElementById("is").innerHTML = "1. Teach perfect singing posture (PSP).<br>2.	The class sings a note with the teacher and move body up and down with pitch.<br>3.	The teacher sings different notes and the class will match them<br>4. Everyone sings the same pitch, then divide the class into two groups. Assign each group to a hand,<br>and have the groups go up and down in pitch along with each hand."
    document.getElementById("la").innerHTML = "1.	Match pitch with the teacher.<br>2.	Students can lead after each activity."
    document.getElementById("ia").innerHTML = "1.	Listen if students are matching pitch.<br>2.	Observe if students are moving pitch accurately in time and in accordance with movement."
    return false
  }

  b.onclick = function() {
    document.getElementById("gl").innerHTML = "Early Elementary"
    document.getElementById("lo").innerHTML = "1.	Students accurately match pitch when singing<br>2.	Students can identify high and low notes."
    document.getElementById("irm").innerHTML = "N/A"
    document.getElementById("is").innerHTML = "1.	Get everyone to stand up to reinforce PSP<br>2.	Teacher claps a steady beat (4/4 time). Teacher sings a note for four beats, and the class repeats the note for four beats. Informal assessment of accuracy in matching pitch.<br>3.	Talk about low notes and high notes. Use the same exercise as last time except sing “this is a low note” on low notes and “this is a high note” on high notes.<br>4.	Teach the song “We Are Going Higher” first by singing the song in full using Kodaly hand signs (just teacher). Then sing the song phrase by phrase, with the class repeating in between each phrase. Finally, sing the song with fun motions."
    document.getElementById("la").innerHTML = "1.	Students repeat and model the teacher often.<br>2.	Students use hand signs to reinforce high and low pitches, as well as tonal center.<br>3.	Students sing along to a beat to feel a sense of rhythm."
    document.getElementById("ia").innerHTML = "1.	Observe if students are accurately matching pitch<br>2. Observe if students sing in time according to rhythm set by the teacher."
    return false
  }

  c.onclick = function() {
    document.getElementById("gl").innerHTML = "Early Elementary"
    document.getElementById("lo").innerHTML = "1.	To beat time in rhythm with music<br>2. To identify concepts of slow and fast tempo"
    document.getElementById("irm").innerHTML = "<a class='link' href='https://youtu.be/Mxrh1CrMmTY?t=45' target='_blank'> Washington Post March</a><br><a class='link' href = https://youtu.be/p5rQHoaQpTw?t=11 target='_blank'>Benny and the Jets</a><br><a class='link' href=https://youtu.be/KKny_ia8Fvo?t=30 target='_blank'>Don’t Stop Me Now</a>"
    document.getElementById("is").innerHTML = "1.	Talk about tempo in terms of a train. Move (march and clap) in time with each other like a train. When the railroad is flat, the speed is medium; when the railroad is going uphill, the speed is slow; when the railroad is going downhill, the speed is fast.<br>2.	Play music for students to march around to. Play a fast piece (Don’t Stop Me Now), a slow piece (Benny and the Jets), and a medium piece (Washington Post March), to display the concept of tempo.<br>3.	If there is time, teach the song “Everyone Born in…” to further ingrain movement and rhythm. Students sing and clap along with the song. Everyone does different, rhythmic dance moves depending on what season they are born in."
    document.getElementById("la").innerHTML = "1.	Students march along to music played by the teacher.<br>2.	Students dance, clap, and sing in time.<br>3.	Students voice their opinion on whether they think a song is slow, medium, or fast."
    document.getElementById("ia").innerHTML = "1.	After each of the four songs in class, ask students whether they thought the song was fast, slow, or medium.<br>2.	Observe if students are marching and clapping with the music."
    return false
  }

  d.onclick = function() {
    document.getElementById("gl").innerHTML = "Early Elementary"
    document.getElementById("lo").innerHTML = "1. To dance in time with music<br>2. To mimic dance moves from watching others"
    document.getElementById("irm").innerHTML = "<a class='link' href='https://www.youtube.com/watch?v=QspjKVTMlL8' target='_blank'> Kung Fu Fighting</a><br><a class='link' href ='https://www.youtube.com/watch?v=GgvMSSiZMi8' target='_blank'>Cosmic Sans</a>"
    document.getElementById("is").innerHTML = "1.	Check if everyone has enough space to dance by asking everyone to reach their arms out<br>2.	Have everyone dance along to “Kung Fu Fighting.”<br>3.	Play the game “chief.” One student volunteers to be “it”. Then, when the student who is “it” isn’t looking, one student is elected to be the “chief”. The “chief” leads the class in dance moves (to the song “Cosmic Sans”), and “it” is guessing who the “chief” is."
    document.getElementById("la").innerHTML = "1.	Students dance mimicking teacher and improvise dance moves.<br>2.	Students pay attention to the dancer they are mimicking."
    document.getElementById("ia").innerHTML = "1.	Observe if students dance along with rhythm, or just randomly.<br>2.	Observe if students are accurately mimicking dance moves."
    return false
  }

  e.onclick = function() {
    document.getElementById("gl").innerHTML = "Early Elementary"
    document.getElementById("lo").innerHTML = "1.	Improvise lyrics and movement to a steady beat"
    document.getElementById("irm").innerHTML = "<a class='link' href='https://www.youtube.com/watch?v=rTsJfLAVRhA' targer='_blank'>Winter Backing Track</a>"
    document.getElementById("is").innerHTML = "1.	Ask the students to think about what activity they like to do in winter, and to come up with a rhythmic movement that corresponds with their activity<br>2.	Before the activity, put on a backing track and remind the class to talk with the beat. Start with a body percussion motion that goes with the beat, which the class maintains throughout. Ask in time “[Name], what do you like to do in winter?”"
    document.getElementById("la").innerHTML = "1.	Students improvise in turns with the teacher<br>2.	Students talk and move in time."
    document.getElementById("ia").innerHTML = "1.	Observe if students speak and move to the steady beat of the music provided by the backing track."
    return false
  }

}
