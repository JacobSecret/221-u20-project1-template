/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
const button = document.getElementById("fade_text");

document.addEventListener('keydown', (event) => {
  if(event.keyCode == 32) {
    window.location.href = '/feed';
  }
});
button.addEventListener("click", (event) => {
  window.location.href = '/feed';
});