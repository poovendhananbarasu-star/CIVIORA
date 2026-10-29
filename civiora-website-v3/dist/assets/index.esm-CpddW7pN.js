import{f as be,g as Xo,c as Yo,h as Jo,F as Zo,j as ta,L as ea,k as bt,S as na,d as ra,C as ia,r as Fi,l as sa,m as oa}from"./index.esm2017-iKAvjoqE.js";var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(g,y,T){for(var p=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)p[wt-2]=arguments[wt];return d.prototype[y].apply(g,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,m){m||(m=0);var g=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)g[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)g[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],y=E.g[2];var T=E.g[3],p=d+(T^m&(y^T))+g[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+g[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+g[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+g[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+g[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+g[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+g[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+g[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+g[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+g[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+g[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+g[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+g[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+g[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+g[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+g[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(m^y))+g[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+g[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+g[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+g[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+g[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+g[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+g[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+g[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+g[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+g[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+g[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+g[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+g[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+g[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+g[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+g[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^T)+g[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+g[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+g[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+g[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+g[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+g[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+g[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+g[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+g[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+g[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+g[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+g[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+g[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+g[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+g[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+g[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~T))+g[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+g[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+g[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+g[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+g[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+g[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+g[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+g[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+g[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+g[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+g[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+g[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+g[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+g[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+g[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+g[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,g=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=m;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(g[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,g),y=0;break}}else for(;T<d;)if(g[y++]=E[T++],y==this.blockSize){s(this,g),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var g=0;32>g;g+=8)E[m++]=this.g[d]>>>g&255;return E};function a(E,d){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function u(E,d){this.h=d;for(var m=[],g=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;g&&T==d||(m[y]=T,g=!1)}this.g=m}var c={};function f(E){return-128<=E&&128>E?a(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function _(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(_(-E));for(var d=[],m=1,g=0;E>=m;g++)d[g]=E/m|0,m*=4294967296;return new u(d,0)}function A(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(A(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=_(Math.pow(d,8)),g=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),d);8>T?(T=_(Math.pow(d,T)),g=g.j(T).add(_(p))):(g=g.j(m),g=g.add(_(p)))}return g}var w=f(0),S=f(1),C=f(16777216);r=u.prototype,r.m=function(){if(x(this))return-N(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var g=this.i(m);E+=(0<=g?g:4294967296+g)*d,d*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+N(this).toString(E);for(var d=_(Math.pow(E,6)),m=this,g="";;){var y=it(m,d).g;m=G(m,y.j(d));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,k(m))return T+g;for(;6>T.length;)T="0"+T;g=T+g}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=G(this,E),x(E)?-1:k(E)?0:1};function N(E){for(var d=E.g.length,m=[],g=0;g<d;g++)m[g]=~E.g[g];return new u(m,~E.h).add(S)}r.abs=function(){return x(this)?N(this):this},r.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0,y=0;y<=d;y++){var T=g+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);g=p>>>16,T&=65535,p&=65535,m[y]=p<<16|T}return new u(m,m[m.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(N(d))}r.j=function(E){if(k(this)||k(E))return w;if(x(this))return x(E)?N(this).j(N(E)):N(N(this).j(E));if(x(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return _(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],g=0;g<2*d;g++)m[g]=0;for(g=0;g<this.g.length;g++)for(var y=0;y<E.g.length;y++){var T=this.i(g)>>>16,p=this.i(g)&65535,wt=E.i(y)>>>16,ue=E.i(y)&65535;m[2*g+2*y]+=p*ue,$(m,2*g+2*y),m[2*g+2*y+1]+=T*ue,$(m,2*g+2*y+1),m[2*g+2*y+1]+=p*wt,$(m,2*g+2*y+1),m[2*g+2*y+2]+=T*wt,$(m,2*g+2*y+2)}for(g=0;g<d;g++)m[g]=m[2*g+1]<<16|m[2*g];for(g=d;g<2*d;g++)m[g]=0;return new u(m,0)};function $(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function H(E,d){this.g=E,this.h=d}function it(E,d){if(k(d))throw Error("division by zero");if(k(E))return new H(w,w);if(x(E))return d=it(N(E),d),new H(N(d.g),N(d.h));if(x(d))return d=it(E,N(d)),new H(N(d.g),d.h);if(30<E.g.length){if(x(E)||x(d))throw Error("slowDivide_ only works with positive integers.");for(var m=S,g=d;0>=g.l(E);)m=Ft(m),g=Ft(g);var y=mt(m,1),T=mt(g,1);for(g=mt(g,2),m=mt(m,2);!k(g);){var p=T.add(g);0>=p.l(E)&&(y=y.add(m),T=p),g=mt(g,1),m=mt(m,1)}return d=G(E,y.j(d)),new H(y,d)}for(y=w;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),g=Math.ceil(Math.log(m)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),T=_(m),p=T.j(d);x(p)||0<p.l(E);)m-=g,T=_(m),p=T.j(d);k(T)&&(T=S),y=y.add(T),E=G(E,p)}return new H(y,E)}r.A=function(E){return it(this,E).h},r.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0;g<d;g++)m[g]=this.i(g)&E.i(g);return new u(m,this.h&E.h)},r.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0;g<d;g++)m[g]=this.i(g)|E.i(g);return new u(m,this.h|E.h)},r.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0;g<d;g++)m[g]=this.i(g)^E.i(g);return new u(m,this.h^E.h)};function Ft(E){for(var d=E.g.length+1,m=[],g=0;g<d;g++)m[g]=E.i(g)<<1|E.i(g-1)>>>31;return new u(m,E.h)}function mt(E,d){var m=d>>5;d%=32;for(var g=E.g.length-m,y=[],T=0;T<g;T++)y[T]=0<d?E.i(T+m)>>>d|E.i(T+m+1)<<32-d:E.i(T+m);return new u(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=A,ds=u}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});var cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,Se,ms,gn,cr,gs,_s,ys;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,l){return n==Array.prototype||n==Object.prototype||(n[o]=l.value),n};function e(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof cn=="object"&&cn];for(var o=0;o<n.length;++o){var l=n[o];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(n,o){if(o)t:{var l=i;n=n.split(".");for(var h=0;h<n.length-1;h++){var v=n[h];if(!(v in l))break t;l=l[v]}n=n[n.length-1],h=l[n],o=o(h),o!=h&&o!=null&&t(l,n,{configurable:!0,writable:!0,value:o})}}function a(n,o){n instanceof String&&(n+="");var l=0,h=!1,v={next:function(){if(!h&&l<n.length){var I=l++;return{value:o(I,n[I]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(n){return n||function(){return a(this,function(o,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function _(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function A(n,o,l){return n.call.apply(n.bind,arguments)}function w(n,o,l){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),n.apply(o,v)}}return function(){return n.apply(o,arguments)}}function S(n,o,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:w,S.apply(null,arguments)}function C(n,o){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function k(n,o){function l(){}l.prototype=o.prototype,n.aa=o.prototype,n.prototype=new l,n.prototype.constructor=n,n.Qb=function(h,v,I){for(var V=Array(arguments.length-2),U=2;U<arguments.length;U++)V[U-2]=arguments[U];return o.prototype[v].apply(h,V)}}function x(n){const o=n.length;if(0<o){const l=Array(o);for(let h=0;h<o;h++)l[h]=n[h];return l}return[]}function N(n,o){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=n.length||0,I=h.length||0;n.length=v+I;for(let V=0;V<I;V++)n[v+V]=h[V]}else n.push(h)}}class G{constructor(o,l){this.i=o,this.j=l,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function $(n){return/^[\s\xa0]*$/.test(n)}function H(){var n=c.navigator;return n&&(n=n.userAgent)?n:""}function it(n){return it[" "](n),n}it[" "]=function(){};var Ft=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function mt(n,o,l){for(const h in n)o.call(l,n[h],h,n)}function E(n,o){for(const l in n)o.call(void 0,n[l],l,n)}function d(n){const o={};for(const l in n)o[l]=n[l];return o}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(n,o){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)n[l]=h[l];for(let I=0;I<m.length;I++)l=m[I],Object.prototype.hasOwnProperty.call(h,l)&&(n[l]=h[l])}}function y(n){var o=1;n=n.split(":");const l=[];for(;0<o&&n.length;)l.push(n.shift()),o--;return n.length&&l.push(n.join(":")),l}function T(n){c.setTimeout(()=>{throw n},0)}function p(){var n=Fn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class wt{constructor(){this.h=this.g=null}add(o,l){const h=ue.get();h.set(o,l),this.h?this.h.next=h:this.g=h,this.h=h}}var ue=new G(()=>new mo,n=>n.reset());class mo{constructor(){this.next=this.g=this.h=null}set(o,l){this.h=o,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ce=!1,Fn=new wt,Fr=()=>{const n=c.Promise.resolve(void 0);he=()=>{n.then(go)}};var go=()=>{for(var n;n=p();){try{n.h.call(n.g)}catch(l){T(l)}var o=ue;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}ce=!1};function Ct(){this.s=this.s,this.C=this.C}Ct.prototype.s=!1,Ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var _o=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const l=()=>{};c.addEventListener("test",l,o),c.removeEventListener("test",l,o)}catch{}return n}();function fe(n,o){if(st.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var l=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(Ft){t:{try{it(o.nodeName);var v=!0;break t}catch{}v=!1}v||(o=null)}}else l=="mouseover"?o=n.fromElement:l=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:yo[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&fe.aa.h.call(this)}}k(fe,st);var yo={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),Eo=0;function vo(n,o,l,h,v){this.listener=n,this.proxy=null,this.src=o,this.type=l,this.capture=!!h,this.ha=v,this.key=++Eo,this.da=this.fa=!1}function ze(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Qe(n){this.src=n,this.g={},this.h=0}Qe.prototype.add=function(n,o,l,h,v){var I=n.toString();n=this.g[I],n||(n=this.g[I]=[],this.h++);var V=Bn(n,o,h,v);return-1<V?(o=n[V],l||(o.fa=!1)):(o=new vo(o,this.src,I,!!h,v),o.fa=l,n.push(o)),o};function Un(n,o){var l=o.type;if(l in n.g){var h=n.g[l],v=Array.prototype.indexOf.call(h,o,void 0),I;(I=0<=v)&&Array.prototype.splice.call(h,v,1),I&&(ze(o),n.g[l].length==0&&(delete n.g[l],n.h--))}}function Bn(n,o,l,h){for(var v=0;v<n.length;++v){var I=n[v];if(!I.da&&I.listener==o&&I.capture==!!l&&I.ha==h)return v}return-1}var jn="closure_lm_"+(1e6*Math.random()|0),qn={};function Ur(n,o,l,h,v){if(Array.isArray(o)){for(var I=0;I<o.length;I++)Ur(n,o[I],l,h,v);return null}return l=qr(l),n&&n[Ge]?n.K(o,l,_(h)?!!h.capture:!1,v):To(n,o,l,!1,h,v)}function To(n,o,l,h,v,I){if(!o)throw Error("Invalid event type");var V=_(v)?!!v.capture:!!v,U=Kn(n);if(U||(n[jn]=U=new Qe(n)),l=U.add(o,l,h,V,I),l.proxy)return l;if(h=Ao(),l.proxy=h,h.src=n,h.listener=l,n.addEventListener)_o||(v=V),v===void 0&&(v=!1),n.addEventListener(o.toString(),h,v);else if(n.attachEvent)n.attachEvent(jr(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ao(){function n(l){return o.call(n.src,n.listener,l)}const o=Io;return n}function Br(n,o,l,h,v){if(Array.isArray(o))for(var I=0;I<o.length;I++)Br(n,o[I],l,h,v);else h=_(h)?!!h.capture:!!h,l=qr(l),n&&n[Ge]?(n=n.i,o=String(o).toString(),o in n.g&&(I=n.g[o],l=Bn(I,l,h,v),-1<l&&(ze(I[l]),Array.prototype.splice.call(I,l,1),I.length==0&&(delete n.g[o],n.h--)))):n&&(n=Kn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=Bn(o,l,h,v)),(l=-1<n?o[n]:null)&&$n(l))}function $n(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ge])Un(o.i,n);else{var l=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(l,h,n.capture):o.detachEvent?o.detachEvent(jr(l),h):o.addListener&&o.removeListener&&o.removeListener(h),(l=Kn(o))?(Un(l,n),l.h==0&&(l.src=null,o[jn]=null)):ze(n)}}}function jr(n){return n in qn?qn[n]:qn[n]="on"+n}function Io(n,o){if(n.da)n=!0;else{o=new fe(o,this);var l=n.listener,h=n.ha||n.src;n.fa&&$n(n),n=l.call(h,o)}return n}function Kn(n){return n=n[jn],n instanceof Qe?n:null}var Gn="__closure_events_fn_"+(1e9*Math.random()>>>0);function qr(n){return typeof n=="function"?n:(n[Gn]||(n[Gn]=function(o){return n.handleEvent(o)}),n[Gn])}function ot(){Ct.call(this),this.i=new Qe(this),this.M=this,this.F=null}k(ot,Ct),ot.prototype[Ge]=!0,ot.prototype.removeEventListener=function(n,o,l,h){Br(this,n,o,l,h)};function dt(n,o){var l,h=n.F;if(h)for(l=[];h;h=h.F)l.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new st(o,n);else if(o instanceof st)o.target=o.target||n;else{var v=o;o=new st(h,n),g(o,v)}if(v=!0,l)for(var I=l.length-1;0<=I;I--){var V=o.g=l[I];v=He(V,h,!0,o)&&v}if(V=o.g=n,v=He(V,h,!0,o)&&v,v=He(V,h,!1,o)&&v,l)for(I=0;I<l.length;I++)V=o.g=l[I],v=He(V,h,!1,o)&&v}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var l=n.g[o],h=0;h<l.length;h++)ze(l[h]);delete n.g[o],n.h--}}this.F=null},ot.prototype.K=function(n,o,l,h){return this.i.add(String(n),o,!1,l,h)},ot.prototype.L=function(n,o,l,h){return this.i.add(String(n),o,!0,l,h)};function He(n,o,l,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var v=!0,I=0;I<o.length;++I){var V=o[I];if(V&&!V.da&&V.capture==l){var U=V.listener,tt=V.ha||V.src;V.fa&&Un(n.i,V),v=U.call(tt,h)!==!1&&v}}return v&&!h.defaultPrevented}function $r(n,o,l){if(typeof n=="function")l&&(n=S(n,l));else if(n&&typeof n.handleEvent=="function")n=S(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:c.setTimeout(n,o||0)}function Kr(n){n.g=$r(()=>{n.g=null,n.i&&(n.i=!1,Kr(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class wo extends Ct{constructor(o,l){super(),this.m=o,this.l=l,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function de(n){Ct.call(this),this.h=n,this.g={}}k(de,Ct);var Gr=[];function zr(n){mt(n.g,function(o,l){this.g.hasOwnProperty(l)&&$n(o)},n),n.g={}}de.prototype.N=function(){de.aa.N.call(this),zr(this)},de.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=c.JSON.stringify,Ro=c.JSON.parse,Po=class{stringify(n){return c.JSON.stringify(n,void 0)}parse(n){return c.JSON.parse(n,void 0)}};function Qn(){}Qn.prototype.h=null;function Qr(n){return n.h||(n.h=n.i())}function Hr(){}var pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){st.call(this,"d")}k(Hn,st);function Wn(){st.call(this,"c")}k(Wn,st);var Ut={},Wr=null;function We(){return Wr=Wr||new ot}Ut.La="serverreachability";function Xr(n){st.call(this,Ut.La,n)}k(Xr,st);function me(n){const o=We();dt(o,new Xr(o))}Ut.STAT_EVENT="statevent";function Yr(n,o){st.call(this,Ut.STAT_EVENT,n),this.stat=o}k(Yr,st);function pt(n){const o=We();dt(o,new Yr(o,n))}Ut.Ma="timingevent";function Jr(n,o){st.call(this,Ut.Ma,n),this.size=o}k(Jr,st);function ge(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){n()},o)}function _e(){this.g=!0}_e.prototype.xa=function(){this.g=!1};function Vo(n,o,l,h,v,I){n.info(function(){if(n.g)if(I)for(var V="",U=I.split("&"),tt=0;tt<U.length;tt++){var F=U[tt].split("=");if(1<F.length){var at=F[0];F=F[1];var lt=at.split("_");V=2<=lt.length&&lt[1]=="type"?V+(at+"="+F+"&"):V+(at+"=redacted&")}}else V=null;else V=I;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+o+`
`+l+`
`+V})}function So(n,o,l,h,v,I,V){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+o+`
`+l+`
`+I+" "+V})}function Xt(n,o,l,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Do(n,l)+(h?" "+h:"")})}function Co(n,o){n.info(function(){return"TIMEOUT: "+o})}_e.prototype.info=function(){};function Do(n,o){if(!n.g)return o;if(!o)return null;try{var l=JSON.parse(o);if(l){for(n=0;n<l.length;n++)if(Array.isArray(l[n])){var h=l[n];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var I=v[0];if(I!="noop"&&I!="stop"&&I!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return zn(l)}catch{return o}}var Xe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function Ye(){}k(Ye,Qn),Ye.prototype.g=function(){return new XMLHttpRequest},Ye.prototype.i=function(){return{}},Xn=new Ye;function Dt(n,o,l,h){this.j=n,this.i=o,this.l=l,this.R=h||1,this.U=new de(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ti}function ti(){this.i=null,this.g="",this.h=!1}var ei={},Yn={};function Jn(n,o,l){n.L=1,n.v=en(Rt(o)),n.m=l,n.P=!0,ni(n,null)}function ni(n,o){n.F=Date.now(),Je(n),n.A=Rt(n.v);var l=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),gi(l.i,"t",h),n.C=0,l=n.j.J,n.h=new ti,n.g=Oi(n.j,l?o:null,!n.m),0<n.O&&(n.M=new wo(S(n.Y,n,n.g),n.O)),o=n.U,l=n.g,h=n.ca;var v="readystatechange";Array.isArray(v)||(v&&(Gr[0]=v.toString()),v=Gr);for(var I=0;I<v.length;I++){var V=Ur(l,v[I],h||o.handleEvent,!1,o.h||o);if(!V)break;o.g[V.key]=V}o=n.H?d(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),me(),Vo(n.i,n.u,n.A,n.l,n.R,n.m)}Dt.prototype.ca=function(n){n=n.target;const o=this.M;o&&Pt(n)==3?o.j():this.Y(n)},Dt.prototype.Y=function(n){try{if(n==this.g)t:{const lt=Pt(this.g);var o=this.g.Ba();const Zt=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Ii(this.g)))){this.J||lt!=4||o==7||(o==8||0>=Zt?me(3):me(2)),Zn(this);var l=this.g.Z();this.X=l;e:if(ri(this)){var h=Ii(this.g);n="";var v=h.length,I=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),ye(this);var V="";break e}this.h.i=new c.TextDecoder}for(o=0;o<v;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(I&&o==v-1)});h.length=0,this.h.g+=n,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,So(this.i,this.u,this.A,this.l,this.R,lt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var U,tt=this.g;if((U=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(U)){var F=U;break e}}F=null}if(l=F)Xt(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tr(this,l);else{this.o=!1,this.s=3,pt(12),Bt(this),ye(this);break t}}if(this.P){l=!0;let yt;for(;!this.J&&this.C<V.length;)if(yt=ko(this,V),yt==Yn){lt==4&&(this.s=4,pt(14),l=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==ei){this.s=4,pt(15),Xt(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else Xt(this.i,this.l,yt,null),tr(this,yt);if(ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||V.length!=0||this.h.h||(this.s=1,pt(16),l=!1),this.o=this.o&&l,!l)Xt(this.i,this.l,V,"[Invalid Chunked Response]"),Bt(this),ye(this);else if(0<V.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),or(at),at.M=!0,pt(11))}}else Xt(this.i,this.l,V,null),tr(this,V);lt==4&&Bt(this),this.o&&!this.J&&(lt==4?Di(this.j,this):(this.o=!1,Je(this)))}else Ho(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Bt(this),ye(this)}}}catch{}finally{}};function ri(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function ko(n,o){var l=n.C,h=o.indexOf(`
`,l);return h==-1?Yn:(l=Number(o.substring(l,h)),isNaN(l)?ei:(h+=1,h+l>o.length?Yn:(o=o.slice(h,h+l),n.C=h+l,o)))}Dt.prototype.cancel=function(){this.J=!0,Bt(this)};function Je(n){n.S=Date.now()+n.I,ii(n,n.I)}function ii(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ge(S(n.ba,n),o)}function Zn(n){n.B&&(c.clearTimeout(n.B),n.B=null)}Dt.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(Co(this.i,this.A),this.L!=2&&(me(),pt(17)),Bt(this),this.s=2,ye(this)):ii(this,this.S-n)};function ye(n){n.j.G==0||n.J||Di(n.j,n)}function Bt(n){Zn(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,zr(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function tr(n,o){try{var l=n.j;if(l.G!=0&&(l.g==n||er(l.h,n))){if(!n.K&&er(l.h,n)&&l.G==3){try{var h=l.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<n.F)ln(l),on(l);else break t;sr(l),pt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=ge(S(l.Za,l),6e3));if(1>=ai(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else qt(l,11)}else if((n.K||l.g==n)&&ln(l),!$(o))for(v=l.Da.g.parse(o),o=0;o<v.length;o++){let F=v[o];if(l.T=F[0],F=F[1],l.G==2)if(F[0]=="c"){l.K=F[1],l.ia=F[2];const at=F[3];at!=null&&(l.la=at,l.j.info("VER="+l.la));const lt=F[4];lt!=null&&(l.Aa=lt,l.j.info("SVER="+l.Aa));const Zt=F[5];Zt!=null&&typeof Zt=="number"&&0<Zt&&(h=1.5*Zt,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const yt=n.g;if(yt){const hn=yt.g?yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hn){var I=h.h;I.g||hn.indexOf("spdy")==-1&&hn.indexOf("quic")==-1&&hn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(nr(I,I.h),I.h=null))}if(h.D){const ar=yt.g?yt.g.getResponseHeader("X-HTTP-Session-Id"):null;ar&&(h.ya=ar,q(h.I,h.D,ar))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-n.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var V=n;if(h.qa=bi(h,h.J?h.ia:null,h.W),V.K){li(h.h,V);var U=V,tt=h.L;tt&&(U.I=tt),U.B&&(Zn(U),Je(U)),h.g=V}else Si(h);0<l.i.length&&an(l)}else F[0]!="stop"&&F[0]!="close"||qt(l,7);else l.G==3&&(F[0]=="stop"||F[0]=="close"?F[0]=="stop"?qt(l,7):ir(l):F[0]!="noop"&&l.l&&l.l.ta(F),l.v=0)}}me(4)}catch{}}var No=class{constructor(n,o){this.g=n,this.map=o}};function si(n){this.l=n||10,c.PerformanceNavigationTiming?(n=c.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oi(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ai(n){return n.h?1:n.g?n.g.size:0}function er(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function nr(n,o){n.g?n.g.add(o):n.h=o}function li(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}si.prototype.cancel=function(){if(this.i=ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ui(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const l of n.g.values())o=o.concat(l.D);return o}return x(n.i)}function bo(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(f(n)){for(var o=[],l=n.length,h=0;h<l;h++)o.push(n[h]);return o}o=[],l=0;for(h in n)o[l++]=n[h];return o}function Oo(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(f(n)||typeof n=="string"){var o=[];n=n.length;for(var l=0;l<n;l++)o.push(l);return o}o=[],l=0;for(const h in n)o[l++]=h;return o}}}function hi(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(f(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var l=Oo(n),h=bo(n),v=h.length,I=0;I<v;I++)o.call(void 0,h[I],l&&l[I],n)}var ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xo(n,o){if(n){n=n.split("&");for(var l=0;l<n.length;l++){var h=n[l].indexOf("="),v=null;if(0<=h){var I=n[l].substring(0,h);v=n[l].substring(h+1)}else I=n[l];o(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function jt(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof jt){this.h=n.h,Ze(this,n.j),this.o=n.o,this.g=n.g,tn(this,n.s),this.l=n.l;var o=n.i,l=new Te;l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),fi(this,l),this.m=n.m}else n&&(o=String(n).match(ci))?(this.h=!1,Ze(this,o[1]||"",!0),this.o=Ee(o[2]||""),this.g=Ee(o[3]||"",!0),tn(this,o[4]),this.l=Ee(o[5]||"",!0),fi(this,o[6]||"",!0),this.m=Ee(o[7]||"")):(this.h=!1,this.i=new Te(null,this.h))}jt.prototype.toString=function(){var n=[],o=this.j;o&&n.push(ve(o,di,!0),":");var l=this.g;return(l||o=="file")&&(n.push("//"),(o=this.o)&&n.push(ve(o,di,!0),"@"),n.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&n.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&n.push("/"),n.push(ve(l,l.charAt(0)=="/"?Fo:Lo,!0))),(l=this.i.toString())&&n.push("?",l),(l=this.m)&&n.push("#",ve(l,Bo)),n.join("")};function Rt(n){return new jt(n)}function Ze(n,o,l){n.j=l?Ee(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function tn(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function fi(n,o,l){o instanceof Te?(n.i=o,jo(n.i,n.h)):(l||(o=ve(o,Uo)),n.i=new Te(o,n.h))}function q(n,o,l){n.i.set(o,l)}function en(n){return q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ee(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ve(n,o,l){return typeof n=="string"?(n=encodeURI(n).replace(o,Mo),l&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Mo(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var di=/[#\/\?@]/g,Lo=/[#\?:]/g,Fo=/[#\?]/g,Uo=/[#\?@]/g,Bo=/#/g;function Te(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function kt(n){n.g||(n.g=new Map,n.h=0,n.i&&xo(n.i,function(o,l){n.add(decodeURIComponent(o.replace(/\+/g," ")),l)}))}r=Te.prototype,r.add=function(n,o){kt(this),this.i=null,n=Yt(this,n);var l=this.g.get(n);return l||this.g.set(n,l=[]),l.push(o),this.h+=1,this};function pi(n,o){kt(n),o=Yt(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function mi(n,o){return kt(n),o=Yt(n,o),n.g.has(o)}r.forEach=function(n,o){kt(this),this.g.forEach(function(l,h){l.forEach(function(v){n.call(o,v,h,this)},this)},this)},r.na=function(){kt(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),l=[];for(let h=0;h<o.length;h++){const v=n[h];for(let I=0;I<v.length;I++)l.push(o[h])}return l},r.V=function(n){kt(this);let o=[];if(typeof n=="string")mi(this,n)&&(o=o.concat(this.g.get(Yt(this,n))));else{n=Array.from(this.g.values());for(let l=0;l<n.length;l++)o=o.concat(n[l])}return o},r.set=function(n,o){return kt(this),this.i=null,n=Yt(this,n),mi(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},r.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function gi(n,o,l){pi(n,o),0<l.length&&(n.i=null,n.g.set(Yt(n,o),x(l)),n.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var l=0;l<o.length;l++){var h=o[l];const I=encodeURIComponent(String(h)),V=this.V(h);for(h=0;h<V.length;h++){var v=I;V[h]!==""&&(v+="="+encodeURIComponent(String(V[h]))),n.push(v)}}return this.i=n.join("&")};function Yt(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function jo(n,o){o&&!n.j&&(kt(n),n.i=null,n.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(pi(this,h),gi(this,v,l))},n)),n.j=o}function qo(n,o){const l=new _e;if(c.Image){const h=new Image;h.onload=C(Nt,l,"TestLoadImage: loaded",!0,o,h),h.onerror=C(Nt,l,"TestLoadImage: error",!1,o,h),h.onabort=C(Nt,l,"TestLoadImage: abort",!1,o,h),h.ontimeout=C(Nt,l,"TestLoadImage: timeout",!1,o,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function $o(n,o){const l=new _e,h=new AbortController,v=setTimeout(()=>{h.abort(),Nt(l,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(I=>{clearTimeout(v),I.ok?Nt(l,"TestPingServer: ok",!0,o):Nt(l,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(v),Nt(l,"TestPingServer: error",!1,o)})}function Nt(n,o,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Ko(){this.g=new Po}function Go(n,o,l){const h=l||"";try{hi(n,function(v,I){let V=v;_(v)&&(V=zn(v)),o.push(h+I+"="+encodeURIComponent(V))})}catch(v){throw o.push(h+"type="+encodeURIComponent("_badmap")),v}}function nn(n){this.l=n.Ub||null,this.j=n.eb||!1}k(nn,Qn),nn.prototype.g=function(){return new rn(this.l,this.j)},nn.prototype.i=function(n){return function(){return n}}({});function rn(n,o){ot.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(rn,ot),r=rn.prototype,r.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,Ie(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||c).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ae(this)),this.readyState=0},r.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ie(this)),this.g&&(this.readyState=3,Ie(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_i(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function _i(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}r.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?Ae(this):Ie(this),this.readyState==3&&_i(this)}},r.Ra=function(n){this.g&&(this.response=this.responseText=n,Ae(this))},r.Qa=function(n){this.g&&(this.response=n,Ae(this))},r.ga=function(){this.g&&Ae(this)};function Ae(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Ie(n)}r.setRequestHeader=function(n,o){this.u.append(n,o)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var l=o.next();!l.done;)l=l.value,n.push(l[0]+": "+l[1]),l=o.next();return n.join(`\r
`)};function Ie(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function yi(n){let o="";return mt(n,function(l,h){o+=h,o+=":",o+=l,o+=`\r
`}),o}function rr(n,o,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=yi(l),typeof n=="string"?l!=null&&encodeURIComponent(String(l)):q(n,o,l))}function z(n){ot.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(z,ot);var zo=/^https?$/i,Qo=["POST","PUT"];r=z.prototype,r.Ha=function(n){this.J=n},r.ea=function(n,o,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?Qr(this.o):Qr(Xn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(I){Ei(this,I);return}if(n=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())l.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(I=>I.toLowerCase()=="content-type"),v=c.FormData&&n instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Qo,o,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,V]of l)this.g.setRequestHeader(I,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ai(this),this.u=!0,this.g.send(n),this.u=!1}catch(I){Ei(this,I)}};function Ei(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,vi(n),sn(n)}function vi(n){n.A||(n.A=!0,dt(n,"complete"),dt(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,dt(this,"complete"),dt(this,"abort"),sn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),z.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ti(this):this.bb())},r.bb=function(){Ti(this)};function Ti(n){if(n.h&&typeof u<"u"&&(!n.v[1]||Pt(n)!=4||n.Z()!=2)){if(n.u&&Pt(n)==4)$r(n.Ea,0,n);else if(dt(n,"readystatechange"),Pt(n)==4){n.h=!1;try{const V=n.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var l;if(!(l=o)){var h;if(h=V===0){var v=String(n.D).match(ci)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!zo.test(v?v.toLowerCase():"")}l=h}if(l)dt(n,"complete"),dt(n,"success");else{n.m=6;try{var I=2<Pt(n)?n.g.statusText:""}catch{I=""}n.l=I+" ["+n.Z()+"]",vi(n)}}finally{sn(n)}}}}function sn(n,o){if(n.g){Ai(n);const l=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||dt(n,"ready");try{l.onreadystatechange=h}catch{}}}function Ai(n){n.I&&(c.clearTimeout(n.I),n.I=null)}r.isActive=function(){return!!this.g};function Pt(n){return n.g?n.g.readyState:0}r.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),Ro(o)}};function Ii(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ho(n){const o={};n=(n.g&&2<=Pt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if($(n[h]))continue;var l=y(n[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const I=o[v]||[];o[v]=I,I.push(l)}E(o,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function we(n,o,l){return l&&l.internalChannelParams&&l.internalChannelParams[n]||o}function wi(n){this.Aa=0,this.i=[],this.j=new _e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=we("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=we("baseRetryDelayMs",5e3,n),this.cb=we("retryDelaySeedMs",1e4,n),this.Wa=we("forwardChannelMaxRetries",2,n),this.wa=we("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new si(n&&n.concurrentRequestLimit),this.Da=new Ko,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=wi.prototype,r.la=8,r.G=1,r.connect=function(n,o,l,h){pt(0),this.W=n,this.H=o||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=bi(this,null,this.W),an(this)};function ir(n){if(Ri(n),n.G==3){var o=n.U++,l=Rt(n.I);if(q(l,"SID",n.K),q(l,"RID",o),q(l,"TYPE","terminate"),Re(n,l),o=new Dt(n,n.j,o),o.L=2,o.v=en(Rt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(o.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=o.v,l=!0),l||(o.g=Oi(o.j,null),o.g.ea(o.v)),o.F=Date.now(),Je(o)}Ni(n)}function on(n){n.g&&(or(n),n.g.cancel(),n.g=null)}function Ri(n){on(n),n.u&&(c.clearTimeout(n.u),n.u=null),ln(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&c.clearTimeout(n.s),n.s=null)}function an(n){if(!oi(n.h)&&!n.s){n.s=!0;var o=n.Ga;he||Fr(),ce||(he(),ce=!0),Fn.add(o,n),n.B=0}}function Wo(n,o){return ai(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=ge(S(n.Ga,n,o),ki(n,n.B)),n.B++,!0)}r.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const v=new Dt(this,this.j,n);let I=this.o;if(this.S&&(I?(I=d(I),g(I,this.S)):I=this.S),this.m!==null||this.O||(v.H=I,I=null),this.P)t:{for(var o=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=l;break t}if(o===4096||l===this.i.length-1){o=l+1;break t}}o=1e3}else o=1e3;o=Vi(this,v,o),l=Rt(this.I),q(l,"RID",n),q(l,"CVER",22),this.D&&q(l,"X-HTTP-Session-Id",this.D),Re(this,l),I&&(this.O?o="headers="+encodeURIComponent(String(yi(I)))+"&"+o:this.m&&rr(l,this.m,I)),nr(this.h,v),this.Ua&&q(l,"TYPE","init"),this.P?(q(l,"$req",o),q(l,"SID","null"),v.T=!0,Jn(v,l,null)):Jn(v,l,o),this.G=2}}else this.G==3&&(n?Pi(this,n):this.i.length==0||oi(this.h)||Pi(this))};function Pi(n,o){var l;o?l=o.l:l=n.U++;const h=Rt(n.I);q(h,"SID",n.K),q(h,"RID",l),q(h,"AID",n.T),Re(n,h),n.m&&n.o&&rr(h,n.m,n.o),l=new Dt(n,n.j,l,n.B+1),n.m===null&&(l.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Vi(n,l,1e3),l.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),nr(n.h,l),Jn(l,h,o)}function Re(n,o){n.H&&mt(n.H,function(l,h){q(o,h,l)}),n.l&&hi({},function(l,h){q(o,h,l)})}function Vi(n,o,l){l=Math.min(n.i.length,l);var h=n.l?S(n.l.Na,n.l,n):null;t:{var v=n.i;let I=-1;for(;;){const V=["count="+l];I==-1?0<l?(I=v[0].g,V.push("ofs="+I)):I=0:V.push("ofs="+I);let U=!0;for(let tt=0;tt<l;tt++){let F=v[tt].g;const at=v[tt].map;if(F-=I,0>F)I=Math.max(0,v[tt].g-100),U=!1;else try{Go(at,V,"req"+F+"_")}catch{h&&h(at)}}if(U){h=V.join("&");break t}}}return n=n.i.splice(0,l),o.D=n,h}function Si(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;he||Fr(),ce||(he(),ce=!0),Fn.add(o,n),n.v=0}}function sr(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=ge(S(n.Fa,n),ki(n,n.v)),n.v++,!0)}r.Fa=function(){if(this.u=null,Ci(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=ge(S(this.ab,this),n)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),on(this),Ci(this))};function or(n){n.A!=null&&(c.clearTimeout(n.A),n.A=null)}function Ci(n){n.g=new Dt(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=Rt(n.qa);q(o,"RID","rpc"),q(o,"SID",n.K),q(o,"AID",n.T),q(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&q(o,"TO",n.ja),q(o,"TYPE","xmlhttp"),Re(n,o),n.m&&n.o&&rr(o,n.m,n.o),n.L&&(n.g.I=n.L);var l=n.g;n=n.ia,l.L=1,l.v=en(Rt(o)),l.m=null,l.P=!0,ni(l,n)}r.Za=function(){this.C!=null&&(this.C=null,on(this),sr(this),pt(19))};function ln(n){n.C!=null&&(c.clearTimeout(n.C),n.C=null)}function Di(n,o){var l=null;if(n.g==o){ln(n),or(n),n.g=null;var h=2}else if(er(n.h,o))l=o.D,li(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){l=o.m?o.m.length:0,o=Date.now()-o.F;var v=n.B;h=We(),dt(h,new Jr(h,l)),an(n)}else Si(n);else if(v=o.s,v==3||v==0&&0<o.X||!(h==1&&Wo(n,o)||h==2&&sr(n)))switch(l&&0<l.length&&(o=n.h,o.i=o.i.concat(l)),v){case 1:qt(n,5);break;case 4:qt(n,10);break;case 3:qt(n,6);break;default:qt(n,2)}}}function ki(n,o){let l=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(l*=2),l*o}function qt(n,o){if(n.j.info("Error code "+o),o==2){var l=S(n.fb,n),h=n.Xa;const v=!h;h=new jt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ze(h,"https"),en(h),v?qo(h.toString(),l):$o(h.toString(),l)}else pt(2);n.G=0,n.l&&n.l.sa(o),Ni(n),Ri(n)}r.fb=function(n){n?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Ni(n){if(n.G=0,n.ka=[],n.l){const o=ui(n.h);(o.length!=0||n.i.length!=0)&&(N(n.ka,o),N(n.ka,n.i),n.h.i.length=0,x(n.i),n.i.length=0),n.l.ra()}}function bi(n,o,l){var h=l instanceof jt?Rt(l):new jt(l);if(h.g!="")o&&(h.g=o+"."+h.g),tn(h,h.s);else{var v=c.location;h=v.protocol,o=o?o+"."+v.hostname:v.hostname,v=+v.port;var I=new jt(null);h&&Ze(I,h),o&&(I.g=o),v&&tn(I,v),l&&(I.l=l),h=I}return l=n.D,o=n.ya,l&&o&&q(h,l,o),q(h,"VER",n.la),Re(n,h),h}function Oi(n,o,l){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new z(new nn({eb:l})):new z(n.pa),o.Ha(n.J),o}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function xi(){}r=xi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function un(){}un.prototype.g=function(n,o){return new _t(n,o)};function _t(n,o){ot.call(this),this.g=new wi(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!$(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!$(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new Jt(this)}k(_t,ot),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){ir(this.g)},_t.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var l={};l.__data__=n,n=l}else this.u&&(l={},l.__data__=zn(n),n=l);o.i.push(new No(o.Ya++,n)),o.G==3&&an(o)},_t.prototype.N=function(){this.g.l=null,delete this.j,ir(this.g),delete this.g,_t.aa.N.call(this)};function Mi(n){Hn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){t:{for(const l in o){n=l;break t}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}k(Mi,Hn);function Li(){Wn.call(this),this.status=1}k(Li,Wn);function Jt(n){this.g=n}k(Jt,xi),Jt.prototype.ua=function(){dt(this.g,"a")},Jt.prototype.ta=function(n){dt(this.g,new Mi(n))},Jt.prototype.sa=function(n){dt(this.g,new Li)},Jt.prototype.ra=function(){dt(this.g,"b")},un.prototype.createWebChannel=un.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,ys=function(){return new un},_s=function(){return We()},gs=Ut,cr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xe.NO_ERROR=0,Xe.TIMEOUT=8,Xe.HTTP_ERROR=6,gn=Xe,Zr.COMPLETE="complete",ms=Zr,Hr.EventType=pe,pe.OPEN="a",pe.CLOSE="b",pe.ERROR="c",pe.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Se=Hr,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha,ps=z}).apply(typeof cn<"u"?cn:typeof self<"u"?self:typeof window<"u"?window:{});const Bi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new ea("@firebase/firestore");function Pe(){return zt.logLevel}function D(r,...t){if(zt.logLevel<=bt.DEBUG){const e=t.map(vr);zt.debug(`Firestore (${ae}): ${r}`,...e)}}function Qt(r,...t){if(zt.logLevel<=bt.ERROR){const e=t.map(vr);zt.error(`Firestore (${ae}): ${r}`,...e)}}function En(r,...t){if(zt.logLevel<=bt.WARN){const e=t.map(vr);zt.warn(`Firestore (${ae}): ${r}`,...e)}}function vr(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${ae}) INTERNAL ASSERTION FAILED: `+r;throw Qt(t),new Error(t)}function W(r,t){r||M()}function j(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Zo{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class aa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ht.UNAUTHENTICATED))}shutdown(){}}class la{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ua{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let a=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Kt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Kt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(W(typeof i.accessToken=="string"),new Es(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new ht(t)}}class ha{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ca{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new ha(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class da{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){W(this.o===void 0);const i=a=>{a.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const s=a=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new fa(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<r;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=pa(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<e&&(i+=t.charAt(s[a]%t.length))}return i}}function B(r,t){return r<t?-1:r>t?1:0}function ne(r,t,e){return r.length===t.length&&r.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new Z(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.timestamp=t}static fromTimestamp(t){return new K(t)}static min(){return new K(new Z(0,0))}static max(){return new K(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const a=t.get(s),u=e.get(s);if(a<u)return-1;if(a>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Q extends Oe{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const ma=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Oe{construct(t,e,i){return new rt(t,e,i)}static isValidIdentifier(t){return ma.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const a=()=>{if(i.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(a(),s++)}if(a(),u)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}function ga(r,t){const e=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,s=K.fromTimestamp(i===1e9?new Z(e+1,0):new Z(e,i));return new xt(s,O.empty(),t)}function _a(r){return new xt(r.readTime,r.key,-1)}class xt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new xt(K.min(),O.empty(),-1)}static max(){return new xt(K.max(),O.empty(),-1)}}function ya(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class va{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Ea)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,a=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++a,u&&a===s&&e()},f=>i(f))}),u=!0,a===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,a)=>{i.push(e.call(this,s,a))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const a=t.length,u=new Array(a);let c=0;for(let f=0;f<a;f++){const _=f;e(t[_]).next(A=>{u[_]=A,++c,c===a&&i(u)},A=>s(A))}})}static doWhile(t,e){return new R((i,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):i()};a()})}}function Ta(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Cn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}As.oe=-1;function Tr(r){return r==null}function vn(r){return r===0&&1/r==-1/0}function Aa(r){return typeof r=="number"&&Number.isInteger(r)&&!vn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function je(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Is(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e){this.comparator=t,this.root=e||et.EMPTY}insert(t,e){return new gt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,et.BLACK,null,null))}remove(t){return new gt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fn(this.root,t,this.comparator,!0)}}class fn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?i(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class et{constructor(t,e,i,s,a){this.key=t,this.value=e,this.color=i??et.RED,this.left=s??et.EMPTY,this.right=a??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,a){return new et(t??this.key,e??this.value,i??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const a=i(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,i),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,a){return this}insert(t,e,i){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.comparator=t,this.data=new gt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qi(this.data.getIterator())}getIteratorFrom(t){return new qi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class qi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new Tt([])}unionWith(t){let e=new ft(rt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Tt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ne(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Ia("Invalid base64 string: "+a):a}}(t);return new At(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new At(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const wa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(W(!!r),typeof r=="string"){let t=0;const e=wa.exec(r);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function xe(r){return typeof r=="string"?At.fromBase64String(r):At.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ws(r){const t=r.mapValue.fields.__previous_value__;return Ar(t)?ws(t):t}function Tn(r){const t=Ht(r.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,i,s,a,u,c,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=_}}class An{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={mapValue:{}};function re(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ar(r)?4:Va(r)?9007199254740991:Pa(r)?10:11:M()}function It(r,t){if(r===t)return!0;const e=re(r);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Tn(r).isEqual(Tn(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ht(s.timestampValue),c=Ht(a.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,a){return xe(s.bytesValue).isEqual(xe(a.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,a){return nt(s.geoPointValue.latitude)===nt(a.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(a.geoPointValue.longitude)}(r,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return nt(s.integerValue)===nt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=nt(s.doubleValue),c=nt(a.doubleValue);return u===c?vn(u)===vn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return ne(r.arrayValue.values||[],t.arrayValue.values||[],It);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},c=a.mapValue.fields||{};if(ji(u)!==ji(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!It(u[f],c[f])))return!1;return!0}(r,t);default:return M()}}function Me(r,t){return(r.values||[]).find(e=>It(e,t))!==void 0}function ie(r,t){if(r===t)return 0;const e=re(r),i=re(t);if(e!==i)return B(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return function(a,u){const c=nt(a.integerValue||a.doubleValue),f=nt(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(r,t);case 3:return $i(r.timestampValue,t.timestampValue);case 4:return $i(Tn(r),Tn(t));case 5:return B(r.stringValue,t.stringValue);case 6:return function(a,u){const c=xe(a),f=xe(u);return c.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(a,u){const c=a.split("/"),f=u.split("/");for(let _=0;_<c.length&&_<f.length;_++){const A=B(c[_],f[_]);if(A!==0)return A}return B(c.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(a,u){const c=B(nt(a.latitude),nt(u.latitude));return c!==0?c:B(nt(a.longitude),nt(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ki(r.arrayValue,t.arrayValue);case 10:return function(a,u){var c,f,_,A;const w=a.fields||{},S=u.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,k=(f=S.value)===null||f===void 0?void 0:f.arrayValue,x=B(((_=C==null?void 0:C.values)===null||_===void 0?void 0:_.length)||0,((A=k==null?void 0:k.values)===null||A===void 0?void 0:A.length)||0);return x!==0?x:Ki(C,k)}(r.mapValue,t.mapValue);case 11:return function(a,u){if(a===dn.mapValue&&u===dn.mapValue)return 0;if(a===dn.mapValue)return 1;if(u===dn.mapValue)return-1;const c=a.fields||{},f=Object.keys(c),_=u.fields||{},A=Object.keys(_);f.sort(),A.sort();for(let w=0;w<f.length&&w<A.length;++w){const S=B(f[w],A[w]);if(S!==0)return S;const C=ie(c[f[w]],_[A[w]]);if(C!==0)return C}return B(f.length,A.length)}(r.mapValue,t.mapValue);default:throw M()}}function $i(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=Ht(r),i=Ht(t),s=B(e.seconds,i.seconds);return s!==0?s:B(e.nanos,i.nanos)}function Ki(r,t){const e=r.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const a=ie(e[s],i[s]);if(a)return a}return B(e.length,i.length)}function se(r){return fr(r)}function fr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const i=Ht(e);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return xe(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let i="[",s=!0;for(const a of e.values||[])s?s=!1:i+=",",i+=fr(a);return i+"]"}(r.arrayValue):"mapValue"in r?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of i)a?a=!1:s+=",",s+=`${u}:${fr(e.fields[u])}`;return s+"}"}(r.mapValue):M()}function dr(r){return!!r&&"integerValue"in r}function Ir(r){return!!r&&"arrayValue"in r}function _n(r){return!!r&&"mapValue"in r}function Pa(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ce(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return je(r.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Ce(i)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ce(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Va(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!_n(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ce(e)}setAll(t){let e=rt.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=Ce(u):s.push(c.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,i,s)}delete(t){const e=this.field(t.popLast());_n(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return It(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];_n(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){je(e,(s,a)=>t[s]=a);for(const s of i)delete t[s]}clone(){return new vt(Ce(this.value))}}function Rs(r){const t=[];return je(r.fields,(e,i)=>{const s=new rt([e]);if(_n(i)){const a=Rs(i.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new Tt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,i,s,a,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=a,this.data=u,this.documentState=c}static newInvalidDocument(t){return new Et(t,0,K.min(),K.min(),K.min(),vt.empty(),0)}static newFoundDocument(t,e,i,s){return new Et(t,1,e,K.min(),i,s,0)}static newNoDocument(t,e){return new Et(t,2,e,K.min(),K.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,K.min(),K.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e){this.position=t,this.inclusive=e}}function Gi(r,t,e){let i=0;for(let s=0;s<r.position.length;s++){const a=t[s],u=r.position[s];if(a.field.isKeyField()?i=O.comparator(O.fromName(u.referenceValue),e.key):i=ie(u,e.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function zi(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!It(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Sa(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{}class J extends Ps{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Da(t,e,i):e==="array-contains"?new ba(t,i):e==="in"?new Oa(t,i):e==="not-in"?new xa(t,i):e==="array-contains-any"?new Ma(t,i):new J(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new ka(t,i):new Na(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ie(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Ps{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Mt(t,e)}matches(t){return Vs(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vs(r){return r.op==="and"}function Ss(r){return Ca(r)&&Vs(r)}function Ca(r){for(const t of r.filters)if(t instanceof Mt)return!1;return!0}function pr(r){if(r instanceof J)return r.field.canonicalString()+r.op.toString()+se(r.value);if(Ss(r))return r.filters.map(t=>pr(t)).join(",");{const t=r.filters.map(e=>pr(e)).join(",");return`${r.op}(${t})`}}function Cs(r,t){return r instanceof J?function(i,s){return s instanceof J&&i.op===s.op&&i.field.isEqual(s.field)&&It(i.value,s.value)}(r,t):r instanceof Mt?function(i,s){return s instanceof Mt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,u,c)=>a&&Cs(u,s.filters[c]),!0):!1}(r,t):void M()}function Ds(r){return r instanceof J?function(e){return`${e.field.canonicalString()} ${e.op} ${se(e.value)}`}(r):r instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ds).join(" ,")+"}"}(r):"Filter"}class Da extends J{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class ka extends J{constructor(t,e){super(t,"in",e),this.keys=ks("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Na extends J{constructor(t,e){super(t,"not-in",e),this.keys=ks("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ks(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class ba extends J{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ir(e)&&Me(e.arrayValue,this.value)}}class Oa extends J{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Me(this.value.arrayValue,e)}}class xa extends J{constructor(t,e){super(t,"not-in",e)}matches(t){if(Me(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Me(this.value.arrayValue,e)}}class Ma extends J{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ir(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Me(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e=null,i=[],s=[],a=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=u,this.endAt=c,this.ue=null}}function Qi(r,t=null,e=[],i=[],s=null,a=null,u=null){return new La(r,t,e,i,s,a,u)}function wr(r){const t=j(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>pr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),Tr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>se(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>se(i)).join(",")),t.ue=e}return t.ue}function Rr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Sa(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Cs(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!zi(r.startAt,t.startAt)&&zi(r.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,e=null,i=[],s=[],a=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fa(r,t,e,i,s,a,u,c){return new Dn(r,t,e,i,s,a,u,c)}function Ua(r){return new Dn(r)}function Hi(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ba(r){return r.collectionGroup!==null}function De(r){const t=j(r);if(t.ce===null){t.ce=[];const e=new Set;for(const a of t.explicitOrderBy)t.ce.push(a),e.add(a.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ft(rt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(_=>{_.isInequality()&&(c=c.add(_.field))})}),c})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.ce.push(new wn(a,i))}),e.has(rt.keyField().canonicalString())||t.ce.push(new wn(rt.keyField(),i))}return t.ce}function Gt(r){const t=j(r);return t.le||(t.le=ja(t,De(r))),t.le}function ja(r,t){if(r.limitType==="F")return Qi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new wn(s.field,a)});const e=r.endAt?new In(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new In(r.startAt.position,r.startAt.inclusive):null;return Qi(r.path,r.collectionGroup,t,r.filters,r.limit,e,i)}}function mr(r,t,e){return new Dn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ns(r,t){return Rr(Gt(r),Gt(t))&&r.limitType===t.limitType}function bs(r){return`${wr(Gt(r))}|lt:${r.limitType}`}function Ve(r){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Ds(s)).join(", ")}]`),Tr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>se(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>se(s)).join(",")),`Target(${i})`}(Gt(r))}; limitType=${r.limitType})`}function Pr(r,t){return t.isFoundDocument()&&function(i,s){const a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):O.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(r,t)&&function(i,s){for(const a of De(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(r,t)&&function(i,s){for(const a of i.filters)if(!a.matches(s))return!1;return!0}(r,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const _=Gi(u,c,f);return u.inclusive?_<=0:_<0}(i.startAt,De(i),s)||i.endAt&&!function(u,c,f){const _=Gi(u,c,f);return u.inclusive?_>=0:_>0}(i.endAt,De(i),s))}(r,t)}function qa(r){return(t,e)=>{let i=!1;for(const s of De(r)){const a=$a(s,t,e);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function $a(r,t,e){const i=r.field.isKeyField()?O.comparator(t.key,e.key):function(a,u,c){const f=u.data.field(a),_=c.data.field(a);return f!==null&&_!==null?ie(f,_):M()}(r.field,t,e);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){je(this.inner,(e,i)=>{for(const[s,a]of i)t(s,a)})}isEmpty(){return Is(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new gt(O.comparator);function Rn(){return Ka}const Os=new gt(O.comparator);function pn(...r){let t=Os;for(const e of r)t=t.insert(e.key,e);return t}function xs(r){let t=Os;return r.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function $t(){return ke()}function Ms(){return ke()}function ke(){return new le(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ga=new gt(O.comparator),za=new ft(O.comparator);function ct(...r){let t=za;for(const e of r)t=t.add(e);return t}const Qa=new ft(B);function Ha(){return Qa}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vn(t)?"-0":t}}function Ls(r){return{integerValue:""+r}}function Wa(r,t){return Aa(t)?Ls(t):Vr(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this._=void 0}}function Xa(r,t,e){return r instanceof Le?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Ar(a)&&(a=ws(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(e,t):r instanceof Fe?Us(r,t):r instanceof Ue?Bs(r,t):function(s,a){const u=Fs(s,a),c=Wi(u)+Wi(s.Pe);return dr(u)&&dr(s.Pe)?Ls(c):Vr(s.serializer,c)}(r,t)}function Ya(r,t,e){return r instanceof Fe?Us(r,t):r instanceof Ue?Bs(r,t):e}function Fs(r,t){return r instanceof Pn?function(i){return dr(i)||function(a){return!!a&&"doubleValue"in a}(i)}(t)?t:{integerValue:0}:null}class Le extends kn{}class Fe extends kn{constructor(t){super(),this.elements=t}}function Us(r,t){const e=js(t);for(const i of r.elements)e.some(s=>It(s,i))||e.push(i);return{arrayValue:{values:e}}}class Ue extends kn{constructor(t){super(),this.elements=t}}function Bs(r,t){let e=js(t);for(const i of r.elements)e=e.filter(s=>!It(s,i));return{arrayValue:{values:e}}}class Pn extends kn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Wi(r){return nt(r.integerValue||r.doubleValue)}function js(r){return Ir(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e){this.field=t,this.transform=e}}function Za(r,t){return r.field.isEqual(t.field)&&function(i,s){return i instanceof Fe&&s instanceof Fe||i instanceof Ue&&s instanceof Ue?ne(i.elements,s.elements,It):i instanceof Pn&&s instanceof Pn?It(i.Pe,s.Pe):i instanceof Le&&s instanceof Le}(r.transform,t.transform)}class tl{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Nn{}function qs(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ks(r.key,Vt.none()):new qe(r.key,r.data,Vt.none());{const e=r.data,i=vt.empty();let s=new ft(rt.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?i.delete(a):i.set(a,u),s=s.add(a)}return new Wt(r.key,i,new Tt(s.toArray()),Vt.none())}}function el(r,t,e){r instanceof qe?function(s,a,u){const c=s.value.clone(),f=Yi(s.fieldTransforms,a,u.transformResults);c.setAll(f),a.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Wt?function(s,a,u){if(!yn(s.precondition,a))return void a.convertToUnknownDocument(u.version);const c=Yi(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll($s(s)),f.setAll(c),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(r,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ne(r,t,e,i){return r instanceof qe?function(a,u,c,f){if(!yn(a.precondition,u))return c;const _=a.value.clone(),A=Ji(a.fieldTransforms,f,u);return _.setAll(A),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null}(r,t,e,i):r instanceof Wt?function(a,u,c,f){if(!yn(a.precondition,u))return c;const _=Ji(a.fieldTransforms,f,u),A=u.data;return A.setAll($s(a)),A.setAll(_),u.convertToFoundDocument(u.version,A).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(r,t,e,i):function(a,u,c){return yn(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function nl(r,t){let e=null;for(const i of r.fieldTransforms){const s=t.data.field(i.field),a=Fs(i.transform,s||null);a!=null&&(e===null&&(e=vt.empty()),e.set(i.field,a))}return e||null}function Xi(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ne(i,s,(a,u)=>Za(a,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class qe extends Nn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wt extends Nn{constructor(t,e,i,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function $s(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=r.data.field(e);t.set(e,i)}}),t}function Yi(r,t,e){const i=new Map;W(r.length===e.length);for(let s=0;s<e.length;s++){const a=r[s],u=a.transform,c=t.data.field(a.field);i.set(a.field,Ya(u,c,e[s]))}return i}function Ji(r,t,e){const i=new Map;for(const s of r){const a=s.transform,u=e.data.field(s.field);i.set(s.field,Xa(a,u,t))}return i}class Ks extends Nn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rl extends Nn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&el(a,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ne(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ne(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Ms();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let c=this.applyToLocalView(u,a.mutatedFields);c=e.has(s.key)?null:c;const f=qs(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(K.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ct())}isEqual(t){return this.batchId===t.batchId&&ne(this.mutations,t.mutations,(e,i)=>Xi(e,i))&&ne(this.baseMutations,t.baseMutations,(e,i)=>Xi(e,i))}}class Sr{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){W(t.mutations.length===i.length);let s=function(){return Ga}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,i[u].version);return new Sr(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,L;function ol(r){switch(r){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function al(r){if(r===void 0)return Qt("GRPC error has no .code"),P.UNKNOWN;switch(r){case X.OK:return P.OK;case X.CANCELLED:return P.CANCELLED;case X.UNKNOWN:return P.UNKNOWN;case X.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case X.INTERNAL:return P.INTERNAL;case X.UNAVAILABLE:return P.UNAVAILABLE;case X.UNAUTHENTICATED:return P.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case X.NOT_FOUND:return P.NOT_FOUND;case X.ALREADY_EXISTS:return P.ALREADY_EXISTS;case X.PERMISSION_DENIED:return P.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case X.ABORTED:return P.ABORTED;case X.OUT_OF_RANGE:return P.OUT_OF_RANGE;case X.UNIMPLEMENTED:return P.UNIMPLEMENTED;case X.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(L=X||(X={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ds([4294967295,4294967295],0);class ll{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ul(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function hl(r,t){return gr(r,t.toTimestamp())}function ee(r){return W(!!r),K.fromTimestamp(function(e){const i=Ht(e);return new Z(i.seconds,i.nanos)}(r))}function Gs(r,t){return _r(r,t).canonicalString()}function _r(r,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function cl(r){const t=Q.fromString(r);return W(El(t)),t}function yr(r,t){return Gs(r.databaseId,t.path)}function fl(r){const t=cl(r);return t.length===4?Q.emptyPath():pl(t)}function dl(r){return new Q(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function pl(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zi(r,t,e){return{name:yr(r,t),fields:e.value.mapValue.fields}}function ml(r,t){let e;if(t instanceof qe)e={update:Zi(r,t.key,t.value)};else if(t instanceof Ks)e={delete:yr(r,t.key)};else if(t instanceof Wt)e={update:Zi(r,t.key,t.data),updateMask:yl(t.fieldMask)};else{if(!(t instanceof rl))return M();e={verify:yr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(a,u){const c=u.transform;if(c instanceof Le)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Fe)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ue)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:hl(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:M()}(r,t.precondition)),e}function gl(r,t){return r&&r.length>0?(W(t!==void 0),r.map(e=>function(s,a){let u=s.updateTime?ee(s.updateTime):ee(a);return u.isEqual(K.min())&&(u=ee(a)),new tl(u,s.transformResults||[])}(e,t))):[]}function _l(r){let t=fl(r.parent);const e=r.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){W(i===1);const A=e.from[0];A.allDescendants?s=A.collectionId:t=t.child(A.collectionId)}let a=[];e.where&&(a=function(w){const S=zs(w);return S instanceof Mt&&Ss(S)?S.getFilters():[S]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(S=>function(k){return new wn(te(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,Tr(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,C=w.values||[];return new In(C,S)}(e.startAt));let _=null;return e.endAt&&(_=function(w){const S=!w.before,C=w.values||[];return new In(C,S)}(e.endAt)),Fa(t,s,u,a,c,"F",f,_)}function zs(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=te(e.unaryFilter.field);return J.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=te(e.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=te(e.unaryFilter.field);return J.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=te(e.unaryFilter.field);return J.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return J.create(te(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(i=>zs(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function te(r){return rt.fromServerFormat(r.fieldPath)}function yl(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function El(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t){this.ct=t}}function Tl(r){const t=_l({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?mr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.un=new Il}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(xt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(xt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Il{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new ft(Q.comparator),a=!s.has(i);return this.index[e]=s.add(i),a}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ft(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new oe(0)}static kn(){return new oe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.changes=new le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Ne(i.mutation,s,Tt.empty(),Z.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ct()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ct()){const s=$t();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(a=>{let u=pn();return a.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=$t();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ct()))}populateOverlays(t,e,i){const s=[];return i.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let a=Rn();const u=ke(),c=function(){return ke()}();return e.forEach((f,_)=>{const A=i.get(_.key);s.has(_.key)&&(A===void 0||A.mutation instanceof Wt)?a=a.insert(_.key,_):A!==void 0?(u.set(_.key,A.mutation.getFieldMask()),Ne(A.mutation,_,A.mutation.getFieldMask(),Z.now())):u.set(_.key,Tt.empty())}),this.recalculateAndSaveOverlays(t,a).next(f=>(f.forEach((_,A)=>u.set(_,A)),e.forEach((_,A)=>{var w;return c.set(_,new Rl(A,(w=u.get(_))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=ke();let s=new gt((u,c)=>u-c),a=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const _=e.get(f);if(_===null)return;let A=i.get(f)||Tt.empty();A=c.applyToLocalView(_,A),i.set(f,A);const w=(s.get(c.batchId)||ct()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),_=f.key,A=f.value,w=Ms();A.forEach(S=>{if(!a.has(S)){const C=qs(e.get(S),i.get(S));C!==null&&w.set(S,C),a=a.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(t,_,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ba(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-a.size):R.resolve($t());let c=-1,f=a;return u.next(_=>R.forEach(_,(A,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),a.get(A)?R.resolve():this.remoteDocumentCache.getEntry(t,A).next(S=>{f=f.insert(A,S)}))).next(()=>this.populateOverlays(t,_,a)).next(()=>this.computeViews(t,f,_,ct())).next(A=>({batchId:c,changes:xs(A)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=pn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const a=e.collectionGroup;let u=pn();return this.indexManager.getCollectionParents(t,a).next(c=>R.forEach(c,f=>{const _=function(w,S){return new Dn(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(a));return this.getDocumentsMatchingCollectionQuery(t,_,i,s).next(A=>{A.forEach((w,S)=>{u=u.insert(w,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,a,s))).next(u=>{a.forEach((f,_)=>{const A=_.getKey();u.get(A)===null&&(u=u.insert(A,Et.newInvalidDocument(A)))});let c=pn();return u.forEach((f,_)=>{const A=a.get(f);A!==void 0&&Ne(A.mutation,_,Tt.empty(),Z.now()),Pr(e,_)&&(c=c.insert(f,_))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ee(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Tl(s.bundledQuery),readTime:ee(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.overlays=new gt(O.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=$t();return R.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,a)=>{this.ht(t,e,a)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=$t(),a=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,_=f.getKey();if(!e.isPrefixOf(_.path))break;_.path.length===a&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let a=new gt((_,A)=>_-A);const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===e&&_.largestBatchId>i){let A=a.get(_.largestBatchId);A===null&&(A=$t(),a=a.insert(_.largestBatchId,A)),A.set(_.getKey(),_)}}const c=$t(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((_,A)=>c.set(_,A)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new sl(e,i));let a=this.Ir.get(e);a===void 0&&(a=ct(),this.Ir.set(e,a)),this.Ir.set(e,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.Tr=new ft(Y.Er),this.dr=new ft(Y.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new Y(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new Y(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new O(new Q([])),i=new Y(e,t),s=new Y(e,t+1),a=[];return this.dr.forEachInRange([i,s],u=>{this.Vr(u),a.push(u.key)}),a}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new Q([])),i=new Y(e,t),s=new Y(e,t+1);let a=ct();return this.dr.forEachInRange([i,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Y(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Y{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||B(t.wr,e.wr)}static Ar(t,e){return B(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ft(Y.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const a=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new il(a,e,i,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new Y(c.key,a)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),a=s<0?0:s;return R.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Y(e,0),s=new Y(e,Number.POSITIVE_INFINITY),a=[];return this.br.forEachInRange([i,s],u=>{const c=this.Dr(u.wr);a.push(c)}),R.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ft(B);return e.forEach(s=>{const a=new Y(s,0),u=new Y(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([a,u],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let a=i;O.isDocumentKey(a)||(a=a.child(""));const u=new Y(new O(a),0);let c=new ft(B);return this.br.forEachWhile(f=>{const _=f.key.path;return!!i.isPrefixOf(_)&&(_.length===s&&(c=c.add(f.wr)),!0)},u),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const a=new Y(s.key,e.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new Y(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this.Mr=t,this.docs=function(){return new gt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),a=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let i=Rn();return e.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():Et.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let a=Rn();const u=e.path,c=new O(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:_,value:{document:A}}=f.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||ya(_a(A),i)<=0||(s.has(A.key)||Pr(e,A))&&(a=a.insert(A.key,A.mutableCopy()))}return R.resolve(a)}getAllFromCollectionGroup(t,e,i,s){M()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Nl(this)}getSize(t){return R.resolve(this.size)}}class Nl extends wl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this.persistence=t,this.Nr=new le(e=>wr(e),Rr),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cr,this.targetCount=0,this.kr=oe.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new oe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const a=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(u),a.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(a).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e){this.qr={},this.overlays={},this.Qr=new As(0),this.Kr=!1,this.Kr=!0,this.$r=new Cl,this.referenceDelegate=t(this),this.Ur=new bl(this),this.indexManager=new Al,this.remoteDocumentCache=function(s){return new kl(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new vl(e),this.Gr=new Vl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new Dl(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new xl(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(a=>this.referenceDelegate.jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class xl extends va{constructor(t){super(),this.currentSequenceNumber=t}}class Dr{constructor(t){this.persistence=t,this.Jr=new Cr,this.Yr=null}static Zr(t){return new Dr(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.Xr.add(a.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=O.fromPath(i);return this.ei(t,s).next(a=>{a||e.removeEntry(s,K.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ct(),s=ct();for(const a of e.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new kr(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sa()?8:Ta(oa())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const a={result:null};return this.Yi(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Zi(t,e,s,i).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new Ml;return this.Xi(t,e,u).next(c=>{if(a.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>a.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(Pe()<=bt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ve(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Pe()<=bt.DEBUG&&D("QueryEngine","Query:",Ve(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(Pe()<=bt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ve(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gt(e))):R.resolve())}Yi(t,e){if(Hi(e))return R.resolve(null);let i=Gt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mr(e,null,"F"),i=Gt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(a=>{const u=ct(...a);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const _=this.ts(e,c);return this.ns(e,_,u,f.readTime)?this.Yi(t,mr(e,null,"F")):this.rs(t,_,e,f)}))})))}Zi(t,e,i,s){return Hi(e)||s.isEqual(K.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(a=>{const u=this.ts(e,a);return this.ns(e,u,i,s)?R.resolve(null):(Pe()<=bt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ve(e)),this.rs(t,u,e,ga(s,-1)).next(c=>c))})}ts(t,e){let i=new ft(qa(t));return e.forEach((s,a)=>{Pr(t,a)&&(i=i.add(a))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Xi(t,e,i){return Pe()<=bt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ve(e)),this.Ji.getDocumentsMatchingQuery(t,e,xt.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new gt(B),this._s=new le(a=>wr(a),Rr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Ul(r,t,e,i){return new Fl(r,t,e,i)}async function Qs(r,t){const e=j(r);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(a=>{const u=[],c=[];let f=ct();for(const _ of s){u.push(_.batchId);for(const A of _.mutations)f=f.add(A.key)}for(const _ of a){c.push(_.batchId);for(const A of _.mutations)f=f.add(A.key)}return e.localDocuments.getDocuments(i,f).next(_=>({hs:_,removedBatchIds:u,addedBatchIds:c}))})})}function Bl(r,t){const e=j(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),a=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,f,_,A){const w=_.batch,S=w.keys();let C=R.resolve();return S.forEach(k=>{C=C.next(()=>A.getEntry(f,k)).next(x=>{const N=_.docVersions.get(k);W(N!==null),x.version.compareTo(N)<0&&(w.applyToRemoteDocument(x,_),x.isValidDocument()&&(x.setReadTime(_.commitVersion),A.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,a).next(()=>a.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ct();for(let _=0;_<c.mutationResults.length;++_)c.mutationResults[_].transformResults.length>0&&(f=f.add(c.batch.mutations[_].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function jl(r){const t=j(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ql(r,t){const e=j(r);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class ts{constructor(){this.activeTargetIds=Ha()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $l{constructor(){this.so=new ts,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ts,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn=null;function lr(){return mn===null?mn=function(){return 268435456+Math.round(2147483648*Math.random())}():mn++,"0x"+mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class Ql extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${a}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Fo(){return!1}Mo(e,i,s,a,u){const c=lr(),f=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const _={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(_,a,u),this.No(e,f,_,s).then(A=>(D("RestConnection",`Received RPC '${e}' ${c}: `,A),A),A=>{throw En("RestConnection",`RPC '${e}' ${c} failed with error: `,A,"url: ",f,"request:",s),A})}Lo(e,i,s,a,u,c){return this.Mo(e,i,s,a,u)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ae}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,u)=>e[u]=a),s&&s.headers.forEach((a,u)=>e[u]=a)}xo(e,i){const s=Gl[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const a=lr();return new Promise((u,c)=>{const f=new ps;f.setWithCredentials(!0),f.listenOnce(ms.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case gn.NO_ERROR:const A=f.getResponseJson();D(ut,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(A)),u(A);break;case gn.TIMEOUT:D(ut,`RPC '${t}' ${a} timed out`),c(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case gn.HTTP_ERROR:const w=f.getStatus();if(D(ut,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const k=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(C.status);c(new b(k,C.message))}else c(new b(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new b(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(ut,`RPC '${t}' ${a} completed.`)}});const _=JSON.stringify(s);D(ut,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",_,i,15)})}Bo(t,e,i){const s=lr(),a=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ys(),c=_s(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(f.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const A=a.join("");D(ut,`Creating RPC '${t}' stream ${s}: ${A}`,f);const w=u.createWebChannel(A,f);let S=!1,C=!1;const k=new zl({Io:N=>{C?D(ut,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(D(ut,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),D(ut,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},To:()=>w.close()}),x=(N,G,$)=>{N.listen(G,H=>{try{$(H)}catch(it){setTimeout(()=>{throw it},0)}})};return x(w,Se.EventType.OPEN,()=>{C||(D(ut,`RPC '${t}' stream ${s} transport opened.`),k.yo())}),x(w,Se.EventType.CLOSE,()=>{C||(C=!0,D(ut,`RPC '${t}' stream ${s} transport closed`),k.So())}),x(w,Se.EventType.ERROR,N=>{C||(C=!0,En(ut,`RPC '${t}' stream ${s} transport errored:`,N),k.So(new b(P.UNAVAILABLE,"The operation could not be completed")))}),x(w,Se.EventType.MESSAGE,N=>{var G;if(!C){const $=N.data[0];W(!!$);const H=$,it=H.error||((G=H[0])===null||G===void 0?void 0:G.error);if(it){D(ut,`RPC '${t}' stream ${s} received error:`,it);const Ft=it.status;let mt=function(m){const g=X[m];if(g!==void 0)return al(g)}(Ft),E=it.message;mt===void 0&&(mt=P.INTERNAL,E="Unknown error status: "+Ft+" with message "+it.message),C=!0,k.So(new b(mt,E)),w.close()}else D(ut,`RPC '${t}' stream ${s} received:`,$),k.bo($)}}),x(c,gs.STAT_EVENT,N=>{N.stat===cr.PROXY?D(ut,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===cr.NOPROXY&&D(ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function ur(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(r){return new ll(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e,i=1e3,s=1.5,a=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e,i,s,a,u,c,f){this.ui=t,this.Ho=i,this.Jo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hs(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new b(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wl extends Hl{constructor(t,e,i,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=a}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return W(!!t.streamToken),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gl(t.writeResults,t.commitTime),i=ee(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=dl(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>ml(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Mo(t,_r(e,i),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new b(P.UNKNOWN,a.toString())})}Lo(t,e,i,s,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,_r(e,i),s,u,c,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(P.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Yl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qt(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,i,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=a,this.k_._o(u=>{i.enqueueAndForget(async()=>{Ke(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const _=j(f);_.L_.add(4),await $e(_),_.q_.set("Unknown"),_.L_.delete(4),await On(_)}(this))})}),this.q_=new Yl(i,s)}}async function On(r){if(Ke(r))for(const t of r.B_)await t(!0)}async function $e(r){for(const t of r.B_)await t(!1)}function Ke(r){return j(r).L_.size===0}async function Ws(r,t,e){if(!Cn(t))throw t;r.L_.add(1),await $e(r),r.q_.set("Offline"),e||(e=()=>jl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await On(r)})}function Xs(r,t){return t().catch(e=>Ws(r,e,t))}async function xn(r){const t=j(r),e=Lt(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Zl(t);)try{const s=await ql(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,tu(t,s)}catch(s){await Ws(t,s)}Ys(t)&&Js(t)}function Zl(r){return Ke(r)&&r.O_.length<10}function tu(r,t){r.O_.push(t);const e=Lt(r);e.r_()&&e.V_&&e.m_(t.mutations)}function Ys(r){return Ke(r)&&!Lt(r).n_()&&r.O_.length>0}function Js(r){Lt(r).start()}async function eu(r){Lt(r).p_()}async function nu(r){const t=Lt(r);for(const e of r.O_)t.m_(e.mutations)}async function ru(r,t,e){const i=r.O_.shift(),s=Sr.from(i,t,e);await Xs(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await xn(r)}async function iu(r,t){t&&Lt(r).V_&&await async function(i,s){if(function(u){return ol(u)&&u!==P.ABORTED}(s.code)){const a=i.O_.shift();Lt(i).s_(),await Xs(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await xn(i)}}(r,t),Ys(r)&&Js(r)}async function ns(r,t){const e=j(r);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=Ke(e);e.L_.add(3),await $e(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await On(e)}async function su(r,t){const e=j(r);t?(e.L_.delete(2),await On(e)):t||(e.L_.add(2),await $e(e),e.q_.set("Unknown"))}function Lt(r){return r.U_||(r.U_=function(e,i,s){const a=j(e);return a.w_(),new Wl(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eu.bind(null,r),mo:iu.bind(null,r),f_:nu.bind(null,r),g_:ru.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await xn(r)):(await r.U_.stop(),r.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,i,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,a){const u=Date.now()+i,c=new Nr(t,e,u,s,a);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(r,t){if(Qt("AsyncQueue",`${t}: ${r}`),Cn(r))return new b(P.UNAVAILABLE,`${t}: ${r}`);throw r}class ou{constructor(){this.queries=rs(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=j(e),a=s.queries;s.queries=rs(),a.forEach((u,c)=>{for(const f of c.j_)f.onError(i)})})(this,new b(P.ABORTED,"Firestore shutting down"))}}function rs(){return new le(r=>bs(r),Ns)}function au(r){r.Y_.forEach(t=>{t.next()})}var is,ss;(ss=is||(is={})).ea="default",ss.Cache="cache";class lu{constructor(t,e,i,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new le(c=>bs(c),Ns),this.Ma=new Map,this.xa=new Set,this.Oa=new gt(O.comparator),this.Na=new Map,this.La=new Cr,this.Ba={},this.ka=new Map,this.qa=oe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uu(r,t,e){const i=du(r);try{const s=await function(u,c){const f=j(u),_=Z.now(),A=c.reduce((C,k)=>C.add(k.key),ct());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Rn(),x=ct();return f.cs.getEntries(C,A).next(N=>{k=N,k.forEach((G,$)=>{$.isValidDocument()||(x=x.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,k)).next(N=>{w=N;const G=[];for(const $ of c){const H=nl($,w.get($.key).overlayedDocument);H!=null&&G.push(new Wt($.key,H,Rs(H.value.mapValue),Vt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,_,G,c)}).next(N=>{S=N;const G=N.applyToLocalDocumentSet(w,x);return f.documentOverlayCache.saveOverlays(C,N.batchId,G)})}).then(()=>({batchId:S.batchId,changes:xs(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let _=u.Ba[u.currentUser.toKey()];_||(_=new gt(B)),_=_.insert(c,f),u.Ba[u.currentUser.toKey()]=_}(i,s.batchId,e),await Mn(i,s.changes),await xn(i.remoteStore)}catch(s){const a=Zs(s,"Failed to persist write");e.reject(a)}}function os(r,t,e){const i=j(r);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((a,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=j(u);f.onlineState=c;let _=!1;f.queries.forEach((A,w)=>{for(const S of w.j_)S.Z_(c)&&(_=!0)}),_&&au(f)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function hu(r,t){const e=j(r),i=t.batch.batchId;try{const s=await Bl(e.localStore,t);eo(e,i,null),to(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Mn(e,s)}catch(s){await Ts(s)}}async function cu(r,t,e){const i=j(r);try{const s=await function(u,c){const f=j(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let A;return f.mutationQueue.lookupMutationBatch(_,c).next(w=>(W(w!==null),A=w.keys(),f.mutationQueue.removeMutationBatch(_,w))).next(()=>f.mutationQueue.performConsistencyCheck(_)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(_,A,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,A)).next(()=>f.localDocuments.getDocuments(_,A))})}(i.localStore,t);eo(i,t,e),to(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Mn(i,s)}catch(s){await Ts(s)}}function to(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function eo(r,t,e){const i=j(r);let s=i.Ba[i.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function Mn(r,t,e){const i=j(r),s=[],a=[],u=[];i.Fa.isEmpty()||(i.Fa.forEach((c,f)=>{u.push(i.Ka(f,t,e).then(_=>{var A;if((_||e)&&i.isPrimaryClient){const w=_?!_.fromCache:(A=void 0)===null||A===void 0?void 0:A.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(_){s.push(_);const w=kr.Wi(f.targetId,_);a.push(w)}}))}),await Promise.all(u),i.Ca.d_(s),await async function(f,_){const A=j(f);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(_,S=>R.forEach(S.$i,C=>A.persistence.referenceDelegate.addReference(w,S.targetId,C)).next(()=>R.forEach(S.Ui,C=>A.persistence.referenceDelegate.removeReference(w,S.targetId,C)))))}catch(w){if(!Cn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of _){const S=w.targetId;if(!w.fromCache){const C=A.os.get(S),k=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(k);A.os=A.os.insert(S,x)}}}(i.localStore,a))}async function fu(r,t){const e=j(r);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Qs(e.localStore,t);e.currentUser=t,function(a,u){a.ka.forEach(c=>{c.forEach(f=>{f.reject(new b(P.CANCELLED,u))})}),a.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Mn(e,i.hs)}}function du(r){const t=j(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cu.bind(null,t),t}class Vn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=bn(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Ul(this.persistence,new Ll,t.initialUser,this.serializer)}Ga(t){return new Ol(Dr.Zr,this.serializer)}Wa(t){return new $l}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vn.provider={build:()=>new Vn};class Er{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>os(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fu.bind(null,this.syncEngine),await su(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ou}()}createDatastore(t){const e=bn(t.databaseInfo.databaseId),i=function(a){return new Ql(a)}(t.databaseInfo);return function(a,u,c,f){return new Xl(a,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,a,u,c){return new Jl(i,s,a,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>os(this.syncEngine,e,0),function(){return es.D()?new es:new Kl}())}createSyncEngine(t,e){return function(s,a,u,c,f,_,A){const w=new lu(s,a,u,c,f,_);return A&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const a=j(s);D("RemoteStore","RemoteStore shutting down."),a.L_.add(5),await $e(a),a.k_.shutdown(),a.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Er.provider={build:()=>new Er};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e,i,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=vs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Zs(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function hr(r,t){r.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let i=e.initialUser;r.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Qs(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function as(r,t){r.asyncQueue.verifyOperationInProgress();const e=await mu(r);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(i=>ns(t.remoteStore,i)),r.setAppCheckTokenChangeListener((i,s)=>ns(t.remoteStore,s)),r._onlineComponents=t}async function mu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await hr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;En("Error using user provided cache. Falling back to memory cache: "+e),await hr(r,new Vn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await hr(r,new Vn);return r._offlineComponents}async function gu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await as(r,r._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await as(r,new Er))),r._onlineComponents}function _u(r){return gu(r).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(r,t,e){if(!e)throw new b(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function yu(r,t,e,i){if(t===!0&&i===!0)throw new b(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function us(r){if(!O.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function hs(r){if(O.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function br(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function io(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=br(r);throw new b(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=no((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ln{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new aa;switch(i.type){case"firstParty":return new ca(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=ls.get(e);i&&(D("ComponentProvider","Removing Datastore"),ls.delete(e),i.terminate())}(this),Promise.resolve()}}function Eu(r,t,e,i={}){var s;const a=(r=io(r,Ln))._getSettings(),u=`${t}:${e}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ht.MOCK_USER;else{c=ta(i.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ht(_)}r._authCredentials=new la(new Es(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Or(this.firestore,t,this._query)}}class St{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class Ot extends Or{constructor(t,e,i){super(t,e,Ua(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new O(t))}withConverter(t){return new Ot(this.firestore,t,this._path)}}function Fu(r,t,...e){if(r=be(r),ro("collection","path",t),r instanceof Ln){const i=Q.fromString(t,...e);return hs(i),new Ot(r,null,i)}{if(!(r instanceof St||r instanceof Ot))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Q.fromString(t,...e));return hs(i),new Ot(r.firestore,null,i)}}function vu(r,t,...e){if(r=be(r),arguments.length===1&&(t=vs.newId()),ro("doc","path",t),r instanceof Ln){const i=Q.fromString(t,...e);return us(i),new St(r,null,new O(i))}{if(!(r instanceof St||r instanceof Ot))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Q.fromString(t,...e));return us(i),new St(r.firestore,r instanceof Ot?r.converter:null,new O(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hs(this,"async_queue_retry"),this.Vu=()=>{const i=ur();i&&D("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ur();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Kt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Cn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw Qt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Nr.createAndSchedule(this,t,e,i,a=>this.yu(a));return this.Tu.push(s),s}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class so extends Ln{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new fs,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new fs(t),this._firestoreClient=void 0,await t}}}function Uu(r,t){const e=typeof r=="object"?r:Xo(),i=typeof r=="string"?r:t||"(default)",s=Yo(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=Jo("firestore");a&&Eu(s,...a)}return s}function Tu(r){if(r._terminated)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Au(r),r._firestoreClient}function Au(r){var t,e,i;const s=r._freezeSettings(),a=function(c,f,_,A){return new Ra(c,f,_,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,no(A.experimentalLongPollingOptions),A.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new pu(r._authCredentials,r._appCheckCredentials,r._queue,a,r._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Be(At.fromBase64String(t))}catch(e){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Be(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=/^__.*__$/;class wu{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Wt(t,this.data,this.fieldMask,e,this.fieldTransforms):new qe(t,this.data,e,this.fieldTransforms)}}function uo(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Mr{constructor(t,e,i,s,a,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.vu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Mr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.Ou(t),s}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Sn(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(uo(this.Cu)&&Iu.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Ru{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||bn(t)}Qu(t,e,i,s=!1){return new Mr({Cu:t,methodName:e,qu:i,path:rt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pu(r){const t=r._freezeSettings(),e=bn(r._databaseId);return new Ru(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Vu(r,t,e,i,s,a={}){const u=r.Qu(a.merge||a.mergeFields?2:0,t,e,s);po("Data must be an object, but it was:",u,i);const c=co(i,u);let f,_;if(a.merge)f=new Tt(u.fieldMask),_=u.fieldTransforms;else if(a.mergeFields){const A=[];for(const w of a.mergeFields){const S=Su(t,w,e);if(!u.contains(S))throw new b(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);ku(A,S)||A.push(S)}f=new Tt(A),_=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,_=u.fieldTransforms;return new wu(new vt(c),f,_)}class Lr extends xr{_toFieldTransform(t){return new Ja(t.path,new Le)}isEqual(t){return t instanceof Lr}}function ho(r,t){if(fo(r=be(r)))return po("Unsupported field value:",t,r),co(r,t);if(r instanceof xr)return function(i,s){if(!uo(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,s){const a=[];let u=0;for(const c of i){let f=ho(c,s.Lu(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(r,t)}return function(i,s){if((i=be(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Wa(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Z.fromDate(i);return{timestampValue:gr(s.serializer,a)}}if(i instanceof Z){const a=new Z(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:gr(s.serializer,a)}}if(i instanceof ao)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Be)return{bytesValue:ul(s.serializer,i._byteString)};if(i instanceof St){const a=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(a))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Gs(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof lo)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Bu("VectorValues must only contain numeric values.");return Vr(c.serializer,f)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${br(i)}`)}(r,t)}function co(r,t){const e={};return Is(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):je(r,(i,s)=>{const a=ho(s,t.Mu(i));a!=null&&(e[i]=a)}),{mapValue:{fields:e}}}function fo(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof ao||r instanceof Be||r instanceof St||r instanceof xr||r instanceof lo)}function po(r,t,e){if(!fo(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=br(e);throw i==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+i)}}function Su(r,t,e){if((t=be(t))instanceof oo)return t._internalPath;if(typeof t=="string")return Du(r,t);throw Sn("Field path arguments must be of type string or ",r,!1,void 0,e)}const Cu=new RegExp("[~\\*/\\[\\]]");function Du(r,t,e){if(t.search(Cu)>=0)throw Sn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new oo(...t.split("."))._internalPath}catch{throw Sn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Sn(r,t,e,i,s){const a=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new b(P.INVALID_ARGUMENT,c+r+f)}function ku(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(r,t,e){let i;return i=r?r.toFirestore(t):t,i}function Bu(r,t){const e=io(r.firestore,so),i=vu(r),s=Nu(r.converter,t);return bu(e,[Vu(Pu(r.firestore),"addDoc",i._key,s,r.converter!==null,{}).toMutation(i._key,Vt.exists(!1))]).then(()=>i)}function bu(r,t){return function(i,s){const a=new Kt;return i.asyncQueue.enqueueAndForget(async()=>uu(await _u(i),s,a)),a.promise}(Tu(r),t)}function ju(){return new Lr("serverTimestamp")}(function(t,e=!0){(function(s){ae=s})(na),ra(new ia("firestore",(i,{instanceIdentifier:s,options:a})=>{const u=i.getProvider("app").getImmediate(),c=new so(new ua(i.getProvider("auth-internal")),new da(i.getProvider("app-check-internal")),function(_,A){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(_.options.projectId,A)}(u,s),u);return a=Object.assign({useFetchStreams:e},a),c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Fi(Bi,"4.7.3",t),Fi(Bi,"4.7.3","esm2017")})();export{Be as Bytes,Ot as CollectionReference,St as DocumentReference,oo as FieldPath,xr as FieldValue,so as Firestore,b as FirestoreError,ao as GeoPoint,Or as Query,Z as Timestamp,lo as VectorValue,vs as _AutoId,At as _ByteString,An as _DatabaseId,O as _DocumentKey,aa as _EmptyAuthCredentialsProvider,rt as _FieldPath,io as _cast,En as _logWarn,yu as _validateIsNotUsedTogether,Bu as addDoc,Fu as collection,Eu as connectFirestoreEmulator,vu as doc,Tu as ensureFirestoreConfigured,bu as executeWrite,Uu as getFirestore,ju as serverTimestamp};
