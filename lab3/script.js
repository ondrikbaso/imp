
var music = document.getElementById('radio');
var play = document.getElementById('button');

paused=1;

function playStream() {
	if (paused) {
		music.play();
    play.innerHTML = "Pause";
    paused=0;
	} else {
		music.pause();
    play.innerHTML = "Play";
    paused=1;
	}
}

function up() {
  if(music.volume < 1){
    music.volume += 0.1;
  }
}

function down() {
  if(music.volume > 0){
    music.volume -= 0.1;
  }
}
