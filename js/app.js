/*jslint browser: true*/
/*global $, jQuery, alert*/

var credential_open = false;

function noText(id) {
    return document.forms[id].textbox_text.value == "";
}

$(document).ready(function () {
    //login button
    $("#login").click(function () {
        if (!credential_open) {
            $("#credentials").animate({
                "right": '5px',
                "top": '58px'
            });
            credential_open = true;
        } else {
            $("#credentials").animate({
                "right": '-310px',
                "top": '-358px'
            });
            credential_open = false;
        }
    });

    //search
    $("#sbar").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#b").click();
        }
    });

    $("#b").click(function () {
        $(".main_content form").animate({
            "top": "145px"
        });

    });

});
