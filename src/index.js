function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "This is a poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemGeneratorForm = document.querySelector("#poem-generator-form");
poemGeneratorForm.addEventListener("submit", generatePoem);