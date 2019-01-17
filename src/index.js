import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-style";

const button = makeButton("yeh button");
button.style = makeColorStyle("green")
document.body.appendChild(button);
document.body.appendChild(footer);
