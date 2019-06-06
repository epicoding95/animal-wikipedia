$(document).ready(function() {
  $("#add").submit(function(event) {
    event.preventDefault();


    var number1 = parseInt($("#add option:selected").val());
    var number2 = ($("#add1").val());
    var number3 = ($("#add2").val());


    if(number1 === 1){
      $("p#turtles").show();
      $("p#snakes").hide();
      $("p#insects").hide();

    }else if(number1 === 2){
      $("p#snakes").show();
      $("p#turtles").hide();
      $("p#insects").hide();
    }else {
    $("p#insects").show();
    $("p#snakes").hide();
    $("p#turtles").hide();
    }




  });
});
