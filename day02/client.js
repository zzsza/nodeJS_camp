/**
 * Created by Bsy on 2016-11-03.
 */
$(document).ready(function() {
    var MessagesElement = $("#messages");

    $("form").submit(function() {
        var inputElement = $("form input[name='message']");
        var data = inputElement.val();
        $(MessagesElement).append("<li>" + data + "</li>");
        inputElement.val("");

        return false;
    });
});