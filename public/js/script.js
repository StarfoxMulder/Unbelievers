//window.onload = function() {
$(document).ready(function() {
  function changeInputLength() {
    if ($("input.css-textfield")) {
      $("input.css-textfield").attr("maxlength", 140);
      console.log("length changed to 140");
    } else {
      setTimeout(changeInputLength, 500);
      console.log("changeInputLength setTimeout triggered");
    }
  }

  changeInputLength();
});

/*
$(".submit").click(function(event) {
  console.log(event);
  event.stopPropagation();
  event.preventDefault();
  window.location.reload(false);
  //  selection = $(".form label.active input").val();
  selectionNumber = $(".form input:radio:checked").val();
  selectionText = $(".form input:radio:checked").parent().text();
  if(selectionNumber == 0){
    selectionText = $(".form .otherField").val();
    if (selectionText == "" || selectionText == undefined || selectionText == null){
      alert("Please enter a valid 'Other' or select a different Poll Results option.")
    }
  }
  selectionText = $.trim(selectionText);

  console.log("Selection Number: "+selectionNumber+") "+selectionText);
  return false;
});
*/

/*
$(".form").submit(function(event) {
  event.stopPropagation();
  event.preventDefault();
  return false;
});
*/
