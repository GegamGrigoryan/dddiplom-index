    var popup = document.querySelector(".popup__overlay");
    var btn = document.querySelector(".box-btn");
    var close = document.querySelector(".closer");
	
    btn.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.remove("hidden");
    });

    popup.addEventListener("click", function(event) {
      e = event || window.event
      if (e.target == this) {
        popup.classList.add("hidden");
      }
    });

    close.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.add("hidden");
    });
	/*======================1===========================*/
	var popup1 = document.querySelector(".popup__overlay1");
    var btn1 = document.querySelector(".box-btn1");
    var close1 = document.querySelector(".closer1");
	


    btn1.addEventListener("click", function(event){
        event.preventDefault();
        popup1.classList.remove("hidden1");
    });

    popup1.addEventListener("click", function(event) {
      e = event || window.event
      if (e.target == this) {
        popup1.classList.add("hidden1");
      }
    });

    close1.addEventListener("click", function(event){
        event.preventDefault();
        popup1.classList.add("hidden1");
    });
	/*======================2===========================*/
	var popup2 = document.querySelector(".popup__overlay2");
    var btn2 = document.querySelector(".box-btn2");
    var close2 = document.querySelector(".closer2");
	


    btn2.addEventListener("click", function(event){
        event.preventDefault();
        popup2.classList.remove("hidden2");
    });

    popup2.addEventListener("click", function(event) {
      e = event || window.event
      if (e.target == this) {
        popup2.classList.add("hidden2");
      }
    });

    close2.addEventListener("click", function(event){
        event.preventDefault();
        popup2.classList.add("hidden2");
    });
		/*======================katalog===========================*/
