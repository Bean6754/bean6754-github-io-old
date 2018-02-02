function myMove() {
  var elem = document.getElementById("background");   
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 650) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
