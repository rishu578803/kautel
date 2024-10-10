/// Track the currently active circle
let activeCircle = "sliderCard__circle--1"; // default to Einzelbürgschaft
var selectedButtonTexts = [];
var different_prev = false;
// Function to toggle circles and set active circle
function toggleCircleAndLabel(circleId, labelId, otherCircleId, otherLabelId) {
  const circle = document.getElementById(circleId);
  const label = document.getElementById(labelId);
  const otherCircle = document.getElementById(otherCircleId);
  const otherLabel = document.getElementById(otherLabelId);

  circle.addEventListener("click", function () {
    // Reset the styles of the other circle and label
    otherCircle.style.backgroundColor = "#A1B1CE";
    otherLabel.style.color = "#A1B1CE";

    // Set the styles for the clicked circle and label
    circle.style.backgroundColor = "blue";
    label.style.color = "blue";

    // Set the active circle
    activeCircle = circleId;
  });
}

// Call the function for both toggle options
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

// Default to Einzelbürgschaft (first circle)
document.getElementById("sliderCard__circle--1").style.backgroundColor = "blue";
document.getElementById("toggleLabel1").style.color = "blue";

// Function to show the next card
function showNextCard(currentCardId, nextCardId) {
  const currentCard = document.getElementById(currentCardId);
  const nextCard = document.getElementById(nextCardId);

  currentCard.style.display = "none";
  nextCard.style.display = "block";
}

function showPreviousCard(currentCardId, previousCardId) {
  const currentCard = document.getElementById(currentCardId);
  const previousCard = document.getElementById(previousCardId);

  currentCard.style.display = "none";
  previousCard.style.display = "block";
}

// Modify the event listener for the first "Next" button
document
  .getElementById("sliderCard__nextBtn--1")
  .addEventListener("click", function () {
    // Check which circle is active and show the corresponding card
    if (activeCircle === "sliderCard__circle--1") {
      showNextCard("sliderCard--card1", "sliderCard--card2");
    } else if (activeCircle === "sliderCard__circle--2") {
      showNextCard("sliderCard--card1", "sliderCard--card3");
    }
  });
  document
  .getElementById("sliderCard__nextBtn--4")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card4", "sliderCard--card6");
  });


  document
  .getElementById("sliderCard--card6_back_btn")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card6", "sliderCard--card4");
  });
document
  .getElementById("sliderCard__nextBtn--5")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card5", "sliderCard--card7");
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

document
  .getElementById("sliderCard__gobackBtn--2")
  .addEventListener("click", function () {
    showPreviousCard("sliderCard--card2", "sliderCard--card1");
  });
document
  .getElementById("sliderCard__gobackBtn--4")
  .addEventListener("click", function () {
    showPreviousCard("sliderCard--card4", "sliderCard--card2");
  });

document
  .getElementById("sliderCard__gobackBtn--3")
  .addEventListener("click", function () {
    showPreviousCard("sliderCard--card3", "sliderCard--card1");
  });
document
  .getElementById("sliderCard__gobackBtn--5")
  .addEventListener("click", function () {
    if (different_prev) {
      showPreviousCard("sliderCard--card5", "sliderCard--card3");
      different_prev = false;
    } else {
      showPreviousCard("sliderCard--card5", "sliderCard--card2");
    }
  });

document
  .getElementById("calculate-btn_back--2")
  .addEventListener("click", function () {
    showPreviousCard("sliderCard--card7", "sliderCard--card2");
  });
// ==========================================================   sliderCard--card4
// Add event listener for the Next button

// The rest of the code remains the same
// Existing array to store selected button texts
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

var availableOptions = [
  "An-/Vorauszahlung",
  "Arbeitszeitkonten",
  "Gewährleistung",
  "Mängelansprüche",
  "Gew. Mietbürgschaft",
  "Handwerkersicherung",
  "Vertragserfüllung",
  "Vertragserfüllung 1",
  "Vertragserfüllung 2",
  "Vertragserfüllung 3",
  "Vertragserfüllung 4",
  "Vertragserfüllung 5",
  "Vertragserfüllung 6",
  "Vertragserfüllung 7",
  "Vertragserfüllung 8",
  "Vertragserfüllung 9",
  "Vertragserfüllung 10",
  "Vertragserfüllung 11",
  "Vertragserfüllung 12",
];

let selectedOptions = [];
var selectedButtonTexts = [];

// Render buttons in the left panel (available options)
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

// Render selected options in the right panel (including selectedButtonTexts)
function renderSelectedOptions() {
  const selectedList = document.getElementById("sliderCard__selectedList");

  selectedList.innerHTML = "";

  console.log("selected options: ", selectedButtonTexts);

  if (selectedButtonTexts && selectedButtonTexts.length > 0) {
    selectedButtonTexts.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      selectedList.appendChild(li);
      li.onclick = () => deselectOption(text); // Clicking li will deselect the option
    });
  } else {
  }
  selectedOptions.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;

    li.onclick = () => deselectOption(option); // Add click event for deselect
    selectedList.appendChild(li);
  });
}

// Handle selecting an option from left panel
function selectOption(option) {
  if (!selectedButtonTexts.includes(option)) {
    // Remove from available options and add to selected options
    availableOptions = availableOptions.filter((opt) => opt !== option);
    selectedButtonTexts.push(option); // Add to selectedButtonTexts

    renderButtons();
    renderSelectedOptions();
  }
}

// Handle deselecting an option from right panel
function deselectOption(option) {
  console.log("Deselecting option");

  if (!availableOptions.includes(option)) {
    // Remove from selectedButtonTexts and add back to available options
    selectedButtonTexts = selectedButtonTexts.filter((opt) => opt !== option);
    availableOptions.push(option); // Add back to availableOptions

    renderButtons();
    renderSelectedOptions();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderButtons();
  renderSelectedOptions(); // Ensure that selectedButtonTexts are rendered when page loads
});

var headingChange = false;
// Initialize a click counter
let clickCount = 0;

document
  .getElementById("sliderCard__nextBtn--2")
  .addEventListener("click", function () {
    clickCount++; // Increment the click count on each button click

    // First click
    if (clickCount === 1) {
      // Hide sliderCard--card2 when the button is clicked
      headingChange = true;
  
      if (selectedOptions.length > 1 || selectedButtonTexts.length > 1) {
     
        // Perform the existing task on the first click
        const sliderCardCard2Heading = document.getElementById(
          "sliderCard--card2---heading"
        );
        const sliderCardCard2_1Heading = document.getElementById(
          "sliderCard--card2-1---heading"
        );
        sliderCardCard2Heading.style.display = "none";
        sliderCardCard2_1Heading.style.display = "block";

        renderButtons();
        renderSelectedOptions();


     
      } else if (selectedButtonTexts.length === 1) {
        showNextCard("sliderCard--card2", "sliderCard--card4");
      }
      console.log("headingChange then",selectedOptions)
      console.log("headingChange then 2",selectedButtonTexts)
      // Second click
    } else if (clickCount === 2) {
      // Call showNextCard on the second click

     console.log("================================================================")
      showNextCard("sliderCard--card2", "sliderCard--card5");
    }
  });

// ===============================================================

var slider = document.getElementById("myRange");
var output = document.getElementById("selectedAmount");
output.value = "20,000" + " €";

slider.oninput = function () {
  output.value = this.value + " €";
};

// ============
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("selectedAmount2");
output2.value = "75,000" + " €";

slider2.oninput = function () {
  output2.value = this.value + " €";
};
// ==========================

// Trigger default state (btn1 active and basicTexts displayed) when DOM is fully loaded

// ==============================
const basicTexts = ["Gewährleistung", "Mängelansprüche", "Mietkaution gew."];
const proTexts = [
  "An- und Vorauszahlungen",
  "Bauhandwerkersicherung",
  "Gewährleistung",
  "Mängelansprüche",
  "Mietkaution gew.",
];
const additionalTexts = [
  "Basic Text 1",
  "Basic Text 2",
  "Basic Text 3",
  "Pro Text 1",
  "Pro Text 2",
  "Pro Text 3",
  "Pro Text 4",
  "Pro Text 5",
];

// Get left panel buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// Get right panel buttons (assuming max 8 buttons)
const rightButtons = [
  document.getElementById("right-button-1"),
  document.getElementById("right-button-2"),
  document.getElementById("right-button-3"),
  document.getElementById("right-button-4"),
  document.getElementById("right-button-5"),
  document.getElementById("right-button-6"),
  document.getElementById("right-button-7"),
  document.getElementById("right-button-8"),
];

// Variable to keep track of the last active button (btn1 or btn2)
let lastActiveButton = null;

// Function to update button text and display them
function updateButtons(texts) {
  // Hide all right panel buttons initially
  for (let i = 0; i < rightButtons.length; i++) {
    rightButtons[i].style.display = "none";
  }

  // Show and update button text
  for (let i = 0; i < texts.length; i++) {
    rightButtons[i].textContent = texts[i];
    rightButtons[i].style.display = "block";
  }
}

// Function to set active state for left panel buttons
function setActiveButton(buttons) {
  // Remove active class from all buttons first
  [btn1, btn2, btn3].forEach((button) => {
    button.classList.remove("active");
  });

  // Add active class to specified buttons
  buttons.forEach((button) => {
    button.classList.add("active");
  });
}

var DisablelastActiveColor = false;
var firstButtonContent = "";
var secondButtonContent = "";
var thirdButtonContent = "";
var sendToSlider2_2 = false;

// Button click event listeners
btn1.addEventListener("click", function () {
  // Show all basicTexts and make btn1 active

  // Update buttons and set btn1 as active
  updateButtons(basicTexts);
  setActiveButton([btn1]);
  firstButtonContent = basicTexts;
  lastActiveButton = btn1;
  btn1.style.backgroundColor = "#304eba"; // Change btn1's background to active color
  btn2.style.backgroundColor = "#a0aec8"; // Change btn2's background to inactive color
});

btn2.addEventListener("click", function () {
  updateButtons(proTexts);
  setActiveButton([btn2]);
  secondButtonContent = proTexts;
  lastActiveButton = btn2;
  btn2.style.backgroundColor = "#304eba"; // Change btn2's background to active color
  btn1.style.backgroundColor = "#a0aec8"; // Change btn1's background to inactive color
});

// btn3.addEventListener("click", function () {
//   btn3.style.backgroundColor = "#3b73cc";
//   // If btn3 is clicked and it wasn't the last active button (btn1 or btn2), update background color
//   if (lastActiveButton !== btn3) {
//     // Check if the last active button was btn1 or btn2
//     if (lastActiveButton === btn1 || lastActiveButton === btn2) {
//       lastActiveButton.style.backgroundColor = "#304eba"; // Change background color to gray
//       DisablelastActiveColor = true;
//     }

//     // Show all additionalTexts and make btn3 active
//     console.log("Last active button:", lastActiveButton);

//     setActiveButton([btn3]);
//     sendToSlider2_2 = true;
//     // Set lastActiveButton to btn3
//     lastActiveButton = btn3;
//   }
// });

// =======================================
btn3.addEventListener("click", function () {
  // Toggle the background color between green and red
  if (btn3.style.backgroundColor === "rgb(48, 78, 186)") {
    btn3.style.backgroundColor = "rgb(160, 174, 200)"; // Set to red on second click
  } else {
    btn3.style.backgroundColor = "rgb(48, 78, 186)"; // Set to green on first click
  }

  // If btn3 is clicked and it wasn't the last active button (btn1 or btn2), update background color
  if (lastActiveButton !== btn3) {
    // Check if the last active button was btn1 or btn2
    if (lastActiveButton === btn1 || lastActiveButton === btn2) {
      lastActiveButton.style.backgroundColor = "#304eba"; // Change background color to gray
      DisablelastActiveColor = true;
    }

    // Show all additionalTexts and make btn3 active
    console.log("Last active button:", lastActiveButton);

    setActiveButton([btn3]);
    sendToSlider2_2 = true;
    // Set lastActiveButton to btn3
    lastActiveButton = btn3;
  }
});

// Trigger default state (btn1 active and basicTexts displayed) when DOM is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  updateButtons(basicTexts); // Show basicTexts in right panel
  setActiveButton([btn1]); // Make btn1 active by default
  lastActiveButton = btn1; // Set btn1 as the last active button
  btn1.style.backgroundColor = "#304eba"; // Set initial background color for btn1
  btn2.style.backgroundColor = "#a0aec8"; // Set initial background color for btn2
});

// =========================================
// Store visible button texts on "Next" button click

document
  .getElementById("sliderCard__nextBtn--3")
  .addEventListener("click", function () {
    // Create a variable to hold the text of visible buttons

    // Loop through rightButtons and collect text from visible buttons
    rightButtons.forEach((button) => {
      if (button.style.display === "block") {
        selectedButtonTexts.push(button.textContent);
      }
    });

    if (sendToSlider2_2) {
      showNextCard("sliderCard--card3", "sliderCard--card2");
      renderButtons();
      renderSelectedOptions();
    } else {
      showNextCard("sliderCard--card3", "sliderCard--card5");
      different_prev = true;
    }

    // Log the collected texts (You can store or use this array as needed)
    console.log("selectedButtonTexts", selectedButtonTexts);

    // You can now use the selectedButtonTexts array for any further logic.
  });