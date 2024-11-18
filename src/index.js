function displayPoem(response) {

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemThemeInput = document.getElementById("poem-theme");
  let poemTheme = poemThemeInput.value;

  let apiKey = "073bf32aecbe54a7aof7378b0d8t32a7";
  let context =
    "You are poet with proficency for short poems. Upon request generate a 4 line poem separating each line with a <br />. Make sure to follow the requested theme for the poem. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem.";
  let prompt = `Please generate a poem about ${poemTheme}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemContainer = document.querySelector(".poem-container");
  poemContainer.classList.remove("hidden");

  poemContainer.innerHTML = `⏳ Generating a poem about ${poemTheme}...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemGeneratorForm = document.querySelector("#poem-generator-form");
poemGeneratorForm.addEventListener("submit", generatePoem);