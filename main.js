function redRight() {
    document.getElementById("circle-red").style.left = "90%";
    document.querySelector("#screen").style.backgroundColor = "green";
    document.querySelector("#CSS-declaration-block").style.background = "green";
    document.querySelector("#CSS-declaration-block").innerHTML = "<h1>RIGHT!</h1>";
}

  function wrong() {
    document.querySelector("#screen").style.backgroundColor = "red";
    document.querySelector("#CSS-declaration-block").style.background = "red";
    document.querySelector("#CSS-declaration-block").innerHTML = "<h1>WRONG</h1>";
  }