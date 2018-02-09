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
  
  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two second later');
}

demo();
  
  $(document).ready(function(){
    $("#lockscreen").remove();
  });
}
  
