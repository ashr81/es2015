"use strict";

var name = "Ashrith";
function makeUpperCase(word) {
  return word.toUpperCase();
}
var templateLiteral = '<div>Hello ${name}</div>' + '<p>I am not text.</p>' + ("<div>How string literal is used?</div>\n<p>This is how it's used for new line and large html elements</p>\n<span>No need of any concatination.</span>\n<p> name is " + name + " in upcase " + makeUpperCase('Javascript') + "</p>");
document.getElementById('template').innerHTML = templateLiteral;