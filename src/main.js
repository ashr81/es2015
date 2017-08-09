"use strict"

function Prefixer(prefix){
  this.prefix = prefix
}

Prefixer.prototype.prefixArray05 = function (arr) {
  let that = this;
  return arr.map(function(x) {
    console.log(that.prefix + x);
  })
};

Prefixer.prototype.prefixArray06 = function(arr) {
  return arr.map((x) => {
    console.log(this.prefix + x)
  })
}

let pre = new Prefixer('Hello ');
pre.prefixArray05(['ashr', 'ashr81']);
pre.prefixArray06(['red', 'did'])
