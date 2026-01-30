$(document).ready(function() {
    $("#metl").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#metal-primerdata tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });
  