import { x as myx, y, default as mysum } from "./a.js";

import * as myA from "./a.js";

console.log(myA);

const x = "abc"; // already have x

const el = document.createElement("h2");

el.innerHTML = "I am x,y: " + x + "," + y;

document.body.append(el);
console.log(myx);
