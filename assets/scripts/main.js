// Gets city name based on zip code input
const getLocation = async () => {
    const req = `${baseGeocodeURL}/geo/1.0/zip?zip=${userZipCode}&appid=${geocodeAPIKey}`;
    const res = await fetch(req);
    const locationData = await res.json();

    if (res.status === 200) {
        userCity = locationData.name;
        console.log("Success");
        getHardinessZone();
    } else {
        errorMessage = res.status;
        badRequest();
        console.log("Error");
    };
};

// Gets hardiness zone based on zip code input
const getHardinessZone = async () => {
    const req = `${baseHardinessZonesURL}/zipcodes/${userZipCode}`;
    const res = await fetch(req, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': hardinessZoneAPIKey,
            'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com'
        }
    });
    const zoneData = await res.json();

    if (res.status === 200) {
        userZone = zoneData.hardiness_zone;
        console.log("Success");
        saveData();
        showResultsPage();
    } else {
        errorMessage = res.status;
        badRequest();
        console.log("Error");
    };
};

// Saves data to dropdownarray then saves the array items locally
const saveData = () => {
    dropdownArray.push({
        zipcode: userZipCode,
        city: userCity,
        zone: userZone
    });
    for (let i = 0; i < dropdownArray.length; i++) {
        localStorage.setItem(i, JSON.stringify(dropdownArray[i]));
    };
    loadData();
};

// Loads the locally saved items into the dropdown array
const loadData = () => {
    dropdownArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        dropdownArray.push(JSON.parse(localStorage[i])); 
    };
    populateDropdown();
};

// Adds dropdown array items as options to the dropdown element
const populateDropdown = () => {
    $("#dropdown").empty();
    $("#dropdown").append(`<option selected disabled>City</option>`);     
    for (let i = 0; i < dropdownArray.length; i++) {
        let newOption = $(`<option>${dropdownArray[i].city}</option>`);
        newOption.attr("city", `${dropdownArray[i].city}`).attr("zone", `${dropdownArray[i].zone}`);
        $("#dropdown").append(newOption);
    };
};

// Page display
const showResultsPage = () => {
    $(".result-container").removeClass("hidden");
    $(".search-container").addClass("hidden");
    renderMainSection();
};

const showHomePage = () => {
    $(".search-container").removeClass("hidden");
    $(".result-container").addClass("hidden");
};

/* Populates current location and zone result DOM elements, reveals hidden sections,
loops through the array corresponding with the current hardiness zone to populate
rest of DOM elements */
const renderMainSection = () => {
    $("#current-location").text(userCity);
    $("#zone-result").text(userZone);
    $("#main-section").removeClass("hidden");
    $("#per-heading").removeClass("hidden");
    $("#ann-heading").removeClass("hidden");

    // Zone 1
    if (userZone === "1a" || userZone === "1b") {
        for (let i = 0; i < zoneOneArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneOneArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneOneArray[i].image);
        };
        $("#per-result").text("May 8th");
        $("#ann-result").text("May 22nd");

    // Zone 2 
    } else if (userZone === "2a" || userZone === "2b") {
        for (let i = 0; i < zoneTwoArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneTwoArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneTwoArray[i].image);
        };
        $("#per-result").text("May 8th");
        $("#ann-result").text("May 22nd");

    // Zone 3
    } else if (userZone === "3a" || userZone === "3b") {
        for (let i = 0; i < zoneThreeArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneThreeArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneThreeArray[i].image);
        };
        $("#per-result").text("May 8th");
        $("#ann-result").text("May 22nd");

    // Zone 4
    } else if (userZone === "4a" || userZone === "4b") {
        for (let i = 0; i < zoneFourArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneFourArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneFourArray[i].image);
        };
        $("#per-result").text("May 8th");
        $("#ann-result").text("May 22nd");

    // Zone 5a
    } else if (userZone === "5a") {
        for (let i = 0; i < zoneFiveArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneFiveArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneFiveArray[i].image);
        };
        $("#per-result").text("May 1st");
        $("#ann-result").text("May 15th");

    // Zone 5b
    } else if (userZone === "5b") {
        for (let i = 0; i < zoneFiveArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneFiveArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneFiveArray[i].image);
        };
        $("#per-result").text("April 20th");
        $("#ann-result").text("May 5th");

    // Zone 6a
    } else if (userZone === "6a") {
        for (let i = 0; i < zoneSixArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneSixArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneSixArray[i].image);
        };
        $("#per-result").text("April 13th");
        $("#ann-result").text("April 28th");

    // Zone 6b
    } else if (userZone === "6b") {
        for (let i = 0; i < zoneSixArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneSixArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneSixArray[i].image);
        };
        $("#per-result").text("April 3rd");
        $("#ann-result").text("April 17th");

    // Zone 7a
    } else if (userZone === "7a") {
        for (let i = 0; i < zoneSevenArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneSevenArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneSevenArray[i].image);
        };
        $("#per-result").text("March 27th");
        $("#ann-result").text("April 10th");

    // Zone 7b
    } else if (userZone === "7b") {
        for (let i = 0; i < zoneSevenArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneSevenArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneSevenArray[i].image);
        };
        $("#per-result").text("March 20th");
        $("#ann-result").text("April 3rd");

    // Zone 8
    } else if (userZone === "8a" || userZone === "8b") {
        for (let i = 0; i < zoneEightArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneEightArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneEightArray[i].image);
        };
        $("#per-result").text("March 13th");
        $("#ann-result").text("March 27th");

    // Zone 9
    } else if (userZone === "9a" || userZone === "9b") {
        for (let i = 0; i < zoneNineArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneNineArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneNineArray[i].image);
        };
        $("#per-result").text("March 6th");
        $("#ann-result").text("March 20th");

    // Zone 10
    } else if (userZone === "10a" || userZone === "10b") {
        for (let i = 0; i < zoneTenArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneTenArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneTenArray[i].image);
        };
        $("#per-result").text("March 6th");
        $("#ann-result").text("March 20th");

    // Zone 11
    } else if (userZone === "11a" || userZone === "11b") {
        for (let i = 0; i < zoneElevenArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneElevenArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneElevenArray[i].image);
        };
        $("#per-result").text("March 6th");
        $("#ann-result").text("March 20th");

    // Zone 12
    } else if (userZone === "12a" || userZone === "12b") {
        for (let i = 0; i < zoneTwelveArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneTwelveArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneTwelveArray[i].image);
        };
        $("#per-result").text("March 1st");
        $("#ann-result").text("March 10th");

    // Zone 13
    } else if (userZone === "13a" || userZone === "13b") {
        for (let i = 0; i < zoneThirteenArray.length; i++) {
            $(`#crop-heading${[i]}`).text(zoneThirteenArray[i].name);
            $(`#crop-img${[i]}`).attr("src", zoneThirteenArray[i].image);
        };
        $("#per-result").text("March 1st");
        $("#ann-result").text("March 10th");
    }; 
};

// Show error modal
const errorHandling = () => {
    $("#error-modal").removeClass("hidden");
    $("#header").addClass("restrict");
    $("#main").addClass("restrict");
    $("#footer").addClass("restrict");
    $("#zip-input").prop("disabled", true);
    $("#submit-button").prop("disabled", true);
    $("#dropdown").prop("disabled", true);
    $("#load-button").prop("disabled", true);
};

// Message if request error
const badRequest = () => {
    errorHandling();
    $("#error-code").text(`Status: ${errorMessage}`);
};

// Message if zip code is in history
const inHistory = () => {
    errorHandling();
    $("#error-code").text(`${userZipCode} is already in history!`);
};

// Message if search bar is empty
const emptySearch = () => {
    errorHandling();
    $("#error-code").text(`No input in search bar!`);
};

// Message if no dropdown option selected
const emptyDropdown = () => {
    errorHandling();
    $("#error-code").text(`No item selected!`);
};