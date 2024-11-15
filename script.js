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
// var fullUrl = "https://dev.kautel.de/kautionLead?productId=k001";
var fullUrl = "";
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

const productDetails = [
      { productName: "Arbeitszeitkonten", prodId: "K001" },
      { productName: "Mitarbeiterguthaben", prodId: "K060" },
      { productName: "Arbeitnehmerentsendung", prodId: "K002" },
      { productName: "An- und Vorauszahlungen", prodId: "K003" },
      { productName: "Architektenleistungen", prodId: "K004" },
      { productName: "Ausfallbürgschaft", prodId: "K005" },
      { productName: "Ausführungsbürgschaft", prodId: "K006" },
      { productName: "Bauhandwerker-Rahmenvertrag", prodId: "K007" },
      { productName: "Bauhandwerkersicherung", prodId: "K008" },
      { productName: "Bietungsbürgschaft", prodId: "K009" },
      { productName: "Fremdsprachenbürgschaft", prodId: "K010" },
      { productName: "Immissionsbürgschaft", prodId: "K011" },
      { productName: "Dienstleistungsbürgschaft", prodId: "K012" },
      { productName: "Erschließungsbürgschaft", prodId: "K014" },
      { productName: "Energielieferung", prodId: "K015" },
      { productName: "Franchise", prodId: "K018" },
      { productName: "Gewährleistung", prodId: "K019" },
      { productName: "IATA-Bürgschaft", prodId: "K020" },
      { productName: "Individualbürgschaft", prodId: "K021" },
      { productName: "Lieferantenbürgschaft", prodId: "K022" },
      { productName: "Leasingbürgschaft", prodId: "K023" },
      { productName: "Lottobürgschaft", prodId: "K024" },
      { productName: "Mängelansprüche", prodId: "K025" },
      { productName: "Mietkaution gew.", prodId: "K026" },
      { productName: "Mineralölbürgschaft", prodId: "K028" },
      { productName: "Postagentur", prodId: "K029" },
      { productName: "Prozessbürgschaft", prodId: "K030" },
      { productName: "Recyclingbürgschaft", prodId: "K031" },
      { productName: "Rekultivierung", prodId: "K032" },
      { productName: "Rückbaubürgschaft", prodId: "K033" },
      { productName: "Sonderbürgschaft", prodId: "K034" },
      { productName: "Tankkartenforderung", prodId: "K035" },
      { productName: "Verbraucherbürgschaft", prodId: "K036" },
      { productName: "Vertragserfüllung", prodId: "K037" },
      { productName: "Vorauszahlungsbürgschaft", prodId: "K038" },
      { productName: "Warenlieferungsbürgschaft", prodId: "K039" },
    ];

function toggleCircleAndLabel(circleId, labelId, otherCircleId, otherLabelId) {
  const circle = document.getElementById(circleId);
  const label = document.getElementById(labelId);
  const otherCircle = document.getElementById(otherCircleId);
  const otherLabel = document.getElementById(otherLabelId);
  if (circle) {
    circle.addEventListener("click", function () {
      otherCircle.style.backgroundColor = "#A1B1CE";
      otherLabel.style.color = "#A1B1CE";

      circle.style.backgroundColor = "#2F4EBA";
      label.style.color = "#2F4EBA";

      renderButtons();

      // Set the active circle
      activeCircle = circleId;
      change_selected_text = circleId;
      // Log the updated activeCircle value
    });
  }
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
const sliderCard__circle1 = document.getElementById("sliderCard__circle--1");
if (sliderCard__circle1)
  document.getElementById("sliderCard__circle--1").style.backgroundColor =
    "#2F4EBA";
const toggleLabel1 = document.getElementById("toggleLabel1");
if (toggleLabel1)
  document.getElementById("toggleLabel1").style.color = "#2F4EBA";

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
    "sliderCard--card6__1_left-section"
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

  circle.style.backgroundColor = "#2F4EBA";
  label.style.color = "#2F4EBA";

  renderButtons();

  // Set the active circle
  activeCircle = "sliderCard__circle--1";
  change_selected_text = "sliderCard__circle--1";
}

// Modify the event listener for the first "Next" button
const nextBtn1 = document.getElementById("sliderCard__nextBtn--1");
if (nextBtn1) {
  nextBtn1.addEventListener("click", function () {
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

      console.log("left section in first section", leftSection);

      // const cal_tax = document.getElementById('link_calculation');

      // cal_tax.style.display = "none";
      renderButtons();
      renderSelectedOptions();
      showNextCard("sliderCard--card1", "sliderCard--card2");
    } else if (activeCircle == "sliderCard__circle--2") {
      document.getElementById("link_calculation").style.display = "block";
      // document.getElementById('calculated_Amount_4_1').innerText = '5000';
      // document.getElementById('bruttoeinkommen').innerText = '5000';

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

      selectedButtonTexts = [];

      savedselectedButtonTexts = [];
      const leftSection = document.getElementById(
        "sliderCard--card6_left-section"
      );
      // /////// edit

      leftSection.innerHTML = "";
      document.getElementById("calculated_Amount").innerText = 5000 + " €";

      renderButtons();
      renderSelectedOptions();

      showNextCard("sliderCard--card1", "sliderCard--card3");
    }
  });
}

const nextBtn4 = document.getElementById("sliderCard__nextBtn--4");
if (nextBtn4) {
  console.log("sliderCard  circle", activeCircle);
  nextBtn4.addEventListener("click", function () {
    alert('sliderCard__nextBtn--4')
    const product = selectedButtonTexts;

    const input_val = document.getElementById("bruttoeinkommen").value;
    document.getElementById("selectedprocuctAmount").innerText =
      input_val + " €";

    const p_element = document.getElementById("selectedprocuctAmount");

   

    // Filter productDetails based on selectedButtonTexts and store the prodIds in a new array
    const filteredProdIds = productDetails
      .filter((product) => selectedButtonTexts.includes(product.productName))
      .map((product) => product.prodId);

    console.log("filteredProdIds", filteredProdIds);

    console.log("selectedButtonTexts", selectedButtonTexts);
    // kaushal codes start

    const baseUrl = "https://dev.kautel.de/kautionLead--kk";

    if (selectedButtonTexts.length === 1) {
      
      const params = filteredProdIds
        .map((prodId) => `productId=${prodId}`)
        .join(",");
      fullUrl = `${baseUrl}?${params}&geBetrag=${input_val}`;
    } else {
      const calculated_Amount = document.getElementById("calculated_Amount");
      const calculated = parseInt(calculated_Amount.innerText);

      // Define the base URL based on the condition
      const productUrl =
        activeCircle === "sliderCard__circle--2"
          ? `${baseUrl}?productId=k021`
          : `${baseUrl}?productId=k007`;

      const params = filteredProdIds.map((prodId) => `${prodId}`).join(",");
      fullUrl = `${productUrl}&apIds=${params}&geBetrag=${input_val}&hoBetrag=${calculated}`;
    }

    
    // kaushal codes end
    if (activeCircle == "sliderCard__circle--1") {
      const leftSection = document.getElementById(
        "sliderCard--card6_left-section"
      );

      // if (!leftSection) {
      //   console.error("leftSection not found");
      //   return;
      // }

      // Iterate over product array and create <p> elements
      product.forEach((item) => {
        const pElement = document.createElement("p");
        pElement.className = "sub_heading"; // Add a class for styling if needed
        pElement.textContent = item; // Set the text to the product item
        leftSection.appendChild(pElement); // Append the <p> element to left-section
      });

      // Make sure selectedPrice_1 contains the desired value, e.g., "30.000 €"

      const cal_amount = document.getElementById("calculated_Amount").innerText;

      console.log("new calculated amount", cal_amount);

      debugger;
      // document.getElementById("calculated_Amount_4_1").innerText = 5000;

      // Call the function to show the next card
      if (input_val && input_val < 5000000) {
        document.getElementById("sliderCard--card6_calculate-btn").innerText =
          "Angebot anfordern";

        const input_val = document.getElementById("bruttoeinkommen").value;

        document.getElementById("selectedprocuctAmount2").innerText =
          input_val + " €";

        showNextCard("sliderCard--card4", "sliderCard--card6");
      } else {
        document.getElementById("sliderCard--card6_calculate-btn").innerText =
          "Beitrag berechnen";
        const input_val = document.getElementById("bruttoeinkommen").value;

        document.getElementById("selectedprocuctAmount2").innerText =
          input_val + " €";
        showNextCard("sliderCard--card4", "sliderCard--card6");
      }
    } else {
      const leftSection = document.getElementById(
        "sliderCard--card6_left-section"
      );
      const input_val = document.getElementById("bruttoeinkommen").value;

      document.getElementById("selectedprocuctAmount2").innerText =
        input_val + " €";
      // if (!leftSection) {
      //   console.error("leftSection not found");
      //   return;
      // }

      // Iterate over product array and create <p> elements
      product.forEach((item) => {
        const pElement = document.createElement("p");
        pElement.className = "sub_heading"; // Add a class for styling if needed
        pElement.textContent = item; // Set the text to the product item
        leftSection.appendChild(pElement); // Append the <p> element to left-section
      });

      // Make sure selectedPrice_1 contains the desired value, e.g., "30.000 €"
      const cal_amount = document.getElementById("calculated_Amount").innerText;

      console.log("Calculated Amount in 2nd card", cal_amount);
      // document.getElementById("calculated_Amount_4_1").innerText = cal_amount;
      // Call the function to show the next card
      // showNextCard("sliderCard--card4", "sliderCard--card6__1");
      // document.getElementById("calculated_Amount").innerText = 5000;
      showNextCard("sliderCard--card4", "sliderCard--card6");
    }
  });
}

const nextBtn4_1 = document.getElementById("sliderCard__nextBtn--4_1");

if (nextBtn4_1) {
  nextBtn4_1.addEventListener("click", function () {
    alert('sliderCard__nextBtn--4_1')
    const product = selectedButtonTexts;

    console.log("products selected", product);

    const input_val = document.getElementById("bruttoeinkommen").value;
    document.getElementById("selectedprocuctAmount").innerText =
      input_val + " €";
    const p_element = document.getElementById("selectedprocuctAmount");

    

    // Filter productDetails based on selectedButtonTexts and store the prodIds in a new array
    const filteredProdIds = productDetails
      .filter((product) => selectedButtonTexts.includes(product.productName))
      .map((product) => product.prodId);

    console.log("filteredProdIds", filteredProdIds);

    console.log("selectedButtonTexts", selectedButtonTexts);

    // if (selectedButtonTexts.length == 1) {
      
    //   const baseUrl = "https://dev.kautel.de/kautionLead";
    //   const params = filteredProdIds
    //     .map((prodId) => `productId=${prodId}`)
    //     .join(",");
    //   fullUrl = `${baseUrl}?${params}&beitrag=${input_val}`;
    // } else {
      
    //   const baseUrl = "https://dev.kautel.de/kautionLead?productId=k021&apIds";
    //   const params = filteredProdIds.map((prodId) => `${prodId}`).join(",");

    //   fullUrl = `${baseUrl}=${params}&beitrag=${input_val}`;
    //   console.log("full", fullUrl);
    // }
    // kaushal codes start
      const baseUrl = "https://dev.kautel.de/kautionLead--kk";
      const calculated_Amount = document.getElementById("calculated_Amount");
      const calculated = parseInt(calculated_Amount.innerText);
    
      // Define the base URL based on the condition
      const productUrl = activeCircle === "sliderCard__circle--2"
        ? `${baseUrl}?productId=k021`
        : `${baseUrl}?productId=k007`;
    
      const params = filteredProdIds
        .map((prodId) => `${prodId}`)
        .join(",");
      fullUrl = `${productUrl}&apIds=${params}&geBetrag=${input_val}&hoBetrag=${calculated}`;
    // kaushal codes end

    if (activeCircle == "sliderCard__circle--2") {
      const leftSection = document.getElementById(
        "sliderCard--card6__1_left-section"
      );
      // sliderCard--card6__1
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

      // Call the function to show the next card
      // document.getElementById('calculated_Amount').innerText = 5000;
      showNextCard("sliderCard--card4_1", "sliderCard--card6__1");
    } else {
      const leftSection = document.getElementById(
        "sliderCard--card6__1_left-section"
      );
      // sliderCard--card6__1
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

      const input_val = document.getElementById("bruttoeinkommen2").value;
      document.getElementById("selectedprocuctAmount2").innerText = input_val;

      



      // sliderCard__nextBtn--4_1
      if (input_val >= 50000) {
        showNextCard("sliderCard--card4_1", "sliderCard--card6__1");
      } else {
        showNextCard("sliderCard--card4_1", "sliderCard--card6__1");
      }
    }
  });
}

const calculated_Amount_details = document.getElementById(
  "calculated_Amount_details"
);

if (calculated_Amount_details) {
  calculated_Amount_details.addEventListener("click", function () {
    

    const product = selectedButtonTexts;

    const input_val = document.getElementById("bruttoeinkommen").value;
    document.getElementById("selectedprocuctAmount").innerText =
      input_val + " €";
    const p_element = document.getElementById("selectedprocuctAmount");

    // Filter productDetails based on selectedButtonTexts and store the prodIds in a new array selectedprocuctAmount2
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
      // rishu codes
      // const baseUrl = "https://dev.kautel.de/kautionLead?productId=k021&apIds";
      // kaushal codes
      const baseUrl = "https://dev.kautel.de/kautionLead?productId=k007&apIds";
      const params = filteredProdIds.map((prodId) => `${prodId}`).join(",");

      fullUrl = `${baseUrl}=${params}&beitrag=${input_val}`;
      console.log("full", fullUrl);
    }

    if (activeCircle == "sliderCard__circle--2") {
      // const leftSection = document.getElementById("sliderCard--card6__1");

      // if (!leftSection) {
      //   console.error("leftSection not found");
      //   return;
      // }

      // // Iterate over product array and create <p> elements
      // product.forEach((item) => {
      //   const pElement = document.createElement("p");
      //   pElement.className = "sub_heading"; // Add a class for styling if needed
      //   pElement.textContent = item; // Set the text to the product item
      //   leftSection.appendChild(pElement); // Append the <p> element to left-section
      // });

      // Make sure selectedPrice_1 contains the desired value, e.g., "30.000 €"

      // Call the function to show the next card
      const cal_amount = document.getElementById("calculated_Amount").innerText;
      // document.getElementById("calculated_Amount_4_1").innerText = cal_amount;
      const cal_value = document.getElementById(
        "calculated_Amount_details"
      ).innerText;
      document.getElementById("bruttoeinkommen").value = cal_value;

      showNextCard("sliderCard--card4", "sliderCard--card4_1");
    } else {


      // ================= new one ================= calculated_Amount
      // const prev_input_group = document.getElementById('prev_input_group');
      // const next_input_group = document.getElementById('next_input_group');

      // if (prev_input_group) {
      //   prev_input_group.style.display = 'none'
      //   next_input_group.style.display = 'block';

      //   const next_input = document.getElementById('bruttoeinkommen2');
      //   const calculated_Amount = document.getElementById('calculated_Amount');

      //   console.log("set this value", next_input.value,calculated_Amount.innerText,next_input)
      //   next_input.value = calculated_Amount.innerText;

      // } else {
      //   alert("prev_input_group not selected")
      // }



      const prev_input_group = document.getElementById('prev_input_group');
const next_input_group = document.getElementById('next_input_group');

// Check if the previous input group exists
if (prev_input_group) {
    // Hide the previous input group
    prev_input_group.style.display = 'none';

    // Show the next input group
    if (next_input_group) {
        next_input_group.style.display = 'block';

        // Fetch elements for the next input and calculated amount
        const next_input = document.getElementById('bruttoeinkommen2');
        const calculated_Amount = document.getElementById('calculated_Amount').innerText;

        // Check if the required elements exist
        if (next_input && calculated_Amount) {
            console.log(
                "Before setting:",
                "Next Input Value:",
                next_input.value,
                "Calculated Amount Text:",
                calculated_Amount
            );

            // Set the value of the next input field
            next_input.value = calculated_Amount;

            console.log(
                "After setting:",
                "Next Input Value:",
                next_input.value
            );
        } else {
            console.error("Missing element: 'bruttoeinkommen2' or calculated_Amount");
        }
    } else {
        console.error("Element with ID 'next_input_group' not found.");
    }
} else {
    alert("Element 'prev_input_group' not found.");
}
      // =========================================================




      // alert("Calculated Amount");
      debugger;

      showNextCard("sliderCard--card4", "sliderCard--card4_1");
    }

    //

    // showNextCard("sliderCard--card4", "sliderCard--card4_1");
  });
}

const calculateBtn = document.getElementById("sliderCard--card6_calculate-btn");
if (calculateBtn) {
  calculateBtn.addEventListener("click", function () {
    window.open(fullUrl, "_blank");
  });
}
const calculateBtn2 = document.getElementById(
  "sliderCard--card6__1_calculate-btn"
);
if (calculateBtn2) {
  calculateBtn2.addEventListener("click", function () {
    window.open(fullUrl, "_blank");
  });
}

const card6Back = document.getElementById("sliderCard--card6_back_btn");
if (card6Back) {
  card6Back.addEventListener("click", function () {
    selectedButtonTexts = [];
    savedselectedButtonTexts = [];
    showPreviousCard("sliderCard--card6", "sliderCard--card1");
  });
}
const card6_1Back = document.getElementById("sliderCard--card6__1_back_btn");
if (card6_1Back) {
  card6_1Back.addEventListener("click", function () {
    
    selectedButtonTexts = [];
    savedselectedButtonTexts = [];
    showPreviousCard("sliderCard--card6__1", "sliderCard--card1");
  });
}

const nextBtn5 = document.getElementById("sliderCard__nextBtn--5");
if (nextBtn5) {
  nextBtn5.addEventListener("click", function () {
    let selectedAmountElement = document.querySelector(".selectedPrice2");
    selectedAmountElement.innerText = selectedPrice_2;
    showNextCard("sliderCard--card5", "sliderCard--card7");
  });
}

const gobackBtn2 = document.getElementById("sliderCard__gobackBtn--2");
if (gobackBtn2) {
  gobackBtn2.addEventListener("click", function () {
    if (activeCircle == "sliderCard__circle--1") {
      showPreviousCard("sliderCard--card2", "sliderCard--card1");
    } else {
      showPreviousCard("sliderCard--card2", "sliderCard--card3");
    }
  });
}

const gobackBtn4 = document.getElementById("sliderCard__gobackBtn--4");
if (gobackBtn4) {
  gobackBtn4.addEventListener("click", function () {
    showPreviousCard("sliderCard--card4", "sliderCard--card2");
  });
}
const gobackBtn4_1 = document.getElementById("sliderCard__gobackBtn--4_1");
if (gobackBtn4_1) {
  gobackBtn4_1.addEventListener("click", function () {
    showPreviousCard("sliderCard--card4_1", "sliderCard--card2");
  });
}
const gobackBtn3 = document.getElementById("sliderCard__gobackBtn--3");
if (gobackBtn3) {
  gobackBtn3.addEventListener("click", function () {
    showPreviousCard("sliderCard--card3", "sliderCard--card1");
  });
}

const gobackBtn5 = document.getElementById("sliderCard__gobackBtn--5");
if (gobackBtn5) {
  gobackBtn5.addEventListener("click", function () {
    if (different_prev) {
      showPreviousCard("sliderCard--card5", "sliderCard--card3");
      different_prev = false;
    } else {
      showPreviousCard("sliderCard--card5", "sliderCard--card2");
    }
  });
}

const calculateBtnBack = document.getElementById("calculate-btn_back--2");

if (calculateBtnBack) {
  calculateBtnBack.addEventListener("click", function () {
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
} else {
  console.warn("Element with ID 'calculate-btn_back--2' not found.");
}

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
  if (buttonContainer) buttonContainer.innerHTML = "";

  availableOptions.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("sliderCard__btn");
    button.textContent = option;

    button.onclick = () => selectOption(option);
    if (buttonContainer) buttonContainer.appendChild(button);
  });
  if (buttonContainer) {
    if (availableOptions.length > 0) {
      buttonContainer.style.display = "block";
    } else {
      buttonContainer.style.display = "none";
    }
  }
}

// Render selected options in the right panel (including selectedButtonTexts)
function renderSelectedOptions() {
  if (activeCircle == "sliderCard__circle--1") {
    const selectedList = document.getElementById("sliderCard__selectedList");
    if (selectedList) selectedList.innerHTML = "";

    if (selectedButtonTexts && selectedButtonTexts.length > 0) {
      selectedButtonTexts.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        if (selectedList) selectedList.appendChild(li);
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
    if (selectedList) selectedList.innerHTML = "";

    if (selectedButtonTexts && selectedButtonTexts.length > 0) {
      selectedButtonTexts.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        if (selectedList) selectedList.appendChild(li);
        li.onclick = () => deselectOption(text); // Clicking li will deselect the option
      });
    } else {
      console.log("else selected");
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

const nextBtn2 = document.getElementById("sliderCard__nextBtn--2");
if (nextBtn2) {
  nextBtn2.addEventListener("click", function () {
    if (activeCircle == "sliderCard__circle--1") {
      const link_cal = document.getElementById("link_calculation");

      if (link_cal) {
        link_cal.style.display = "none";
      }
      if (selectedButtonTexts.length <= 0) {
        console.log("Please select at least one options.");
        alert("Please select at least one options");
        return false;
      } else if (selectedButtonTexts.length > 1) {
        link_cal.style.display = "block";
      }
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
          clickCount = 0;
        }

        // Second click
      } else if (clickCount == 2) {
        // Call showNextCard on the second click
        const calculated_Amount_details = document.getElementById(
          "calculated_Amount_details"
        );

        if (selectedButtonTexts.length > 1) {
          // Perform the existing task on the first click
          const sliderHeader = document.getElementById("slider_header");
          const sliderSubHeading = document.getElementById("slider_subHeading");

          if (sliderHeader && sliderSubHeading) {
            sliderHeader.innerText = "Höhe der Bürgschaftslinie";
            sliderSubHeading.innerText = "Gewählter Betrag";
          }

          // ============================== center link clickable edit =============================
          // const calculated_Amount_details = document.getElementById('calculated_Amount_details');

          // if(calculated_Amount_details)
          //   calculated_Amount_details.addEventListener("click", function () {

          //           debugger;
          //     //  document.getElementById('sliderCard--card2').style.display = 'none';

          //           showNextCard("sliderCard--card2", "sliderCard--card4");
          // })
          // =================================================================
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

          // const calculated_Amount_details = document.getElementById('calculated_Amount_details');

          // if(calculated_Amount_details)
          //   calculated_Amount_details.addEventListener("click", function () {

          //           debugger;
          //     //  document.getElementById('sliderCard--card2').style.display = 'none';

          //           showNextCard("sliderCard--card2", "sliderCard--card4");
          // })

          // showNextCard("sliderCard--card2", "sliderCard--card4");
          clickCount = 0;
        } else if (selectedButtonTexts.length === 1) {
          showNextCard("sliderCard--card2", "sliderCard--card4");
          clickCount = 0;
        }
      }
    } else if (activeCircle == "sliderCard__circle--2") {
      const link_cal = document.getElementById("link_calculation");
      if (link_cal) {
        link_cal.style.display = "block";
      }
      selectedButtonTexts &&
        selectedButtonTexts.map((item) => {
          savedselectedButtonTexts.push(item);
        });
      showNextCard("sliderCard--card2", "sliderCard--card4");
      clickCount = 0;
    }
  });
}

const basicTexts = [
  "An- und Vorauszahlungen",
  "Gewährleistung",
  "Mängelansprüche",
];
const proTexts = [
  "An- und Vorauszahlungen",
  "Gewährleistung",
  "Mängelansprüche",
  "Vertragserfüllung",
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
].filter((button) => button !== null);

// Variable to keep track of the last active button (btn1 or btn2)
let lastActiveButton = null;

// Function to update button text and display them
function updateButtons(texts) {
  // Hide all right panel buttons initially
  if (rightButtons.length > 0) {
    for (let i = 0; i < rightButtons.length; i++) {
      rightButtons[i].style.display = "none";
    }

    // Show and update button text
    for (let i = 0; i < texts.length; i++) {
      rightButtons[i].textContent = texts[i];
      rightButtons[i].style.display = "block";
    }
  }
}

// Function to set active state for left panel buttons
function setActiveButton(buttons) {
  // Remove active class from all buttons first
  if (btn1 && btn2 && btn3) {
    [btn1, btn2, btn3].forEach((button) => {
      button.classList.remove("active");
    });
  }
  const validButtons = buttons.filter((button) => button !== null);
  // Add active class to specified buttons
  validButtons.forEach((button) => {
    button.classList.add("active");
  });
}

// Track the last active button
var btnStatus = "not changed";
// Button click event listeners
if (btn1) {
  btn1.addEventListener("click", function () {
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
  });
}

if (btn2) {
  btn2.addEventListener("click", function () {
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
  });
}

// btn3 event listener
if (btn3) {
  btn3.addEventListener("click", function () {
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

      // Set the last active button to btn3
      lastActiveButton = btn3;
    } else {
      console.log("btn3 clicked again, already active.");
    }
  });
}

// Trigger default state (btn1 active and basicTexts displayed) when DOM is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  updateButtons(basicTexts);
  setActiveButton([btn1]);
  lastActiveButton = btn1;
  if (btn1) btn1.style.backgroundColor = "#304eba";
  if (btn2) btn2.style.backgroundColor = "#a0aec8";
});

// =========================================
// Store visible button texts on "Next" button click

const nextBtn3 = document.getElementById("sliderCard__nextBtn--3");
if (nextBtn3) {
  nextBtn3.addEventListener("click", function () {
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
      // Check if the arrays have the expected values

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
}
// kaushal codes start 14-Nov-24
const _backBtn = document.querySelector(".sliderCard__gobackbtn");
if(_backBtn){
  _backBtn.addEventListener("click", function () {
    calculated_Amount.innerHTML = '5000 €';
  }) 
}
// const _calculated_Amount = document.querySelector("#calculated_Amount");  
// if(_calculated_Amount){
//   if(calculated_Amount_details){
//     calculated_Amount_details.addEventListener("click", function () {
//       debugger;
//       // jQuery(".sliderCard .kautelpercentClass").val(ui.value);
//       const sliderInputVal = document.querySelector(".sliderCard .kautelpercentClass"); 
//       if(sliderInputVal)
//         sliderInputVal.value=1100; 
//     });
//   }
// }
