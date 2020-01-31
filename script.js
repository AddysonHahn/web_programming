var name = prompt("What is your name?");
function function1(word){
  return word.charAt(0).toLowerCase();
}
function IndexFinder(letter) {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
   
  
  for(var i=0; i<alphabet.length; i++) {
    if (letter==alphabet[i]){
      document.querySelector(".index").innerHTML=i;
    }
  }
}

IndexFinder(function1(name));