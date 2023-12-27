// Challenge 2

let challenge2Locator = document.querySelector("#challenge-2");
challenge2Locator.innerHTML = "Roberta Munive";

// Challenge 3
let challenge3Locator = document.querySelector("#challenge-3");
// new Typewriter("#challenge-3", {
//   strings: "Roberta Munive",
//   autoStart: true,
// });

var typewriter = new Typewriter(challenge3Locator, {
  strings: "Roberta Munive",
  autoStart: true,
  loop: true,
  delay: 75,
});

typewriter.typeString('<strong><span style="color: #7254eb;"><br>SheCodes</span></strong>').start();





