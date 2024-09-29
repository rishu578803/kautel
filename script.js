function toggleCircleAndLabel(circleId, labelId, otherCircleId, otherLabelId) {
  const circle = document.getElementById(circleId);
  const label = document.getElementById(labelId);
  const otherCircle = document.getElementById(otherCircleId);
  const otherLabel = document.getElementById(otherLabelId);

  circle.addEventListener("click", function () {
    // Reset the other circle and label to their default colors
    otherCircle.style.backgroundColor = "#A1B1CE";
    otherLabel.style.color = "#A1B1CE";

    // Set the current circle background color to blue and label to blue
    circle.style.backgroundColor = "blue";
    label.style.color = "blue";
  });
}

// Call the function for each circle and label pair
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

// Set the first circle and label to blue by default (active)
document.getElementById("sliderCard__circle--1").style.backgroundColor = "blue";
document.getElementById("toggleLabel1").style.color = "blue";

// =================================================================================================================================

function showNextCard(currentCardId, nextCardId) {
  const currentCard = document.getElementById(currentCardId);
  const nextCard = document.getElementById(nextCardId);

  // Hide the current card and show the next card
  currentCard.style.display = "none";
  nextCard.style.display = "block";
}

// Add event listeners to the next buttons
document.getElementById("sliderCard__nextBtn--1").addEventListener("click", function () {
  showNextCard("sliderCard--card1", "sliderCard--card2"); // Go from card 1 to card 2
});

document.getElementById("sliderCard__nextBtn--2").addEventListener("click", function () {
  alert("End of cards!"); // Placeholder for further logic
});

// ==========================================================
let currentIndex = 0;
const buttonsToShow = 5; // Show only 5 buttons at a time

function scrollUp() {
    const container = document.querySelector('.sliderCard__btnContainer');
    if (currentIndex > 0) {
        currentIndex--;
        container.style.transform = `translateY(-${currentIndex * 50}px)`; // Adjust 50px based on button height
    }
}

function scrollDown() {
    const container = document.querySelector('.sliderCard__btnContainer');
    const totalButtons = container.children.length;
    if (currentIndex < totalButtons - buttonsToShow) {
        currentIndex++;
        container.style.transform = `translateY(-${currentIndex * 50}px)`; // Adjust 50px based on button height
    }
}

function selectOption(text) {
    const selectedList = document.getElementById('sliderCard__selectedList');

    // Check if the item is already in the list
    if (![...selectedList.children].some(item => item.textContent === text)) {
        const li = document.createElement('li');
        li.textContent = text;
        selectedList.appendChild(li);
    }
}
