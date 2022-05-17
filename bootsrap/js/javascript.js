$( function () {
    $(".login").click(function() {
        valid = true;
        if($("#email").val() == "") {
            $("#email").css("border-color", "red");
            $("#email").addClass("redplace");
            valid = false;
        } else {
            $("#email").css("border-color", "green");
        }
        if($("#pass").val() == "") {
            $("#pass").css("border-color", "red");
            $("#pass").addClass("redplace");
            valid = false;
        } else {
            $("#pass").css("border-color", "green");
        }
        return valid
    });
});