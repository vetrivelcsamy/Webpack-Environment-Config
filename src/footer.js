 import css from './main.css';
 import { red, blue } from "./button-style";

 const top = document.createElement("div");
 top.innerText = "top of text top";
 top.style = red;
 const bottom = document.createElement("div");
 bottom.innerText = "top of text bottom";
 bottom.style = blue;

 const footer = document.createElement("footer");
 footer.appendChild(top);
 footer.appendChild(bottom);

 export { top, bottom, footer };
 