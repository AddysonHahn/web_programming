var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var i;
for (var i = 0; i < animals.length; i++) {
  if (animals[i] == "dog") {
    document.querySelector(".loopline" + i).innerHTML = "borf borf";
  } else if (animals[i] == "cat") {
    document.querySelector(".loopline" + i).innerHTML = "I am a cat.";
  } else {
    document.querySelector(".loopline" + i).innerHTML = "I am an animal.";
  }
}