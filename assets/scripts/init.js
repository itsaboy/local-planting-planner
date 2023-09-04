$().ready(() => {
    // Zip code input submit button event listener
    const submitButton = () => {       
        $("#submit-button").on("click", function (event) {
            event.preventDefault();
            userZipCode = $("#zip-input").val();
            getLocation();
        });
    };

    // Button that clears the error modal
    const clearError = () => {
        $("#error-button").on("click", () => {
            $("#error-modal").removeClass("show");
            $("#error-modal").addClass("hide");
            $("#header").removeClass("restrict");
            $("#main").removeClass("restrict");
            $("#footer").removeClass("restrict");
            $("#zip-input").prop("disabled", false);
            $("#submit-button").prop("disabled", false);   
        });
    };

    // Function calls
    submitButton();
    clearError();
});