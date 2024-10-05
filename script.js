function toggleCircleAndLabel(circleId, labelId, otherCircleId, otherLabelId) {
  const circle = document.getElementById(circleId);
  const label = document.getElementById(labelId);
  const otherCircle = document.getElementById(otherCircleId);
  const otherLabel = document.getElementById(otherLabelId);

  circle.addEventListener("click", function () {
    otherCircle.style.backgroundColor = "#A1B1CE";
    otherLabel.style.color = "#A1B1CE";

    circle.style.backgroundColor = "blue";
    label.style.color = "blue";
  });
}

toggleCircleAndLabel(
  "sliderCard__circle--1",
  "toggleLabel1",
  "sliderCard__circle--2",
  "toggleLabel2"
);
toggleCircleAndLabel(
  "sliderCard__circle--2",
  "toggleLabel2",
  "sliderCard__circle--1",
  "toggleLabel1"
);

document.getElementById("sliderCard__circle--1").style.backgroundColor = "blue";
document.getElementById("toggleLabel1").style.color = "blue";

// =================================================================================================================================

function showNextCard(currentCardId, nextCardId) {
  const currentCard = document.getElementById(currentCardId);
  const nextCard = document.getElementById(nextCardId);

  currentCard.style.display = "none";
  nextCard.style.display = "block";
}

document
  .getElementById("sliderCard__nextBtn--1")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card1", "sliderCard--card2");
  });

document
  .getElementById("sliderCard__nextBtn--2")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card2", "sliderCard--card3");
  });

document
  .getElementById("sliderCard__nextBtn--3")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card3", "sliderCard--card4");
  });

document
  .getElementById("sliderCard__nextBtn--4")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card4", "sliderCard--card5");
  });
document
  .getElementById("sliderCard__calculate-btn--1")
  .addEventListener("click", function () {
    console.log("calculate");
    showNextCard("sliderCard--card5", "sliderCard--card6");
  });

document
  .getElementById("sliderCard__calculate-btn--2")
  .addEventListener("click", function () {
    console.log("calculate");
    showNextCard("sliderCard--card6", "sliderCard--card7");
  });

// ==========================================================sliderCard--card4
let currentIndex = 0;
const buttonsToShow = 5;
const buttonHeight = 50;

function scrollUp() {
  const container = document.querySelector(".sliderCard__btnContainer");
  if (currentIndex > 0) {
    currentIndex--;
    const scrollAmount = currentIndex * buttonHeight;
    container.scrollTo({
      top: scrollAmount,
      behavior: "smooth", // Smooth scroll
    });
  }
}

function scrollDown() {
  const container = document.querySelector(".sliderCard__btnContainer");
  const totalButtons = container.children.length;

  if (currentIndex < totalButtons - buttonsToShow) {
    currentIndex++;
    const scrollAmount = currentIndex * buttonHeight;
    container.scrollTo({
      top: scrollAmount,
      behavior: "smooth", // Smooth scroll
    });
  }
}

let availableOptions = [
  "An-/Vorauszahlung",
  "Arbeitszeitkonten",
  "Gewährleistung",
  "Mängelansprüche",
  "Gew. Mietbürgschaft",
  "Handwerkersicherung",
  "Vertragserfüllung",
];

let selectedOptions = [];

function renderButtons() {
  const buttonContainer = document.querySelector(".sliderCard__btnContainer");

  buttonContainer.innerHTML = "";

  availableOptions.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("sliderCard__btn");
    button.textContent = option;

    button.onclick = () => selectOption(option);
    buttonContainer.appendChild(button);
  });

  if (availableOptions.length > 0) {
    buttonContainer.style.display = "block";
  } else {
    buttonContainer.style.display = "none";
  }
}

function selectOption(text) {
  const selectedList = document.getElementById("sliderCard__selectedList");

  if (!selectedOptions.includes(text)) {
    availableOptions = availableOptions.filter((option) => option !== text);
    selectedOptions.push(text);

    const li = document.createElement("li");
    li.textContent = text;
    selectedList.appendChild(li);

    renderButtons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderButtons();
});

// ===============================================================

// const textSets = {
//   basic: {
//     button1: "Ann/Versacherk Basic",
//     button2: "Mängelanspruch Basic",
//     button3: "Gewährleistung Basic",
//   },
//   pro: {
//     button1: "Ann/Versacherk Pro 1",
//     button2: "Mängelanspruch Pro 2",
//     button3: "Ann/Versacherk Pro 3",
//     button4: "Gewährleistung Pro 4",
//     button5: "Ann/Versacherk Pro 5",
//   },
//   additional: {
//     button1: "Ann/Versacherk Basic",
//     button2: "Mängelanspruch Basic",
//     button3: "Gewährleistung Basic",
//     button4: "Ann/Versacherk Pro 1",
//     button5: "Mängelanspruch Pro 2",
//     button6: "Ann/Versacherk Pro 3",
//     button7: "Mängelanspruch Pro 4",
//     button8: "Ann/Versacherk Pro 5",
//   },
// };

// // Function to update right-side buttons based on the selected left-side button
// function updateRightButtons(set) {
//   // Update text for buttons
//   document.getElementById("sliderCard__right-button-1").textContent =
//     textSets[set].button1;
//   document.getElementById("sliderCard__right-button-2").textContent =
//     textSets[set].button2;
//   document.getElementById("sliderCard__right-button-3").textContent =
//     textSets[set].button3;

//   // Show/hide buttons based on the number of available buttons in the set
//   document.getElementById("sliderCard__right-button-4").style.display =
//     textSets[set].button4 ? "inline-block" : "none";
//   document.getElementById("sliderCard__right-button-5").style.display =
//     textSets[set].button5 ? "inline-block" : "none";
//   document.getElementById("sliderCard__right-button-6").style.display =
//     textSets[set].button6 ? "inline-block" : "none";
//   document.getElementById("sliderCard__right-button-7").style.display =
//     textSets[set].button7 ? "inline-block" : "none";
//   document.getElementById("sliderCard__right-button-8").style.display =
//     textSets[set].button8 ? "inline-block" : "none";
// }

// // Add click event listeners to all left-side buttons
// document.querySelectorAll(".sliderCard__left-button").forEach((button) => {
//   button.addEventListener("click", (event) => {
//     // Remove 'active' class from all buttons
//     document.querySelectorAll(".sliderCard__left-button").forEach((btn) => {
//       btn.classList.remove("active");
//       btn.style.backgroundColor = "#A0AEC8"; // Set all inactive buttons to gray
//     });

//     // Add 'active' class to the clicked button
//     event.target.classList.add("active");
//     event.target.style.backgroundColor = "#304EBA"; // Set active button to blue

//     const selectedSet = event.target.getAttribute("data-set");
//     updateRightButtons(selectedSet);
//   });
// });

// ======================================================

var slider = document.getElementById("myRange");
var output = document.getElementById("selectedAmount");
output.value = "75,000" + " €";

slider.oninput = function () {
  output.value = this.value + " €";
};




// ====================================new button =================================================

// const basicTexts = ['Basic Text 1', 'Basic Text 2', 'Basic Text 3'];
// const proTexts = ['Pro Text 1', 'Pro Text 2', 'Pro Text 3', 'Pro Text 4', 'Pro Text 5'];
// const additionalTexts = ['Basic Text 1', 'Basic Text 2', 'Basic Text 3', 'Pro Text 1', 'Pro Text 2', 'Pro Text 3', 'Pro Text 4', 'Pro Text 5'];

// // Get left panel buttons
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');

// // Get right panel buttons (assuming max 8 buttons)
// const rightButtons = [
//   document.getElementById('right-button-1'),
//   document.getElementById('right-button-2'),
//   document.getElementById('right-button-3'),
//   document.getElementById('right-button-4'),
//   document.getElementById('right-button-5'),
//   document.getElementById('right-button-6'),
//   document.getElementById('right-button-7'),
//   document.getElementById('right-button-8')
// ];

// // Function to update button text and display them
// function updateButtons(texts) {
//   // Hide all buttons initially
//   for (let i = 0; i < rightButtons.length; i++) {
//     rightButtons[i].style.display = 'none';
//   }

//   // Show and update button text
//   for (let i = 0; i < texts.length; i++) {
//     rightButtons[i].textContent = texts[i];
//     rightButtons[i].style.display = 'block';
//   }
// }

// // Button click event listeners
// btn1.addEventListener('click', function () {
//   // Show all basicTexts
//   updateButtons(basicTexts);
// });

// btn2.addEventListener('click', function () {
//   // Show all proTexts
//   updateButtons(proTexts);
// });

// btn3.addEventListener('click', function () {
//   // Show all additionalTexts
//   updateButtons(additionalTexts);
// });

// ============

// Arrays with unique button text for each set
const basicTexts = ['Basic Text 1', 'Basic Text 2', 'Basic Text 3'];
const proTexts = ['Pro Text 1', 'Pro Text 2', 'Pro Text 3', 'Pro Text 4', 'Pro Text 5'];
const additionalTexts = ['Basic Text 1', 'Basic Text 2', 'Basic Text 3', 'Pro Text 1', 'Pro Text 2', 'Pro Text 3', 'Pro Text 4', 'Pro Text 5'];

// Get left panel buttons
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// Get right panel buttons (assuming max 8 buttons)
const rightButtons = [
  document.getElementById('right-button-1'),
  document.getElementById('right-button-2'),
  document.getElementById('right-button-3'),
  document.getElementById('right-button-4'),
  document.getElementById('right-button-5'),
  document.getElementById('right-button-6'),
  document.getElementById('right-button-7'),
  document.getElementById('right-button-8')
];

// Variable to keep track of the last active button (btn1 or btn2)
let lastActiveButton = null;

// Function to update button text and display them
function updateButtons(texts) {
  // Hide all right panel buttons initially
  for (let i = 0; i < rightButtons.length; i++) {
    rightButtons[i].style.display = 'none';
  }

  // Show and update button text
  for (let i = 0; i < texts.length; i++) {
    rightButtons[i].textContent = texts[i];
    rightButtons[i].style.display = 'block';
  }
}

// Function to set active state for left panel buttons
function setActiveButton(buttons) {
  // Remove active class from all buttons first
  [btn1, btn2, btn3].forEach(button => {
    button.classList.remove('active');
  });

  // Add active class to specified buttons
  buttons.forEach(button => {
    button.classList.add('active');
  });
}

// Button click event listeners
btn1.addEventListener('click', function () {
  // Show all basicTexts and make btn1 active
  updateButtons(basicTexts);
  setActiveButton([btn1]);
  lastActiveButton = btn1; // Track that btn1 was the last active button
});

btn2.addEventListener('click', function () {
  // Show all proTexts and make btn2 active
  updateButtons(proTexts);
  setActiveButton([btn2]);
  lastActiveButton = btn2; // Track that btn2 was the last active button
});

btn3.addEventListener('click', function () {
  // Show all additionalTexts and make btn3 active
  updateButtons(additionalTexts);
  
  // If btn1 or btn2 was clicked earlier, keep it active along with btn3
  if (lastActiveButton) {
    setActiveButton([btn3, lastActiveButton]);
  } else {
    setActiveButton([btn3]); // If no button was previously clicked, only activate btn3
  }
});
