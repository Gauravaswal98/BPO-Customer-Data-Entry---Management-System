$(document).ready(function() {
    $("#stain").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#stainer-data tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });
  