"use strict"


let name = "Ashrith";
function makeUpperCase(word){
  return word.toUpperCase();
}
let templateLiteral =
'<div>Hello ${name}</div>'+
'<p>I am not text.</p>'+
`<div>How string literal is used?</div>
<p>This is how it's used for new line and large html elements</p>
<span>No need of any concatination.</span>
<p> name is ${name} in upcase ${makeUpperCase('Javascript')}</p>`
document.getElementById('template').innerHTML = templateLiteral;
