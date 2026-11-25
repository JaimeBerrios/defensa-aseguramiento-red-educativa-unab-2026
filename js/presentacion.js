function actualizarPie({ currentSlide, indexh }) {
  document.querySelector("#expositor").textContent = currentSlide.dataset.expositor;
  document.querySelector("#numero-lamina").textContent =
    `${indexh + 1} / ${Reveal.getTotalSlides()}`;
}

Reveal.on("ready", actualizarPie);
Reveal.on("slidechanged", actualizarPie);

Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0.07,
  hash: true,
  scrollActivationWidth: null,
  controls: true,
  controlsTutorial: false,
  progress: true,
  center: true,
  transition: "fade",
  plugins: [RevealNotes, RevealZoom, RevealSearch]
});
