// Sincronizar las letras con la canción
var audio = document.getElementById("bg-music");
var lyrics = document.querySelector("#lyrics");
var volumeControl = document.getElementById("volume-control");

function tryPlayAudio() {
  if (!audio) return;

  audio.volume = Number(volumeControl ? volumeControl.value : 0.6);
  audio.muted = false;
  audio.play().catch(function () {
    // El navegador bloquea autoplay; se reintenta cuando el usuario interactúa.
  });
}

if (audio) {
  audio.preload = "auto";
  audio.loop = true;
  audio.volume = Number(volumeControl ? volumeControl.value : 0.6);
  window.addEventListener("load", function () {
    tryPlayAudio();
  });
  audio.addEventListener("canplay", tryPlayAudio);
  document.addEventListener("click", tryPlayAudio, { once: true });
  document.addEventListener("touchstart", tryPlayAudio, { once: true });
  document.addEventListener("keydown", tryPlayAudio, { once: true });
}

if (volumeControl && audio) {
  volumeControl.addEventListener("input", function (event) {
    audio.volume = Number(event.target.value);
  });
}


setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);