$( function() {
  $( ".draggable" ).draggable({
    snap: true
  });
  $(".teams").prepend("<div class='hider'>-</div>");
  $( ".teams" ).draggable({ snap: false });
  //Slide up and down on click
  function toggle() {
      $(this).toggleClass('inactive');
      var newText = $(this).text()=='+'?'-':'+';
      $(this).text(newText);
      $(this).siblings('section').toggle();
  }
  $(".hider").on('click', toggle);
  $(".hider").each(toggle);
} );
