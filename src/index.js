import { select } from "d3-selection";

const svg = select("#mon-svg");
const cercle = svg.select("circle");
cercle.attr("fill", "#ffffff");
