$(document).ready(function() {
    $("#int-primer").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#int-primerdata tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });
  