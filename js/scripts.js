var pingPong = function(number) {
  if ((number % 3 === 0) || (number % 5 === 0)) {
    return true;
  } else {
    return false;
  };
};


$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    
    $("ul").empty();
    var number = parseInt($("input#userInput").val());
    
    for (var i = 1; i <= number; i++) {
      console.log(i)
      if (i % 3 === 0 && i % 5 === 0) {
        $("ul").append("<li>pingpong</li>");

      } else if (i % 3 === 0) {
        $("ul").append("<li>ping</li>");

      } else if (i % 5 === 0) {
        $("ul").append("<li>pong</li>");

      } else {
        $("ul").append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
