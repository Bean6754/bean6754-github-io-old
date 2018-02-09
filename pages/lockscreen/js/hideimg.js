function hideimg() {
  $("#lockscreen").click(function(){
  var dest = parseInt($("#block").css("margin-bottom").replace("px", "")) + 100;
    if (dest > 500) {
        $("#block").animate({
            marginBottom: "10px"
          }, 500 );
    }
    else {
      $("#block").animate({
        marginBottom: dest + "px"
      }, 500 );
    }
});


  
  /*$(document).ready(function(){
    $("#lockscreen").remove();
  });*/
}
  
