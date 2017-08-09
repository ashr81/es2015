"use strict";

function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray05 = function (arr) {
  var that = this;
  return arr.map(function (x) {
    console.log(that.prefix + x);
  });
};

Prefixer.prototype.prefixArray06 = function (arr) {
  var _this = this;

  return arr.map(function (x) {
    console.log(_this.prefix + x);
  });
};

var pre = new Prefixer('Hello ');
pre.prefixArray05(['ashr', 'ashr81']);
pre.prefixArray06(['red', 'did']);