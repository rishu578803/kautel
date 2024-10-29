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
var initialValue = 5000;
var change_selected_text = 1;
var active_button_content = 1;
var fullUrl = "https://dev.kautel.de/kautionLead?productId=k001";
var availableOptions = [
  "Arbeitszeitkonten",
  "Mitarbeiterguthaben",
  "Arbeitnehmerentsendung",
  "An- und Vorauszahlungen",
  "Architektenleistungen",
  "Ausfallbürgschaft",
  "Ausführungsbürgschaft",
  "Bauhandwerker-Rahmenvertrag",
  "Bauhandwerkersicherung",
  "Bietungsbürgschaft",
  "Fremdsprachenbürgschaft",
  "Immissionsbürgschaft",
  "Dienstleistungsbürgschaft",
  "Erschließungsbürgschaft",
  "Energielieferung",
  "Franchise",
  "Gewährleistung",
  "IATA-Bürgschaft",
  "Individualbürgschaft",
  "Lieferantenbürgschaft",
  "Leasingbürgschaft",
  "Lottobürgschaft",
  "Mängelansprüche",
  "Mietkaution gew.",
  "Mineralölbürgschaft",
  "Postagentur",
  "Prozessbürgschaft",
  "Recyclingbürgschaft",
  "Rekultivierung",
  "Rückbaubürgschaft",
  "Sonderbürgschaft",
  "Tankkartenforderung",
  "Verbraucherbürgschaft",
  "Vertragserfüllung",
  "Vorauszahlungsbürgschaft",
  "Warenlieferungsbürgschaft",
];

var availableOptions2 = [
  "Arbeitszeitkonten",
  "Mitarbeiterguthaben",
  "Arbeitnehmerentsendung",
  "An- und Vorauszahlungen",
  "Architektenleistungen",
  "Ausfallbürgschaft",
  "Ausführungsbürgschaft",
  "Bauhandwerker-Rahmenvertrag",
  "Bauhandwerkersicherung",
  "Bietungsbürgschaft",
  "Fremdsprachenbürgschaft",
  "Immissionsbürgschaft",
  "Dienstleistungsbürgschaft",
  "Erschließungsbürgschaft",
  "Energielieferung",
  "Franchise",
  "Gewährleistung",
  "IATA-Bürgschaft",
  "Individualbürgschaft",
  "Lieferantenbürgschaft",
  "Leasingbürgschaft",
  "Lottobürgschaft",
  "Mängelansprüche",
  "Mietkaution gew.",
  "Mineralölbürgschaft",
  "Postagentur",
  "Prozessbürgschaft",
  "Recyclingbürgschaft",
  "Rekultivierung",
  "Rückbaubürgschaft",
  "Sonderbürgschaft",
  "Tankkartenforderung",
  "Verbraucherbürgschaft",
  "Vertragserfüllung",
  "Vorauszahlungsbürgschaft",
  "Warenlieferungsbürgschaft",
];

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

    renderButtons();

    // Set the active circle
    activeCircle = circleId;
    change_selected_text = circleId;
    // Log the updated activeCircle value
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
}

function showPreviousCard(currentCardId, previousCardId) {
  selectedButtonTexts = [];
  initialValue = 5000;

  document.getElementById("bruttoeinkommen").value = 5000;

  var leftSection = document.getElementById("sliderCard--card6_left-section");
  var leftSection2 = document.getElementById(
    "sliderCard--card6.1_left-section"
  );

  if (leftSection) {
    leftSection.innerHTML = "";
  }

  if (leftSection2) {
    leftSection2.innerHTML = "";
  }
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

  // Set the active circle
  activeCircle = "sliderCard__circle--1";
  change_selected_text = "sliderCard__circle--1";
}

// Modify the event listener for the first "Next" button
document
  .getElementById("sliderCard__nextBtn--1")
  .addEventListener("click", function () {
    // Check which circle is active and show the corresponding card
    if (activeCircle == "sliderCard__circle--1") {
      availableOptions2.map((item) => {
        availableOptions.push(item);
      });

      selectedButtonTexts = [];

      savedselectedButtonTexts = [];
      const leftSection = document.getElementById(
        "sliderCard--card6_left-section"
      );

      leftSection.innerHTML = "";
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

      showNextCard("sliderCard--card1", "sliderCard--card3");
    }
  });

document
  .getElementById("sliderCard__nextBtn--4")
  .addEventListener("click", function () {
    const product = selectedButtonTexts;

    const input_val = document.getElementById("bruttoeinkommen").value;
    document.getElementById("selectedprocuctAmount").innerText =
      input_val + " €";
    const p_element = document.getElementById("selectedprocuctAmount");

    const productDetails = [
      { productName: "Arbeitszeitkonten", prodId: "K001" },
      { productName: "Mitarbeiterguthaben", prodId: "K002" },
      { productName: "Arbeitnehmerentsendung", prodId: "K003" },
      { productName: "An- und Vorauszahlungen", prodId: "K004" },
      { productName: "Architektenleistungen", prodId: "K005" },
      { productName: "Ausfallbürgschaft", prodId: "K006" },
      { productName: "Ausführungsbürgschaft", prodId: "K007" },
      { productName: "Bauhandwerker-Rahmenvertrag", prodId: "K008" },
      { productName: "Bauhandwerkersicherung", prodId: "K009" },
      { productName: "Bietungsbürgschaft", prodId: "K0010" },
      { productName: "Fremdsprachenbürgschaft", prodId: "K0011" },
      { productName: "Immissionsbürgschaft", prodId: "K0012" },
      { productName: "Dienstleistungsbürgschaft", prodId: "K0013" },
      { productName: "Erschließungsbürgschaft", prodId: "K0014" },
      { productName: "Energielieferung", prodId: "K0015" },
      { productName: "Franchise", prodId: "K0016" },
      { productName: "Gewährleistung", prodId: "K0017" },
      { productName: "IATA-Bürgschaft", prodId: "K0018" },
      { productName: "Individualbürgschaft", prodId: "K0019" },
      { productName: "Lieferantenbürgschaft", prodId: "K0020" },
      { productName: "Leasingbürgschaft", prodId: "K0021" },
      { productName: "Lottobürgschaft", prodId: "K0022" },
      { productName: "Mängelansprüche", prodId: "K0023" },
      { productName: "Mietkaution gew.", prodId: "K0024" },
      { productName: "Mineralölbürgschaft", prodId: "K0025" },
      { productName: "Postagentur", prodId: "K0026" },
      { productName: "Prozessbürgschaft", prodId: "K0027" },
      { productName: "Recyclingbürgschaft", prodId: "K0028" },
      { productName: "Rekultivierung", prodId: "K0029" },
      { productName: "Rückbaubürgschaft", prodId: "K0030" },
      { productName: "Sonderbürgschaft", prodId: "K0031" },
      { productName: "Tankkartenforderung", prodId: "K0032" },
      { productName: "Verbraucherbürgschaft", prodId: "K0033" },
      { productName: "Vertragserfüllung", prodId: "K0034" },
      { productName: "Vorauszahlungsbürgschaft", prodId: "K0035" },
      { productName: "Warenlieferungsbürgschaft", prodId: "K0036" },
    ];

    // Filter productDetails based on selectedButtonTexts and store the prodIds in a new array
    const filteredProdIds = productDetails
      .filter((product) => selectedButtonTexts.includes(product.productName))
      .map((product) => product.prodId);

    console.log("filteredProdIds", filteredProdIds);

    console.log("selectedButtonTexts", selectedButtonTexts);

    if (selectedButtonTexts.length == 1) {
      const baseUrl = "https://dev.kautel.de/kautionLead";
      const params = filteredProdIds
        .map((prodId) => `productId=${prodId}`)
        .join(",");
      fullUrl = `${baseUrl}?${params}&beitrag=${input_val}`;
    } else {
      const baseUrl = "https://dev.kautel.de/kautionLead?productId=k007&apIds";
      const params = filteredProdIds.map((prodId) => `${prodId}`).join(",");

      fullUrl = `${baseUrl}=${params}&beitrag=${input_val}`;
      console.log("full", fullUrl);
    }

    if (input_val && input_val < 50000) {
      const leftSection = document.getElementById(
        "sliderCard--card6_left-section"
      );

      if (!leftSection) {
        console.error("leftSection not found");
        return;
      }

      // Iterate over product array and create <p> elements
      product.forEach((item) => {
        const pElement = document.createElement("p");
        pElement.className = "sub_heading"; 
        pElement.textContent = item; 
        leftSection.appendChild(pElement); 
      });


      showNextCard("sliderCard--card4", "sliderCard--card6");
    } else {
      const leftSection = document.getElementById(
        "sliderCard--card6.1_left-section"
      );
      document.getElementById("selectedprocuctAmount2").innerText =
        input_val + " €";
      if (!leftSection) {
        console.error("leftSection not found");
        return;
      }

      product.forEach((item) => {
        const pElement = document.createElement("p");
        pElement.className = "sub_heading"; 
        pElement.textContent = item; 
        leftSection.appendChild(pElement); 
      });

     

    
      showNextCard("sliderCard--card4", "sliderCard--card6.1");
    }
  });

const calculateBtn = document.getElementById("sliderCard--card6_calculate-btn");
if (calculateBtn) {
  calculateBtn.addEventListener("click", function () {
    window.open(fullUrl, "_blank");
  });
}
const calculateBtn2 = document.getElementById(
  "sliderCard--card6.1_calculate-btn"
);
if (calculateBtn2) {
  calculateBtn2.addEventListener("click", function () {
    window.open(fullUrl, "_blank");
  });
}



const previousButtons = document.getElementsByClassName(
  "sliderCard__gobackbtn"
);

if (previousButtons.length > 0) {
  Array.from(previousButtons).forEach((previous) => {
    previous.addEventListener("click", function () {
      initialValue = typeof initialValue !== "undefined" ? initialValue : 0;
      console.log("back to previous");
      const Rangeslider = document.getElementById("Rangeslider");
      const percentInput = document.querySelector(".percentClass");
      const selectedAmount = document.getElementById("selectedAmount");
      const uiElements = document.getElementsByClassName("ui-state-default");
      const uiElements2 = document.getElementsByClassName("ui-slider-range");

      Array.from(uiElements).forEach((element) => {
        element.style.left = "0px";
      });
      Array.from(uiElements2).forEach((element) => {
        element.style.width = "0px";
      });
      if (Rangeslider) Rangeslider.value = 5000;
      if (percentInput) percentInput.value = 5000;
      if (selectedAmount) selectedAmount.textContent = 5000;
      selectedButtonTexts = [];
      savedselectedButtonTexts = [];

      const sliderCards = document.getElementsByClassName("sliderCard");

      Array.from(sliderCards).forEach((card) => {
        card.style.display = "none";
      });

      const firstCard = document.getElementById("sliderCard--card1");
      if (firstCard) {
        firstCard.style.display = "block";
      }
    });
  });

} else {
  console.log("not selected previous card");
}

// ===================================================================================================

document
  .getElementById("sliderCard__nextBtn--5")
  .addEventListener("click", function () {
    let selectedAmountElement = document.querySelector(".selectedPrice2");

    selectedAmountElement.innerText = selectedPrice_2;

    showNextCard("sliderCard--card5", "sliderCard--card7");
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

function renderSelectedOptions() {
  if (activeCircle == "sliderCard__circle--1") {
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
     console.log("renderSelectedOptions else")
    }
  } else if (activeCircle == "sliderCard__circle--2") {
    const selectedList = document.getElementById("sliderCard__selectedList");

    selectedList.innerHTML = "";

    if (selectedButtonTexts && selectedButtonTexts.length > 0) {
      selectedButtonTexts.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        selectedList.appendChild(li);
        li.onclick = () => deselectOption(text); 
      });
    } else {
      console.log("else selected");
    }
  }
}


function selectOption(option) {
  if (!selectedButtonTexts.includes(option)) {
   
    availableOptions = availableOptions.filter((opt) => opt !== option);
    selectedButtonTexts.push(option); // Add to selectedButtonTexts

    renderButtons();
    renderSelectedOptions();
  }
}


function deselectOption(option) {
  if (!availableOptions.includes(option)) {

    selectedButtonTexts = selectedButtonTexts.filter((opt) => opt !== option);
    availableOptions.push(option); // Add back to availableOptions

    renderButtons();
    renderSelectedOptions();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderButtons();
  renderSelectedOptions(); 
});

var headingChange = false;

let clickCount = 0;

document
  .getElementById("sliderCard__nextBtn--2")
  .addEventListener("click", function () {
    if (activeCircle == "sliderCard__circle--1") {
k
      clickCount++;
      // First click
      if (clickCount === 1) {
 
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
          clickCount = 0;
        }

        // Second click
      } else if (clickCount == 2) {

        if (selectedButtonTexts.length > 1) {
          // Perform the existing task on the first click
          const sliderHeader = document.getElementById("slider_header");
          const sliderSubHeading = document.getElementById("slider_subHeading");

          if (sliderHeader && sliderSubHeading) {
            sliderHeader.innerText = "Höhe der Bürgschaftslinie";
            sliderSubHeading.innerText = "Gewählter Betrag";
          }

          renderButtons();
          renderSelectedOptions();
          showNextCard("sliderCard--card2", "sliderCard--card4");
          clickCount = 0;
        } else if (selectedButtonTexts.length === 1) {
          showNextCard("sliderCard--card2", "sliderCard--card4");
          clickCount = 0;
        }
      } else if (clickCount >= 3) {
        if (selectedButtonTexts.length > 1) {
          // Perform the existing task on the first click
          renderButtons();
          renderSelectedOptions();
          showNextCard("sliderCard--card2", "sliderCard--card4");
          clickCount = 0;
        } else if (selectedButtonTexts.length === 1) {
          showNextCard("sliderCard--card2", "sliderCard--card4");
          clickCount = 0;
        }
      }
    } else if (activeCircle == "sliderCard__circle--2") {
      selectedButtonTexts &&
        selectedButtonTexts.map((item) => {
          savedselectedButtonTexts.push(item);
        });
      showNextCard("sliderCard--card2", "sliderCard--card4");
      clickCount = 0;
    }
  });

const basicTexts = ["Gewährleistung", "Mängelansprüche", "Mietkaution gew."];
const proTexts = [
  "An- und Vorauszahlungen",
  "Bauhandwerkersicherung",
  "Gewährleistung",
  "Mängelansprüche",
  "Mietkaution gew.",
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


let lastActiveButton = null;


function updateButtons(texts) {

  for (let i = 0; i < rightButtons.length; i++) {
    rightButtons[i].style.display = "none";
  }


  for (let i = 0; i < texts.length; i++) {
    rightButtons[i].textContent = texts[i];
    rightButtons[i].style.display = "block";
  }
}


function setActiveButton(buttons) {

  [btn1, btn2, btn3].forEach((button) => {
    button.classList.remove("active");
  });


  buttons.forEach((button) => {
    button.classList.add("active");
  });
}


var btnStatus = "not changed";

btn1.addEventListener("click", function () {

  updateButtons(basicTexts);
  setActiveButton([btn1]);
  firstButtonContent = true;
  secondButtonContent = false;
  active_button_content = 1;
  lastActiveButton = btn1;
  btn1.style.backgroundColor = "#304eba"; 
  btn2.style.backgroundColor = "#a0aec8"; 

  availableOptions = availableOptions2;
  savedselectedButtonTexts = [];
  selectedButtonTexts = [];
  btnStatus = "changed";
});

btn2.addEventListener("click", function () {
  updateButtons(proTexts);
  setActiveButton([btn2]);

  secondButtonContent = true;
  firstButtonContent = false;
  active_button_content = 2;
  lastActiveButton = btn2;
  btn2.style.backgroundColor = "#304eba"; 
  btn1.style.backgroundColor = "#a0aec8"; 

  btnStatus = "changed";
  availableOptions = availableOptions2;
  savedselectedButtonTexts = [];

});


btn3.addEventListener("click", function () {

  if (btn3.style.backgroundColor === "rgb(48, 78, 186)") {
    btn3.style.backgroundColor = "rgb(160, 174, 200)"; 
  } else {
    btn3.style.backgroundColor = "rgb(48, 78, 186)"; 
  }


  if (lastActiveButton !== btn3) {
    if (lastActiveButton === btn1 || lastActiveButton === btn2) {
      lastActiveButton.style.backgroundColor = "#304eba"; 
      DisablelastActiveColor = true;
    }

    // Make btn3 active
    setActiveButton([btn3]);
    sendToSlider2_2 = true;

   

    
    lastActiveButton = btn3;
  } else {
    console.log("btn3 clicked again, already active.");
  }
});


window.addEventListener("DOMContentLoaded", function () {
  updateButtons(basicTexts);
  setActiveButton([btn1]);
  lastActiveButton = btn1;
  btn1.style.backgroundColor = "#304eba";
  btn2.style.backgroundColor = "#a0aec8";
});

// =========================================


document
  .getElementById("sliderCard__nextBtn--3")
  .addEventListener("click", function () {
    if (activeCircle === "sliderCard__circle--2") {
      selectedButtonTexts = [];

      if (secondButtonContent) {
        proTexts.map((text) => {
          if (!selectedButtonTexts.includes(text)) {
            selectedButtonTexts.push(text);
            availableOptions = availableOptions.filter((opt) => opt !== text);
          }
        });
      } else if (firstButtonContent) {
        // selectedButtonTexts = [];
        basicTexts.map((text) => {
          if (!selectedButtonTexts.includes(text)) {
            selectedButtonTexts.push(text);
            availableOptions = availableOptions.filter((opt) => opt !== text);
          }
        });
      }

      if (sendToSlider2_2) {
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
        // Display new heading
        document.getElementById("sliderCard--card2---heading").style.display =
          "none";
        document.getElementById("sliderCard--card2-1---heading").style.display =
          "block";

        showNextCard("sliderCard--card3", "sliderCard--card2");
      } else {
        different_prev = true;
        showNextCard("sliderCard--card3", "sliderCard--card4");
      }
    } else {
      alert("Please select");
    }
  });
