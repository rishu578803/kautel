var activeCircle = "sliderCard__circle--1"; // default to Einzelbürgschaft
var selectedButtonTexts = [];
var savedselectedButtonTexts = [];
var btn_textContext = [];
var different_prev = false;
var DisablelastActiveColor = false;
var firstButtonContent = true;
var secondButtonContent = false;
var thirdButtonContent = "";
var sendToSlider2_2 = false;
let selectedOptions = [];
var selectedPrice_1 = "20,000" + " €";
var selectedPrice_2 = "75.000" + " €";
var change_selected_text = 1;
var active_button_content = 1;

var availableOptions = [
  "Arbeitszeitkonten",

  "Mitarbeiterguthaben",

  "Arbeitnehmerentsendung",

  "An-/Vorauszahlungen",

  "Architektenleistungen",

  "Ausfallbürgschaft",

  "Ausführungsbürgschaft",

  "Bauhandwerker-Rahmenvertrag",

  "Bauhandwerkersicherung	",

  "Bietungsbürgschaft",

  "Fremdsprachenbürgschaft	",

  "Immissionsbürgschaft	",

  "Dienstleistungsbürgschaft",

  "Erschließungsbürgschaft	",

  "Energielieferung",

  "Franchise",

  "Gewährleistung",

  "IATA-Bürgschaft	",

  "Individualbürgschaft	",
  "Lieferantenbürgschaft	",

  "Leasingbürgschaft	",

  "Lottobürgschaft",

  "Mängelansprüche	",

  "Gew. Mietkaution",

  "Mineralölbürgschaft	",

  "Postagentur ",

  "Prozessbürgschaft",

  "Recyclingbürgschaft",

  "Rekultivierung",

  "Rückbaubürgschaft",

  "Sonderbürgschaft",

  "Tankkartenforderung",

  "Verbraucherbürgschaft	",

  "Vertragserfüllung",

  "Vorauszahlungsbürgschaft	",

  "Warenlieferungsbürgschaft",
];

var availableOptions2 = [
  "Arbeitszeitkonten",

  "Mitarbeiterguthaben",

  "Arbeitnehmerentsendung",

  "An-/Vorauszahlungen",

  "Architektenleistungen",

  "Ausfallbürgschaft",

  "Ausführungsbürgschaft",

  "Bauhandwerker-Rahmenvertrag",

  "Bauhandwerkersicherung	",

  "Bietungsbürgschaft",

  "Fremdsprachenbürgschaft	",

  "Immissionsbürgschaft	",

  "Dienstleistungsbürgschaft",

  "Erschließungsbürgschaft	",

  "Energielieferung",

  "Franchise",

  "Gewährleistung",

  "IATA-Bürgschaft	",

  "Individualbürgschaft	",
  "Lieferantenbürgschaft	",

  "Leasingbürgschaft	",

  "Lottobürgschaft",

  "Mängelansprüche	",

  "Gew. Mietkaution",

  "Mineralölbürgschaft	",

  "Postagentur ",

  "Prozessbürgschaft",

  "Recyclingbürgschaft",

  "Rekultivierung",

  "Rückbaubürgschaft",

  "Sonderbürgschaft",

  "Tankkartenforderung",

  "Verbraucherbürgschaft	",

  "Vertragserfüllung",

  "Vorauszahlungsbürgschaft	",

  "Warenlieferungsbürgschaft",
];
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

    renderButtons();

    console.log(" from circle selectedButtonTexts", selectedButtonTexts);
    // Set the active circle
    activeCircle = circleId;
    change_selected_text = circleId;
    console.log(" from circle selectedButtonTexts", selectedButtonTexts);
    // Log the updated activeCircle value
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

function getActiveCircle() {
  return activeCircle;
}

// Default to Einzelbürgschaft (first circle)
document.getElementById("sliderCard__circle--1").style.backgroundColor = "blue";
document.getElementById("toggleLabel1").style.color = "blue";

// Function to show the next card
function showNextCard(currentCardId, nextCardId) {
  const currentCard = document.getElementById(currentCardId);
  const nextCard = document.getElementById(nextCardId);

  currentCard.style.display = "none";
  nextCard.style.display = "block";

  console.log("Active circle changed to:", activeCircle);
}

function showPreviousCard(currentCardId, previousCardId) {
  const currentCard = document.getElementById(currentCardId);

  const previousCard = document.getElementById("sliderCard--card1");

  currentCard.style.display = "none";
  previousCard.style.display = "block";

  const circle = document.getElementById("sliderCard__circle--1");
  const label = document.getElementById("toggleLabel1");
  const otherCircle = document.getElementById("sliderCard__circle--2");
  const otherLabel = document.getElementById("toggleLabel2");

  otherCircle.style.backgroundColor = "#A1B1CE";
  otherLabel.style.color = "#A1B1CE";

  circle.style.backgroundColor = "blue";
  label.style.color = "blue";

  renderButtons();

  console.log(" from circle selectedButtonTexts", selectedButtonTexts);
  // Set the active circle
  activeCircle = "sliderCard__circle--1";
  change_selected_text = "sliderCard__circle--1";
  console.log(" from circle selectedButtonTexts", selectedButtonTexts);
}

// Modify the event listener for the first "Next" button
document
  .getElementById("sliderCard__nextBtn--1")
  .addEventListener("click", function () {
    // Check which circle is active and show the corresponding card
    if (activeCircle == "sliderCard__circle--1") {
      console.log("save selected", savedselectedButtonTexts);
      availableOptions2.map((item) => {
        availableOptions.push(item);
      });

      selectedButtonTexts = [];

      savedselectedButtonTexts = [];

      // Display new heading
      document.getElementById("sliderCard--card2---heading").style.display =
        "block";
      document.getElementById("sliderCard--card2-1---heading").style.display =
        "none";

      renderButtons();
      renderSelectedOptions();
      showNextCard("sliderCard--card1", "sliderCard--card2");
    } else if (activeCircle == "sliderCard__circle--2") {
      const btn1 = document.getElementById("btn1");
      const btn3 = document.getElementById("btn3");
      const btn2 = document.getElementById("btn2");

      setActiveButton([btn1]);
      selectedButtonTexts = [];
      savedselectedButtonTexts = [];
      updateButtons(basicTexts);
      sendToSlider2_2 = false;
      firstButtonContent = true;
      secondButtonContent = false;
      lastActiveButton = btn1;

      btn3.style.backgroundColor = "#a0aec8";
      btn2.style.backgroundColor = "#a0aec8"; // Change background color to active gray
      btn1.style.backgroundColor = "#304eba";
      // DisablelastActiveColor = true;

      renderButtons();
      renderSelectedOptions();
      // console.log("selectedButtonTexts: in 2 card", selectedButtonTexts);
      showNextCard("sliderCard--card1", "sliderCard--card3");
    }
  });

document
  .getElementById("sliderCard__nextBtn--4")
  .addEventListener("click", function () {
    console.log("selected product", selectedButtonTexts);

    const product = selectedButtonTexts;


    const input_val = document.getElementById("bruttoeinkommen").value;

    console.log("in", input_val)
    
    if (input_val >= 50.000) {
      const leftSection = document.getElementById(
        "sliderCard--card6_left-section"
      );
  
      console.log("left_section", leftSection, selectedButtonTexts);
      if (!leftSection) {
        console.error("leftSection not found");
        return;
      }
  
      // Iterate over product array and create <p> elements
      product.forEach((item) => {
        const pElement = document.createElement("p");
        pElement.className = "sub_heading"; // Add a class for styling if needed
        pElement.textContent = item; // Set the text to the product item
        leftSection.appendChild(pElement); // Append the <p> element to left-section
      });
  
      // Make sure selectedPrice_1 contains the desired value, e.g., "30.000 €"
      let selectedAmountElement = document.querySelector(".selectedPrice1");
  
      selectedAmountElement.innerText = selectedPrice_1;
  
      console.log("selectedPrice_1:", selectedPrice_1);
      console.log("selectedAmountElement", selectedAmountElement);
      // Call the function to show the next card
      showNextCard("sliderCard--card4", "sliderCard--card6");
    } else {
      const leftSection = document.getElementById(
        "sliderCard--card6_left-section"
      );
  
      console.log("left_section", leftSection, selectedButtonTexts);
      if (!leftSection) {
        console.error("leftSection not found");
        return;
      }
  
      // Iterate over product array and create <p> elements
      product.forEach((item) => {
        const pElement = document.createElement("p");
        pElement.className = "sub_heading"; // Add a class for styling if needed
        pElement.textContent = item; // Set the text to the product item
        leftSection.appendChild(pElement); // Append the <p> element to left-section
      });
  
      // Make sure selectedPrice_1 contains the desired value, e.g., "30.000 €"
      let selectedAmountElement = document.querySelector(".selectedPrice1");
  
      selectedAmountElement.innerText = selectedPrice_1;
  
      console.log("selectedPrice_1:", selectedPrice_1);
      console.log("selectedAmountElement", selectedAmountElement);
      // Call the function to show the next card
      showNextCard("sliderCard--card4", "sliderCard--card6.1");
    }
    // Select the .left-section element inside .sliderCard--card6

   
  });

document
  .getElementById("sliderCard--card6_back_btn")
  .addEventListener("click", function () {
    showNextCard("sliderCard--card6", "sliderCard--card4");
  });
document
  .getElementById("sliderCard__nextBtn--5")
  .addEventListener("click", function () {
    let selectedAmountElement = document.querySelector(".selectedPrice2");

    selectedAmountElement.innerText = selectedPrice_2;

    console.log("selectedPrice_1:", selectedPrice_2);

    console.log("selectedPrice_2 ", selectedPrice_2);
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
    if (activeCircle == "sliderCard__circle--1") {
      showPreviousCard("sliderCard--card2", "sliderCard--card1");
    } else {
      showPreviousCard("sliderCard--card2", "sliderCard--card3");
    }
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
    if (activeCircle === "sliderCard__circle--1") {
      if (selectedButtonTexts && selectedButtonTexts.length > 1) {
        showPreviousCard("sliderCard--card7", "sliderCard--card5");
      } else {
        showPreviousCard("sliderCard--card7", "sliderCard--card4");
      }
    } else if (activeCircle === "sliderCard__circle--2") {
      showPreviousCard("sliderCard--card7", "sliderCard--card5");
    }
  });
// ==========================================================   sliderCard--card4

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
  if (activeCircle == "sliderCard__circle--1") {
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
      // If no options are selected, display a message
      // const message = document.createElement("p");
      // message.textContent = "Es sind keine Optionen ausgewählt.";
      // selectedList.appendChild(message);
    }
  } else if (activeCircle == "sliderCard__circle--2") {
    const selectedList = document.getElementById("sliderCard__selectedList");

    selectedList.innerHTML = "";

    if (selectedButtonTexts && selectedButtonTexts.length > 0) {
      selectedButtonTexts.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        selectedList.appendChild(li);
        li.onclick = () => deselectOption(text); // Clicking li will deselect the option
      });
    } else {
      // const message = document.createElement("p");
      // message.textContent = "Es sind keine Optionen ausgewählt.";
      // selectedList.appendChild(message);
    }
  }
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
    console.log("selectedtext for save 2", selectedButtonTexts);
    if (activeCircle == "sliderCard__circle--1") {
      // Increment the click count on each button click
      clickCount++;
      // First click
      if (clickCount === 1) {
        // Hide sliderCard--card2 when the button is clicked
        headingChange = true;

        const sliderCardCard2Heading = document.getElementById(
          "sliderCard--card2---heading"
        );
        const sliderCardCard2_1Heading = document.getElementById(
          "sliderCard--card2-1---heading"
        );

        sliderCardCard2Heading.style.display = "none";
        sliderCardCard2_1Heading.style.display = "block";

        if (selectedButtonTexts.length > 1) {
          // Perform the existing task on the first click
          renderButtons();
          renderSelectedOptions();
        } else if (selectedButtonTexts.length === 1) {
          showNextCard("sliderCard--card2", "sliderCard--card4");
        }
        console.log("headingChange then", selectedOptions);
        console.log("headingChange then 2", selectedButtonTexts);

        // Second click
      } else if (clickCount == 2) {
        // Call showNextCard on the second click

        showNextCard("sliderCard--card2", "sliderCard--card5");
      } else if (clickCount >= 3) {
        console.log("clickcount more than 1", clickCount);
        if (selectedButtonTexts.length > 1) {
          // Perform the existing task on the first click
          renderButtons();
          renderSelectedOptions();
          showNextCard("sliderCard--card2", "sliderCard--card5");
        } else if (selectedButtonTexts.length === 1) {
          showNextCard("sliderCard--card2", "sliderCard--card4");
        }
      }
    } else if (activeCircle == "sliderCard__circle--2") {
      selectedButtonTexts &&
        selectedButtonTexts.map((item) => {
          savedselectedButtonTexts.push(item);
        });
      showNextCard("sliderCard--card2", "sliderCard--card5");
    }
  });

// ===============================================================

// var slider = document.getElementById("myRange");
// var output = document.getElementById("selectedAmount");
// output.value = "20,000" + " €";

// slider.oninput = function () {
//   output.value = this.value + " €";
//   selectedPrice_1 = this.value + " €";
// };

// ============
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("selectedAmount2");
output2.value = "75,000" + " €";

slider2.oninput = function () {
  output2.value = this.value + " €";
  selectedPrice_2 = this.value + " €";
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
  console.log("Updating buttons", texts);
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

// Track the last active button
var btnStatus = "not changed";
// Button click event listeners
btn1.addEventListener("click", function () {
  console.log("btn1 clicked");

  // Update buttons and set btn1 as active
  updateButtons(basicTexts);
  setActiveButton([btn1]);
  firstButtonContent = true;
  secondButtonContent = false;
  active_button_content = 1;
  lastActiveButton = btn1;
  btn1.style.backgroundColor = "#304eba"; // Change btn1's background to active color
  btn2.style.backgroundColor = "#a0aec8"; // Change btn2's background to inactive color

  availableOptions = availableOptions2;
  savedselectedButtonTexts = [];
  selectedButtonTexts = [];
  btnStatus = "changed";
  console.log("availableOptions from btn", availableOptions);
  console.log("firstButtonContent:", firstButtonContent); // Confirm update
});

btn2.addEventListener("click", function () {
  console.log("btn2 clicked");

  updateButtons(proTexts);
  setActiveButton([btn2]);

  secondButtonContent = true;
  firstButtonContent = false;
  active_button_content = 2;
  lastActiveButton = btn2;
  btn2.style.backgroundColor = "#304eba"; // Change btn2's background to active color
  btn1.style.backgroundColor = "#a0aec8"; // Change btn1's background to inactive color

  btnStatus = "changed";
  availableOptions = availableOptions2;
  savedselectedButtonTexts = [];
  // selectedButtonTexts = [];
  console.log("availableOptions from btn", availableOptions);
  console.log("secondButtonContent:", secondButtonContent); // Confirm update
});

// btn3 event listener
btn3.addEventListener("click", function () {
  console.log("btn3 clicked");

  // Toggle background color between two states
  if (btn3.style.backgroundColor === "rgb(48, 78, 186)") {
    btn3.style.backgroundColor = "rgb(160, 174, 200)"; // Set to red
  } else {
    btn3.style.backgroundColor = "rgb(48, 78, 186)"; // Set to blue
  }

  // Check if the last active button was btn1 or btn2
  if (lastActiveButton !== btn3) {
    if (lastActiveButton === btn1 || lastActiveButton === btn2) {
      lastActiveButton.style.backgroundColor = "#304eba"; // Change background color to active gray
      DisablelastActiveColor = true;
    }

    // Make btn3 active
    setActiveButton([btn3]);
    sendToSlider2_2 = true;

    // Log the last active button and check the flags
    console.log("Last active button:", lastActiveButton);
    console.log("firstButtonContent:", firstButtonContent); // This should reflect the state of btn1
    console.log("secondButtonContent:", secondButtonContent); // This should reflect the state of btn2

    // Set the last active button to btn3
    lastActiveButton = btn3;
  } else {
    console.log("btn3 clicked again, already active.");
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
    // selectedButtonTexts = [];

    if (activeCircle === "sliderCard__circle--2") {
      selectedButtonTexts = [];

      console.log("selectedButtonTexts frst 19 oct", selectedButtonTexts);

      console.log(
        "Button clicked, starting process... =============new process============",
        firstButtonContent,
        secondButtonContent
      );

      console.log(
        "Initial basicTexts: new===================================",
        basicTexts
      );
      console.log("Initial proTexts:", proTexts);
      console.log("Initial availableOptions:", availableOptions);
      console.log("Initial selectedButtonTexts:", selectedButtonTexts);
      // console.log("Initial secondButtonContent:", secondButtonContent);

      if (secondButtonContent) {
        // selectedButtonTexts = [];

        console.log("enter in secondButtonContent", selectedButtonTexts);

        proTexts.map((text) => {
          if (!selectedButtonTexts.includes(text)) {
            selectedButtonTexts.push(text);
            availableOptions = availableOptions.filter((opt) => opt !== text);
          }
        });
      } else if (firstButtonContent) {
        console.log("enter in firstButtonContent");
        // selectedButtonTexts = [];
        basicTexts.map((text) => {
          if (!selectedButtonTexts.includes(text)) {
            selectedButtonTexts.push(text);
            availableOptions = availableOptions.filter((opt) => opt !== text);
          }
        });
      }
      // Check if the arrays have the expected values

      if (sendToSlider2_2) {
        console.log("enter in sendToSlider2_2", savedselectedButtonTexts);

        if (savedselectedButtonTexts.length > 0) {
          // selectedButtonTexts = [];

          savedselectedButtonTexts.map((item) => {
            if (!selectedButtonTexts.includes(item)) {
              selectedButtonTexts.push(item);
            }
          });

          savedselectedButtonTexts = [];
        }

        renderButtons();
        renderSelectedOptions();
        btnStatus = "not changed";
        console.log("sendToSlider2_2 entered");
        // Display new heading
        document.getElementById("sliderCard--card2---heading").style.display =
          "none";
        document.getElementById("sliderCard--card2-1---heading").style.display =
          "block";

        showNextCard("sliderCard--card3", "sliderCard--card2");

        console.log("After processing: sendToSlider2_2");
      } else {
        console.log("After processing: sendToSlider2_2 not");
        different_prev = true;
        showNextCard("sliderCard--card3", "sliderCard--card5");
      }
    } else {
      alert("Please select");
    }
  });

// ============================================= 211111111111111111111111111111111111111111111

const productDetails = [
  {productName:"Arbeitszeitkonten", prodId:"K001"},
  {productName:"Mitarbeiterguthaben", prodId:"K002"},
  {productName:"Arbeitnehmerentsendung", prodId:"K003"},
  {productName:"An- und Vorauszahlungen", prodId:"K004"},
  {productName:"Architektenleistungen", prodId:"K005"},
  {productName:"Ausfallbürgschaft", prodId:"K006"},
  {productName:"Ausführungsbürgschaft", prodId:"K007"},
  {productName:"Bauhandwerker-Rahmenvertrag", prodId:"K008"},
  {productName:"Bauhandwerkersicherung", prodId:"K009"},
  {productName:"Bietungsbürgschaft", prodId:"K0010"},
  {productName:"Fremdsprachenbürgschaft", prodId:"K0011"},
  {productName:"Immissionsbürgschaft", prodId:"K0012"},
  {productName:"Dienstleistungsbürgschaft", prodId:"K0013"},
  {productName:"Erschließungsbürgschaft", prodId:"K0014"},
  {productName:"Energielieferung", prodId:"K0015"},
  {productName:"Franchise", prodId:"K0016"},
  {productName:"Gewährleistung", prodId:"K0017"},
  {productName:"IATA-Bürgschaft", prodId:"K0018"},
  {productName:"Individualbürgschaft", prodId:"K0019"},
  {productName:"Lieferantenbürgschaft", prodId:"K0020"},
  {productName:"Leasingbürgschaft", prodId:"K0021"},
  {productName:"Lottobürgschaft", prodId:"K0022"},
  {productName:"Mängelansprüche", prodId:"K0023"},
  {productName:"Mietkaution gew.", prodId:"K0024"},
  {productName:"Mineralölbürgschaft", prodId:"K0025"},
  {productName:"Postagentur", prodId:"K0026"},
  {productName:"Prozessbürgschaft", prodId:"K0027"},
  {productName:"Recyclingbürgschaft", prodId:"K0028"},
  {productName:"Rekultivierung", prodId:"K0029"},
  {productName:"Rückbaubürgschaft", prodId:"K0030"},
  {productName:"Sonderbürgschaft", prodId:"K0031"},
  {productName:"Tankkartenforderung", prodId:"K0032"},
  {productName:"Verbraucherbürgschaft", prodId:"K0033"},
  {productName:"Vertragserfüllung", prodId:"K0034"},
  {productName:"Vorauszahlungsbürgschaft", prodId:"K0035"},
  {productName:"Warenlieferungsbürgschaft", prodId:"K0036"}
]
const url= "https://dev.kautel.de/kautionLead";
// var link1 = url?productId=k001
debugger;
// var link1 = `url?productId=${productDetails.prodId[10]}`