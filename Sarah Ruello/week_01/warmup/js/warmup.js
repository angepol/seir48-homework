// function raindrop(input) {
//     let string = "";
//     // concatenate onto string
//     if (input % 3 == 0) {
//         string += "Pling";
//     }
//     if (input % 5 == 0) {
//         string += "Plang";
//     }
//     if (input % 7 == 0) {
//         string += "Plong";
//     }
//     // return as a conditional statement:
//     return string || input.toString();
// }

// console.log(raindrop(28));
// console.log(raindrop(34));
// console.log(raindrop(1755));

// // Warmup - Simon Says
// // Create a function that takes an input and returns Simon's response as follows:
// //  Simon answers 'Sure.' if you ask him a question.
// //  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// //  He says 'Fine. Be that way!' if you address him without actually saying anything.
// //  He answers 'Whatever.' to anything else

// function simonSays(input) {
//     if (input.includes("?") && input !== input.toUpperCase()) {
//         return "Sure";
//     } else if (input === "") {
//         return "Fine. Be that way!;";
//     } else if (input == input.toUpperCase()) {
//         return "Woah, chill out!";
//     } else {
//         return "Whatever";
//     }
// }

// console.log(simonSays("Hey are you there?")); // Sure
// console.log(simonSays("LISTEN TO ME")); // Whoa chill out!
// console.log(simonSays("")); // Fine. Be that way!
// console.log(simonSays("Do your laundry.")); // Whatever
// console.log(simonSays("I'M TALKING TO YOU?")); // Whoa chill out!

// // # Leap Year Warmup Exercise

// function isLeapYear() {
//     let year = document.getElementById("text1").value;
//     if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//         const resultText = document.querySelector(".result");
//         resultText.innerText = "True!";
//     } else {
//         const resultText = document.querySelector(".result");
//         resultText.innerText = "False!";
//     }
// }

function pigLatin(input) {
  let wordArray = input.split(" ");
  let result = [];

  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].includes("!") || wordArray[i].includes(".") || wordArray[i].includes("?")) {
      result.push(wordArray[i]);
    } else {
      const firstLetter = wordArray[i].charAt(0);
      const restOfString = wordArray[i].substr(1);
      let newWord = restOfString + firstLetter + "ay";
      // console.log("new word: " + newWord);
      result.push(newWord);
      // console.log(result);
    }
  }
  return result.join(" ");
}

console.log(pigLatin("Cat breath smells like cat food !"));
console.log(pigLatin("Derrick smells like eggs ."));