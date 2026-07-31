// Konfiguration: https://revealjs.com/config/
Reveal.initialize({
  hash: true,
  // Deutsche Präsentation, Folien sind eher textarm -> etwas mehr Fläche
  width: 1280,
  height: 800,
  margin: 0.06,

  slideNumber: "c/t",
  // Vertikale Folien sind optionale Vertiefungen und zählen nicht zum Kernfluss
  showSlideNumber: "speaker",

  controls: true,
  controlsTutorial: false,
  progress: true,
  overview: true,
  center: true,
  transition: "slide",

  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
});
