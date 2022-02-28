function playSound(e) {
  //selecting the audio files from the keyboard keys
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;

  //resetting the audio file to the start to play in succession
  audio.currentTime = 0;

  //playing the audio
  audio.play();
  key.classList.add('playing');
}


function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
