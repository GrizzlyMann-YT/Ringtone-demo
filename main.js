function function1() {
    document.getElementById("audio1").play();
}
function function2() {
    document.getElementById("audio2").play();
}
function function3() {
    document.getElementById("audio3").play();
}
function function4() {
    document.getElementById("audio4").play();
}
function function5() {
    document.getElementById("audio5").play();
}

function stop_button(){
  audio1.pause();
  audio1.currentTime = 0;
  audio2.pause();
  audio2.currentTime = 0;
  audio3.pause();
  audio3.currentTime = 0;
  audio4.pause();
  audio4.currentTime = 0;
  audio5.pause();
  audio5.currentTime = 0;
}