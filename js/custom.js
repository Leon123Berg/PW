// document.addEventListener('DOMContentLoaded', (event) => {
//   const tooltipTrigger = document.querySelector('.tooltip-trigger');
//   const tooltip = tooltipTrigger.nextElementSibling;

//   tooltipTrigger.addEventListener('mouseover', () => {
//     tooltip.style.display = 'block';
//   });

//   tooltipTrigger.addEventListener('mouseout', () => {
//     tooltip.style.display = 'none';
//   });
// }); 

document.addEventListener('DOMContentLoaded', (event) => {
    // Select all elements with the class 'tooltip-trigger'
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
  
    // Loop through each 'tooltip-trigger' element
    tooltipTriggers.forEach((tooltipTrigger) => {
      // Find the next sibling element, which is your custom tooltip
      const tooltip = tooltipTrigger.nextElementSibling;
  
      // Show the tooltip on mouseover
      tooltipTrigger.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
      });
  
      // Hide the tooltip on mouseout
      tooltipTrigger.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
      });
    });
  });
  
  
  
  function handleSunCheckboxClick(checkbox) {
          if (checkbox.checked) {
              // If the checkbox is checked, show the modal
              $("#modal-aantal-zonnepanelen").modal('show');
          } else {
              // If the checkbox is unchecked, reset a value to 0
              // Replace 'elementId' with the ID of the element you want to reset
              document.getElementById('aantal-zonnepanelen').value = 0;
          }
      }
  
  function handleCvCheckboxClick(checkbox) {
      if (checkbox.checked) {
          // If the checkbox is checked, show the modal
          $("#modal-leeftijd-cv-ketel").modal('show');
      } else {
          // If the checkbox is unchecked, clear the select/dropdown
          document.getElementById('ketelleeftijd').value = "";
      }
  }
  
  document
    .getElementById("aantal-zonnepanelen")
    .addEventListener("input", function (e) {
      var value = parseInt(e.target.value);
      if (value < 0) {
        e.target.value = 0;
      }
    });
  
  document.addEventListener("DOMContentLoaded", function () {
    const getElement = (id) => document.getElementById(id);
  
    const project_id = document.getElementById("projectId");
    const tabs = document.getElementsByClassName("navBarTab");
  
    function defineTabColor() {
      if (window.location.href.indexOf("huidige-situatie") != -1) {
        colorTab(0);
      } else if (window.location.href.indexOf("isolatie-check") != -1) {
        colorTab(1);
      } else if (window.location.href.indexOf("duurzaam-verwarmen") != -1) {
        colorTab(2);
      } else if (window.location.href.indexOf("zonnepanelen") != -1) {
        colorTab(3);
      } else if (window.location.href.indexOf("samenvatting-advies") != -1) {
        colorTab(4);
      }
    }
  
    function colorTab(index) {
      const primaryColor = "#203B4F";
      const white = "white";
      const svgsChildren = tabs[index].getElementsByTagName("g");
      const titles = document.getElementsByClassName("navTitle");
  
      tabs[index].style.backgroundColor = primaryColor;
      titles[index].style.color = white;
  
      Array.from(svgsChildren).forEach((element) => {
        Array.from(element.children).forEach((child) => {
          child.style.stroke = white;
          child.style.fill = primaryColor;
        });
      });
    }
  
    defineTabColor();
  
    const updateGauge = (value) => {
      const newStrokeDashOffset = 462 - (value / 100) * 462;
  
      getElement("percentage").textContent = value + "%";
  
      const getColor = (value) => {
        const colors = [
          { min: 0, max: 10, color: "#ff5a5f" },
          { min: 11, max: 25, color: "#ff9661" },
          { min: 26, max: 50, color: "#ffd366" },
          { min: 51, max: 75, color: "#acd376" },
          { min: 76, max: 100, color: "#58d185" },
        ];
  
        return colors.find(({ min, max }) => value >= min && value <= max).color;
      };
  
      const fullGaugePath = document.querySelector(".meter svg.skill path.full");
      fullGaugePath.style.stroke = getColor(value);
      fullGaugePath.style.transition = "stroke-dashoffset 1s ease-out";
      fullGaugePath.style.strokeDashoffset = -newStrokeDashOffset;
    };
    const hiddenInput = getElement("skillLevel");
  
    if (hiddenInput) {
      const hiddenInputValue = parseInt(hiddenInput.value, 10);
      updateGauge(hiddenInputValue);
    }
  
    const platdakDiv = getElement("platdakDiv");
    const schuindakDiv = getElement("schuindakDiv");
    const platdakChkBox = getElement("platdakChkBox");
    const schuindakChkBox = getElement("schuindakChkBox");
  
    const toggleDivs = (div1, div2, chkBox1, chkBox2) => {
      chkBox1.addEventListener("click", () => {
        const isChecked = chkBox1.checked;
        div1.style.opacity = isChecked ? "100%" : "100%";
        div2.style.opacity = isChecked ? "50%" : "100%";
        chkBox2.checked = !isChecked;
      });
    };
  
    if (platdakDiv && schuindakDiv && platdakChkBox && schuindakChkBox) {
      toggleDivs(platdakDiv, schuindakDiv, platdakChkBox, schuindakChkBox);
      toggleDivs(schuindakDiv, platdakDiv, schuindakChkBox, platdakChkBox);
    }
  
    const getSmileys = (id) => {
      const element = getElement(id);
      return element ? element.querySelectorAll("svg") : [];
    };
  
    const smileysCompilation = [
      getSmileys("dakRow"),
      getSmileys("murenRow"),
      getSmileys("vloerRow"),
      getSmileys("ramenRow"),
      getSmileys("ventilatieRow"),
    ];
  
    const geadviseerdeIsolatieTeksten = Array.from(
      document.getElementsByClassName("isolatieTekst")
    );
  
    const smileyWhitener = (smileyArr) =>
      smileyArr.forEach((smiley) => smiley.setAttribute("fill", "white"));
  
    const addClickListener = (smileyArr, index) => {
      smileyArr[index].addEventListener("click", () => {
        const parent = smileyArr[index].parentNode.parentNode;
        const parentType = parent.getAttribute("value");
        const tekst = parent.getElementsByClassName("tekst");
  
        smileyWhitener(smileyArr);
        const colors = ["red", "orange", "green"];
        const textContent = [
          "Isolatie is slecht.",
          "Isolatie is matig.",
          "Isolatie is goed.",
        ];
  
        smileyArr[index].setAttribute("fill", colors[index]);
        tekst[0].textContent = textContent[index];
        defineText(parent, index, parentType, geadviseerdeIsolatieTeksten);
      });
    };
  
    smileysCompilation.forEach((smileyArr) => {
      for (let i = 0; i < smileyArr.length; i++) {
        addClickListener(smileyArr, i);
      }
    });
  
    const isolatieChkboxes = Array.from(
      document.querySelectorAll(".isolatieChkbox")
    );
  
    const welkeText = (smileyIndex, dom, naam) => {
      const textOptions = [
        {
          text: `${naam} is slecht, nodig een Duurzaam Adviseur uit om uw isolatie te verbeteren.`,
          color: "red",
          checked: true,
        },
        {
          text: `${naam} is matig en kan geoptimaliseerd worden, nodig een Duurzaam Adviseur uit om uw isolatie te optimaliseren.`,
          color: "orange",
          checked: true,
        },
        {
          text: `${naam} is goed.`,
          color: "green",
          checked: false,
        },
      ];
    };
  
    const defineText = (parent, smileyIndex, naam, arr) => {
      const parentToIndexMap = {
        dakRow: 0,
        murenRow: 1,
        vloerRow: 2,
        ramenRow: 3,
        ventilatieRow: 4,
      };
      const index = parentToIndexMap[parent.id];
      if (index !== undefined) {
        welkeText(smileyIndex, arr[index], naam);
      }
    };
  
    const financieringsRadios = document.querySelectorAll(".financieringRadio");
  
    if (financieringsRadios.length) {
      function updateRowBG(isSelected, tds) {
        tds.forEach(
          (td) => (td.style.backgroundColor = isSelected ? "#F4F6C7" : "")
        );
      }
  
      function handleRadioChange() {
        const parentRow = this.closest("tr");
        const parentTds = parentRow.querySelectorAll("td");
        const isSelected = this.checked;
  
        updateRowBG(isSelected, parentTds);
  
        financieringsRadios.forEach((radio) => {
          if (radio !== this) {
            const row = radio.closest("tr");
            const tds = row.querySelectorAll("td");
            updateRowBG(false, tds);
          }
        });
      }
  
      function addEventListeners(arr) {
        arr.forEach((radio) => {
          radio.addEventListener("change", handleRadioChange);
          if (radio.checked) {
            handleRadioChange.call(radio);
          }
        });
      }
  
      addEventListeners(financieringsRadios);
    }
  
    // Module 1: Klant gegevens.
    if (document.body.contains(document.getElementById("klantgegevensForm"))) {
      const standGasPrijs = document.getElementById("gasprijs").value;
      const standKwhPrijs = document.getElementById("kwhprijs").value;
      const allInputs = document.querySelectorAll("input");
      const kadasterBtn = document.getElementById("kadasterBtn");
      const kadasterError = document.getElementById("kadasterError");
      const akkoordCheckbox = document.getElementById("akkoord_delen");
      let kadasterAttempted = false;
      const requiredFieldIds = [
        "postcode",
        "huisnummer",
        "toevoeging",
        "voornaam",
        "tussenvoegsel",
        "achternaam",
        "email",
        "telefoonnummer",
        "gezinsleden",
      ];
  
      function getFieldValue(id) {
        return document.getElementById(id)?.value;
      }
  
      Array.from(tabs).forEach((tab) => {
        tab.addEventListener("click", postToEndpoint);
      });
  
      function getFieldCheckedValue(fieldIds) {
        for (const id of fieldIds) {
          if (getFieldChecked(id)) {
            return id;
          }
        }
        return null;
      }
  
      function getFieldCheckedValues(fieldIds) {
        const values = [];
        for (const id of fieldIds) {
          if (getFieldChecked(id)) {
            values.push({
              value: id,
            });
          }
        }
        return values;
      }
  
      function getFieldChecked(id) {
        const checkbox = document.getElementById(id);
        return checkbox ? checkbox.checked : false;
      }
      // comment
      allInputs.forEach((element) =>
        element.addEventListener("change", postToEndpoint)
      );
  
      // Function to limit the number of checkboxes that can be checked
      function limitCheckboxSelection() {
        var checkboxes = document.getElementsByClassName("redenenChkBoxes");
        var checkedCount = 0;
  
        // Count the number of checkboxes that are currently checked
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            checkedCount++;
          }
        }
  
        // Disable remaining unchecked checkboxes if the limit is reached
        var remainingLimit = 3 - checkedCount;
        for (var i = 0; i < checkboxes.length; i++) {
          if (!checkboxes[i].checked && remainingLimit === 0) {
            checkboxes[i].disabled = true;
          } else {
            checkboxes[i].disabled = false;
          }
        }
      }
  
      // Attach the limitCheckboxSelection function to each checkbox's onclick event
      var checkboxes = document.getElementsByClassName("redenenChkBoxes");
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onclick = limitCheckboxSelection;
      }

      limitCheckboxSelection();

      // Toggle beschrijving inputveld voor btncheckReden7
      const reden7Checkbox = document.getElementById("btncheckReden7");
      const redenBeschrijvingContainer = document.getElementById("redenBeschrijvingContainer");
      const redenBeschrijvingInput = document.getElementById("redenBeschrijving");

      function toggleRedenBeschrijving() {
        if (reden7Checkbox && redenBeschrijvingContainer) {
          if (reden7Checkbox.checked) {
            redenBeschrijvingContainer.classList.remove("d-none");
          } else {
            redenBeschrijvingContainer.classList.add("d-none");
            if (redenBeschrijvingInput) {
              redenBeschrijvingInput.value = "";
            }
          }
        }
      }

      if (reden7Checkbox) {
        reden7Checkbox.addEventListener("change", toggleRedenBeschrijving);
        // Check initial state
        toggleRedenBeschrijving();
      }

      // Add change listener to beschrijving input to save on change
      if (redenBeschrijvingInput) {
        redenBeschrijvingInput.addEventListener("change", postToEndpoint);
        redenBeschrijvingInput.addEventListener("input", postToEndpoint);
      }
  
      const doelstellingInput0 = document.getElementById("doelstellingInput0");
      const doelstellingInput1 = document.getElementById("doelstellingInput1");
      const doelstellingOutput = document.getElementById("doelstellingOutput");
  
      const kwhInput = document.getElementById("kwhInput");
      const kwhOutput = document.getElementById("kwhOutput");
      const gasInput = document.getElementById("gasInput");
      const gasOutput = document.getElementById("gasOutput");
  
      // const ketelCombiKetel = document.getElementById("btncheckVw13");
      // const ketelSoloKetel = document.getElementById("btncheckVw14");
      const modalketelCvKetel = document.getElementById("btncheckVw15");
      const modalAanwezigeZonnepanelen = document.getElementById(
        "btncheckWoningeigenschap3"
      );
  
      const energielabels = document.getElementsByClassName("energielabel-sq");
      const energieLabelOutput = document.getElementById(
        "huidigEnergieLabelOutput"
      );
      let geselecteerdEnergieLabel = energieLabelOutput.value;
  
      let ketelLeeftijdDom = document.getElementById("ketelleeftijd");
      let ketelLeeftijd = ketelLeeftijdDom.value;
  
      let aantalZonnepanelenDom = document.getElementById("aantal-zonnepanelen");
      let aantalZonnepanelen = aantalZonnepanelenDom.value;
  
      const energieVerbruikOutput = document.getElementById(
        "energieVerbruikOutput"
      );
  
      const berekenenTotaalVerschil = (a, b, dom) => {
        if (isNaN(a) || isNaN(b)) {
          dom.value = "Ongeldige invoer";
        } else {
          dom.value = (parseFloat(a) - parseFloat(b)).toFixed(2);
        }
      };
  
      const berekenVerbruik = (verbruik, prijs, dom) => {
        if (isNaN(verbruik) || isNaN(prijs)) {
          dom.value = "Ongeldige invoer";
        } else {
          dom.value = (parseFloat(verbruik) * parseFloat(prijs)).toFixed(2);
          handleTotaal();
        }
      };
  
      const berekenTotaalVerbruik = (gasTotaal, energieTotaal, dom) => {
        if (isNaN(gasTotaal) || isNaN(energieTotaal)) {
          dom.value = "Ongeldige invoer";
        } else {
          dom.value = (parseFloat(gasTotaal) + parseFloat(energieTotaal)).toFixed(2);
        }
      };
  
      function checkInputValue(dom) {
        let inputValue = parseFloat(dom.value);
  
        // Check if the input value is less than 0 or NaN (empty/null)
        if (inputValue < 0 || isNaN(inputValue)) {
          dom.value = 0; // Reset the value to 0
        }
      }
  
      checkInputValue(kwhInput);
      checkInputValue(gasInput);
  
      function roundUpToNearestDigit(num) {
        return Math.ceil(num);
      }
  
      const handleChange = () =>
        berekenenTotaalVerschil(
          doelstellingInput0.value,
          doelstellingInput1.value,
          doelstellingOutput
        );
      const handleVerbruikEnergie = () => {
        const inputValue = roundUpToNearestDigit(parseFloat(kwhInput.value));
        kwhInput.value = inputValue; // Set the rounded input value
        const calculatedValue = inputValue * parseFloat(standKwhPrijs);
        if (!isNaN(calculatedValue)) {
          kwhOutput.value = roundUpToNearestDigit(calculatedValue);
        } else {
          kwhOutput.value = "Ongeldige invoer";
        }
        handleTotaal();
      };
      const handleVerbruikGas = () => {
        const inputValue = roundUpToNearestDigit(parseFloat(gasInput.value));
        gasInput.value = inputValue; // Set the rounded input value
        const calculatedValue = inputValue * parseFloat(standGasPrijs);
        if (!isNaN(calculatedValue)) {
          gasOutput.value = roundUpToNearestDigit(calculatedValue);
        } else {
          gasOutput.value = "Ongeldige invoer";
        }
        handleTotaal();
      };
      const handleTotaal = () => {
        berekenTotaalVerbruik(
          gasOutput.value,
          kwhOutput.value,
          energieVerbruikOutput
        );
      };
  
      // kwhInput.addEventListener("change", () => {
      //   checkInputValue(kwhInput);
      //   handleVerbruikEnergie();
      // });
      // gasInput.addEventListener("change", () => {
      //   checkInputValue(gasInput);
      //   handleVerbruikGas();
      // });
  
      gasInput.value != null ? handleVerbruikGas() : false;
      kwhInput.value != null ? handleVerbruikEnergie() : false;
  
      function handleKwhOutputChange() {
        const outputValue = roundUpToNearestDigit(parseFloat(kwhOutput.value));
        kwhOutput.value = outputValue; // Set the rounded output value
        // if (!isNaN(outputValue)) {
        //   kwhInput.value = roundUpToNearestDigit(outputValue / parseFloat(standKwhPrijs));
        // }
        handleTotaal(); 
        postToEndpoint(); 
      }
      
  
      function handleGasOutputChange() {
        const outputValue = roundUpToNearestDigit(parseFloat(gasOutput.value));
        gasOutput.value = outputValue; // Set the rounded output value
        // if (!isNaN(outputValue)) {
        //   gasInput.value = roundUpToNearestDigit(outputValue / parseFloat(standGasPrijs));
        // }
        handleTotaal(); 
        postToEndpoint(); 
      }
  
      kwhInput.addEventListener("change", handleVerbruikEnergie);
      gasInput.addEventListener("change", handleVerbruikGas);
      kwhOutput.addEventListener('change', handleKwhOutputChange);
      gasOutput.addEventListener('change', handleGasOutputChange);
  
      document.addEventListener('DOMContentLoaded', () => {
        if (kwhInput.value) handleVerbruikEnergie();
        if (gasInput.value) handleVerbruikGas();
      });
  
      function showLoaderAddComments() {
        const overlay = document.getElementById("overlay");
  
        overlay.style.display = "block";
        setTimeout(function () {
          overlay.innerHTML +=
            '<p class="mt-5">Contact maken met Kadaster...</p>';
        }, 1000);
        setTimeout(function () {
          overlay.innerHTML += "<p>Gegevens ophalen...</p>";
        }, 5000);
        setTimeout(function () {
          overlay.innerHTML += "<p>Aanvullen missende informatie...</p>";
        }, 20000);
        setTimeout(function () {
          overlay.innerHTML += "<p>Herladen pagina...</p>";
          location.reload();
        }, 30000);
      }
  
      function toggleInvalidState(element, isValid) {
        if (!element) return;
        if (isValid) {
          element.classList.remove("is-invalid");
        } else {
          element.classList.add("is-invalid");
        }
      }

      function validateKlantgegevens(showFeedback = false) {
        let isValid = true;
        requiredFieldIds.forEach((id) => {
          const field = document.getElementById(id);
          if (!field) return;
          const value = field.value ? field.value.trim() : "";
          const fieldValid = value !== "";
          if (showFeedback) {
            toggleInvalidState(field, fieldValid);
          } else {
            field.classList.remove("is-invalid");
          }
          if (!fieldValid) {
            isValid = false;
          }
        });
        if (akkoordCheckbox) {
          if (!akkoordCheckbox.checked) {
            if (showFeedback) {
              akkoordCheckbox.classList.add("is-invalid");
            }
            isValid = false;
          } else {
            akkoordCheckbox.classList.remove("is-invalid");
          }
        }
        if (kadasterError) {
          if (showFeedback && !isValid) {
            kadasterError.classList.remove("d-none");
          } else {
            kadasterError.classList.add("d-none");
          }
        }
        if (kadasterBtn) {
          kadasterBtn.disabled = !isValid;
        }
        return isValid;
      }

      requiredFieldIds.forEach((id) => {
        const field = document.getElementById(id);
        if (field) {
          field.addEventListener("input", () =>
            validateKlantgegevens(kadasterAttempted)
          );
        }
      });
      if (akkoordCheckbox) {
        akkoordCheckbox.addEventListener("change", () =>
          validateKlantgegevens(kadasterAttempted)
        );
      }

      if (kadasterBtn) {
        kadasterBtn.disabled = true;
      }

      kadasterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        kadasterAttempted = true;
        if (!validateKlantgegevens(true)) {
          return;
        }
        postToKadasterEndpoint();
        showLoaderAddComments();
      });

      validateKlantgegevens(false);
  
      Array.from(energielabels).forEach((label, index) => {
        label.addEventListener("click", function () {
          const triangles = Array.from(
            document.getElementsByClassName("triangle-down")
          );
          const bgColor = getComputedStyle(label).backgroundColor;
          const energielabelBarValue = document.getElementById(
            "energieLabelBarValue"
          );
          // Bg color van de de bar onder de labels moet meekleuren per klik.
          energielabelBarValue.parentNode.style.backgroundColor = bgColor;
          energielabelBarValue.innerText = label.innerText;
          geselecteerdEnergieLabel = label.innerText;
          // Triangles wel of niet tonen.
          triangles.forEach((triangle) => {
            triangle.style.display = "none";
          });
          triangles[index].style.display = "block";
          postToEndpoint();
        });
      });
  
      function postToKadasterEndpoint() {
        const payload = {
          project_id: project_id.innerText,
        };
  
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch("/positiefwonen/project/huidige-situatie/kadaster", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
  
            return response.json();
          })
          .then((data) => {
            console.log("Response data:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
  
      // Verstuurt de Leeftijd van de cv-ketel vanuit modal
      const ketelLeeftijdOpslaan = document.getElementById(
        "ketelLeeftijdOpslaan"
      );
      ketelLeeftijdOpslaan.addEventListener("click", () => {
        ketelLeeftijd = ketelLeeftijdDom.value;
        postToEndpoint();
      });
  
      const aantalZonnepanelenOpslaan = document.getElementById(
        "aantalZonnepanelenOpslaan"
      );
      aantalZonnepanelenOpslaan.addEventListener("click", () => {
        aantalZonnepanelen = aantalZonnepanelenDom.value;
        postToEndpoint();
      });
  
      function removeModalAttributes(dom) {
        dom.removeAttribute("data-bs-toggle");
        dom.removeAttribute("data-bs-target");
        dom.removeAttribute("aria-expanded");
      }
  
      function addModalAttributes(checkbox, modalId) {
        const modal = document.querySelector(modalId);
        modal.setAttribute("data-bs-toggle", "modal");
        modal.setAttribute("data-bs-target", "#modal-berekening");
      }
  
      function modalAttributeHandler(checkbox, modalId) {
        const modal = document.querySelector(modalId);
        if (checkbox.checked) {
          addModalAttributes(checkbox, modalId);
        } else {
          removeModalAttributes(modal);
        }
      }
  
      function buildPayload() {
        function getCheckedValues(prefix, count) {
          let checkedValues = [];
          for (let i = 1; i <= count; i++) {
            let checkboxId = prefix + i;
            if (getFieldChecked(checkboxId)) {
              // Assuming you want to store the 'value' attribute
              checkedValues.push(getFieldValue(checkboxId));
            }
          }
          return checkedValues;
        }
        return {
          email: getFieldValue("email"),
          huisnummer: getFieldValue("huisnummer"),
          voornaam: getFieldValue("voornaam"),
          tussenvoegsel: getFieldValue("tussenvoegsel"),
          achternaam: getFieldValue("achternaam"),
          plaats: getFieldValue("plaats"),
          postcode: getFieldValue("postcode"),
          straatnaam: getFieldValue("straatnaam"),
          telefoonnummer: getFieldValue("telefoonnummer"),
          toevoeging: getFieldValue("toevoeging"),
          delen_akkoord: getFieldChecked("akkoord_delen"),
          gezinsleden: getFieldValue("gezinsleden"),
          project_id: project_id.innerText,
  
          aantalInwoners: getFieldValue("bewonersSlider"),
          energielastenNu: getFieldValue("doelstellingInput0"),
          energielastenToekomst: getFieldValue("doelstellingInput1"),
          kwhPerJaar: getFieldValue("kwhInput"),
          gasPerJaar: getFieldValue("gasInput"),
          kwhBedragPerJaar: getFieldValue("kwhOutput"),
          gasBedragPerJaar: getFieldValue("gasOutput"),
          energieVerbruikPerJaar: getFieldValue("energieVerbruikOutput"),
  
          btnradioFin: getFieldCheckedValue([
            "btnradioFin1",
            "btnradioFin2",
            "btnradioFin3",
          ]),
  
          btnradioWt: getFieldCheckedValue([
            "btnradioWt1",
            "btnradioWt2",
            "btnradioWt3",
            "btnradioWt4",
            "btnradioWt5",
            "btnradioWt6",
            "btnradioWt7",
            "btnradioWt8",
          ]),
  
          vwOptions: [
            ...getCheckedValues("btncheckVw", 15),
            ...getCheckedValues("btncheckVentileren", 3),
            ...getCheckedValues("btncheckReden", 7),
            ...getCheckedValues("btncheckWoningeigenschap", 3),
          ],

          redenBeschrijving: getFieldValue("redenBeschrijving"),
  
          btnradioTapwater: getFieldCheckedValue([
            "btnradioTapwater1",
            "btnradioTapwater2",
            "btnradioTapwater3",
            "btnradioTapwater4",
          ]),
  
          btnradioLaadpaal: getFieldCheckedValue([
            "btnradioLaadpaal1",
            "btnradioLaadpaal2",
            "btnradioLaadpaal3",
          ]),
  
          btnradioKoken: getFieldCheckedValue([
            "btnradioKoken1",
            "btnradioKoken2",
            "btnradioKoken3",
          ]),
  
          btnEnergieLabel: geselecteerdEnergieLabel,
          gas_eraf: getFieldChecked("gas_eraf"),
          renoveren: getFieldChecked("renoveren"),
          ketelLeeftijd: ketelLeeftijd,
          aantalZonnepanelen: aantalZonnepanelen,
          leeftijdPand: getFieldValue("leeftijdPand"),
        };
      }
      
      const checkboxesVentileert = document.querySelectorAll('.btn-check-ventileert');
  
      checkboxesVentileert.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
          console.log("clicked")
          if (checkbox.checked) {
            checkboxesVentileert.forEach((otherCheckbox) => {
              if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
              }
            });
            postToEndpoint()
          }
        });
      });
  
      function postToEndpoint() {
        const payload = buildPayload();
        console.log("Response data:", payload);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch("/positiefwonen/project/huidige-situatie/post", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((text) => {
            if (text) {
              const data = JSON.parse(text);
            } else {
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  
    // Module 2: Isolatie check
    if (
      window.location.href.indexOf("/positiefwonen/project/isolatie-check/") !==
      -1
    ) {
      // (document.body.contains(getElement("isolatieCheckSmileys")))
      const allInputs = document.querySelectorAll("input");
      const smileyTypes = [
        "daksmileys",
        "muursmileys",
        "vloersmileys",
        "raamsmileys",
        "ventilatiesmileys",
      ];
      const tab = getElement("TabIsolatieCheck");
  
      Array.from(tabs).forEach((tab) => {
        tab.addEventListener("click", postToEndpoint);
      });
  
      window.onload = (event) => {
        toggleSectionVisibility();
      };
  
      const checkForSmileys = setInterval(() => {
        const smiley = document.querySelector(".daksmileys"); // Replace with a valid selector for your smileys
        if (smiley) {
          toggleSectionVisibility();
          clearInterval(checkForSmileys);
        }
      }, 100); // Checks every 100ms. Adjust as necessary for performance considerations.
  
      function getFieldChecked(id) {
        const checkbox = document.getElementById(id);
        return checkbox ? checkbox.checked : false;
      }
  
      function assignValue(smileyType) {
        const smileyArr = document.querySelectorAll(`.${smileyType}`);
        for (let i = 0; i < smileyArr.length; i++) {
          if (smileyArr[i].getAttribute("fill") !== "white") {
            return smileyArr[i].getAttribute("value");
          }
        }
      }
  
      const offerteChkBoxs = Array.from(
        document.getElementsByClassName("offerteChkBoxs")
      );
  
      offerteChkBoxs.forEach((chkbox) => {
        chkbox.addEventListener("click", postToEndpoint);
      });
  
      function postToEndpoint() {
        const payload = {
          project_id: project_id.innerText,
          daksmiley: assignValue("daksmileys"),
          muursmiley: assignValue("muursmileys"),
          vloersmiley: assignValue("vloersmileys"),
          raamsmiley: assignValue("raamsmileys"),
          ventilatiesmiley: assignValue("ventilatiesmileys"),
          dakChkBox: getFieldChecked("dakOfferteChkB"),
          muurChkBox: getFieldChecked("murenOfferteChkB"),
          vloerChkBox: getFieldChecked("vloerOfferteChkB"),
          raamChkBox: getFieldChecked("ramenOfferteChkB"),
          ventilatieChkBox: getFieldChecked("isolatieVentilatieChkbox"),
        };
  
        console.log("Response data:", payload);
        
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch("/positiefwonen/project/isolatie-check/post", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((text) => {
            if (text) {
              const data = JSON.parse(text);
            } else {
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
  
      // Function to check the smiley color and toggle the corresponding section
      function toggleSectionVisibility() {
        smileyTypes.forEach((smileyType) => {
          const smileyElements = document.querySelectorAll(`.${smileyType}`);
          smileyElements.forEach((smiley) => {
            const fillValue = smiley.getAttribute("fill").toLowerCase();
            // Get the section id from the smileyType, assuming they follow a naming convention
            const sectionId = `${smileyType.replace("smileys", "")}Section`;
            const section = document.getElementById(sectionId);
  
            if (section) {
              if (fillValue === "red" || fillValue === "orange") {
                // Show the section if the smiley is red or orange
                section.style.display = "table-row";
              } else if (fillValue === "green") {
                // Hide the section if the smiley is green
                section.style.display = "none";
              }
            }
          });
        });
      }
  
      // Function to attach event listeners to each smiley
      function attachEventListener(elements, event, handler) {
        elements.forEach((element) => {
          element.addEventListener(event, handler);
        });
      }
  
      // Attach click event listener to smiley elements and toggle visibility on click
      smileyTypes.forEach((smileyType) => {
        const smileyElements = document.querySelectorAll(`.${smileyType}`);
        attachEventListener(smileyElements, "click", () => {
          postToEndpoint();
          toggleSectionVisibility(); // Call the toggle function after the endpoint call
        });
      });
  
      function attachEventListener(elements, eventType, callback) {
        elements.forEach((element) =>
          element.addEventListener(eventType, () => setTimeout(callback, 50))
        );
      }
  
      attachEventListener(allInputs, "input", () => {
        postToEndpoint;
      });
    }
  
    // Module 3: Oplossing
    if (
      window.location.href.indexOf(
        "/positiefwonen/project/duurzaam-verwarmen/"
      ) !== -1
    ) {
      function getFieldChecked(id) {
        return document.getElementById(id)?.checked;
      }
  
      const offerteChkBoxs = Array.from(
        document.getElementsByClassName("offerteChkBoxs")
      );
  
      offerteChkBoxs.forEach((chkbox) => {
        chkbox.addEventListener("click", postToEndpoint);
      });
  
      function postToEndpoint() {
        const payload = {
          project_id: project_id.innerText,
          oplossingChkBox: getFieldChecked("oplossingOfferteChkB"),
          vloerverwarmingChkBox: getFieldChecked("vloerverwarmingOfferteChkB"),
        };
  
        console.log("Response data:", payload);
  
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch("/positiefwonen/project/duurzaam-verwarmen/post", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((text) => {
            if (text) {
              const data = JSON.parse(text);
            } else {
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  
    // Module 4: Zonnepanelen
    if (
      window.location.href.indexOf("/positiefwonen/project/zonnepanelen/") !== -1
    ) {
      const allInputs = document.querySelectorAll("input");
      const allSelects = document.querySelectorAll("select");
      const benodigdKwh = document.getElementById("benodigdKwh");
      const aantalZonPNodig = document.getElementById("aantalZonPNodig");
      const opbrengstKwh = document.getElementById("opbrengstKwh");
      const aantalZonP = document.getElementById("aantalZonP");
      const aantalZonPTabel = document.getElementById("aantalZonPTabel");
      const novasoleBtn = document.getElementById("novasoleBtn");
      let prijs = document.getElementById("zonnepanelenPrijs");
      const tab = getElement("TabZonnepanelen");
      // import { zonnepanelenPrijzen } from './zonnepanelen.js'
      const zonnepanelenPrijzen = [
        { prijs: 0, aantal: 0, kwh: 0 },
        { prijs: 3691.37, aantal: 4, kwh: 1600 },
        { prijs: 3926.37, aantal: 5, kwh: 2000 },
        { prijs: 4111.37, aantal: 6, kwh: 2400 },
        { prijs: 4448.01, aantal: 7, kwh: 2800 },
        { prijs: 4804.63, aantal: 8, kwh: 3200 },
        { prijs: 5296.26, aantal: 9, kwh: 3600 },
        { prijs: 5627.88, aantal: 10, kwh: 4000 },
        { prijs: 5922.58, aantal: 11, kwh: 4400 },
        { prijs: 6279.03, aantal: 12, kwh: 4800 },
        { prijs: 6605.48, aantal: 13, kwh: 5200 },
        { prijs: 6931.93, aantal: 14, kwh: 5600 },
        { prijs: 7450.38, aantal: 15, kwh: 6000 },
        { prijs: 7813.06, aantal: 16, kwh: 6400 },
        { prijs: 8139.51, aantal: 17, kwh: 6800 },
        { prijs: 8543.96, aantal: 18, kwh: 7200 },
        { prijs: 8870.41, aantal: 19, kwh: 7600 },
        { prijs: 9196.86, aantal: 20, kwh: 8000 },
        { prijs: 9468.97, aantal: 21, kwh: 8400 },
        { prijs: 9792.83, aantal: 22, kwh: 8800 },
        { prijs: 10127.04, aantal: 23, kwh: 9200 },
        { prijs: 10589.91, aantal: 24, kwh: 9600 },
        { prijs: 10913.77, aantal: 25, kwh: 10000 },
        { prijs: 11237.63, aantal: 26, kwh: 10400 },
        { prijs: 11561.49, aantal: 27, kwh: 10800 },
        { prijs: 11885.36, aantal: 28, kwh: 11200 },
        { prijs: 12209.22, aantal: 29, kwh: 11600 },
        { prijs: 12579.08, aantal: 30, kwh: 12000 },
        { prijs: 12848.78, aantal: 31, kwh: 12400 },
        { prijs: 13144.01, aantal: 32, kwh: 12800 },
        { prijs: 13465.28, aantal: 33, kwh: 13200 },
        { prijs: 13786.56, aantal: 34, kwh: 13600 },
        { prijs: 14206.83, aantal: 35, kwh: 14000 },
        { prijs: 14528.11, aantal: 36, kwh: 14400 },
        { prijs: 14849.38, aantal: 37, kwh: 14800 },
        { prijs: 15170.66, aantal: 38, kwh: 15200 },
        { prijs: 15491.93, aantal: 39, kwh: 15600 },
        { prijs: 15813.21, aantal: 40, kwh: 16000 },
        { prijs: 16144.83, aantal: 41, kwh: 16400 },
        { prijs: 16466.11, aantal: 42, kwh: 16800 },
        { prijs: 16912.38, aantal: 43, kwh: 17200 },
        { prijs: 17233.66, aantal: 44, kwh: 17600 },
        { prijs: 17554.93, aantal: 45, kwh: 18000 },
        { prijs: 17876.21, aantal: 46, kwh: 18400 },
        { prijs: 18197.48, aantal: 47, kwh: 18800 },
        { prijs: 18518.76, aantal: 48, kwh: 19200 },
        { prijs: 18840.03, aantal: 49, kwh: 19600 },
        { prijs: 19161.3, aantal: 50, kwh: 20000 },
      ];
  
      Array.from(tabs).forEach((tab) => {
        tab.addEventListener("click", postToEndpoint);
      });
  
      let prevAantalZonPValue = aantalZonP.value; // Store the initial value
  
      function opbrengstBerekenen() {
        const newAantalZonPValue = parseInt(aantalZonP.value); // Get the new value
        const opbrengstKwhValue = parseInt(opbrengstKwh.value); // Get the current opbrengstKwh value
  
        // Check if aantalZonP has been incremented or decremented
        const difference = newAantalZonPValue - prevAantalZonPValue;
  
        // Update opbrengstKwh accordingly
        if (newAantalZonPValue === 0) {
          opbrengstKwh.value = 0;
        } else {
          opbrengstKwh.value = newAantalZonPValue * 400;
        }
        
        // aantalZonPTabel.value = newAantalZonPValue;
  
        // Store new value for the next change event
        prevAantalZonPValue = newAantalZonPValue;
      }
  
      aantalZonP.addEventListener("change", opbrengstBerekenen);
      function panelenBerekenen() {
        const panelen = Math.ceil(opbrengstKwh.value / 400);
        // aantalZonP.value = panelen;
      }
  
      function panelenOpbrengstBerekenen() {
        const panelen = Math.ceil(benodigdKwh.value / 400);
        const opbrengst = panelen * 400;
        aantalZonPNodig.value = panelen;
        // aantalZonP.value = panelen;
        opbrengstKwh.value = opbrengst;
      }
  
      function opbrengstBerekenenAdvBenodigdAantal() {
        const panelen = aantalZonPNodig.value;
        const opbrengst = panelen * 400;
        benodigdKwh.value = opbrengst;
        // aantalZonP.value = panelen;
        opbrengstKwh.value = opbrengst;
      }
  
      aantalZonP.addEventListener("change", opbrengstBerekenen);
      opbrengstKwh.addEventListener("change", panelenBerekenen);
      benodigdKwh.addEventListener("change", panelenOpbrengstBerekenen);
      aantalZonPNodig.addEventListener(
        "change",
        opbrengstBerekenenAdvBenodigdAantal
      );
  
      // // Update zonnepanelentabel
      // Get the necessary elements
      const aantalZonPInput = document.getElementById("aantalZonP");
      const zonnepanelenPrijsElement =
        document.getElementById("zonnepanelenPrijs");
      const aantalZonPTabelInput = document.getElementById("aantalZonPTabel");
  
      // Update the output when the input value changes
      aantalZonPInput.addEventListener("input", updateOutput);
  
      function updateOutput() {
        // Get the input value
        const aantalZonP = parseInt(aantalZonPInput.value);
  
        // Find the corresponding zonnepanelenPrijzen object based on the input value
        const selectedPanel = zonnepanelenPrijzen.find(
          (panel) => panel.aantal === aantalZonP
        );
  
        // Calculate the expected annual savings based on the selected panel
        const besparingElektra = selectedPanel
          ? selectedPanel.aantal * 400 * 0.45
          : 0;
  
        // Update the price element with the selected price
        zonnepanelenPrijsElement.textContent = selectedPanel
          ? selectedPanel.prijs.toLocaleString("nl-NL", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
          : "";
  
        // Update the aantalZonPTabelInput value
        aantalZonPTabelInput.value = selectedPanel ? selectedPanel.aantal : "";
  
        // Update the besparingElektra element with the calculated value
        document.getElementById("besparingElektra").textContent =
          besparingElektra.toLocaleString("nl-NL", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
          });
  
        // Update the terugverdientijd element with the calculated value
        document.getElementById("terugverdientijd").textContent = selectedPanel
          ? (selectedPanel.prijs / besparingElektra).toFixed(1)
          : 0;
        postToEndpoint();
      }
  
      // // Initial update of the output
      // updateOutput();
  
      aantalZonP.addEventListener("change", opbrengstBerekenen());
  
      function getFieldValue(id) {
        return document.getElementById(id)?.value;
      }
  
      function getFieldChecked(id) {
        return document.getElementById(id)?.checked;
      }
  
      const offerteChkBoxs = Array.from(
        document.getElementsByClassName("offerteChkBoxs")
      );
  
      offerteChkBoxs.forEach((chkbox) => {
        chkbox.addEventListener("click", postToEndpoint);
      });
  
      function showLoaderAddComments() {
        const overlay = document.getElementById("overlay");
  
        overlay.style.display = "block";
        setTimeout(function () {
          overlay.innerHTML +=
            '<p class="mt-5">Contact maken met NovaSole...</p>';
        }, 1000);
        setTimeout(function () {
          overlay.innerHTML += "<p>Gegevens ophalen...</p>";
        }, 4000);
        setTimeout(function () {
          overlay.innerHTML += "<p>Aanvullen missende informatie...</p>";
        }, 10000);
        setTimeout(function () {
          overlay.innerHTML += "<p>Herladen pagina...</p>";
          location.reload();
        }, 15000);
      }
  
      window.addEventListener('load', function () {
        updateOutput();
      });
  
      novasoleBtn.addEventListener("click", function (event) {
        event.preventDefault();
        postToNovaSoleEndpoint();
        showLoaderAddComments();
      });
  
      function postToNovaSoleEndpoint() {
        const payload = {
          project_id: project_id.innerText,
          aantalZonP: getFieldValue("aantalZonP"),
          aantalZonPNodig: getFieldValue("aantalZonPNodig"),
          benodigdKwh: getFieldValue("benodigdKwh"),
          opbrengstKwh: getFieldValue("opbrengstKwh"),
          platdakChkBox: getFieldChecked("platdakChkBox"),
          schuindakChkBox: getFieldChecked("schuindakChkBox"),
          zonnepanelenOfferteChkB: getFieldChecked("zonnepanelenOfferteChkB"),
        };
  
        console.log("Response data NovaSole:", payload);
  
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch("/positiefwonen/project/zonnepanelen/novasole", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
  
            return response.json();
          })
          .then((data) => {
            console.log("Response data:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
  
      function postToEndpoint() {
        const payload = {
          project_id: project_id.innerText,
          aantalZonP: getFieldValue("aantalZonP"),
          aantalZonPNodig: getFieldValue("aantalZonPNodig"),
          benodigdKwh: getFieldValue("benodigdKwh"),
          opbrengstKwh: getFieldValue("opbrengstKwh"),
          platdakChkBox: getFieldChecked("platdakChkBox"),
          schuindakChkBox: getFieldChecked("schuindakChkBox"),
          zonnepanelenOfferteChkB: getFieldChecked("zonnepanelenOfferteChkB"),
        };
  
        console.log("Response data:", payload);
  
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch("/positiefwonen/project/zonnepanelen/post", requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((text) => {
            if (text) {
              const data = JSON.parse(text);
            } else {
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
  
      allInputs.forEach((element) =>
        element.addEventListener("change", postToEndpoint)
      );
      allSelects.forEach((element) =>
        element.addEventListener("change", postToEndpoint)
      );
    }
  
    // Module 5: Samenvatting advies
    if (
      window.location.href.indexOf(
        "/positiefwonen/project/samenvatting-advies"
      ) !== -1
    ) {
      const allInputs = document.querySelectorAll('input[type="radio"]');
      const allBtns = document.querySelectorAll("button");
      const submitBtn = getElement("indienen");
  
      const uitvoeringNee = getElement("uitvoeringNee");
      const uitvoeringJa = getElement("uitvoeringJa");
  
      const klantBudget = getElement("klantBudget");
      const tab = getElement("TabSamenvattingAdvies");
  
      // document.getElementById('downloadBtn-test').addEventListener('click', function() {
      //   const element = document.getElementById('your-page-content');
  
      //   const options = {
      //     margin: 10,
      //     filename: 'test-pdf.pdf',
      //     image: { type: 'jpeg', quality: 0.98 },
      //     html2canvas: { scale: 2 },
      //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      //   };
  
      //   html2pdf().from(element).set(options).save();
      // });
  
      Array.from(tabs).forEach((tab) => {
        tab.addEventListener("click", postToEndpoint);
      });
  
      const duurzaamheidsRapportAntwoordNee = getElement(
        "duurzaamheidsRapportAntwoordNee"
      );
      const duurzaamheidsRapportAntwoordJa = getElement(
        "duurzaamheidsRapportAntwoordJa"
      );
  
      const offertesOntvangenAntwoordVraag = getElement(
        "offertesOntvangenAntwoordVraag"
      );
      const offertesOntvangenAntwoordNee = getElement(
        "offertesOntvangenAntwoordNee"
      );
      const offertesOntvangenAntwoordJa = getElement(
        "offertesOntvangenAntwoordJa"
      );
  
      const toelichting = getElement("toelichting");
      // Knop om een duurzaam advies warmterapport te genereren en te downloaden.
      const downloadBtn = document.getElementById("downloadBtn");
      const topAdviesBtn = document.getElementById("topadviesBtn");
  
      const offerteRows = Array.from(
        document.getElementsByClassName("offerteRows")
      );
      const offerteChkBoxs = Array.from(
        document.getElementsByClassName("offerteChkBoxs")
      );
  
      let indienen = false;
  
      const state = {
        voldoendeErvaring: false,
        uitvoering: false,
        duurzaamheidsRapportAntwoord: false,
        offertesOntvangenAntwoord: false,
      };
  
      const handleClick = (prop, value) => {
        state[prop] = value;
      };
  
      const topadviesBtn = getElement("topadviesBtn"); // Get the topadviesBtn element
  
      duurzaamheidsRapportAntwoordNee.addEventListener("click", () => {
        handleClick("duurzaamheidsRapportAntwoord", false);
        duurzaamheidsRapportAntwoordNee.classList.add("btnState");
        duurzaamheidsRapportAntwoordJa.classList.remove("btnState");
        offertesOntvangenAntwoordVraag.classList.remove("d-none");
        topadviesBtn.textContent = "Rapport verzenden"; // Change text of topadviesBtn
    });
    
    duurzaamheidsRapportAntwoordJa.addEventListener("click", () => {
        handleClick("duurzaamheidsRapportAntwoord", true);
        handleClick("offertesOntvangenAntwoord", false);
        duurzaamheidsRapportAntwoordNee.classList.remove("btnState");
        duurzaamheidsRapportAntwoordJa.classList.add("btnState");
        offertesOntvangenAntwoordVraag.classList.add("d-none");
        offertesOntvangenAntwoordNee.classList.add("btnState");
        offertesOntvangenAntwoordJa.classList.remove("btnState");
        offerteRows.forEach((element) => (element.hidden = true));
        topadviesBtn.textContent = "Persoonlijk Duurzaamheidsadvies aanvragen"; // Change text of topadviesBtn
    });
    
    offertesOntvangenAntwoordNee.addEventListener("click", () => {
        handleClick("offertesOntvangenAntwoord", false);
        offertesOntvangenAntwoordNee.classList.add("btnState");
        offertesOntvangenAntwoordJa.classList.remove("btnState");
        offerteRows.forEach((element) => (element.hidden = true));
        topadviesBtn.textContent = "Rapport verzenden"; // Change text of topadviesBtn
    });
    
    offertesOntvangenAntwoordJa.addEventListener("click", () => {
        handleClick("offertesOntvangenAntwoord", true);
        offertesOntvangenAntwoordNee.classList.remove("btnState");
        offertesOntvangenAntwoordJa.classList.add("btnState");
        offerteRows.forEach((element) => (element.hidden = false));
        topadviesBtn.textContent = "Offertes aanvragen"; // Change text of topadviesBtn
    });
  
      offerteChkBoxs.forEach((chkbox) => {
        chkbox.addEventListener("click", postToEndpoint);
      });
  
      function getFieldChecked(id) {
        const checkbox = document.getElementById(id);
        return checkbox ? checkbox.checked : false;
      }
  
      function getFieldValue(id) {
        return document.getElementById(id)?.value;
      }
      topAdviesBtn.addEventListener("click", () => {
        indienen = true;
        postToEndpoint;
        setTimeout(() => {
          window.location.href = "/positiefwonen/project/menu";
        }, 5000);
      });
  
      function postToEndpoint() {
        const payload = {
          project_id: project_id.innerText,
          rente1: getFieldChecked("rente1"),
          rente2: getFieldChecked("rente2"),
          rente3: getFieldChecked("rente3"),
          ...state,
          toelichting: getFieldValue("toelichting"),
          uitnodigenAdviseur: getFieldChecked("uitnodigenAdviseur"),
          klantBudget: getFieldValue("klantBudget"),
          dakOfferte: getFieldChecked("dakIsolatieOfferteRowChkBox"),
          murenOfferte: getFieldChecked("murenIsolatieOfferteRowChkBox"),
          vloerOfferte: getFieldChecked("vloerIsolatieOfferteRowChkBox"),
          raamOfferte: getFieldChecked("raamIsolatieOfferteRowChkBox"),
          zonnepanelenOfferte: getFieldChecked("zonnepanelenOfferteRowChkBox"),
          warmtepompOfferte: getFieldChecked("warmtepompRowChkBox"),
          vloerVerwarmingOfferte: getFieldChecked("vloerverwarmingRowChkBox"),
          airconditioningOfferte: getFieldChecked(
            "airconditioningOfferteRowChkBox"
          ),
          waterontharderOfferte: getFieldChecked(
            "waterontharderOfferteRowChkBox"
          ),
          luchtreinigerOfferte: getFieldChecked("luchtreinigerOfferteRowChkBox"),
          eigenInbreng: getFieldValue("eigenInbreng"),
          rentepercentage: getFieldValue("rentepercentage"),
          doorlooptijd: getFieldValue("doorlooptijd"),
          indienen: indienen,
        };
  
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch(
          "/positiefwonen/project/samenvatting-advies/post",
          requestOptions
        ).then((response) => response.json);
  
        console.log("Response data:", payload);
  
      }
  
      // calculate financiering
      const financieringBtn = document.getElementById("berekenFinanciering");
  
      function showLoaderAddComments() {
        const overlay = document.getElementById("overlay");
  
        overlay.style.display = "block";
        setTimeout(function () {
          overlay.innerHTML += '<p class="mt-5">Uitrekenen...</p>';
        }, 50);
        setTimeout(function () {
          overlay.innerHTML += "<p>Gegevens ophalen...</p>";
        }, 500);
        setTimeout(function () {
          overlay.innerHTML += "<p>Herladen pagina...</p>";
          location.reload();
        }, 1000);
      }
        
      financieringBtn.addEventListener('click', function() {
          showLoaderAddComments();
          postToEndpoint();
      });
  
      // Get the Hypotheeklast per maand element
      const hypotheeklastMaand = document.getElementById("hypotheeklastPerMaand");
      const hypotheeklastJaar = document.getElementById("hypotheeklastPerJaar");
      const besparingPerMaand = document.getElementById("besparingPerMaand");
      const besparingPerMaandNaHypotheeklast = document.getElementById(
        "besparingPerMaandNaHypotheeklast"
      );
      const besparingPerJaarNaHypotheeklast = document.getElementById(
        "besparingPerJaarNaHypotheeklast"
      );
      const besparingPerMaandUwWinst = document.getElementById(
        "besparingPerMaandUwWinst"
      );
  
      // Add event listeners to the checkboxes
      rente1.addEventListener("change", () => {
        if (rente1.checked) {
          hypotheeklastMaand.innerText = document.getElementById(
            "aflossingsvrijBedrag"
          ).innerText;
          bedragHypotheeklastEuro =
            hypotheeklastMaand.innerText.replace(/€/g, "") * 12;
          besparingNaHypotheek =
            besparingPerMaand.innerText.replace(/€/g, "") -
            hypotheeklastMaand.innerText.replace(/€/g, "");
          hypotheeklastJaar.innerText = "€" + bedragHypotheeklastEuro;
          besparingPerMaandNaHypotheeklast.innerText = "€" + besparingNaHypotheek;
          besparingPerJaarNaHypotheeklast.innerText =
            "€" + besparingNaHypotheek * 12;
          besparingPerMaandUwWinst.innerText = "€" + besparingNaHypotheek;
        }
      });
  
      rente2.addEventListener("change", () => {
        if (rente2.checked) {
          hypotheeklastMaand.innerText =
            document.getElementById("lineairBedrag").innerText;
          bedragHypotheeklastEuro =
            hypotheeklastMaand.innerText.replace(/€/g, "") * 12;
          besparingNaHypotheek =
            besparingPerMaand.innerText.replace(/€/g, "") -
            hypotheeklastMaand.innerText.replace(/€/g, "");
          hypotheeklastJaar.innerText = "€" + bedragHypotheeklastEuro;
          besparingPerMaandNaHypotheeklast.innerText = "€" + besparingNaHypotheek;
          besparingPerJaarNaHypotheeklast.innerText =
            "€" + besparingNaHypotheek * 12;
          besparingPerMaandUwWinst.innerText = "€" + besparingNaHypotheek;
        }
      });
  
      rente3.addEventListener("change", () => {
        if (rente3.checked) {
          hypotheeklastMaand.innerText =
            document.getElementById("annuiteitBedrag").innerText;
          bedragHypotheeklastEuro =
            hypotheeklastMaand.innerText.replace(/€/g, "") * 12;
          besparingNaHypotheek =
            besparingPerMaand.innerText.replace(/€/g, "") -
            hypotheeklastMaand.innerText.replace(/€/g, "");
          hypotheeklastJaar.innerText = "€" + bedragHypotheeklastEuro;
          besparingPerMaandNaHypotheeklast.innerText = "€" + besparingNaHypotheek;
          besparingPerJaarNaHypotheeklast.innerText =
            "€" + besparingNaHypotheek * 12;
          besparingPerMaandUwWinst.innerText = "€" + besparingNaHypotheek;
        }
      });
  
      allInputs.forEach((element) =>
        element.addEventListener("click", () => {
          postToEndpoint();
        })
      );
      allBtns.forEach((element) =>
        element.addEventListener("click", () => {
          postToEndpoint();
        })
      );
      toelichting.addEventListener("change", () => {
        postToEndpoint();
      });
      eigenInbreng.addEventListener("input", () => {
        postToEndpoint();
      });
      rentepercentage.addEventListener("input", () => {
        postToEndpoint();
      });
      doorlooptijd.addEventListener("input", () => {
        postToEndpoint();
      });
      klantBudget.addEventListener("change", () => {
        postToEndpoint();
      });
  
      // Besparingsmeter code
      document.querySelectorAll(".skillLevel").forEach(function (el) {
        window.addEventListener("load", function () {
          document.querySelector(".meter").classList.add("colourChange");
          var thisSkillLevel = el.value; //Hier wordt de value gevuld die de meter vult.
          var newStrokeDashOffset = 462 - (thisSkillLevel / 100) * 462;
  
          document.querySelector("#percentage").textContent =
            thisSkillLevel + "%";
  
          var color;
          if (thisSkillLevel >= 0 && thisSkillLevel <= 10) {
            color = "#ff5a5f";
          } else if (thisSkillLevel >= 11 && thisSkillLevel <= 25) {
            color = "#ff9661";
          } else if (thisSkillLevel >= 26 && thisSkillLevel <= 50) {
            color = "#ffd366";
          } else if (thisSkillLevel >= 51 && thisSkillLevel <= 75) {
            color = "#acd376";
          } else if (thisSkillLevel >= 76 && thisSkillLevel <= 100) {
            color = "#58d185";
          }
  
          document.querySelector(".meter svg.skill path.full").style.stroke =
            color;
          document.querySelector(
            ".meter svg.skill path.full"
          ).style.strokeDashoffset = -newStrokeDashOffset;
        });
  
        el.addEventListener("mouseup", function () {
          document.querySelector(".meter").classList.remove("colourChange");
        });
      });
  
      // Download knop functionaliteiten - post to endpoint om de actie te triggeren
      downloadBtn.addEventListener("click", downloadFile);
  
      function downloadFile() {
        const klantnaam = document.getElementById("downloadBtn").value;
        const payload = {
          project_id: project_id.innerText,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch(
          "/positiefwonen/project/samenvatting-advies/genereerPdf",
          requestOptions
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            // decode base64 string, remove prefix first
            const base64Response = data.pdf.replace(
              "data:application/pdf;base64,",
              ""
            );
            const pdfBlob = base64toBlob(base64Response, "application/pdf");
  
            // create object URL for the blob
            const blobURL = URL.createObjectURL(pdfBlob);
  
            // create a link element
            const link = document.createElement("a");
  
            // set link attributes
            link.href = blobURL;
            link.download = "Duurzaam rapport " + klantnaam + ".pdf";
  
            // append link to the body
            document.body.appendChild(link);
  
            // trigger click event on the link
            link.click();
  
            // remove the link after triggering click
            document.body.removeChild(link);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
  
      // Utility function to convert base64 to Blob
      function base64toBlob(base64, type = "") {
        const binStr = atob(base64);
        const len = binStr.length;
        const arr = new Uint8Array(len);
  
        for (let i = 0; i < len; i++) {
          arr[i] = binStr.charCodeAt(i);
        }
  
        return new Blob([arr], { type: type });
      }
  
      topAdviesBtn.addEventListener("click", function () {
        const payload = {
          project_id: project_id.innerText,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  
        fetch(
          "/positiefwonen/project/samenvatting-advies/top-advies",
          requestOptions
        ).then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        });
      });
    }
  });
  
  // Module Menu
  if (window.location.href.indexOf("/positiefwonen/project/menu") !== -1) {
    const navBar = document.getElementById("navBarTop");
    navBar.style.display = "none";
  
    function searchTable() {
      const searchInput = document.getElementById("searchInput");
      const pagination = document.getElementById("pagination");
      const filter = searchInput.value.toUpperCase();
      const table = document.getElementById("myTable");
      const rows = table
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr");
  
      // Loop through all table rows and hide those that don't match the search query
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let found = false;
  
        for (let j = 0; j < cells.length; j++) {
          const cell = cells[j];
  
          if (cell) {
            if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
              break;
            }
          }
        }
  
        if (found) {
          rows[i].style.display = "";
          pagination.style.display = "none";
        } else {
          rows[i].style.display = "none";
        }
      }
  
      // Reset pagination and display all rows if the filter is cleared
      if (filter === "") {
        const pagination = document.getElementById("pagination");
        const links = pagination.getElementsByTagName("a");
  
        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove("active");
        }
  
        currentPage = 1;
        pagination.style.display = "";
        displayRows();
        setupPagination();
      }
    }
  
    // Add event listener to search input field
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", searchTable);
  
    // Initialize pagination
    const table = document.getElementById("myTable");
    const rowsPerPage = 10;
    let currentPage = 1;
  
    function displayRows() {
      const rows = table
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr");
  
      // Calculate the range of rows to display
      const startIndex = (currentPage - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
  
      // Show/hide rows based on the current page
      for (let i = 0; i < rows.length; i++) {
        if (i >= startIndex && i < endIndex) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  
    function setupPagination() {
      const rows = table
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr");
      const numRows = rows.length;
      const numPages = Math.ceil(numRows / rowsPerPage);
      const pagination = document.getElementById("pagination");
      let paginationHTML = "";
  
      // Generate the pagination links
      for (let i = 1; i <= numPages; i++) {
        paginationHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
      }
  
      pagination.innerHTML = paginationHTML;
    }
  
    function changePage(page) {
      currentPage = page;
      displayRows();
  
      // Update active page link
      const pagination = document.getElementById("pagination");
      const links = pagination.getElementsByTagName("a");
  
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
  
      links[currentPage - 1].classList.add("active");
    }
  
    setupPagination();
    displayRows();
  }
  // Alle project tabel regels ophalen.
  const projectTabelRegels = document.getElementsByClassName("projectTr");
  
  // Toevoegen click listeners
  for (let i = 0; i < projectTabelRegels.length; i++) {
    // Hover state toevoegen per project tabel regel
    projectTabelRegels[i].addEventListener("mouseover", function () {
      this.style.cursor = "pointer";
    });
    projectTabelRegels[i].addEventListener("mouseout", function () {
      this.style.cursor = "default";
    });
  
    projectTabelRegels[i].addEventListener("click", function () {
      const projectId = this.getAttribute("value");
      window.location.href =
        "/positiefwonen/project/huidige-situatie/" + projectId;
    });
  }
  