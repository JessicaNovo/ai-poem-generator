function generatePoem(event) {
  event.preventDefault();
  
  let poemContainer = document.querySelector(".poem-container");
  poemContainer.style.display = "block";

  new Typewriter("#poem", {
    strings: "This is a poem",
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

let poemGeneratorForm = document.querySelector("#poem-generator-form");
poemGeneratorForm.addEventListener("submit", generatePoem);