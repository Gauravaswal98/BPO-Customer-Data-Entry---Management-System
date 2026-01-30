$(document).ready(function() {
    $("#woodp").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#wood-primerdata tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });