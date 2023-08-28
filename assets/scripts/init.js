$().ready(() => {
    // Zip code input submit button event listener
    const submitButton = () => {       
        $("#submit-button").on("click", function (event) {
            event.preventDefault();
            userZipCode = $("#zip-input").val();
            saveZipCode();
            getLocation();
            getHardinessZone();
        });
    };

    // Function calls
    loadData();
    submitButton();
});