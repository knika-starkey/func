// let rex = "Rex";
// let max = "Max";
// let colen = "Colen";

// function voice(dog, bark = "aw") {
//   let age = 2;
//   alert(dog + " : " + bark + " age : " + age);
// }
// voice(rex);
// voice(max, "woof");
// voice(colen);

function printAnimals(animal, n) {
  //alert('<img src="images/' + animal + ".jpg'>");
  document.write("<table>");
  for (let i = 0; i < n; i++) {
    if (i % 10 == 0) document.write("</br>");
    document.write("<img src='images/" + animal + ".jpg' height='100'>");
  }
}
document.write("</table>");
printAnimals(prompt("cat or dog?"), prompt("Сколько картинок?"));
