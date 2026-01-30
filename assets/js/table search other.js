$(document).ready(function() {
    $("#oth").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#other-data tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });
  