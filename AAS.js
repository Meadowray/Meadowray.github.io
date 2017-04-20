$( function() {
  $( ".draggable" ).draggable({
    snap: true
  });
  $(".teams").prepend("<div class='hider'>-</div>");
  $( ".teams" ).draggable({ snap: false });
  //Slide up and down on click
  $(".hider").on('click touchstart', function () {
      $(this).toggleClass('inactive');
      var newText = $(this).text()=='+'?'-':'+';
      $(this).text(newText);
      $(this).siblings('section').slideToggle("slow");
  });
} );
