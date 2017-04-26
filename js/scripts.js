///////////////// Business Interface ////////////////

//////////////// User Interface ////////////////
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var shoesInput = $("#shoes").val();



    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".shoes").text(shoesInput);

    $(".receipt").show();
  });
});
