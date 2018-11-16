var axios = require("axios");

//window.onload = function() {
$(document).ready(function() {});

$(".pollForm").on("submit", function(event) {
  event.preventDefault();
  console.log(".form triggered");
});

$(".pollSubmit").on("click", function(event) {
  poll = $(this).siblings(".pollForm");
  btn = $(this);
  getPollSub(poll, btn);
  return false;
});

function getPollSub(poll, btn) {
  console.log(poll);
  selectionNumber = $("input:radio:checked", poll).val();
  selectionText = $("input:radio:checked", poll)
    .parent()
    .text();
  if (selectionNumber == 0) {
    selectionText = $(".pollForm .otherField").val();
    if (
      selectionText == "" ||
      selectionText == undefined ||
      selectionText == null
    ) {
      alert(
        "Please enter a valid 'Other' or select a different Poll Results option."
      );
    }
  }
  selectionText = $.trim(selectionText);
  console.log("Selection Number: " + selectionNumber + ") " + selectionText);

  $(this).addClass("disabled");
  $(poll).empty();
  $(poll).append(
    "<div class='postVote'><p class='thanks'>Thank you for voting!</p></div>"
  );

  axios.post("/" + pollId + "/vote", { choice: choice });
}

//});
//};

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
