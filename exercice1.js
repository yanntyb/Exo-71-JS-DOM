let monDiv = document.createElement('div');

monDiv.innerHTML = "div ajouté en js";

let monDiv2 = document.createElement("div");
monDiv2.style.backgroundColor = "red";
monDiv2.style.width = "100px";
monDiv2.style.height = "100px";


document.getElementById('viewport').appendChild(monDiv);
document.getElementById("viewport").appendChild(monDiv2);


document.getElementById("aSupprimer").remove()




