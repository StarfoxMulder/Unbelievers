//window.onload = function() {
$(document).ready(function() {
});
  $("form").on('submit', function(event){
    event.preventDefault();
    console.log("form triggered");
  });

  $(".form").on('submit', function(event){
    event.preventDefault();
    console.log(".form triggered");
  });

  $(".submit").on('click', function(event) {
    console.log(event);
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
  //  event.stopImmediatePropagation();
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