$(document).ready(function() {
    $("#sealer").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#sealer-data tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });
  