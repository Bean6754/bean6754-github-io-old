function hideimg() {
$("#lockscreen").click(function(){
  var dest = parseInt($("#lockscreen").css("margin-bottom").replace("px", "")) + 100;
    if (dest > 500) {
        $("#lockscreen").animate({
            marginBottom: "10px"
          }, 500 );
    }
    else {
      $("#lockscreen").animate({
        marginBottom: dest + "px"
      }, 500 );
    }
});
  
  /*$(document).ready(function(){
    $("#lockscreen").remove();
  });*/
}
  
