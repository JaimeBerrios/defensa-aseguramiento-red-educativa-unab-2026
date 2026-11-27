function actualizarPie({ currentSlide, indexh }) {
  document.querySelector("#expositor").textContent = currentSlide.dataset.expositor;
  document.querySelector("#numero-lamina").textContent =
    `${indexh + 1} / ${Reveal.getTotalSlides()}`;
}

const laminas = [...document.querySelectorAll(".slides > section")];
laminas.forEach((lamina, indice) => {
  lamina.dataset.secuencia = `${indice + 1} / ${laminas.length}`;
});

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
  pdfMaxPagesPerSlide: 1,
  plugins: [RevealNotes, RevealZoom, RevealSearch]
});
