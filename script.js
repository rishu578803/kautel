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
// ==========================================================sliderCard--card4

function scrollUp() {
  const container = document.querySelector(".sliderCard__btnContainer");
  if (currentIndex > 0) {
    currentIndex--;
    container.style.transform = `translateY(-${currentIndex * 50}px)`;
  }
}

function scrollDown() {
  const container = document.querySelector(".sliderCard__btnContainer");
  const totalButtons = container.children.length;
  if (currentIndex < totalButtons - buttonsToShow) {
    currentIndex++;
    container.style.transform = `translateY(-${currentIndex * 50}px)`;
  }
}

let currentIndex = 0;
const buttonsToShow = 5;

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

// =================================================================================================================================
const textSets = {
  basic: {
    button1: "Ann/Versacherk Basic",
    button2: "Mängelanspruch Basic",
    button3: "Gewährleistung Basic",
  },
  pro: {
    button1: "Ann/Versacherk Pro",
    button2: "Mängelanspruch Pro",
    button3: "Gewährleistung Pro",
    button4: "Gewährleistung Pro 4",
    button5: "Gewährleistung Pro 5",
  },
  additional: {
    button1: "Ann/Versacherk Additional",
    button2: "Mängelanspruch Additional",
    button3: "Gewährleistung Additional",
    button4: "Gewährleistung Additional",
  },
};

// Function to update right-side buttons based on the selected left-side button
function updateRightButtons(set) {
  document.getElementById("sliderCard__right-button-1").textContent =
    textSets[set].button1;
  document.getElementById("sliderCard__right-button-2").textContent =
    textSets[set].button2;
  document.getElementById("sliderCard__right-button-3").textContent =
    textSets[set].button3;
}

// Add click event listeners to all left-side buttons
document.querySelectorAll(".sliderCard__left-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    // Remove 'active' class from all buttons
    document.querySelectorAll(".sliderCard__left-button").forEach((btn) => {
      btn.classList.remove("active");
      btn.style.backgroundColor = "#A0AEC8"; // Set all inactive buttons to gray
    });

    // Add 'active' class to the clicked button
    event.target.classList.add("active");
    event.target.style.backgroundColor = "#304EBA"; // Set active button to blue

    const selectedSet = event.target.getAttribute("data-set");
    updateRightButtons(selectedSet);
  });
});
