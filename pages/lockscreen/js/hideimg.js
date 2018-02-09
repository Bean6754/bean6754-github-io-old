function hideimg() {
  var elem = document.getElementById("lockscreen");
  var pos = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
      /* elem.style.left = pos + 'px'; */
    }
  }
  
  /*$(document).ready(function(){
    $("#lockscreen").remove();
  });*/
}
  
