let heading = "Cities";
let header = document.getElementById("header");
header.innerText = heading;



let menuitems = ["London", "Paris", "Tokyo"];
let txt = "<ul>";
let navbar = document.getElementById("navbar");
for (let i = 0; i < menuitems.length; i++) {
  txt += "<li>" + menuitems[i] + "</li>";
}
txt += "</ul>";
navbar.innerHTML = txt;


let london="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptate optio possimus corporis vitae sunt quaerat quod quis, totam sint aspernatur modi iure perferendis officiis eligendi nisi dolorum suscipit atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptate optio possimus corporis vitae sunt quaerat quod quis, totam sint aspernatur modi iure perferendis officiis eligendi nisi dolorum suscipit atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptate optio possimus corporis vitae sunt quaerat quod quis, totam sint aspernatur modi iure perferendis officiis eligendi nisi dolorum suscipit atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptate optio possimus corporis vitae sunt quaerat quod quis, totam sint aspernatur modi iure perferendis officiis eligendi nisi dolorum suscipit atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptate optio possimus corporis vitae sunt quaerat quod quis, totam sint aspernatur modi iure perferendis officiis eligendi nisi dolorum suscipit atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptate optio possimus corporis vitae sunt quaerat quod quis, totam sint aspernatur modi iure perferendis officiis eligendi nisi dolorum suscipit atque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptate optio possimus corporis vitae sunt quaerat quod quis, totam sint aspernatur modi iure perferendis officiis eligendi nisi dolorum suscipit atque!";
let cityl=document.getElementById("london");
cityl.innerText=london;






let copyright="Made By Amirali Astaraki";
let footer=document.getElementById("footer");
footer.innerText=copyright;

