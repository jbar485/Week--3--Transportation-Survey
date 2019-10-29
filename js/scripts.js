$(document).ready(function(){
  $("#transportation_survey").submit(function(event){
      event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var transport = $(this).val();
      $("#work-responses").append(transport + ", ");

    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var transport2 = $(this).val();
      $("#fun-responses").append(transport2 + "<br>");
    });
    $('#transportation_survey').hide();




  });



});
