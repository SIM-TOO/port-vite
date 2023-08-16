import { menu } from "./menu.js";
import { skill } from "./skill.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    skill();
});