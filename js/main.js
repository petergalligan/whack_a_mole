var start = new Date().getTime();


      function makeMoleAppear () {
        var top = Math.random()*300;
        var left = Math.random()*300;


        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";

        document.getElementById("shape").style.display = "block";
         start = new Date().getTime();

      }
      function appearAfterDelay() {
        setTimeout(makeMoleAppear, Math.random() * 2000);

      }
      appearAfterDelay();
        document.getElementById("shape").onclick = function(){
        document.getElementById("shape").style.display = "none";

        var end = new Date().getTime();
        var timeTaken = (end - start)/1000;
        document.getElementById("timeTaken").innerHTML = timeTaken + "s";
        appearAfterDelay();

      }
