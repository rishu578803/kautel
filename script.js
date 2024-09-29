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
  showNextCard("sliderCard--card2", "sliderCard--card3"); // Placeholder for further logic
});

// ==========================================================


let currentIndex = 0;
const buttonsToShow = 5; // Show only 5 buttons at a time
const buttonHeight = 55; // Adjust the height based on your button size (50px is assumed here)

function scrollUp() {
    const container = document.querySelector('.sliderCard__btnContainer');
    
    if (currentIndex > 0) {
        currentIndex--;
        const scrollAmount = currentIndex * buttonHeight;
        container.scrollTo({
            top: scrollAmount,
            behavior: 'smooth' // Smooth scroll
        });
    }
}

function scrollDown() {
    const container = document.querySelector('.sliderCard__btnContainer');
    const totalButtons = container.children.length;

    if (currentIndex < totalButtons - buttonsToShow) {
        currentIndex++;
        const scrollAmount = currentIndex * buttonHeight;
        container.scrollTo({
            top: scrollAmount,
            behavior: 'smooth' // Smooth scroll
        });
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

function selectOption(text) {
    const selectedList = document.getElementById('sliderCard__selectedList');

    // Check if the item is already in the list
    if (![...selectedList.children].some(item => item.textContent === text)) {
        const li = document.createElement('li');
        li.textContent = text;
        selectedList.appendChild(li);
    }
}



// ======================


const textSets = {
  basic: {
      button1: "Ann/Versacherk Basic",
      button2: "Mängelanspruch Basic",
      button3: "Gewährleistung Basic"
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
  }
};

// Function to update right-side buttons based on the selected left-side button
function updateRightButtons(set) {
  document.getElementById('sliderCard__right--button-1').textContent = textSets[set].button1;
  document.getElementById('sliderCard__right--button-2').textContent = textSets[set].button2;
  document.getElementById('sliderCard__right--button-3').textContent = textSets[set].button3;
}

// Add click event listeners to all left-side buttons
document.querySelectorAll('.sliderCard__left--button').forEach(button => {
  button.addEventListener('click', (event) => {
      const selectedSet = event.target.getAttribute('data-set');
      updateRightButtons(selectedSet);
  });
});