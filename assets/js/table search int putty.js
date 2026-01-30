$(document).ready(function() {
    $("#int-putty").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#int-puttydata tr").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
  });