$().ready(() => {

    // Zip code input submit button event listener    
    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        userZipCode = $("#zip-input").val();
        if (dropdownArray.some(obj => obj.zipcode === userZipCode)) {
            inHistory();
        } else if (!userZipCode) {
            emptySearch();
        } else {
            getLocation();
        };
    });

    // Sets globals based on selected option
    $("#dropdown").on("change", () => {
        userCity = $("#dropdown option:selected").attr("city");
        userZone = $("#dropdown option:selected").attr("zone");
    });

    // Loads data that corresponds to selected option     
    $("#load-button").on("click", function (event) {
        event.preventDefault();
        if (!userCity) {
            emptyDropdown();
        } else {
            showResultsPage();
        };
    });

    // Button that clears the error modal
    $("#error-button").on("click", () => {
        $("#error-modal").addClass("hidden");
        $("#header").removeClass("restrict");
        $("#main").removeClass("restrict");
        $("#footer").removeClass("restrict");
        $("#zip-input").prop("disabled", false);
        $("#submit-button").prop("disabled", false); 
        $("#dropdown").prop("disabled", false);
        $("#load-button").prop("disabled", false);  
    });

    // Function calls
    loadData();
});