import{c as Pe,d as fe,h as he,k as Ae,l as De,m as Ie,o as Ne,q as ze,r as He,s as We}from"./chunk-H2BMEK2Q.js";import{Ab as c,Bb as qe,Ca as V,Cb as pe,Oa as J,Ob as Le,Sa as le,ca as K,da as Q,db as re,e as Se,ea as je,eb as b,fb as h,g as Oe,gb as j,hb as g,ib as y,jb as D,la as Me,ma as Te,mb as ce,ob as B,qb as R}from"./chunk-YMNKYP4W.js";var Fe=Se((exports,module)=>{"use strict";(function(r,e){typeof exports=="object"&&typeof module=="object"?module.exports=e():typeof define=="function"&&define.amd?define("kursor",[],e):typeof exports=="object"?exports.kursor=e():r.kursor=e()})(typeof self<"u"?self:exports,function(){return(function(i){var r={};function e(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return i[t].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=i,e.c=r,e.d=function(t,n,u){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:u})},e.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(n&1&&(t=e(t)),n&8||n&4&&typeof t=="object"&&t&&t.__esModule)return t;var u=Object.create(null);if(e.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),n&2&&typeof t!="string")for(var E in t)e.d(u,E,(function(s){return t[s]}).bind(null,E));return u},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s="./src/index.js")})({"./src/index.js":(function(module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./styles/index.styl */ "./src/styles/index.styl");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var key = 1;

var kursor =
/*#__PURE__*/
function () {
  function kursor() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, kursor);

    var _props = {
      type: 1,
      ...props
    };
    this.props = _props;
    this.key = key === 1 ? '' : key;
    key++;
    this.render();
    this.hovers();
    this.mousemove();
    this.down();
  }

  _createClass(kursor, [{
    key: "color",
    value: function color(colorx) {
      (0, _utils.setColor)('color', colorx, this.kursor);
      (0, _utils.setColor)('color', colorx, this.kursorChild);
    }
  }, {
    key: "hidden",
    value: function hidden() {
      var isHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (isHidden) {
        this.addClass('kursor--hidden');
        this.addClass('kursorChild--hidden', true);
      } else {
        this.removeClass('kursor--hidden');
        this.removeClass('kursorChild--hidden', true);
      }
    }
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      var wrapper = document.createElement('div');
      wrapper.setAttribute('id', 'kursorWrapper');
      document.querySelector(this.props.el).insertBefore(wrapper, document.querySelector(this.props.el).firstChild);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.mobileAndTabletcheck()) {
        return;
      }

      this.createCursor('kursorChild');
      this.createCursor('kursor');

      if (this.props.hasOwnProperty('removeDefaultCursor')) {
        if (this.props.removeDefaultCursor) {
          document.body.classList.add('notCursor');
        }
      }

      if (this.props.hasOwnProperty('type')) {
        this.addClass("kursor--".concat(this.props.type));
      }
    }
  }, {
    key: "down",
    value: function down() {
      var _this = this;

      document.addEventListener('mousedown', function (e) {
        _this.addClass('kursor--down');
      });
      document.addEventListener('mouseup', function (e) {
        _this.removeClass('kursor--down');
      });
    }
  }, {
    key: "mobileAndTabletcheck",
    value: function mobileAndTabletcheck() {
      var check = false;

      (function (a) {
        if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      return check;
    }
  }, {
    key: "mousemove",
    value: function mousemove() {
      var _this2 = this;

      var hasEl = this.props.hasOwnProperty('el');
      var el = window;

      if (hasEl) {
        el = document.querySelector(this.props.el);
      }

      el.addEventListener('mousemove', function (e) {
        var cursor = document.querySelector('.kursor' + _this2.key);
        var cursorChild = document.querySelector('.kursorChild' + _this2.key);

        if (hasEl) {
          var notEl = e.target !== document.querySelector(_this2.props.el);
          var parentEl = e.target.closest(_this2.props.el);

          if (notEl) {
            cursor = parentEl.querySelector('.kursor' + _this2.key);
            cursorChild = parentEl.querySelector('.kursorChild' + _this2.key);
          } else {
            cursor = e.target.querySelector('.kursor' + _this2.key);
            cursorChild = e.target.querySelector('.kursorChild' + _this2.key);
          }

          cursor.style.left = "".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, "px");
          cursor.style.top = "".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, "px");
          cursorChild.style.left = "".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, "px");
          cursorChild.style.top = "".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, "px");
        } else {
          cursor.style.left = "".concat(e.x, "px");
          cursor.style.top = "".concat(e.y, "px");
          cursorChild.style.left = "".concat(e.x, "px");
          cursorChild.style.top = "".concat(e.y, "px");
        }
      });
      var doc = document;

      if (hasEl) {
        doc = document.querySelector(this.props.el);
      }

      doc.addEventListener('mouseenter', function (e) {
        _this2.removeClass('kursor--hidden');

        _this2.removeClass('kursorChild--hidden', true);
      });
      doc.addEventListener('mouseleave', function (e) {
        _this2.addClass('kursor--hidden');

        _this2.addClass('kursorChild--hidden', true);
      });
    }
  }, {
    key: "hovers",
    value: function hovers() {
      var _this3 = this;

      var hovers = document.querySelectorAll('.k-hover' + this.key);
      console.log(hovers);
      hovers.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          _this3.addClass('--hover');
        });
        item.addEventListener('mouseleave', function () {
          _this3.removeClass('--hover');
        });
      });
    }
  }, {
    key: "createCursor",
    value: function createCursor(name) {
      this[name] = document.createElement('div');
      this[name].setAttribute('class', name);
      this[name].classList.add(name + this.key);
      this[name].setAttribute('style', '--k-color: 0,0,0');

      if (this.props.hasOwnProperty('el')) {
        this[name].classList.add("".concat(name, "--hidden"));
        this[name].classList.add('kursor--absolute');
        document.querySelector(this.props.el).insertBefore(this[name], document.querySelector(this.props.el).firstChild);
      } else {
        document.body.insertBefore(this[name], document.body.firstChild);
      }

      if (this.props.hasOwnProperty('color')) {
        (0, _utils.setColor)('color', this.props.color, this[name]);
      }
    }
  }, {
    key: "addClass",
    value: function addClass(classx) {
      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.add(classx);
    }
  }, {
    key: "removeClass",
    value: function removeClass(classx) {
      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.remove(classx);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return kursor;
}();

exports.default = kursor;
module.exports = exports["default"];

//# sourceURL=webpack://kursor/./src/index.js?`)}),"./src/styles/index.styl":(function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack://kursor/./src/styles/index.styl?`)}),"./src/utils/index.js":(function(module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setColor = void 0;

var setVar = function setVar(propertyName, value, el) {
  if (!el) {
    document.documentElement.style.setProperty("--k-".concat(propertyName), value);
  } else {
    el.style.setProperty("--k-".concat(propertyName), value);
  }
};

var setColor = function setColor(colorName, color, el) {
  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  var isRGB = /^(rgb|rgba)/.test(color);
  var isHEX = /^(#)/.test(color);
  var newColor;

  if (isRGB) {
    var arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = "".concat(arrayColor[0], ",").concat(arrayColor[1], ",").concat(arrayColor[2]);
    setVar(colorName, newColor, el);
  } else if (isHEX) {
    var rgb = hexToRgb(color);
    newColor = "".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b);
    setVar(colorName, newColor, el);
  }
};

exports.setColor = setColor;

//# sourceURL=webpack://kursor/./src/utils/index.js?`)})})})});var Ye=Se((ue,Ee)=>{"use strict";(function(i,r){typeof ue=="object"&&typeof Ee=="object"?Ee.exports=r():typeof define=="function"&&define.amd?define([],r):typeof ue=="object"?ue.AOS=r():i.AOS=r()})(ue,function(){return(function(i){function r(t){if(e[t])return e[t].exports;var n=e[t]={exports:{},id:t,loaded:!1};return i[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var e={};return r.m=i,r.c=e,r.p="dist/",r(0)})([function(i,r,e){"use strict";function t(d){return d&&d.__esModule?d:{default:d}}var n=Object.assign||function(d){for(var O=1;O<arguments.length;O++){var N=arguments[O];for(var $ in N)Object.prototype.hasOwnProperty.call(N,$)&&(d[$]=N[$])}return d},u=e(1),E=(t(u),e(6)),s=t(E),x=e(7),l=t(x),p=e(8),m=t(p),k=e(9),M=t(k),q=e(10),te=t(q),ie=e(11),ae=t(ie),se=e(14),ne=t(se),L=[],oe=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},I=function(){var d=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(d&&(oe=!0),oe)return L=(0,ae.default)(L,w),(0,te.default)(L,w.once),L},Y=function(){L=(0,ne.default)(),I()},a=function(){L.forEach(function(d,O){d.node.removeAttribute("data-aos"),d.node.removeAttribute("data-aos-easing"),d.node.removeAttribute("data-aos-duration"),d.node.removeAttribute("data-aos-delay")})},o=function(d){return d===!0||d==="mobile"&&M.default.mobile()||d==="phone"&&M.default.phone()||d==="tablet"&&M.default.tablet()||typeof d=="function"&&d()===!0},f=function(d){w=n(w,d),L=(0,ne.default)();var O=document.all&&!window.atob;return o(w.disable)||O?a():(w.disableMutationObserver||m.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?I(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){I(!0)}):document.addEventListener(w.startEvent,function(){I(!0)}),window.addEventListener("resize",(0,l.default)(I,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(I,w.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,te.default)(L,w.once)},w.throttleDelay)),w.disableMutationObserver||m.default.ready("[data-aos]",Y),L)};i.exports={init:f,refresh:I,refreshHard:Y}},function(i,r){},,,,,function(i,r){(function(e){"use strict";function t(o,f,d){function O(v){var T=A,X=H;return A=H=void 0,U=v,S=o.apply(X,T)}function N(v){return U=v,C=setTimeout(ee,f),G?O(v):S}function $(v){var T=v-P,X=v-U,Ce=f-T;return F?Y(Ce,W-X):Ce}function Z(v){var T=v-P,X=v-U;return P===void 0||T>=f||T<0||F&&X>=W}function ee(){var v=a();return Z(v)?me(v):void(C=setTimeout(ee,$(v)))}function me(v){return C=void 0,_&&A?O(v):(A=H=void 0,S)}function ke(){C!==void 0&&clearTimeout(C),U=0,A=P=H=C=void 0}function de(){return C===void 0?S:me(a())}function z(){var v=a(),T=Z(v);if(A=arguments,H=this,P=v,T){if(C===void 0)return N(P);if(F)return C=setTimeout(ee,f),O(P)}return C===void 0&&(C=setTimeout(ee,f)),S}var A,H,W,S,C,P,U=0,G=!1,F=!1,_=!0;if(typeof o!="function")throw new TypeError(p);return f=x(f)||0,u(d)&&(G=!!d.leading,F="maxWait"in d,W=F?I(x(d.maxWait)||0,f):W,_="trailing"in d?!!d.trailing:_),z.cancel=ke,z.flush=de,z}function n(o,f,d){var O=!0,N=!0;if(typeof o!="function")throw new TypeError(p);return u(d)&&(O="leading"in d?!!d.leading:O,N="trailing"in d?!!d.trailing:N),t(o,f,{leading:O,maxWait:f,trailing:N})}function u(o){var f=typeof o>"u"?"undefined":l(o);return!!o&&(f=="object"||f=="function")}function E(o){return!!o&&(typeof o>"u"?"undefined":l(o))=="object"}function s(o){return(typeof o>"u"?"undefined":l(o))=="symbol"||E(o)&&w.call(o)==k}function x(o){if(typeof o=="number")return o;if(s(o))return m;if(u(o)){var f=typeof o.valueOf=="function"?o.valueOf():o;o=u(f)?f+"":f}if(typeof o!="string")return o===0?o:+o;o=o.replace(M,"");var d=te.test(o);return d||ie.test(o)?ae(o.slice(2),d?2:8):q.test(o)?m:+o}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},p="Expected a function",m=NaN,k="[object Symbol]",M=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,ae=parseInt,se=(typeof e>"u"?"undefined":l(e))=="object"&&e&&e.Object===Object&&e,ne=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,L=se||ne||Function("return this")(),oe=Object.prototype,w=oe.toString,I=Math.max,Y=Math.min,a=function(){return L.Date.now()};i.exports=n}).call(r,(function(){return this})())},function(i,r){(function(e){"use strict";function t(a,o,f){function d(_){var v=z,T=A;return z=A=void 0,P=_,W=a.apply(T,v)}function O(_){return P=_,S=setTimeout(Z,o),U?d(_):W}function N(_){var v=_-C,T=_-P,X=o-v;return G?I(X,H-T):X}function $(_){var v=_-C,T=_-P;return C===void 0||v>=o||v<0||G&&T>=H}function Z(){var _=Y();return $(_)?ee(_):void(S=setTimeout(Z,N(_)))}function ee(_){return S=void 0,F&&z?d(_):(z=A=void 0,W)}function me(){S!==void 0&&clearTimeout(S),P=0,z=C=A=S=void 0}function ke(){return S===void 0?W:ee(Y())}function de(){var _=Y(),v=$(_);if(z=arguments,A=this,C=_,v){if(S===void 0)return O(C);if(G)return S=setTimeout(Z,o),d(C)}return S===void 0&&(S=setTimeout(Z,o)),W}var z,A,H,W,S,C,P=0,U=!1,G=!1,F=!0;if(typeof a!="function")throw new TypeError(l);return o=s(o)||0,n(f)&&(U=!!f.leading,G="maxWait"in f,H=G?w(s(f.maxWait)||0,o):H,F="trailing"in f?!!f.trailing:F),de.cancel=me,de.flush=ke,de}function n(a){var o=typeof a>"u"?"undefined":x(a);return!!a&&(o=="object"||o=="function")}function u(a){return!!a&&(typeof a>"u"?"undefined":x(a))=="object"}function E(a){return(typeof a>"u"?"undefined":x(a))=="symbol"||u(a)&&oe.call(a)==m}function s(a){if(typeof a=="number")return a;if(E(a))return p;if(n(a)){var o=typeof a.valueOf=="function"?a.valueOf():a;a=n(o)?o+"":o}if(typeof a!="string")return a===0?a:+a;a=a.replace(k,"");var f=q.test(a);return f||te.test(a)?ie(a.slice(2),f?2:8):M.test(a)?p:+a}var x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l="Expected a function",p=NaN,m="[object Symbol]",k=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,te=/^0o[0-7]+$/i,ie=parseInt,ae=(typeof e>"u"?"undefined":x(e))=="object"&&e&&e.Object===Object&&e,se=(typeof self>"u"?"undefined":x(self))=="object"&&self&&self.Object===Object&&self,ne=ae||se||Function("return this")(),L=Object.prototype,oe=L.toString,w=Math.max,I=Math.min,Y=function(){return ne.Date.now()};i.exports=t}).call(r,(function(){return this})())},function(i,r){"use strict";function e(x){var l=void 0,p=void 0,m=void 0;for(l=0;l<x.length;l+=1)if(p=x[l],p.dataset&&p.dataset.aos||(m=p.children&&e(p.children)))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!t()}function u(x,l){var p=window.document,m=t(),k=new m(E);s=l,k.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function E(x){x&&x.forEach(function(l){var p=Array.prototype.slice.call(l.addedNodes),m=Array.prototype.slice.call(l.removedNodes),k=p.concat(m);if(e(k))return s()})}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){};r.default={isSupported:n,ready:u}},function(i,r){"use strict";function e(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var n=(function(){function p(m,k){for(var M=0;M<k.length;M++){var q=k[M];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(m,q.key,q)}}return function(m,k,M){return k&&p(m.prototype,k),M&&p(m,M),m}})(),u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,E=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,x=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=(function(){function p(){e(this,p)}return n(p,[{key:"phone",value:function(){var m=t();return!(!u.test(m)&&!E.test(m.substr(0,4)))}},{key:"mobile",value:function(){var m=t();return!(!s.test(m)&&!x.test(m.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p})();r.default=new l},function(i,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(n,u,E){var s=n.node.getAttribute("data-aos-once");u>n.position?n.node.classList.add("aos-animate"):typeof s<"u"&&(s==="false"||!E&&s!=="true")&&n.node.classList.remove("aos-animate")},t=function(n,u){var E=window.pageYOffset,s=window.innerHeight;n.forEach(function(x,l){e(x,s+E,u)})};r.default=t},function(i,r,e){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(r,"__esModule",{value:!0});var n=e(12),u=t(n),E=function(s,x){return s.forEach(function(l,p){l.node.classList.add("aos-init"),l.position=(0,u.default)(l.node,x.offset)}),s};r.default=E},function(i,r,e){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(r,"__esModule",{value:!0});var n=e(13),u=t(n),E=function(s,x){var l=0,p=0,m=window.innerHeight,k={offset:s.getAttribute("data-aos-offset"),anchor:s.getAttribute("data-aos-anchor"),anchorPlacement:s.getAttribute("data-aos-anchor-placement")};switch(k.offset&&!isNaN(k.offset)&&(p=parseInt(k.offset)),k.anchor&&document.querySelectorAll(k.anchor)&&(s=document.querySelectorAll(k.anchor)[0]),l=(0,u.default)(s).top,k.anchorPlacement){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=m/2;break;case"bottom-center":l+=m/2+s.offsetHeight;break;case"center-center":l+=m/2+s.offsetHeight/2;break;case"top-top":l+=m;break;case"bottom-top":l+=s.offsetHeight+m;break;case"center-top":l+=s.offsetHeight/2+m}return k.anchorPlacement||k.offset||isNaN(x)||(p=x),l+p};r.default=E},function(i,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(t){for(var n=0,u=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),u+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:u,left:n}};r.default=e},function(i,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(n){return{node:n}})};r.default=e}])})});var Ve=[{path:"",loadComponent:()=>import("./chunk-UMAGWZZC.js").then(i=>i.Home),title:"Home"},{path:"inbound",loadComponent:()=>import("./chunk-IARLX3Z7.js").then(i=>i.Inbound),title:"Inbound Tours"},{path:"inbound/:state",loadComponent:()=>import("./chunk-5P3QXWHF.js").then(i=>i.InboundPackage),title:"Inbound Package"},{path:"outbound",loadComponent:()=>import("./chunk-3XOK3ZKH.js").then(i=>i.Outbound),title:"Outbound Tours"},{path:"contact",loadComponent:()=>import("./chunk-N6RJCP7L.js").then(i=>i.Contact),title:"Contact Us"},{path:"**",redirectTo:"",pathMatch:"full"}];var Be={providers:[Me(),Le(),He(Ve),Ie(De())]};function Ge(i,r){if(i&1){let e=ce();b(0,"nav",25)(1,"a",26),B("click",function(){K(e);let n=R();return Q(n.isMenuOpen=!1)}),c(2,"Home"),h(),b(3,"a",27),B("click",function(){K(e);let n=R();return Q(n.isMenuOpen=!1)}),c(4,"Inbound"),h(),b(5,"a",28),B("click",function(){K(e);let n=R();return Q(n.isMenuOpen=!1)}),c(6,"Outbound"),h(),b(7,"a",29),B("click",function(){K(e);let n=R();return Q(n.isMenuOpen=!1)}),c(8,"Contact"),h(),b(9,"div",30)(10,"a",31),j(11,"i",32),h(),b(12,"a",33),j(13,"i",34),h(),b(14,"a",35),j(15,"i",36),h()()()}}var be=class i{isMenuOpen=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=J({type:i,selectors:[["app-header"]],decls:31,vars:1,consts:[[1,"sticky","top-0","z-50","bg-white/80","backdrop-blur-md","border-b","border-gray-200","shadow-sm"],[1,"max-w-7xl","mx-auto","px-5","py-3","flex","items-center","justify-between"],["routerLink","/",1,"flex","items-center","gap-3","group"],[1,"relative"],["src","assets/images/logo.png","alt","IDT Logo",1,"w-10","h-10","object-contain","transition-transform","duration-300","group-hover:scale-110"],[1,"flex","flex-col","leading-tight"],[1,"text-2xl","md:text-3xl","font-bold","bg-gradient-to-r","from-red-600","to-red-500","bg-clip-text","text-transparent","tracking-wide"],[1,"text-xs","md:text-sm","text-gray-700","italic"],[1,"hidden","md:flex","items-center","gap-8"],[1,"flex","items-center","gap-8","text-[15px]","font-medium"],["routerLink","/",1,"hover:text-red-600","transition-colors"],["routerLink","/inbound",1,"hover:text-red-600","transition-colors"],["routerLink","/outbound",1,"hover:text-red-600","transition-colors"],["routerLink","/contact",1,"hover:text-red-600","transition-colors"],[1,"flex","items-center","gap-3","pl-5","border-l","border-gray-200"],["href","https://facebook.com","target","_blank",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","text-white","bg-red-500","hover:bg-red-100","hover:text-gray-600","transition"],[1,"pi","pi-facebook","text-sm"],["href","https://instagram.com","target","_blank",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","text-white","bg-red-500","hover:bg-red-100","hover:text-gray-600","transition"],[1,"pi","pi-instagram","text-sm"],["href","https://linkedin.com","target","_blank",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","text-white","bg-red-500","hover:bg-red-100","hover:text-gray-600","transition"],[1,"pi","pi-linkedin","text-sm"],[1,"md:hidden","p-2","rounded-lg","border","border-gray-300","hover:bg-gray-100","transition",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16M4 18h16"],["class","md:hidden bg-white border-t border-gray-200 px-5 py-3 space-y-2 text-sm shadow-inner",4,"ngIf"],[1,"md:hidden","bg-white","border-t","border-gray-200","px-5","py-3","space-y-2","text-sm","shadow-inner"],["routerLink","/",1,"block","py-2","hover:text-red-600","transition",3,"click"],["routerLink","/inbound",1,"block","py-2","hover:text-red-600","transition",3,"click"],["routerLink","/outbound",1,"block","py-2","hover:text-red-600","transition",3,"click"],["routerLink","/contact",1,"block","py-2","hover:text-red-600","transition",3,"click"],[1,"flex","justify-center","gap-4","mt-3","pt-3","border-t","border-gray-100"],["href","https://facebook.com","target","_blank",1,"text-gray-600","hover:text-red-600","transition"],[1,"pi","pi-facebook"],["href","https://instagram.com","target","_blank",1,"text-gray-600","hover:text-red-600","transition"],[1,"pi","pi-instagram"],["href","https://linkedin.com","target","_blank",1,"text-gray-600","hover:text-red-600","transition"],[1,"pi","pi-linkedin"]],template:function(e,t){e&1&&(b(0,"header",0)(1,"div",1)(2,"a",2)(3,"div",3),j(4,"img",4),h(),b(5,"div",5)(6,"span",6),c(7," IDT WORLD "),h(),b(8,"span",7),c(9," From the House of India Destination Tours "),h()()(),b(10,"div",8)(11,"nav",9)(12,"a",10),c(13,"Home"),h(),b(14,"a",11),c(15,"Inbound"),h(),b(16,"a",12),c(17,"Outbound"),h(),b(18,"a",13),c(19,"Contact"),h()(),b(20,"div",14)(21,"a",15),j(22,"i",16),h(),b(23,"a",17),j(24,"i",18),h(),b(25,"a",19),j(26,"i",20),h()()(),b(27,"button",21),B("click",function(){return t.isMenuOpen=!t.isMenuOpen}),je(),b(28,"svg",22),j(29,"path",23),h()()(),le(30,Ge,16,0,"nav",24),h()),e&2&&(V(30),re("ngIf",t.isMenuOpen))},dependencies:[We,ze,he,fe],encapsulation:2})};var ve=class i{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=J({type:i,selectors:[["app-footer"]],decls:80,vars:1,consts:[[1,"bg-gray-50","border-t","border-gray-200"],[1,"max-w-7xl","mx-auto","px-4","py-10","grid","md:grid-cols-3","gap-8","text-sm"],[1,"flex","items-center","gap-2","mb-3"],["src","assets/images/logo.png","alt","IDT Logo",1,"w-10","h-10","object-contain","transition-transform","duration-300","group-hover:scale-110"],[1,"text-2xl","md:text-3xl","font-bold","bg-gradient-to-r","from-red-600","to-red-500","bg-clip-text","text-transparent","tracking-wide"],[1,"text-gray-600"],[1,"flex","gap-3","mt-4"],["href","#",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","bg-red-500","hover:bg-[color:var(--brand)]","text-white","transition"],[1,"pi","pi-facebook"],[1,"pi","pi-instagram"],[1,"pi","pi-linkedin"],[1,"pi","pi-youtube"],[1,"hidden","md:block"],[1,"font-semibold","mb-2"],[1,"space-y-1"],["routerLink","/inbound",1,"hover:text-[color:var(--brand)]"],["routerLink","/outbound",1,"hover:text-[color:var(--brand)]"],["routerLink","/services",1,"hover:text-[color:var(--brand)]"],["routerLink","/contact",1,"hover:text-[color:var(--brand)]"],[1,"pi","pi-envelope","mr-2"],[1,"pi","pi-phone","mr-2"],[1,"flex","gap-3","mt-3","text-gray-500"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-x-twitter"],[1,"flex","md:flex-col","flex-row","md:flex-col","justify-between","gap-8","md:hidden"],[1,"text-center","text-xs","text-gray-500","py-4","border-t"],["href","www.bytrixhub.com"]],template:function(e,t){e&1&&(g(0,"footer",0)(1,"div",1)(2,"div")(3,"div",2),D(4,"img",3),g(5,"span",4),c(6," IDT WORLD "),y()(),g(7,"p",5),c(8,"Explore India and beyond with curated packages and seamless experiences From the House of India Destination Tours."),y(),g(9,"div",6)(10,"a",7),D(11,"i",8),y(),g(12,"a",7),D(13,"i",9),y(),g(14,"a",7),D(15,"i",10),y(),g(16,"a",7),D(17,"i",11),y()()(),g(18,"div",12)(19,"h4",13),c(20,"Quick Links"),y(),g(21,"ul",14)(22,"li")(23,"a",15),c(24,"Inbound"),y()(),g(25,"li")(26,"a",16),c(27,"Outbound"),y()(),g(28,"li")(29,"a",17),c(30,"Services"),y()(),g(31,"li")(32,"a",18),c(33,"Contact"),y()()()(),g(34,"div",12)(35,"h4",13),c(36,"Contact"),y(),g(37,"p",5),D(38,"i",19),c(39," hello@idt.example"),y(),g(40,"p",5),D(41,"i",20),c(42," +91 98472 40456"),y(),g(43,"div",21),D(44,"i",22)(45,"i",23)(46,"i",24),y()(),g(47,"div",25)(48,"div")(49,"h4",13),c(50,"Quick Links"),y(),g(51,"ul",14)(52,"li")(53,"a",15),c(54,"Inbound"),y()(),g(55,"li")(56,"a",16),c(57,"Outbound"),y()(),g(58,"li")(59,"a",17),c(60,"Services"),y()(),g(61,"li")(62,"a",18),c(63,"Contact"),y()()()(),g(64,"div")(65,"h4",13),c(66,"Contact"),y(),g(67,"p",5),D(68,"i",19),c(69," hello@idt.example"),y(),g(70,"p",5),D(71,"i",20),c(72," +91 98472 404560"),y(),g(73,"div",21),D(74,"i",22)(75,"i",23)(76,"i",24),y()()()(),g(77,"div",26)(78,"a",27),c(79),y()()()),e&2&&(V(79),pe(" \xA9 ",t.currentYear," Bytrix Hub. All rights reserved. "))},encapsulation:2})};var ge=[{id:"welcome",question:"\u{1F44B} Hi there!  What would you like help with today?",options:[{text:"\u{1F3DE}\uFE0F Inbound Packages",next:"inbound"},{text:"\u2708\uFE0F Outbound Packages",next:"outbound"},{text:"\u{1F4BC} Our Services",next:"services"},{text:"\u{1F4DE} Contact Support",next:"contact"}]},{id:"inbound",question:"\u{1F1EE}\u{1F1F3} Wonderful! Which region in India interests you the most?",options:[{text:"\u{1F334} South India",next:"inbound_south"},{text:"\u{1F3D4}\uFE0F North India",next:"inbound_north"},{text:"\u{1F3DC}\uFE0F West India",next:"inbound_west"},{text:"\u2B05\uFE0F Back",next:"welcome"}]},{id:"inbound_south",question:"\u{1F305} Great choice! Kerala, Tamil Nadu, and Karnataka are top favourites. Would you like us to share sample itineraries?",options:[{text:"Yes, show me Kerala tours",next:"end"},{text:"Show all South India tours",next:"end"},{text:"Back",next:"inbound"}]},{id:"inbound_north",question:"\u{1F3D4}\uFE0F North India is full of heritage and adventure! Which interests you more?",options:[{text:"Golden Triangle (Delhi-Agra-Jaipur)",next:"end"},{text:"Himalayan Tours",next:"end"},{text:"Back",next:"inbound"}]},{id:"inbound_west",question:"\u{1F305} Rajasthan and Gujarat offer vibrant culture and royal stays. Want us to share the best deals?",options:[{text:"Yes, please!",next:"end"},{text:"Back",next:"inbound"}]},{id:"outbound",question:"\u{1F30D} Amazing! Where would you like to explore?",options:[{text:"\u{1F54C} Asia (Singapore, Dubai, Thailand...)",next:"outbound_asia"},{text:"\u{1F3F0} Europe (Switzerland, Italy, France...)",next:"outbound_europe"},{text:"\u{1F5FD} Americas",next:"outbound_america"},{text:"\u2B05\uFE0F Back",next:"welcome"}]},{id:"outbound_asia",question:"\u{1F30F} Asia is full of wonder! Do you have a specific destination in mind?",options:[{text:"Dubai / UAE",next:"end"},{text:"Singapore",next:"end"},{text:"Thailand",next:"end"},{text:"Back",next:"outbound"}]},{id:"outbound_europe",question:"\u{1F1EA}\u{1F1FA} Europe awaits! Which type of tour are you interested in?",options:[{text:"Honeymoon Packages",next:"end"},{text:"Group / Family Trips",next:"end"},{text:"Luxury Vacations",next:"end"},{text:"Back",next:"outbound"}]},{id:"outbound_america",question:"\u{1F1FA}\u{1F1F8} Dreaming of the Americas? We offer curated tours to the US, Canada & South America.",options:[{text:"Show me options",next:"end"},{text:"Back",next:"outbound"}]},{id:"services",question:"\u{1F4BC} We offer a range of travel services. What would you like to know about?",options:[{text:"\u{1F3E8} Hotel & Resort Booking",next:"end"},{text:"\u{1F697} Transport & Chauffeur Service",next:"end"},{text:"\u{1F9ED} Custom Tour Planning",next:"end"},{text:"\u{1F6EB} Visa & Flight Assistance",next:"end"},{text:"Back",next:"welcome"}]},{id:"contact",question:"\u{1F4DE} Sure! How would you prefer to reach us?",options:[{text:"\u{1F4E7} Email: hello@idt.example",next:"end"},{text:"\u{1F4F1} Call: +91 98472 40456",next:"end"},{text:"\u{1F4AC} WhatsApp Chat",next:"end"},{text:"\u2B05\uFE0F Back",next:"welcome"}]},{id:"end",question:"\u{1F389} Thank you! Our travel expert will reach out soon with personalized details. \u2728",options:[{text:"\u{1F501} Start Over",next:"welcome"}]}];function Xe(i,r){if(i&1){let e=ce();b(0,"div")(1,"button",11),B("click",function(){let n=K(e).$implicit,u=R(2);return Q(u.selectOption(n.next))}),c(2),h()()}if(i&2){let e=r.$implicit;V(2),pe(" ",e.text," ")}}function Ke(i,r){i&1&&(b(0,"div",12),c(1," Thank you for chatting with us! \u{1F44B} "),h())}function Qe(i,r){if(i&1){let e=ce();b(0,"div",3)(1,"div",4)(2,"span"),c(3,"IDT Virtual Assistant"),h(),b(4,"button",5),B("click",function(){K(e);let n=R();return Q(n.openChat())}),j(5,"i",6),h()(),b(6,"div",7)(7,"p",8),c(8),h(),le(9,Xe,3,1,"div",9)(10,Ke,2,0,"div",10),h()()}if(i&2){let e=R();V(8),qe(e.currentStep.question),V(),re("ngForOf",e.currentStep.options),V(),re("ngIf",e.currentStep.options.length===0)}}var xe=class i{isOpen=!1;currentStep=ge[0];openChat(){this.isOpen=!this.isOpen,this.currentStep=ge[0]}selectOption(r){let e=ge.find(t=>t.id===r);e&&(this.currentStep=e)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=J({type:i,selectors:[["app-chatbot"]],decls:3,vars:1,consts:[[1,"fixed","bottom-6","right-6","bg-red-600","text-white","rounded-full","p-4","shadow-xl","hover:bg-red-700",3,"click"],[1,"pi","pi-comments","text-2xl"],["class","fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate__animated animate__fadeInUp",4,"ngIf"],[1,"fixed","bottom-20","right-6","w-80","bg-white","rounded-2xl","shadow-2xl","border","border-gray-200","overflow-hidden","animate__animated","animate__fadeInUp"],[1,"bg-red-600","text-white","p-4","font-semibold","flex","justify-between","items-center"],[1,"text-white","hover:text-gray-200","transition",3,"click"],[1,"pi","pi-times","text-xl"],[1,"p-4","space-y-4","max-h-80","overflow-y-auto"],[1,"text-gray-800","font-medium"],[4,"ngFor","ngForOf"],["class","text-sm text-gray-500",4,"ngIf"],[1,"w-full","text-left","px-4","py-2","my-1","bg-gray-100","rounded-lg","hover:bg-red-50","hover:text-red-600","transition",3,"click"],[1,"text-sm","text-gray-500"]],template:function(e,t){e&1&&(b(0,"button",0),B("click",function(){return t.openChat()}),j(1,"i",1),h(),le(2,Qe,11,3,"div",2)),e&2&&(V(2),re("ngIf",t.isOpen))},dependencies:[he,Pe,fe],styles:[".fixed[_ngcontent-%COMP%]{z-index:1000}button[_ngcontent-%COMP%]{outline:none}"]})};var Re=Oe(Fe());var ye=class i{title=Te("idt-world");ngOnInit(){new Re.default({type:1,removeDefaultCursor:!0,color:"#000"})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=J({type:i,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"min-h-[70vh]"]],template:function(e,t){e&1&&(j(0,"app-header"),b(1,"main",0),j(2,"router-outlet"),h(),j(3,"app-footer")(4,"app-chatbot"))},dependencies:[Ne,be,ve,xe],styles:[".kursor[_ngcontent-%COMP%]{background-color:#f05!important;border:2px solid #fff!important}.kursor--active[_ngcontent-%COMP%]{transform:scale(1.5);background-color:#fff!important}"]})};var $e=Oe(Ye());Ae(ye,Be).catch(i=>console.error(i));$e.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1});
