/* Fonctionnalité 1 */

let footerElt = document.getElementsByTagName("footer")[0];
let clickCount = 0;
footerElt.addEventListener("click", function() {
    console.log("clique");
    console.log("clic numéro " + ++clickCount);
});

/* Fonctionnalité 2 */

let hamburgerMenuButtonElt = document.getElementsByClassName("navbar-toggler")[0];
let navbarHeaderElt = document.getElementById("navbarHeader");
hamburgerMenuButtonElt.addEventListener("click", function() {
    navbarHeaderElt.classList.toggle("collapse");
});

/* Fonctionnalité 3 */
let editButtonElt = document.getElementsByClassName("btn-outline-secondary")[0];
let cardText = document.getElementsByClassName("card-text")[0];
editButtonElt.addEventListener("click", function() {
  cardText.style.color = "red";
});


/* Fonctionnalité 4 */
function toggleTextColor(elt) {
  if (elt.style.color === "green") {
      elt.style.color = "";
  } else {
      elt.style.color = "green";
  }
}


let edit2ButtonElt = document.getElementsByClassName("btn-outline-secondary")[1];
let card2Text = document.getElementsByClassName("card-text")[1];
edit2ButtonElt.addEventListener("click", function() {
  toggleTextColor(card2Text); 
});

/* Fonctionnalité 5 */
let navbarElt = document.getElementsByClassName("navbar")[0]
navbarElt.addEventListener("dblclick", function() {
  document.styleSheets[0].disabled = !document.styleSheets[0].disabled; 
});

/* Fonctionnalité 6 */
function resizeImg(elt) {
  if (elt.style.width === "20%") {
      elt.style.width = "";
  } else {
      elt.style.width = "20%";
  }
}

function reduceCard(elt) {
  let cardTextToReduce = elt.getElementsByClassName("card-text")[0]
  cardTextToReduce.classList.toggle("collapse")
  let imgToReduce = elt.getElementsByClassName("card-img-top")[0]
  resizeImg(imgToReduce)
}


let cardElt = document.getElementsByClassName("card");
for (let i=0 ; i<cardElt.length ; i++) {
  let card = cardElt[i];
  let buttonViewElt = card.getElementsByClassName("btn-success")[0];
  buttonViewElt.addEventListener("mouseover", function() {
      reduceCard(card);
  });
}

/* Fonctionnalité 7 */
let navbarArrowElt = document.getElementsByClassName("btn-secondary")[0]
navbarArrowElt.addEventListener("click", function() {
  reorderContent(); 
});

function reorderContent() {
  var content = document.getElementsByClassName('col-md-4');
  var parent = content[0].parentNode;
  parent.insertBefore(content[content.length - 1], content[0]);
}

/* Fonctionnalité 8 */
let navbarArrow2Elt = document.getElementsByClassName("btn-primary")[0]
navbarArrow2Elt.addEventListener("click", function(e) {
  reorderContentInvert(e)
});

function reorderContentInvert(e) {
  e.preventDefault();
  var content = document.getElementsByClassName('col-md-4');
  var parent = content[0].parentNode;
  parent.appendChild(content[0]); 
}

/* Fonctionnalité 9 */
let logoElt = document.getElementsByClassName("navbar-brand")[0];
let bodyElt = document.body;

function changeSize(input){
  
  switch(input.key) {
  case 'a' :
    bodyElt.classList = "";
    bodyElt.classList.add("col-4");
    break;
  case 'y' :
    bodyElt.classList = "";
    bodyElt.classList.add("col-4");
    bodyElt.classList.add("offset-4");
    break;
  case 'p' :
    bodyElt.classList = "";
    bodyElt.classList.add("col-4");
    bodyElt.classList.add("offset-8");
    break;
  case 'b' :
    bodyElt.classList = "";
    break;
  }
}
logoElt.addEventListener('keypress', changeSize);