const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// List of words that should always be in uppercase
const specialWords = ["API", "NaN", "OO", "HTML", "JSONP"];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    return tutorial
      .split(" ")
      .map((word) => {
        // Check if the word is in the specialWords array
        if (specialWords.includes(word.toUpperCase())) {
          return word.toUpperCase(); // Keep it uppercase
        } else {
          // Capitalize the first letter and lowercase the rest
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join(" ");
  });
};

console.log(titleCased());
