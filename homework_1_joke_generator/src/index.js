function getJokeFromAI() {
  let apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
  let context =
    "You are a well-mannered, jovial API assistant with a clean sense of humor. Please provide one joke per response.";
  let prompt = "Provide a joke about computer programming";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showJokeFromApi);
}

function showJokeFromApi(response) {
  console.log("Processing....");
  let jokeDisplayLocator = document.querySelector("#joke");
  jokeDisplayLocator.innerHTML = "Generating a joke....";

  let jokeArray = response.data.answer.split("\n");

  let typewriter = new Typewriter(jokeDisplayLocator, {
    strings: jokeArray[0],
    autoStart: true,
  });
  for (i = 1; i < jokeArray.length; i++) {
    if (jokeArray[i].length > 0) {
      typewriter.pauseFor(60).typeString(`<br><br>${jokeArray[i]}`);
    }
  }
  typewriter.pauseFor(60).typeString(`<br><br>😂`);
}

let tellMeAJokeBtnLocator = document.querySelector("#tell-me-joke");
tellMeAJokeBtnLocator.addEventListener("click", getJokeFromAI);
