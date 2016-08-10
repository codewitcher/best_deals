/*jslint browser: true*/
/*global $, jQuery, alert*/

var credential_open = false;
$(document).ready(function () {
    $("#login").click(function () {
        if (!credential_open) {
            $("#credentials").animate({
                "right": '5px'
            });
            credential_open = true;
        } else {
            $("#credentials").animate({
                "right": '-310px'
            });
            credential_open = false;
        }
    });

});
