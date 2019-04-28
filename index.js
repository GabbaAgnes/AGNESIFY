(function() {

    var header    = document.querySelector('h1');
    var selectBox = document.querySelector('select');
    var runButton = document.querySelector('button');
  
    selectBox.addEventListener('change', function(e) {
      console.log(this,e,e.target,this["data-text"]);
      triggerAnimation();
    })
  
    runButton.addEventListener('click', function(e) {
      e.preventDefault();
      triggerAnimation();
    })
  
    function triggerAnimation() {
  
      var animation = selectBox.value;
      console.log(selectBox,selectBox["data-text"]);
      header.className = "";
      setTimeout(function() {
        header.className = "animated " + animation;
        header.setAttribute('data-text',"AGNESIFY.CSS");
      }, 10);
  
    }
  
  })();
  