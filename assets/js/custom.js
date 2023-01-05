window.onload = function () {
  let pepElem = document.getElementById('pep');

  if (pepElem !== null) {
    console.log("adjusting height");
    let pepHeight = pepElem.offsetHeight;
    document.getElementById('content').style.marginTop = "-" + (pepHeight / 2) + "px";
  }

  navbar = document.getElementById("pepNavContainer");
  window.addEventListener("scroll", () => {
    console.log("scroll")

    let pos = window.scrollY;

    if(pos > 300 && navbar.classList.contains('bg-faded')){
      navbar.classList.add('bg-dark');
      navbar.classList.remove('bg-faded');
    } else if(pos <= 300 && navbar.classList.contains('bg-dark')) {
      navbar.classList.add('bg-faded');
      navbar.classList.remove('bg-dark');
    };
  });

};
