$(document).ready(function() {
    $("#mango").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#mango-data tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });