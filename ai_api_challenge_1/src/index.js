function showAnswerFromAi(response) {
  console.log("Processing....");
  alert(response.data.answer);
}
let apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
let context =
  "You are a knowledgeable API Assistant. Please provide one concise response. The format of your answer should be: The first female president was YOUR ANSWER. Please include the dates she served as well as the country of which she was president.";
let prompt = "Who was the world's first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswerFromAi);
