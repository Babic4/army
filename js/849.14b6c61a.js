(self["webpackChunkarmy_app"]=self["webpackChunkarmy_app"]||[]).push([[849],{874:function(t){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},818:function(t,e,n){var r=n(874),s=n(851),i=Object.hasOwnProperty,o=Object.create(null);for(var a in r)i.call(r,a)&&(o[r[a]]=a);var c=t.exports={to:{},get:{}};function u(t,e,n){return Math.min(Math.max(e,t),n)}function l(t){var e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}c.get=function(t){var e,n,r=t.substring(0,3).toLowerCase();switch(r){case"hsl":e=c.get.hsl(t),n="hsl";break;case"hwb":e=c.get.hwb(t),n="hwb";break;default:e=c.get.rgb(t),n="rgb";break}return e?{model:n,value:e}:null},c.get.rgb=function(t){if(!t)return null;var e,n,s,o=/^#([a-f0-9]{3,4})$/i,a=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,c=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,l=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,h=/^(\w+)$/,d=[0,0,0,1];if(e=t.match(a)){for(s=e[2],e=e[1],n=0;n<3;n++){var f=2*n;d[n]=parseInt(e.slice(f,f+2),16)}s&&(d[3]=parseInt(s,16)/255)}else if(e=t.match(o)){for(e=e[1],s=e[3],n=0;n<3;n++)d[n]=parseInt(e[n]+e[n],16);s&&(d[3]=parseInt(s+s,16)/255)}else if(e=t.match(c)){for(n=0;n<3;n++)d[n]=parseInt(e[n+1],0);e[4]&&(e[5]?d[3]=.01*parseFloat(e[4]):d[3]=parseFloat(e[4]))}else{if(!(e=t.match(l)))return(e=t.match(h))?"transparent"===e[1]?[0,0,0,0]:i.call(r,e[1])?(d=r[e[1]],d[3]=1,d):null:null;for(n=0;n<3;n++)d[n]=Math.round(2.55*parseFloat(e[n+1]));e[4]&&(e[5]?d[3]=.01*parseFloat(e[4]):d[3]=parseFloat(e[4]))}for(n=0;n<3;n++)d[n]=u(d[n],0,255);return d[3]=u(d[3],0,1),d},c.get.hsl=function(t){if(!t)return null;var e=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=t.match(e);if(n){var r=parseFloat(n[4]),s=(parseFloat(n[1])%360+360)%360,i=u(parseFloat(n[2]),0,100),o=u(parseFloat(n[3]),0,100),a=u(isNaN(r)?1:r,0,1);return[s,i,o,a]}return null},c.get.hwb=function(t){if(!t)return null;var e=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=t.match(e);if(n){var r=parseFloat(n[4]),s=(parseFloat(n[1])%360+360)%360,i=u(parseFloat(n[2]),0,100),o=u(parseFloat(n[3]),0,100),a=u(isNaN(r)?1:r,0,1);return[s,i,o,a]}return null},c.to.hex=function(){var t=s(arguments);return"#"+l(t[0])+l(t[1])+l(t[2])+(t[3]<1?l(Math.round(255*t[3])):"")},c.to.rgb=function(){var t=s(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},c.to.rgb.percent=function(){var t=s(arguments),e=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),r=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+n+"%, "+r+"%)":"rgba("+e+"%, "+n+"%, "+r+"%, "+t[3]+")"},c.to.hsl=function(){var t=s(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},c.to.hwb=function(){var t=s(arguments),e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},c.to.keyword=function(t){return o[t.slice(0,3)]}},767:function(t,e,n){const r=n(818),s=n(978),i=["keyword","gray","hex"],o={};for(const g of Object.keys(s))o[[...s[g].labels].sort().join("")]=g;const a={};function c(t,e){if(!(this instanceof c))return new c(t,e);if(e&&e in i&&(e=null),e&&!(e in s))throw new Error("Unknown model: "+e);let n,u;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof c)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if("string"===typeof t){const e=r.get(t);if(null===e)throw new Error("Unable to parse color from string: "+t);this.model=e.model,u=s[this.model].channels,this.color=e.value.slice(0,u),this.valpha="number"===typeof e.value[u]?e.value[u]:1}else if(t.length>0){this.model=e||"rgb",u=s[this.model].channels;const n=Array.prototype.slice.call(t,0,u);this.color=p(n,u),this.valpha="number"===typeof t[u]?t[u]:1}else if("number"===typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const e=Object.keys(t);"alpha"in t&&(e.splice(e.indexOf("alpha"),1),this.valpha="number"===typeof t.alpha?t.alpha:0);const r=e.sort().join("");if(!(r in o))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=o[r];const{labels:i}=s[this.model],a=[];for(n=0;n<i.length;n++)a.push(t[i[n]]);this.color=p(a)}if(a[this.model])for(u=s[this.model].channels,n=0;n<u;n++){const t=a[this.model][n];t&&(this.color[n]=t(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}c.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in r.to?this:this.rgb();e=e.round("number"===typeof t?t:1);const n=1===e.valpha?e.color:[...e.color,this.valpha];return r.to[e.model](n)},percentString(t){const e=this.rgb().round("number"===typeof t?t:1),n=1===e.valpha?e.color:[...e.color,this.valpha];return r.to.rgb.percent(n)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=s[this.model],{labels:n}=s[this.model];for(let r=0;r<e;r++)t[n[r]]=this.color[r];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new c([...this.color.map(l(t)),this.valpha],this.model)},alpha(t){return void 0!==t?new c([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:h("rgb",0,d(255)),green:h("rgb",1,d(255)),blue:h("rgb",2,d(255)),hue:h(["hsl","hsv","hsl","hwb","hcg"],0,(t=>(t%360+360)%360)),saturationl:h("hsl",1,d(100)),lightness:h("hsl",2,d(100)),saturationv:h("hsv",1,d(100)),value:h("hsv",2,d(100)),chroma:h("hcg",1,d(100)),gray:h("hcg",2,d(100)),white:h("hwb",1,d(100)),wblack:h("hwb",2,d(100)),cyan:h("cmyk",0,d(100)),magenta:h("cmyk",1,d(100)),yellow:h("cmyk",2,d(100)),black:h("cmyk",3,d(100)),x:h("xyz",0,d(95.047)),y:h("xyz",1,d(100)),z:h("xyz",2,d(108.833)),l:h("lab",0,d(100)),a:h("lab",1),b:h("lab",2),keyword(t){return void 0!==t?new c(t):s[this.model].keyword(this.color)},hex(t){return void 0!==t?new c(t):r.to.hex(this.rgb().round().color)},hexa(t){if(void 0!==t)return new c(t);const e=this.rgb().round().color;let n=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===n.length&&(n="0"+n),r.to.hex(e)+n},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,e=[];for(const[n,r]of t.entries()){const t=r/255;e[n]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color,e=(2126*t[0]+7152*t[1]+722*t[2])/1e4;return e<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=.3*t[0]+.59*t[1]+.11*t[2];return c.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let n=e.color[0];return n=(n+t)%360,n=n<0?360+n:n,e.color[0]=n,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const n=t.rgb(),r=this.rgb(),s=void 0===e?.5:e,i=2*s-1,o=n.alpha()-r.alpha(),a=((i*o===-1?i:(i+o)/(1+i*o))+1)/2,u=1-a;return c.rgb(a*n.red()+u*r.red(),a*n.green()+u*r.green(),a*n.blue()+u*r.blue(),n.alpha()*s+r.alpha()*(1-s))}};for(const g of Object.keys(s)){if(i.includes(g))continue;const{channels:t}=s[g];c.prototype[g]=function(...t){return this.model===g?new c(this):t.length>0?new c(t,g):new c([...f(s[this.model][g].raw(this.color)),this.valpha],g)},c[g]=function(...e){let n=e[0];return"number"===typeof n&&(n=p(e,t)),new c(n,g)}}function u(t,e){return Number(t.toFixed(e))}function l(t){return function(e){return u(e,t)}}function h(t,e,n){t=Array.isArray(t)?t:[t];for(const r of t)(a[r]||(a[r]=[]))[e]=n;return t=t[0],function(r){let s;return void 0!==r?(n&&(r=n(r)),s=this[t](),s.color[e]=r,s):(s=this[t]().color[e],n&&(s=n(s)),s)}}function d(t){return function(e){return Math.max(0,Math.min(t,e))}}function f(t){return Array.isArray(t)?t:[t]}function p(t,e){for(let n=0;n<e;n++)"number"!==typeof t[n]&&(t[n]=0);return t}t.exports=c},956:function(t,e,n){const r=n(900),s={};for(const a of Object.keys(r))s[r[a]]=a;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=i;for(const a of Object.keys(i)){if(!("channels"in i[a]))throw new Error("missing channels property: "+a);if(!("labels"in i[a]))throw new Error("missing channel labels property: "+a);if(i[a].labels.length!==i[a].channels)throw new Error("channel and label counts mismatch: "+a);const{channels:t,labels:e}=i[a];delete i[a].channels,delete i[a].labels,Object.defineProperty(i[a],"channels",{value:t}),Object.defineProperty(i[a],"labels",{value:e})}function o(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}i.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(e,n,r),i=Math.max(e,n,r),o=i-s;let a,c;i===s?a=0:e===i?a=(n-r)/o:n===i?a=2+(r-e)/o:r===i&&(a=4+(e-n)/o),a=Math.min(60*a,360),a<0&&(a+=360);const u=(s+i)/2;return c=i===s?0:u<=.5?o/(i+s):o/(2-i-s),[a,100*c,100*u]},i.rgb.hsv=function(t){let e,n,r,s,i;const o=t[0]/255,a=t[1]/255,c=t[2]/255,u=Math.max(o,a,c),l=u-Math.min(o,a,c),h=function(t){return(u-t)/6/l+.5};return 0===l?(s=0,i=0):(i=l/u,e=h(o),n=h(a),r=h(c),o===u?s=r-n:a===u?s=1/3+e-r:c===u&&(s=2/3+n-e),s<0?s+=1:s>1&&(s-=1)),[360*s,100*i,100*u]},i.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const s=i.rgb.hsl(t)[0],o=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[s,100*o,100*r]},i.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(1-e,1-n,1-r),i=(1-e-s)/(1-s)||0,o=(1-n-s)/(1-s)||0,a=(1-r-s)/(1-s)||0;return[100*i,100*o,100*a,100*s]},i.rgb.keyword=function(t){const e=s[t];if(e)return e;let n,i=1/0;for(const s of Object.keys(r)){const e=r[s],a=o(t,e);a<i&&(i=a,n=s)}return n},i.keyword.rgb=function(t){return r[t]},i.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const s=.4124*e+.3576*n+.1805*r,i=.2126*e+.7152*n+.0722*r,o=.0193*e+.1192*n+.9505*r;return[100*s,100*i,100*o]},i.rgb.lab=function(t){const e=i.rgb.xyz(t);let n=e[0],r=e[1],s=e[2];n/=95.047,r/=100,s/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const o=116*r-16,a=500*(n-r),c=200*(r-s);return[o,a,c]},i.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let s,i,o;if(0===n)return o=255*r,[o,o,o];s=r<.5?r*(1+n):r+n-r*n;const a=2*r-s,c=[0,0,0];for(let u=0;u<3;u++)i=e+1/3*-(u-1),i<0&&i++,i>1&&i--,o=6*i<1?a+6*(s-a)*i:2*i<1?s:3*i<2?a+(s-a)*(2/3-i)*6:a,c[u]=255*o;return c},i.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,s=n;const i=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,s*=i<=1?i:2-i;const o=(r+n)/2,a=0===r?2*s/(i+s):2*n/(r+n);return[e,100*a,100*o]},i.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const s=Math.floor(e)%6,i=e-Math.floor(e),o=255*r*(1-n),a=255*r*(1-n*i),c=255*r*(1-n*(1-i));switch(r*=255,s){case 0:return[r,c,o];case 1:return[a,r,o];case 2:return[o,r,c];case 3:return[o,a,r];case 4:return[c,o,r];case 5:return[r,o,a]}},i.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,s=Math.max(r,.01);let i,o;o=(2-n)*r;const a=(2-n)*s;return i=n*s,i/=a<=1?a:2-a,i=i||0,o/=2,[e,100*i,100*o]},i.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const s=n+r;let i;s>1&&(n/=s,r/=s);const o=Math.floor(6*e),a=1-r;i=6*e-o,0!==(1&o)&&(i=1-i);const c=n+i*(a-n);let u,l,h;switch(o){default:case 6:case 0:u=a,l=c,h=n;break;case 1:u=c,l=a,h=n;break;case 2:u=n,l=a,h=c;break;case 3:u=n,l=c,h=a;break;case 4:u=c,l=n,h=a;break;case 5:u=a,l=n,h=c;break}return[255*u,255*l,255*h]},i.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,s=t[3]/100,i=1-Math.min(1,e*(1-s)+s),o=1-Math.min(1,n*(1-s)+s),a=1-Math.min(1,r*(1-s)+s);return[255*i,255*o,255*a]},i.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let s,i,o;return s=3.2406*e+-1.5372*n+-.4986*r,i=-.9689*e+1.8758*n+.0415*r,o=.0557*e+-.204*n+1.057*r,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,s=Math.min(Math.max(0,s),1),i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),[255*s,255*i,255*o]},i.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const s=116*n-16,i=500*(e-n),o=200*(n-r);return[s,i,o]},i.lab.xyz=function(t){const e=t[0],n=t[1],r=t[2];let s,i,o;i=(e+16)/116,s=n/500+i,o=i-r/200;const a=i**3,c=s**3,u=o**3;return i=a>.008856?a:(i-16/116)/7.787,s=c>.008856?c:(s-16/116)/7.787,o=u>.008856?u:(o-16/116)/7.787,s*=95.047,i*=100,o*=108.883,[s,i,o]},i.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let s;const i=Math.atan2(r,n);s=360*i/2/Math.PI,s<0&&(s+=360);const o=Math.sqrt(n*n+r*r);return[e,o,s]},i.lch.lab=function(t){const e=t[0],n=t[1],r=t[2],s=r/360*2*Math.PI,i=n*Math.cos(s),o=n*Math.sin(s);return[e,i,o]},i.rgb.ansi16=function(t,e=null){const[n,r,s]=t;let o=null===e?i.rgb.hsv(t)[2]:e;if(o=Math.round(o/50),0===o)return 30;let a=30+(Math.round(s/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===o&&(a+=60),a},i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])},i.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];if(e===n&&n===r)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;const s=16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5);return s},i.ansi16.rgb=function(t){let e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=.5*(1+~~(t>50)),r=(1&e)*n*255,s=(e>>1&1)*n*255,i=(e>>2&1)*n*255;return[r,s,i]},i.ansi256.rgb=function(t){if(t>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;const n=Math.floor(t/36)/5*255,r=Math.floor((e=t%36)/6)/5*255,s=e%6/5*255;return[n,r,s]},i.rgb.hex=function(t){const e=((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2])),n=e.toString(16).toUpperCase();return"000000".substring(n.length)+n},i.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];3===e[0].length&&(n=n.split("").map((t=>t+t)).join(""));const r=parseInt(n,16),s=r>>16&255,i=r>>8&255,o=255&r;return[s,i,o]},i.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.max(Math.max(e,n),r),i=Math.min(Math.min(e,n),r),o=s-i;let a,c;return a=o<1?i/(1-o):0,c=o<=0?0:s===e?(n-r)/o%6:s===n?2+(r-e)/o:4+(e-n)/o,c/=6,c%=1,[360*c,100*o,100*a]},i.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let s=0;return r<1&&(s=(n-.5*r)/(1-r)),[t[0],100*r,100*s]},i.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let s=0;return r<1&&(s=(n-r)/(1-r)),[t[0],100*r,100*s]},i.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(0===n)return[255*r,255*r,255*r];const s=[0,0,0],i=e%1*6,o=i%1,a=1-o;let c=0;switch(Math.floor(i)){case 0:s[0]=1,s[1]=o,s[2]=0;break;case 1:s[0]=a,s[1]=1,s[2]=0;break;case 2:s[0]=0,s[1]=1,s[2]=o;break;case 3:s[0]=0,s[1]=a,s[2]=1;break;case 4:s[0]=o,s[1]=0,s[2]=1;break;default:s[0]=1,s[1]=0,s[2]=a}return c=(1-n)*r,[255*(n*s[0]+c),255*(n*s[1]+c),255*(n*s[2]+c)]},i.hcg.hsv=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);let s=0;return r>0&&(s=e/r),[t[0],100*s,100*r]},i.hcg.hsl=function(t){const e=t[1]/100,n=t[2]/100,r=n*(1-e)+.5*e;let s=0;return r>0&&r<.5?s=e/(2*r):r>=.5&&r<1&&(s=e/(2*(1-r))),[t[0],100*s,100*r]},i.hcg.hwb=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);return[t[0],100*(r-e),100*(1-r)]},i.hwb.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=1-n,s=r-e;let i=0;return s<1&&(i=(r-s)/(1-s)),[t[0],100*s,100*i]},i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},i.gray.hsl=function(t){return[0,0,t[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(t){return[0,100,t[0]]},i.gray.cmyk=function(t){return[0,0,0,t[0]]},i.gray.lab=function(t){return[t[0],0,0]},i.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),n=(e<<16)+(e<<8)+e,r=n.toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(t){const e=(t[0]+t[1]+t[2])/3;return[e/255*100]}},978:function(t,e,n){const r=n(956),s=n(774),i={},o=Object.keys(r);function a(t){const e=function(...e){const n=e[0];return void 0===n||null===n?n:(n.length>1&&(e=n),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}function c(t){const e=function(...e){const n=e[0];if(void 0===n||null===n)return n;n.length>1&&(e=n);const r=t(e);if("object"===typeof r)for(let t=r.length,s=0;s<t;s++)r[s]=Math.round(r[s]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}o.forEach((t=>{i[t]={},Object.defineProperty(i[t],"channels",{value:r[t].channels}),Object.defineProperty(i[t],"labels",{value:r[t].labels});const e=s(t),n=Object.keys(e);n.forEach((n=>{const r=e[n];i[t][n]=c(r),i[t][n].raw=a(r)}))})),t.exports=i},774:function(t,e,n){const r=n(956);function s(){const t={},e=Object.keys(r);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}function i(t){const e=s(),n=[t];e[t].distance=0;while(n.length){const t=n.pop(),s=Object.keys(r[t]);for(let r=s.length,i=0;i<r;i++){const r=s[i],o=e[r];-1===o.distance&&(o.distance=e[t].distance+1,o.parent=t,n.unshift(r))}}return e}function o(t,e){return function(n){return e(t(n))}}function a(t,e){const n=[e[t].parent,t];let s=r[e[t].parent][t],i=e[t].parent;while(e[i].parent)n.unshift(e[i].parent),s=o(r[e[i].parent][i],s),i=e[i].parent;return s.conversion=n,s}t.exports=function(t){const e=i(t),n={},r=Object.keys(e);for(let s=r.length,i=0;i<s;i++){const t=r[i],s=e[t];null!==s.parent&&(n[t]=a(t,e))}return n}},900:function(t){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},851:function(t,e,n){"use strict";var r=n(594),s=Array.prototype.concat,i=Array.prototype.slice,o=t.exports=function(t){for(var e=[],n=0,o=t.length;n<o;n++){var a=t[n];r(a)?e=s.call(e,i.call(a)):e.push(a)}return e};o.wrap=function(t){return function(){return t(o(arguments))}}},594:function(t){t.exports=function(t){return!(!t||"string"===typeof t)&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))}},573:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Vw}});var r=n(252),s=n(577),i=n(963),o=n.p+"media/bridge.8351b852.mp3";const a={ref:"audio"},c=(0,r._)("source",{src:o,type:"audio/mp3"},null,-1),u=[c],l={class:"middle",ref:"middle"},h=(0,r.uE)('<div class="ticker"><div class="ticker-wrapper"><div><div>I will be back in</div><div class="separator"><i class="fas fa-asterisk"></i></div></div><div><div>I will be back in</div><div class="separator"><i class="fas fa-asterisk"></i></div></div><div><div>I will be back in</div><div class="separator"><i class="fas fa-asterisk"></i></div></div></div></div>',1),d={class:"ticker-two"},f=(0,r._)("div",null,"Card me please, Forgis make 'em stop breathin'",-1),p={class:"btn-ticker"},g={key:0,class:"fas fa-play"},m={key:1,class:"fas fa-pause"},y=(0,r._)("div",null,"Got CCs and Louis Vs out of every season",-1),v={class:"btn-ticker"},w={key:0,class:"fas fa-play"},b={key:1,class:"fas fa-pause"},I=(0,r._)("div",null," A couple yachts, they got some thots that trot the seven seas ",-1),E={class:"btn-ticker"},_={key:0,class:"fas fa-play"},T={key:1,class:"fas fa-pause"},k=(0,r._)("div",null,"Look out the window, what do I see?",-1),S={class:"btn-ticker"},C={key:0,class:"fas fa-play"},A={key:1,class:"fas fa-pause"},N=(0,r._)("div",null,"Card me please, Forgis make 'em stop breathin'",-1),D={class:"btn-ticker"},R={key:0,class:"fas fa-play"},O={key:1,class:"fas fa-pause"},M=(0,r._)("div",null,"Got CCs and Louis Vs out of every season",-1),L={class:"btn-ticker"},P={key:0,class:"fas fa-play"},x={key:1,class:"fas fa-pause"},U=(0,r._)("div",null," A couple yachts, they got some thots that trot the seven seas ",-1),V={class:"btn-ticker"},F={key:0,class:"fas fa-play"},j={key:1,class:"fas fa-pause"},B=(0,r._)("div",null,"Look out the window, what do I see?",-1),q={class:"btn-ticker"},$={key:0,class:"fas fa-play"},z={key:1,class:"fas fa-pause"},H={class:"timer-items"},K=["data-text"],G=["data-text"],W=["data-text"],Q=["data-text"],X=(0,r.uE)('<div class="timer-items-text"><div class="timer-item-text" data-text="d">d</div><div class="timer-item-text" data-text="h">h</div><div class="timer-item-text" data-text="m">m</div><div class="timer-item-text" data-text="s">s</div></div>',1),Y={class:"comments-box"},J={class:"bg-form"},Z={key:0,class:"not-auth"},tt=(0,r.Uk)(" To leave a comment "),et=(0,r._)("button",{class:"button b-send",type:"submit"},"Send",-1),nt={class:"comments"};function rt(t,e,n,o,c,rt){const st=(0,r.up)("Header"),it=(0,r.up)("Message"),ot=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("audio",a,u,512),(0,r.Wm)(st),(0,r._)("div",l,[h,(0,r._)("div",d,[(0,r._)("div",{class:(0,s.C_)(["ticker-two-wrapper",[c.isPlay?"pause":"play"]]),onClick:e[0]||(e[0]=(...t)=>rt.playAudio&&rt.playAudio(...t))},[(0,r._)("div",null,[f,(0,r._)("div",p,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",m)):((0,r.wg)(),(0,r.iD)("i",g))]),y,(0,r._)("div",v,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",b)):((0,r.wg)(),(0,r.iD)("i",w))]),I,(0,r._)("div",E,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",T)):((0,r.wg)(),(0,r.iD)("i",_))]),k,(0,r._)("div",S,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",A)):((0,r.wg)(),(0,r.iD)("i",C))])]),(0,r._)("div",null,[N,(0,r._)("div",D,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",O)):((0,r.wg)(),(0,r.iD)("i",R))]),M,(0,r._)("div",L,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",x)):((0,r.wg)(),(0,r.iD)("i",P))]),U,(0,r._)("div",V,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",j)):((0,r.wg)(),(0,r.iD)("i",F))]),B,(0,r._)("div",q,[c.isPlay?((0,r.wg)(),(0,r.iD)("i",z)):((0,r.wg)(),(0,r.iD)("i",$))])])],2)]),(0,r._)("div",{class:(0,s.C_)(["finnaly",c.end?"":"dis-none"]),ref:"finnaly","data-text":"The END."}," The END. ",2),(0,r._)("div",{class:(0,s.C_)(["timer",c.end?"dis-none":""]),ref:"timer"},[(0,r._)("div",H,[(0,r._)("div",{class:"timer-item timer-days","data-text":c.days<10?"0"+c.days:c.days},(0,s.zw)(rt.tDays),9,K),(0,r._)("div",{class:"timer-item timer-hours","data-text":c.hours<10?"0"+c.hours:c.hours},(0,s.zw)(rt.tHours),9,G),(0,r._)("div",{class:"timer-item timer-minutes","data-text":c.minutes<10?"0"+c.minutes:c.minutes},(0,s.zw)(rt.tMinutes),9,W),(0,r._)("div",{class:"timer-item timer-seconds","data-text":c.seconds<10?"0"+c.seconds:c.seconds},(0,s.zw)(rt.tSeconds),9,Q)]),X],2),(0,r._)("div",Y,[(0,r._)("div",J,[o.isLogin?((0,r.wg)(),(0,r.iD)("form",{key:1,onSubmit:e[3]||(e[3]=(0,i.iM)(((...t)=>o.addComment&&o.addComment(...t)),["prevent"])),class:"form-comment"},[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>o.message=t),placeholder:"Comment...",class:"input"},null,512),[[i.nr,o.message]]),et],32)):((0,r.wg)(),(0,r.iD)("div",Z,[tt,(0,r._)("span",{class:"link",onClick:e[1]||(e[1]=(...t)=>o.signIn&&o.signIn(...t))},"Sign In")]))]),(0,r._)("div",nt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.messages,(t=>((0,r.wg)(),(0,r.j4)(it,{key:t.id,data:t,sender:t.userId===o.user?.uid},null,8,["data","sender"])))),128))])])],512),(0,r.Wm)(ot)],64)}const st={class:"header",ref:"header"},it={key:1,class:"auth-box"},ot=["src"];function at(t,e,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",st,[(0,r._)("div",{ref:"logo",class:"logo",style:(0,s.j5)({color:a.getColor})},(0,s.zw)(i.isLogin?a.getColor:"#e36858"),5),i.isLogin?((0,r.wg)(),(0,r.iD)("div",it,[(0,r._)("img",{class:"avatar",style:(0,s.j5)({outline:"3px solid "+a.getColor}),src:i.user.photoURL,alt:"avatar"},null,12,ot),(0,r._)("button",{class:"btn-exit",onClick:e[1]||(e[1]=(...t)=>i.logOut&&i.logOut(...t))},"Sign Out")])):((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn-login",onClick:e[0]||(e[0]=(...t)=>i.signIn&&i.signIn(...t))},"Sign In"))],512)}
/**
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
 */
const ct=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},ut=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},lt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ct(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ut(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ht=function(t){const e=ct(t);return lt.encodeByteArray(e,!0)},dt=function(t){return ht(t).replace(/\./g,"")},ft=function(t){try{return lt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
class pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
/**
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
 */
function gt(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function mt(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function yt(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function vt(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function wt(){return gt().indexOf("Electron/")>=0}function bt(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function It(){return gt().indexOf("MSAppHost/")>=0}function Et(){return"object"===typeof indexedDB}function _t(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
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
 */
const Tt="FirebaseError";class kt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Tt,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?Ct(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new kt(r,o,n);return a}}function Ct(t,e){return t.replace(At,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const At=/\{\$([^}]+)}/g;
/**
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
 */function Nt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(Rt(n)&&Rt(i)){if(!Dt(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Rt(t){return null!==t&&"object"===typeof t}
/**
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
 */function Ot(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mt(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function Lt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */function Pt(t,e){const n=new xt(t,e);return n.subscribe.bind(n)}class xt{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=Ut(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=Vt),void 0===r.error&&(r.error=Vt),void 0===r.complete&&(r.complete=Vt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ut(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function Vt(){}
/**
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
 */
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function Ft(t){return t&&t._delegate?t._delegate:t}class jt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const Bt="[DEFAULT]";
/**
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
 */class qt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new pt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(zt(t))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=Bt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=Bt){return this.instances.has(t)}getOptions(t=Bt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(Fy){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:$t(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(Fy){}return n||null}normalizeInstanceIdentifier(t=Bt){return this.component?this.component.multipleInstances?t:Bt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function $t(t){return t===Bt?void 0:t}function zt(t){return"EAGER"===t.instantiationMode}
/**
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
 */class Ht{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const Kt=[];var Gt;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(Gt||(Gt={}));const Wt={debug:Gt.DEBUG,verbose:Gt.VERBOSE,info:Gt.INFO,warn:Gt.WARN,error:Gt.ERROR,silent:Gt.SILENT},Qt=Gt.INFO,Xt={[Gt.DEBUG]:"log",[Gt.VERBOSE]:"log",[Gt.INFO]:"info",[Gt.WARN]:"warn",[Gt.ERROR]:"error"},Yt=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=Xt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class Jt{constructor(t){this.name=t,this._logLevel=Qt,this._logHandler=Yt,this._userLogHandler=null,Kt.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Gt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?Wt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Gt.DEBUG,...t),this._logHandler(this,Gt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Gt.VERBOSE,...t),this._logHandler(this,Gt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Gt.INFO,...t),this._logHandler(this,Gt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Gt.WARN,...t),this._logHandler(this,Gt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Gt.ERROR,...t),this._logHandler(this,Gt.ERROR,...t)}}const Zt=(t,e)=>e.some((e=>t instanceof e));let te,ee;function ne(){return te||(te=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function re(){return ee||(ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const se=new WeakMap,ie=new WeakMap,oe=new WeakMap,ae=new WeakMap,ce=new WeakMap;function ue(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(ge(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&se.set(e,t)})).catch((()=>{})),ce.set(e,t),e}function le(t){if(ie.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));ie.set(t,e)}let he={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ie.get(t);if("objectStoreNames"===e)return t.objectStoreNames||oe.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ge(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function de(t){he=t(he)}function fe(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?re().includes(t)?function(...e){return t.apply(me(this),e),ge(se.get(this))}:function(...e){return ge(t.apply(me(this),e))}:function(e,...n){const r=t.call(me(this),e,...n);return oe.set(r,e.sort?e.sort():[e]),ge(r)}}function pe(t){return"function"===typeof t?fe(t):(t instanceof IDBTransaction&&le(t),Zt(t,ne())?new Proxy(t,he):t)}function ge(t){if(t instanceof IDBRequest)return ue(t);if(ae.has(t))return ae.get(t);const e=pe(t);return e!==t&&(ae.set(t,e),ce.set(e,t)),e}const me=t=>ce.get(t);function ye(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ge(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(ge(o.result),t.oldVersion,t.newVersion,ge(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const ve=["get","getKey","getAll","getAllKeys","count"],we=["put","add","delete","clear"],be=new Map;function Ie(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(be.get(e))return be.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=we.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!ve.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return be.set(e,i),i}de((t=>({...t,get:(e,n,r)=>Ie(e,n)||t.get(e,n,r),has:(e,n)=>!!Ie(e,n)||t.has(e,n)})));
/**
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
 */
class Ee{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(_e(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function _e(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const Te="@firebase/app",ke="0.7.27",Se=new Jt("@firebase/app"),Ce="@firebase/app-compat",Ae="@firebase/analytics-compat",Ne="@firebase/analytics",De="@firebase/app-check-compat",Re="@firebase/app-check",Oe="@firebase/auth",Me="@firebase/auth-compat",Le="@firebase/database",Pe="@firebase/database-compat",xe="@firebase/functions",Ue="@firebase/functions-compat",Ve="@firebase/installations",Fe="@firebase/installations-compat",je="@firebase/messaging",Be="@firebase/messaging-compat",qe="@firebase/performance",$e="@firebase/performance-compat",ze="@firebase/remote-config",He="@firebase/remote-config-compat",Ke="@firebase/storage",Ge="@firebase/storage-compat",We="@firebase/firestore",Qe="@firebase/firestore-compat",Xe="firebase",Ye="9.8.4",Je="[DEFAULT]",Ze={[Te]:"fire-core",[Ce]:"fire-core-compat",[Ne]:"fire-analytics",[Ae]:"fire-analytics-compat",[Re]:"fire-app-check",[De]:"fire-app-check-compat",[Oe]:"fire-auth",[Me]:"fire-auth-compat",[Le]:"fire-rtdb",[Pe]:"fire-rtdb-compat",[xe]:"fire-fn",[Ue]:"fire-fn-compat",[Ve]:"fire-iid",[Fe]:"fire-iid-compat",[je]:"fire-fcm",[Be]:"fire-fcm-compat",[qe]:"fire-perf",[$e]:"fire-perf-compat",[ze]:"fire-rc",[He]:"fire-rc-compat",[Ke]:"fire-gcs",[Ge]:"fire-gcs-compat",[We]:"fire-fst",[Qe]:"fire-fst-compat","fire-js":"fire-js",[Xe]:"fire-js-all"},tn=new Map,en=new Map;function nn(t,e){try{t.container.addComponent(e)}catch(n){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rn(t){const e=t.name;if(en.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;en.set(e,t);for(const n of tn.values())nn(n,t);return!0}function sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const on={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},an=new St("app","Firebase",on);
/**
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
 */
class cn{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new jt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}
/**
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
 */const un=Ye;function ln(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:Je,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw an.create("bad-app-name",{appName:String(r)});const s=tn.get(r);if(s){if(Dt(t,s.options)&&Dt(n,s.config))return s;throw an.create("duplicate-app",{appName:r})}const i=new Ht(r);for(const a of en.values())i.addComponent(a);const o=new cn(t,n,i);return tn.set(r,o),o}function hn(t=Je){const e=tn.get(t);if(!e)throw an.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=null!==(r=Ze[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Se.warn(t.join(" "))}rn(new jt(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
const fn="firebase-heartbeat-database",pn=1,gn="firebase-heartbeat-store";let mn=null;function yn(){return mn||(mn=ye(fn,pn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gn)}}}).catch((t=>{throw an.create("storage-open",{originalErrorMessage:t.message})}))),mn}async function vn(t){var e;try{const e=await yn();return e.transaction(gn).objectStore(gn).get(bn(t))}catch(n){throw an.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function wn(t,e){var n;try{const n=await yn(),r=n.transaction(gn,"readwrite"),s=r.objectStore(gn);return await s.put(e,bn(t)),r.done}catch(r){throw an.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function bn(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const In=1024,En=2592e6;class _n{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Sn(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Tn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=En})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Tn(),{heartbeatsToSend:e,unsentEntries:n}=kn(this._heartbeatsCache.heartbeats),r=dt(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tn(){const t=new Date;return t.toISOString().substring(0,10)}function kn(t,e=In){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Cn(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Et()&&_t().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await vn(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return wn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return wn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Cn(t){return dt(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function An(t){rn(new jt("platform-logger",(t=>new Ee(t)),"PRIVATE")),rn(new jt("heartbeat",(t=>new _n(t)),"PRIVATE")),dn(Te,ke,t),dn(Te,ke,"esm2017"),dn("fire-js","")}An("");var Nn="firebase",Dn="9.8.4";
/**
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
 */
dn(Nn,Dn,"app");function Rn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]])}return n}Object.create;Object.create;function On(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mn=On,Ln=new St("auth","Firebase",On()),Pn=new Jt("@firebase/auth");function xn(t,...e){Pn.logLevel<=Gt.ERROR&&Pn.error(`Auth (${un}): ${t}`,...e)}
/**
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
 */function Un(t,...e){throw Bn(t,...e)}function Vn(t,...e){return Bn(t,...e)}function Fn(t,e,n){const r=Object.assign(Object.assign({},Mn()),{[e]:n}),s=new St("auth","Firebase",r);return s.create(e,{appName:t.name})}function jn(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Un(t,"argument-error"),Fn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bn(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ln.create(t,...e)}function qn(t,e,...n){if(!t)throw Bn(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xn(e),new Error(e)}function zn(t,e){t||$n(e)}
/**
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
 */const Hn=new Map;function Kn(t){zn(t instanceof Function,"Expected a class definition");let e=Hn.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hn.set(t,e),e)}
/**
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
 */function Gn(t,e){const n=sn(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if(Dt(r,null!==e&&void 0!==e?e:{}))return t;Un(t,"already-initialized")}const r=n.initialize({options:e});return r}function Wn(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
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
 */function Qn(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Xn(){return"http:"===Yn()||"https:"===Yn()}function Yn(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function Jn(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Xn()||yt()||"connection"in navigator))||navigator.onLine}function Zn(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
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
 */class tr{constructor(t,e){this.shortDelay=t,this.longDelay=e,zn(e>t,"Short delay should be less than long delay!"),this.isMobile=mt()||vt()}get(){return Jn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function er(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class nr{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void $n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void $n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void $n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const rr={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},sr=new tr(3e4,6e4);
/**
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
 */function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,s={}){return ar(t,s,(async()=>{let s={},i={};r&&("GET"===e?i=r:s={body:JSON.stringify(r)});const o=Ot(Object.assign({key:t.config.apiKey},i)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),nr.fetch()(ur(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function ar(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rr),e);try{const e=new lr(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw hr(t,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const e=s.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw hr(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw hr(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw hr(t,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Fn(t,a,o);Un(t,a)}}catch(s){if(s instanceof kt)throw s;Un(t,"network-request-failed")}}async function cr(t,e,n,r,s={}){const i=await or(t,e,n,r,s);return"mfaPendingCredential"in i&&Un(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ur(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?er(t.config,s):`${t.config.apiScheme}://${s}`}class lr{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Vn(this.auth,"network-request-failed"))),sr.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function hr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vn(t,e,r);return s.customData._tokenResponse=n,s}
/**
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
 */async function dr(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function fr(t,e){return or(t,"POST","/v1/accounts:lookup",e)}
/**
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
 */function pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
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
 */async function gr(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=yr(r);qn(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"===typeof s.firebase?s.firebase:void 0,o=null===i||void 0===i?void 0:i["sign_in_provider"];return{claims:s,token:r,authTime:pr(mr(s.auth_time)),issuedAtTime:pr(mr(s.iat)),expirationTime:pr(mr(s.exp)),signInProvider:o||null,signInSecondFactor:(null===i||void 0===i?void 0:i["sign_in_second_factor"])||null}}function mr(t){return 1e3*Number(t)}function yr(t){var e;const[n,r,s]=t.split(".");if(void 0===n||void 0===r||void 0===s)return xn("JWT malformed, contained fewer than 3 sections"),null;try{const t=ft(r);return t?JSON.parse(t):(xn("Failed to decode base64 JWT payload"),null)}catch(i){return xn("Caught error parsing JWT payload as JSON",null===(e=i)||void 0===e?void 0:e.toString()),null}}function vr(t){const e=yr(t);return qn(e,"internal-error"),qn("undefined"!==typeof e.exp,"internal-error"),qn("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
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
 */async function wr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&br(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function br({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */class Ir{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Er{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function _r(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wr(t,fr(n,{idToken:r}));qn(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?Sr(i.providerUserInfo):[],a=kr(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Er(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Tr(t){const e=Ft(t);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kr(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function Sr(t){return t.map((t=>{var{providerId:e}=t,n=Rn(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function Cr(t,e){const n=await ar(t,{},(async()=>{const n=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,i=ur(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",nr.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){qn(t.idToken,"internal-error"),qn("undefined"!==typeof t.idToken,"internal-error"),qn("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):vr(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return qn(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:s}=await Cr(t,e);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:s}=e,i=new Ar;return n&&(qn("string"===typeof n,"internal-error",{appName:t}),i.refreshToken=n),r&&(qn("string"===typeof r,"internal-error",{appName:t}),i.accessToken=r),s&&(qn("number"===typeof s,"internal-error",{appName:t}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return $n("not implemented")}}
/**
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
 */function Nr(t,e){qn("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class Dr{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,s=Rn(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ir(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Er(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await wr(this,this.stsTokenManager.getToken(this.auth,t));return qn(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return gr(this,t)}reload(){return Tr(this)}_assign(t){this!==t&&(qn(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Dr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){qn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await _r(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await wr(this,dr(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,s,i,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:E}=e;qn(v&&E,t,"internal-error");const _=Ar.fromJSON(this.name,E);qn("string"===typeof v,t,"internal-error"),Nr(l,t.name),Nr(h,t.name),qn("boolean"===typeof w,t,"internal-error"),qn("boolean"===typeof b,t,"internal-error"),Nr(d,t.name),Nr(f,t.name),Nr(p,t.name),Nr(g,t.name),Nr(m,t.name),Nr(y,t.name);const T=new Dr({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(T.providerData=I.map((t=>Object.assign({},t)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new Ar;r.updateFromServerResponse(e);const s=new Dr({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await _r(s),s}}
/**
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
 */class Rr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Rr.type="NONE";const Or=Rr;
/**
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
 */function Mr(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Mr(this.userKey,r.apiKey,s),this.fullPersistenceKey=Mr("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Dr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Lr(Kn(Or),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=r[0]||Kn(Or);const i=Mr(n,t.config.apiKey,t.name);let o=null;for(const c of e)try{const e=await c._get(i);if(e){const n=Dr._fromJSON(t,e);c!==s&&(o=n),s=c;break}}catch(Fy){}const a=r.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(i)}catch(Fy){}}))),new Lr(s,t,n)):new Lr(s,t,n)}}
/**
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
 */function Pr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Br(e))return"Blackberry";if(qr(e))return"Webos";if(Ur(e))return"Safari";if((e.includes("chrome/")||Vr(e))&&!e.includes("edge/"))return"Chrome";if(jr(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function xr(t=gt()){return/firefox\//i.test(t)}function Ur(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vr(t=gt()){return/crios\//i.test(t)}function Fr(t=gt()){return/iemobile/i.test(t)}function jr(t=gt()){return/android/i.test(t)}function Br(t=gt()){return/blackberry/i.test(t)}function qr(t=gt()){return/webos/i.test(t)}function $r(t=gt()){return/iphone|ipad|ipod/i.test(t)}function zr(t=gt()){var e;return $r(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Hr(){return bt()&&10===document.documentMode}function Kr(t=gt()){return $r(t)||jr(t)||qr(t)||Br(t)||/windows phone/i.test(t)||Fr(t)}function Gr(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
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
 */function Wr(t,e=[]){let n;switch(t){case"Browser":n=Pr(gt());break;case"Worker":n=`${Pr(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${un}/${r}`}
/**
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
 */class Qr{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(s){r(s)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
/**
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
 */class Xr{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jr(this),this.idTokenSubscription=new Jr(this),this.beforeStateQueue=new Qr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ln,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Kn(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return qn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await _r(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Zn()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ft(t):null;return e&&qn(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&qn(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Kn(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new St("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Kn(t)||this._popupRedirectResolver;qn(e,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Kn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const s="function"===typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return qn(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return qn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Yr(t){return Ft(t)}class Jr{constructor(t){this.auth=t,this.observer=null,this.addObserver=Pt((t=>this.observer=t))}get next(){return qn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class Zr{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return $n("not implemented")}_getIdTokenResponse(t){return $n("not implemented")}_linkToIdToken(t,e){return $n("not implemented")}_getReauthenticationResolver(t){return $n("not implemented")}}
/**
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
 */async function ts(t,e){return or(t,"POST","/v1/accounts:update",e)}
/**
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
 */
async function es(t,e){return cr(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}
/**
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
 */
async function ns(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function rs(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}
/**
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
 */class ss extends Zr{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ss(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ss(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return es(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ns(t,{email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return ts(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rs(t,{idToken:e,email:this._email,oobCode:this._password});default:Un(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function is(t,e){return cr(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}
/**
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
 */const os="http://localhost";class as extends Zr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new as(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Un("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,s=Rn(e,["providerId","signInMethod"]);if(!n||!r)return null;const i=new as(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(t){const e=this.buildRequest();return is(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,is(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,is(t,e)}buildRequest(){const t={requestUri:os,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Ot(e)}return t}}
/**
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
 */async function cs(t,e){return or(t,"POST","/v1/accounts:sendVerificationCode",ir(t,e))}async function us(t,e){return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ir(t,e))}async function ls(t,e){const n=await cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ir(t,e));if(n.temporaryProof)throw hr(t,"account-exists-with-different-credential",n);return n}const hs={["USER_NOT_FOUND"]:"user-not-found"};async function ds(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ir(t,n),hs)}
/**
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
 */class fs extends Zr{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new fs({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new fs({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return us(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ls(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ds(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:s}=t;return n||e||r||s?new fs({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
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
 */function ps(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gs(t){const e=Mt(Lt(t))["link"],n=e?Mt(Lt(e))["deep_link_id"]:null,r=Mt(Lt(t))["deep_link_id"],s=r?Mt(Lt(r))["link"]:null;return s||r||n||e||t}class ms{constructor(t){var e,n,r,s,i,o;const a=Mt(Lt(t)),c=null!==(e=a["apiKey"])&&void 0!==e?e:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=ps(null!==(r=a["mode"])&&void 0!==r?r:null);qn(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(s=a["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(i=a["languageCode"])&&void 0!==i?i:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(t){const e=gs(t);try{return new ms(e)}catch(Fy){return null}}}
/**
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
 */
class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(t,e){return ss._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ms.parseLink(e);return qn(n,"argument-error"),ss._fromEmailAndCode(t,n.code,n.tenantId)}}ys.PROVIDER_ID="password",ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class vs{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class ws extends vs{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class bs extends ws{constructor(){super("facebook.com")}static credential(t){return as._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bs.credentialFromTaggedObject(t)}static credentialFromError(t){return bs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return bs.credential(t.oauthAccessToken)}catch(Fy){return null}}}bs.FACEBOOK_SIGN_IN_METHOD="facebook.com",bs.PROVIDER_ID="facebook.com";
/**
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
 */
class Is extends ws{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return as._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Is.credentialFromTaggedObject(t)}static credentialFromError(t){return Is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Is.credential(e,n)}catch(Fy){return null}}}Is.GOOGLE_SIGN_IN_METHOD="google.com",Is.PROVIDER_ID="google.com";
/**
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
 */
class Es extends ws{constructor(){super("github.com")}static credential(t){return as._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Es.credentialFromTaggedObject(t)}static credentialFromError(t){return Es.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Es.credential(t.oauthAccessToken)}catch(Fy){return null}}}Es.GITHUB_SIGN_IN_METHOD="github.com",Es.PROVIDER_ID="github.com";
/**
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
 */
class _s extends ws{constructor(){super("twitter.com")}static credential(t,e){return as._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return _s.credentialFromTaggedObject(t)}static credentialFromError(t){return _s.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return _s.credential(e,n)}catch(Fy){return null}}}_s.TWITTER_SIGN_IN_METHOD="twitter.com",_s.PROVIDER_ID="twitter.com";
/**
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
 */
class Ts{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const s=await Dr._fromIdTokenResponse(t,n,r),i=ks(n),o=new Ts({user:s,providerId:i,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ks(n);return new Ts({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ks(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */
/**
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
 */
class Ss extends kt{constructor(t,e,n,r){var s;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ss.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Ss(t,e,n,r)}}function Cs(t,e,n,r){const s="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ss._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
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
 */async function As(t,e,n=!1){const r=await wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",r)}
/**
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
 */
async function Ns(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const r=await wr(t,Cs(s,i,e,t),n);qn(r.idToken,s,"internal-error");const o=yr(r.idToken);qn(o,s,"internal-error");const{sub:a}=o;return qn(t.uid===a,s,"user-mismatch"),Ts._forOperation(t,i,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&Un(s,"user-mismatch"),o}}
/**
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
 */async function Ds(t,e,n=!1){const r="signIn",s=await Cs(t,r,e),i=await Ts._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Rs(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}function Os(t){return Ft(t).signOut()}
/**
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
 */
function Ms(t,e){return or(t,"POST","/v2/accounts/mfaEnrollment:start",ir(t,e))}function Ls(t,e){return or(t,"POST","/v2/accounts/mfaEnrollment:finalize",ir(t,e))}new WeakMap;const Ps="__sak";
/**
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
 */class xs{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch(Fy){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Us(){const t=gt();return Ur(t)||$r(t)}const Vs=1e3,Fs=10;class js extends xs{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Us()&&Gr(),this.fallbackToPolling=Kr(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);Hr()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Fs):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Vs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}js.type="LOCAL";const Bs=js;
/**
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
 */class qs extends xs{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}qs.type="SESSION";const $s=qs;
/**
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
 */function zs(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
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
 */class Hs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Hs(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:s}=e.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async t=>t(e.origin,s))),a=await zs(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Ks(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */Hs.receivers=[];class Gs{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Ks("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
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
 */function Ws(){return window}function Qs(t){Ws().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Xs(){return"undefined"!==typeof Ws()["WorkerGlobalScope"]&&"function"===typeof Ws()["importScripts"]}async function Ys(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(Fy){return null}}function Js(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Zs(){return Xs()?self:null}
/**
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
 */const ti="firebaseLocalStorageDb",ei=1,ni="firebaseLocalStorage",ri="fbase_key";class si{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ii(t,e){return t.transaction([ni],e?"readwrite":"readonly").objectStore(ni)}function oi(){const t=indexedDB.deleteDatabase(ti);return new si(t).toPromise()}function ai(){const t=indexedDB.open(ti,ei);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ni,{keyPath:ri})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ni)?e(n):(n.close(),await oi(),e(await ai()))}))}))}async function ci(t,e,n){const r=ii(t,!0).put({[ri]:e,value:n});return new si(r).toPromise()}async function ui(t,e){const n=ii(t,!1).get(e),r=await new si(n).toPromise();return void 0===r?null:r.value}function li(t,e){const n=ii(t,!0).delete(e);return new si(n).toPromise()}const hi=800,di=3;class fi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ai()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>di)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hs._getInstance(Zs()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ys(),!this.activeServiceWorker)return;this.sender=new Gs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Js()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(Fy){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ai();return await ci(t,Ps,"1"),await li(t,Ps),!0}catch(Fy){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ci(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>ui(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>li(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ii(t,!1).getAll();return new si(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:s}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),hi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}fi.type="LOCAL";const pi=fi;
/**
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
 */function gi(t,e){return or(t,"POST","/v2/accounts/mfaSignIn:start",ir(t,e))}function mi(t,e){return or(t,"POST","/v2/accounts/mfaSignIn:finalize",ir(t,e))}
/**
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
 */
/**
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
 */
function yi(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function vi(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=Vn("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",yi().appendChild(r)}))}function wi(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
wi("rcb"),new tr(3e4,6e4);
/**
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
 */
const bi="recaptcha";async function Ii(t,e,n){var r;const s=await n.verify();try{let i;if(qn("string"===typeof s,t,"argument-error"),qn(n.type===bi,t,"argument-error"),i="string"===typeof e?{phoneNumber:e}:e,"session"in i){const e=i.session;if("phoneNumber"in i){qn("enroll"===e.type,t,"internal-error");const n=await Ms(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{qn("signin"===e.type,t,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;qn(n,t,"missing-multi-factor-info");const o=await gi(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await cs(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
/**
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
 */
class Ei{constructor(t){this.providerId=Ei.PROVIDER_ID,this.auth=Yr(t)}verifyPhoneNumber(t,e){return Ii(this.auth,t,Ft(e))}static credential(t,e){return fs._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ei.credentialFromTaggedObject(e)}static credentialFromError(t){return Ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?fs._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function _i(t,e){return e?Kn(e):(qn(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */Ei.PROVIDER_ID="phone",Ei.PHONE_SIGN_IN_METHOD="phone";class Ti extends Zr{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return is(t,this._buildIdpRequest())}_linkToIdToken(t,e){return is(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return is(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ki(t){return Ds(t.auth,new Ti(t),t.bypassAuthState)}function Si(t){const{auth:e,user:n}=t;return qn(n,e,"internal-error"),Ns(n,new Ti(t),t.bypassAuthState)}async function Ci(t){const{auth:e,user:n}=t;return qn(n,e,"internal-error"),As(n,new Ti(t),t.bypassAuthState)}
/**
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
 */class Ai{constructor(t,e,n,r,s=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=t;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ki;case"linkViaPopup":case"linkViaRedirect":return Ci;case"reauthViaPopup":case"reauthViaRedirect":return Si;default:Un(this.auth,"internal-error")}}resolve(t){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Ni=new tr(2e3,1e4);async function Di(t,e,n){const r=Yr(t);jn(t,e,vs);const s=_i(r,n),i=new Ri(r,"signInViaPopup",e,s);return i.executeNotNull()}class Ri extends Ai{constructor(t,e,n,r,s){super(t,e,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return qn(t,this.auth,"internal-error"),t}async onExecution(){zn(1===this.filter.length,"Popup operations only handle one event");const t=Ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Vn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ni.get())};t()}}Ri.currentPopupAction=null;
/**
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
 */
const Oi="pendingRedirect",Mi=new Map;class Li extends Ai{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Mi.get(this.auth._key());if(!t){try{const e=await Pi(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Mi.set(this.auth._key(),t)}return this.bypassAuthState||Mi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Pi(t,e){const n=Vi(e),r=Ui(t);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function xi(t,e){Mi.set(t._key(),e)}function Ui(t){return Kn(t._redirectPersistence)}function Vi(t){return Mr(Oi,t.config.apiKey,t.name)}
/**
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
 */async function Fi(t,e,n=!1){const r=Yr(t),s=_i(r,e),i=new Li(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
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
 */
const ji=6e5;class Bi{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!zi(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!$i(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Vn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ji&&this.cachedEventUids.clear(),this.cachedEventUids.has(qi(t))}saveEventToCache(t){this.cachedEventUids.add(qi(t)),this.lastProcessedEventTime=Date.now()}}function qi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function $i({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function zi(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $i(t);default:return!1}}
/**
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
 */async function Hi(t,e={}){return or(t,"GET","/v1/projects",e)}
/**
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
 */const Ki=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gi=/^https?/;async function Wi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hi(t);for(const n of e)try{if(Qi(n))return}catch(Fy){}Un(t,"unauthorized-domain")}function Qi(t){const e=Qn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Gi.test(n))return!1;if(Ki.test(t))return r===t;const s=t.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Xi=new tr(3e4,6e4);function Yi(){const t=Ws().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Ji(t){return new Promise(((e,n)=>{var r,s,i;function o(){Yi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yi(),n(Vn(t,"network-request-failed"))},timeout:Xi.get()})}if(null===(s=null===(r=Ws().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=Ws().gapi)||void 0===i?void 0:i.load)){const e=wi("iframefcb");return Ws()[e]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},vi(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Zi=null,t}))}let Zi=null;function to(t){return Zi=Zi||Ji(t),Zi}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eo=new tr(5e3,15e3),no="__/auth/iframe",ro="emulator/auth/iframe",so={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},io=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oo(t){const e=t.config;qn(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?er(e,ro):`https://${t.config.authDomain}/${no}`,r={apiKey:e.apiKey,appName:t.name,v:un},s=io.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ot(r).slice(1)}`}async function ao(t){const e=await to(t),n=Ws().gapi;return qn(n,t,"internal-error"),e.open({where:document.body,url:oo(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:so,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const s=Vn(t,"network-request-failed"),i=Ws().setTimeout((()=>{r(s)}),eo.get());function o(){Ws().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const co={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uo=500,lo=600,ho="_blank",fo="http://localhost";class po{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function go(t,e,n,r=uo,s=lo){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},co),{width:r.toString(),height:s.toString(),top:i,left:o}),u=gt().toLowerCase();n&&(a=Vr(u)?ho:n),xr(u)&&(e=e||fo,c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(zr(u)&&"_self"!==a)return mo(e||"",a),new po(null);const h=window.open(e||"",a,l);qn(h,t,"popup-blocked");try{h.focus()}catch(d){}return new po(h)}function mo(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const yo="__/auth/handler",vo="emulator/auth/handler";function wo(t,e,n,r,s,i){qn(t.config.authDomain,t,"auth-domain-config-required"),qn(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:un,eventId:s};if(e instanceof vs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nt(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(i||{}))o[t]=e}if(e instanceof ws){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${bo(t)}?${Ot(a).slice(1)}`}function bo({config:t}){return t.emulator?er(t,vo):`https://${t.authDomain}/${yo}`}
/**
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
 */const Io="webStorageSupport";class Eo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$s,this._completeRedirectFn=Fi,this._overrideRedirectResult=xi}async _openPopup(t,e,n,r){var s;zn(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=wo(t,e,n,Qn(),r);return go(t,i,Ks())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Qs(wo(t,e,n,Qn(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(zn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await ao(t),n=new Bi(t);return e.register("authEvent",(e=>{qn(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Io,{type:Io},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Io];void 0!==s&&e(!!s),Un(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Wi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Kr()||Ur()||$r()}}const _o=Eo;class To{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return $n("unexpected MultiFactorSessionType")}}}class ko extends To{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ko(t)}_finalizeEnroll(t,e,n){return Ls(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return mi(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class So{constructor(){}static assertion(t){return ko._fromCredential(t)}}So.FACTOR_ID="phone";var Co="@firebase/auth",Ao="0.20.4";
/**
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
 */
class No{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){qn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Do(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ro(t){rn(new jt("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((e,r)=>{qn(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),qn(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const s={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wr(t)},a=new Xr(e,r,s);return Wn(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),rn(new jt("auth-internal",(t=>{const e=Yr(t.getProvider("auth").getImmediate());return(t=>new No(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Co,Ao,Do(t)),dn(Co,Ao,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Oo(t=hn()){const e=sn(t,"auth");return e.isInitialized()?e.getImmediate():Gn(t,{popupRedirectResolver:_o,persistence:[pi,Bs,$s]})}Ro("Browser");var Mo,Lo="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Po={},xo=xo||{},Uo=Lo||self;function Vo(){}function Fo(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function jo(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function Bo(t){return Object.prototype.hasOwnProperty.call(t,qo)&&t[qo]||(t[qo]=++$o)}var qo="closure_uid_"+(1e9*Math.random()>>>0),$o=0;function zo(t,e,n){return t.call.apply(t.bind,arguments)}function Ho(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ko(t,e,n){return Ko=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?zo:Ho,Ko.apply(null,arguments)}function Go(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Wo(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function Qo(){this.s=this.s,this.o=this.o}var Xo=0,Yo={};Qo.prototype.s=!1,Qo.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=Xo)){var t=Bo(this);delete Yo[t]}},Qo.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jo=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Zo=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function ta(t){t:{var e=yl;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function ea(t){return Array.prototype.concat.apply([],arguments)}function na(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ra(t){return/^[\s\xa0]*$/.test(t)}var sa,ia=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function oa(t,e){return-1!=t.indexOf(e)}function aa(t,e){return t<e?-1:t>e?1:0}t:{var ca=Uo.navigator;if(ca){var ua=ca.userAgent;if(ua){sa=ua;break t}}sa=""}function la(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ha(t){const e={};for(const n in t)e[n]=t[n];return e}var da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fa(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<da.length;e++)n=da[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pa(t){return pa[" "](t),t}function ga(t){var e=Aa;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}pa[" "]=Vo;var ma,ya=oa(sa,"Opera"),va=oa(sa,"Trident")||oa(sa,"MSIE"),wa=oa(sa,"Edge"),ba=wa||va,Ia=oa(sa,"Gecko")&&!(oa(sa.toLowerCase(),"webkit")&&!oa(sa,"Edge"))&&!(oa(sa,"Trident")||oa(sa,"MSIE"))&&!oa(sa,"Edge"),Ea=oa(sa.toLowerCase(),"webkit")&&!oa(sa,"Edge");function _a(){var t=Uo.document;return t?t.documentMode:void 0}t:{var Ta="",ka=function(){var t=sa;return Ia?/rv:([^\);]+)(\)|;)/.exec(t):wa?/Edge\/([\d\.]+)/.exec(t):va?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Ea?/WebKit\/(\S+)/.exec(t):ya?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(ka&&(Ta=ka?ka[1]:""),va){var Sa=_a();if(null!=Sa&&Sa>parseFloat(Ta)){ma=String(Sa);break t}}ma=Ta}var Ca,Aa={};function Na(){return ga((function(){let t=0;const e=ia(String(ma)).split("."),n=ia("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=aa(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||aa(0==s[2].length,0==i[2].length)||aa(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(Uo.document&&va){var Da=_a();Ca=Da||(parseInt(ma,10)||void 0)}else Ca=void 0;var Ra=Ca,Oa=function(){if(!Uo.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Uo.addEventListener("test",Vo,e),Uo.removeEventListener("test",Vo,e)}catch(n){}return t}();function Ma(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function La(t,e){if(Ma.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ia){t:{try{pa(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Pa[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&La.Z.h.call(this)}}Ma.prototype.h=function(){this.defaultPrevented=!0},Wo(La,Ma);var Pa={2:"touch",3:"pen",4:"mouse"};La.prototype.h=function(){La.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xa="closure_listenable_"+(1e6*Math.random()|0),Ua=0;function Va(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++Ua,this.ca=this.fa=!1}function Fa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ja(t){this.src=t,this.g={},this.h=0}function Ba(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Jo(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Fa(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function qa(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}ja.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=qa(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Va(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var $a="closure_lm_"+(1e6*Math.random()|0),za={};function Ha(t,e,n,r,s){if(r&&r.once)return Wa(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ha(t,e[i],n,r,s);return null}return n=ec(n),t&&t[xa]?t.N(e,n,jo(r)?!!r.capture:!!r,s):Ka(t,e,n,!1,r,s)}function Ka(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=jo(s)?!!s.capture:!!s,a=Za(t);if(a||(t[$a]=a=new ja(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Ga(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Oa||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ya(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Ga(){function t(n){return e.call(t.src,t.listener,n)}var e=Ja;return t}function Wa(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wa(t,e[i],n,r,s);return null}return n=ec(n),t&&t[xa]?t.O(e,n,jo(r)?!!r.capture:!!r,s):Ka(t,e,n,!0,r,s)}function Qa(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Qa(t,e[i],n,r,s);else r=jo(r)?!!r.capture:!!r,n=ec(n),t&&t[xa]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=qa(i,n,r,s),-1<n&&(Fa(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Za(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qa(e,n,r,s)),(n=-1<t?e[t]:null)&&Xa(n))}function Xa(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[xa])Ba(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ya(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Za(e))?(Ba(n,t),0==n.h&&(n.src=null,e[$a]=null)):Fa(t)}}}function Ya(t){return t in za?za[t]:za[t]="on"+t}function Ja(t,e){if(t.ca)t=!0;else{e=new La(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Xa(t),t=n.call(r,e)}return t}function Za(t){return t=t[$a],t instanceof ja?t:null}var tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ec(t){return"function"===typeof t?t:(t[tc]||(t[tc]=function(e){return t.handleEvent(e)}),t[tc])}function nc(){Qo.call(this),this.i=new ja(this),this.P=this,this.I=null}function rc(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new Ma(e,t);else if(e instanceof Ma)e.target=e.target||t;else{var s=e;e=new Ma(r,t),fa(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=sc(o,r,!0,e)&&s}if(o=e.g=t,s=sc(o,r,!0,e)&&s,s=sc(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=sc(o,r,!1,e)&&s}function sc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ba(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Wo(nc,Qo),nc.prototype[xa]=!0,nc.prototype.removeEventListener=function(t,e,n,r){Qa(this,t,e,n,r)},nc.prototype.M=function(){if(nc.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Fa(n[r]);delete e.g[t],e.h--}}this.I=null},nc.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},nc.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var ic=Uo.JSON.stringify;function oc(){var t=gc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ac{constructor(){this.h=this.g=null}add(t,e){const n=uc.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var cc,uc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new lc),(t=>t.reset()));class lc{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function hc(t){Uo.setTimeout((()=>{throw t}),0)}function dc(t,e){cc||fc(),pc||(cc(),pc=!0),gc.add(t,e)}function fc(){var t=Uo.Promise.resolve(void 0);cc=function(){t.then(mc)}}var pc=!1,gc=new ac;function mc(){for(var t;t=oc();){try{t.h.call(t.g)}catch(n){hc(n)}var e=uc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pc=!1}function yc(t,e){nc.call(this),this.h=t||1,this.g=e||Uo,this.j=Ko(this.kb,this),this.l=Date.now()}function vc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function wc(t,e,n){if("function"===typeof t)n&&(t=Ko(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ko(t.handleEvent,t)}return 2147483647<Number(e)?-1:Uo.setTimeout(t,e||0)}function bc(t){t.g=wc((()=>{t.g=null,t.i&&(t.i=!1,bc(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Wo(yc,nc),Mo=yc.prototype,Mo.da=!1,Mo.S=null,Mo.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),rc(this,"tick"),this.da&&(vc(this),this.start()))}},Mo.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Mo.M=function(){yc.Z.M.call(this),vc(this),delete this.g};class Ic extends Qo{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:bc(this)}M(){super.M(),this.g&&(Uo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ec(t){Qo.call(this),this.h=t,this.g={}}Wo(Ec,Qo);var _c=[];function Tc(t,e,n,r){Array.isArray(n)||(n&&(_c[0]=n.toString()),n=_c);for(var s=0;s<n.length;s++){var i=Ha(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function kc(t){la(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Xa(t)}),t),t.g={}}function Sc(){this.g=!0}function Cc(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Ac(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Nc(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Rc(t,n)+(r?" "+r:"")}))}function Dc(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Rc(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ic(n)}catch(a){return e}}Ec.prototype.M=function(){Ec.Z.M.call(this),kc(this)},Ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Sc.prototype.Aa=function(){this.g=!1},Sc.prototype.info=function(){};var Oc={},Mc=null;function Lc(){return Mc=Mc||new nc}function Pc(t){Ma.call(this,Oc.Ma,t)}function xc(t){const e=Lc();rc(e,new Pc(e,t))}function Uc(t,e){Ma.call(this,Oc.STAT_EVENT,t),this.stat=e}function Vc(t){const e=Lc();rc(e,new Uc(e,t))}function Fc(t,e){Ma.call(this,Oc.Na,t),this.size=e}function jc(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Uo.setTimeout((function(){t()}),e)}Oc.Ma="serverreachability",Wo(Pc,Ma),Oc.STAT_EVENT="statevent",Wo(Uc,Ma),Oc.Na="timingevent",Wo(Fc,Ma);var Bc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $c(){}function zc(t){return t.h||(t.h=t.i())}function Hc(){}$c.prototype.h=null;var Kc,Gc={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Wc(){Ma.call(this,"d")}function Qc(){Ma.call(this,"c")}function Xc(){}function Yc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ec(this),this.P=Zc,t=ba?125:void 0,this.W=new yc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jc}function Jc(){this.i=null,this.g="",this.h=!1}Wo(Wc,Ma),Wo(Qc,Ma),Wo(Xc,$c),Xc.prototype.g=function(){return new XMLHttpRequest},Xc.prototype.i=function(){return{}},Kc=new Xc;var Zc=45e3,tu={},eu={};function nu(t,e,n){t.K=1,t.v=Cu(Iu(e)),t.s=n,t.U=!0,ru(t,null)}function ru(t,e){t.F=Date.now(),au(t),t.A=Iu(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),qu(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Jc,t.g=Wl(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ic(Ko(t.Ia,t,t.g),t.O)),Tc(t.V,t.g,"readystatechange",t.gb),e=t.H?ha(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xc(1),Cc(t.j,t.u,t.A,t.m,t.X,t.s)}function su(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function iu(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=ou(t,n),r==eu){4==e&&(t.o=4,Vc(14),s=!1),Nc(t.j,t.m,null,"[Incomplete Response]");break}if(r==tu){t.o=4,Vc(15),Nc(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Nc(t.j,t.m,r,null),du(t,r)}su(t)&&r!=eu&&r!=tu&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Vc(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),jl(e),e.L=!0,Vc(11))):(Nc(t.j,t.m,n,"[Invalid Chunked Response]"),hu(t),lu(t))}function ou(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?eu:(n=Number(e.substring(n,r)),isNaN(n)?tu:(r+=1,r+n>e.length?eu:(e=e.substr(r,n),t.C=r+n,e)))}function au(t){t.Y=Date.now()+t.P,cu(t,t.P)}function cu(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=jc(Ko(t.eb,t),e)}function uu(t){t.B&&(Uo.clearTimeout(t.B),t.B=null)}function lu(t){0==t.l.G||t.I||$l(t.l,t)}function hu(t){uu(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,vc(t.W),kc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function du(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Xu(n.i,t)))if(n.I=t.N,!t.J&&Xu(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ql(n),Dl(n)}Fl(n),Vc(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=jc(Ko(n.ab,n),6e3));if(1>=Qu(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Hl(n,11)}else if((t.J||n.g==t)&&ql(n),!ra(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(oa(t,"spdy")||oa(t,"quic")||oa(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Yu(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Su(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Gl(r,r.H?r.la:null,r.W),o.J){Ju(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(uu(a),au(a)),r.g=o}else Vl(r);0<n.l.length&&Ml(n)}else"stop"!=u[0]&&"close"!=u[0]||Hl(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Hl(n,7):Nl(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}xc(4)}catch(u){}}function fu(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(Fo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function pu(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Fo(t)||"string"===typeof t)Zo(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Fo(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=fu(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function gu(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof gu)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function mu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];yu(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],yu(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function yu(t,e){return Object.prototype.hasOwnProperty.call(t,e)}Mo=Yc.prototype,Mo.setTimeout=function(t){this.P=t},Mo.gb=function(t){t=t.target;const e=this.L;e&&3==_l(t)?e.l():this.Ia(t)},Mo.Ia=function(t){try{if(t==this.g)t:{const l=_l(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||ba||this.g&&(this.h.h||this.g.ga()||Tl(this.g)))){this.I||4!=l||7==e||xc(8==e||0>=h?3:2),uu(this);var n=this.g.ba();this.N=n;e:if(su(this)){var r=Tl(this.g);t="";var s=r.length,i=4==_l(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){hu(this),lu(this);var o="";break e}this.h.i=new Uo.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ac(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ra(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Vc(12),hu(this),lu(this);break t}Nc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,du(this,n)}this.U?(iu(this,l,o),ba&&this.i&&3==l&&(Tc(this.V,this.W,"tick",this.fb),this.W.start())):(Nc(this.j,this.m,o,null),du(this,o)),4==l&&hu(this),this.i&&!this.I&&(4==l?$l(this.l,this):(this.i=!1,au(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Vc(12)):(this.o=0,Vc(13)),hu(this),lu(this)}}}catch(l){}},Mo.fb=function(){if(this.g){var t=_l(this.g),e=this.g.ga();this.C<e.length&&(uu(this),iu(this,t,e),this.i&&4!=t&&au(this))}},Mo.cancel=function(){this.I=!0,hu(this)},Mo.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Dc(this.j,this.A),2!=this.K&&(xc(3),Vc(17)),hu(this),this.o=2,lu(this)):cu(this,this.Y-t)},Mo=gu.prototype,Mo.R=function(){mu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Mo.T=function(){return mu(this),this.g.concat()},Mo.get=function(t,e){return yu(this.h,t)?this.h[t]:e},Mo.set=function(t,e){yu(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Mo.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var vu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wu(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function bu(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof bu){this.g=void 0!==e?e:t.g,Eu(this,t.j),this.s=t.s,_u(this,t.i),Tu(this,t.m),this.l=t.l,e=t.h;var n=new Vu;n.i=e.i,e.g&&(n.g=new gu(e.g),n.h=e.h),ku(this,n),this.o=t.o}else t&&(n=String(t).match(vu))?(this.g=!!e,Eu(this,n[1]||"",!0),this.s=Du(n[2]||""),_u(this,n[3]||"",!0),Tu(this,n[4]),this.l=Du(n[5]||"",!0),ku(this,n[6]||"",!0),this.o=Du(n[7]||"")):(this.g=!!e,this.h=new Vu(null,this.g))}function Iu(t){return new bu(t)}function Eu(t,e,n){t.j=n?Du(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _u(t,e,n){t.i=n?Du(e,!0):e}function Tu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ku(t,e,n){e instanceof Vu?(t.h=e,zu(t.h,t.g)):(n||(e=Ru(e,xu)),t.h=new Vu(e,t.g))}function Su(t,e,n){t.h.set(e,n)}function Cu(t){return Su(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Au(t){return t instanceof bu?Iu(t):new bu(t,void 0)}function Nu(t,e,n,r){var s=new bu(null,void 0);return t&&Eu(s,t),e&&_u(s,e),n&&Tu(s,n),r&&(s.l=r),s}function Du(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ru(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ou),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ou(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}bu.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ru(e,Mu,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ru(e,Mu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ru(n,"/"==n.charAt(0)?Pu:Lu,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ru(n,Uu)),t.join("")};var Mu=/[#\/\?@]/g,Lu=/[#\?:]/g,Pu=/[#\?]/g,xu=/[#\?@]/g,Uu=/#/g;function Vu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fu(t){t.g||(t.g=new gu,t.h=0,t.i&&wu(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ju(t,e){Fu(t),e=$u(t,e),yu(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,yu(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&mu(t)))}function Bu(t,e){return Fu(t),e=$u(t,e),yu(t.g.h,e)}function qu(t,e,n){ju(t,e),0<n.length&&(t.i=null,t.g.set($u(t,e),na(n)),t.h+=n.length)}function $u(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zu(t,e){e&&!t.j&&(Fu(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ju(this,e),qu(this,n,t))}),t)),t.j=e}Mo=Vu.prototype,Mo.add=function(t,e){Fu(this),this.i=null,t=$u(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Mo.forEach=function(t,e){Fu(this),this.g.forEach((function(n,r){Zo(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Mo.T=function(){Fu(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},Mo.R=function(t){Fu(this);var e=[];if("string"===typeof t)Bu(this,t)&&(e=ea(e,this.g.get($u(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ea(e,t[n])}return e},Mo.set=function(t,e){return Fu(this),this.i=null,t=$u(this,t),Bu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Mo.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},Mo.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var Hu=class{constructor(t,e){this.h=t,this.g=e}};function Ku(t){this.l=t||Gu,Uo.PerformanceNavigationTiming?(t=Uo.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Uo.g&&Uo.g.Ea&&Uo.g.Ea()&&Uo.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gu=10;function Wu(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Qu(t){return t.h?1:t.g?t.g.size:0}function Xu(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Yu(t,e){t.g?t.g.add(e):t.h=e}function Ju(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Zu(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return na(t.i)}function tl(){}function el(){this.g=new tl}function nl(t,e,n){const r=n||"";try{pu(t,(function(t,n){let s=t;jo(t)&&(s=ic(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function rl(t,e){const n=new Sc;if(Uo.Image){const r=new Image;r.onload=Go(sl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Go(sl,n,r,"TestLoadImage: error",!1,e),r.onabort=Go(sl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Go(sl,n,r,"TestLoadImage: timeout",!1,e),Uo.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function sl(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function il(t){this.l=t.$b||null,this.j=t.ib||!1}function ol(t,e){nc.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=al,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ku.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},tl.prototype.stringify=function(t){return Uo.JSON.stringify(t,void 0)},tl.prototype.parse=function(t){return Uo.JSON.parse(t,void 0)},Wo(il,$c),il.prototype.g=function(){return new ol(this.l,this.j)},il.prototype.i=function(t){return function(){return t}}({}),Wo(ol,nc);var al=0;function cl(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function ul(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ll(t)}function ll(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Mo=ol.prototype,Mo.open=function(t,e){if(this.readyState!=al)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ll(this)},Mo.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Uo).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Mo.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ul(this)),this.readyState=al},Mo.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ll(this)),this.g&&(this.readyState=3,ll(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Uo.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cl(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Mo.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ul(this):ll(this),3==this.readyState&&cl(this)}},Mo.Ua=function(t){this.g&&(this.response=this.responseText=t,ul(this))},Mo.Ta=function(t){this.g&&(this.response=t,ul(this))},Mo.ha=function(){this.g&&ul(this)},Mo.setRequestHeader=function(t,e){this.v.append(t,e)},Mo.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Mo.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var hl=Uo.JSON.parse;function dl(t){nc.call(this),this.headers=new gu,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fl,this.K=this.L=!1}Wo(dl,nc);var fl="",pl=/^https?$/i,gl=["POST","PUT"];function ml(t){return va&&Na()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function yl(t){return"content-type"==t.toLowerCase()}function vl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wl(t),Il(t)}function wl(t){t.D||(t.D=!0,rc(t,"complete"),rc(t,"error"))}function bl(t){if(t.h&&"undefined"!=typeof xo&&(!t.C[1]||4!=_l(t)||2!=t.ba()))if(t.v&&4==_l(t))wc(t.Fa,0,t);else if(rc(t,"readystatechange"),4==_l(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(vu)[1]||null;if(!s&&Uo.self&&Uo.self.location){var i=Uo.self.location.protocol;s=i.substr(0,i.length-1)}r=!pl.test(s?s.toLowerCase():"")}n=r}if(n)rc(t,"complete"),rc(t,"success");else{t.m=6;try{var o=2<_l(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",wl(t)}}finally{Il(t)}}}function Il(t,e){if(t.g){El(t);const r=t.g,s=t.C[0]?Vo:null;t.g=null,t.C=null,e||rc(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function El(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Uo.clearTimeout(t.A),t.A=null)}function _l(t){return t.g?t.g.readyState:0}function Tl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fl:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function kl(t){let e="";return la(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Sl(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=kl(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Su(t,e,n))}function Cl(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Al(t){this.za=0,this.l=[],this.h=new Sc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cl("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cl("baseRetryDelayMs",5e3,t),this.$a=Cl("retryDelaySeedMs",1e4,t),this.Ya=Cl("forwardChannelMaxRetries",2,t),this.ra=Cl("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ku(t&&t.concurrentRequestLimit),this.Ca=new el,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Nl(t){if(Rl(t),3==t.G){var e=t.V++,n=Iu(t.F);Su(n,"SID",t.J),Su(n,"RID",e),Su(n,"TYPE","terminate"),xl(t,n),e=new Yc(t,t.h,e,void 0),e.K=2,e.v=Cu(Iu(n)),n=!1,Uo.navigator&&Uo.navigator.sendBeacon&&(n=Uo.navigator.sendBeacon(e.v.toString(),"")),!n&&Uo.Image&&((new Image).src=e.v,n=!0),n||(e.g=Wl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),au(e)}Kl(t)}function Dl(t){t.g&&(jl(t),t.g.cancel(),t.g=null)}function Rl(t){Dl(t),t.u&&(Uo.clearTimeout(t.u),t.u=null),ql(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Uo.clearTimeout(t.m),t.m=null)}function Ol(t,e){t.l.push(new Hu(t.Za++,e)),3==t.G&&Ml(t)}function Ml(t){Wu(t.i)||t.m||(t.m=!0,dc(t.Ha,t),t.C=0)}function Ll(t,e){return!(Qu(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=jc(Ko(t.Ha,t,e),zl(t,t.C)),t.C++,!0))}function Pl(t,e){var n;n=e?e.m:t.V++;const r=Iu(t.F);Su(r,"SID",t.J),Su(r,"RID",n),Su(r,"AID",t.U),xl(t,r),t.o&&t.s&&Sl(r,t.o,t.s),n=new Yc(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ul(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Yu(t.i,n),nu(n,r,e)}function xl(t,e){t.j&&pu({},(function(t,n){Su(e,n,t)}))}function Ul(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ko(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{nl(a,t,"req"+n+"_")}catch(Eh){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function Vl(t){t.g||t.u||(t.Y=1,dc(t.Ga,t),t.A=0)}function Fl(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=jc(Ko(t.Ga,t),zl(t,t.A)),t.A++,!0)}function jl(t){null!=t.B&&(Uo.clearTimeout(t.B),t.B=null)}function Bl(t){t.g=new Yc(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Iu(t.oa);Su(e,"RID","rpc"),Su(e,"SID",t.J),Su(e,"CI",t.N?"0":"1"),Su(e,"AID",t.U),xl(t,e),Su(e,"TYPE","xmlhttp"),t.o&&t.s&&Sl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Cu(Iu(e)),n.s=null,n.U=!0,ru(n,t)}function ql(t){null!=t.v&&(Uo.clearTimeout(t.v),t.v=null)}function $l(t,e){var n=null;if(t.g==e){ql(t),jl(t),t.g=null;var r=2}else{if(!Xu(t.i,e))return;n=e.D,Ju(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Lc(),rc(r,new Fc(r,n,e,s)),Ml(t)}else Vl(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&Ll(t,e)||2==r&&Fl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Hl(t,5);break;case 4:Hl(t,10);break;case 3:Hl(t,6);break;default:Hl(t,2)}}function zl(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Hl(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=Ko(t.jb,t);n||(n=new bu("//www.google.com/images/cleardot.gif"),Uo.location&&"http"==Uo.location.protocol||Eu(n,"https"),Cu(n)),rl(n.toString(),r)}else Vc(2);t.G=0,t.j&&t.j.va(e),Kl(t),Rl(t)}function Kl(t){t.G=0,t.I=-1,t.j&&(0==Zu(t.i).length&&0==t.l.length||(t.i.i.length=0,na(t.l),t.l.length=0),t.j.ua())}function Gl(t,e,n){let r=Au(n);if(""!=r.i)e&&_u(r,e+"."+r.i),Tu(r,r.m);else{const t=Uo.location;r=Nu(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&la(t.aa,(function(t,e){Su(r,e,t)})),e=t.D,n=t.sa,e&&n&&Su(r,e,n),Su(r,"VER",t.ma),xl(t,r),r}function Wl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new dl(new il({ib:!0})):new dl(t.qa),e.L=t.H,e}function Ql(){}function Xl(){if(va&&!(10<=Number(Ra)))throw Error("Environmental error: no available transport.")}function Yl(t,e){nc.call(this),this.g=new Al(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ra(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ra(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new th(this)}function Jl(t){Wc.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Zl(){Qc.call(this),this.status=1}function th(t){this.g=t}Mo=dl.prototype,Mo.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kc.g(),this.C=this.u?zc(this.u):zc(Kc),this.g.onreadystatechange=Ko(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void vl(this,i)}t=n||"";const s=new gu(this.headers);r&&pu(r,(function(t,e){s.set(e,t)})),r=ta(s.T()),n=Uo.FormData&&t instanceof Uo.FormData,!(0<=Jo(gl,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{El(this),0<this.B&&((this.K=ml(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ko(this.pa,this)):this.A=wc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){vl(this,i)}},Mo.pa=function(){"undefined"!=typeof xo&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rc(this,"timeout"),this.abort(8))},Mo.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rc(this,"complete"),rc(this,"abort"),Il(this))},Mo.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Il(this,!0)),dl.Z.M.call(this)},Mo.Fa=function(){this.s||(this.F||this.v||this.l?bl(this):this.cb())},Mo.cb=function(){bl(this)},Mo.ba=function(){try{return 2<_l(this)?this.g.status:-1}catch(t){return-1}},Mo.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Mo.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),hl(e)}},Mo.Da=function(){return this.m},Mo.La=function(){return"string"===typeof this.j?this.j:String(this.j)},Mo=Al.prototype,Mo.ma=8,Mo.G=1,Mo.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},Mo.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Yc(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=ha(i),fa(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ul(this,s,e),n=Iu(this.F),Su(n,"RID",t),Su(n,"CVER",22),this.D&&Su(n,"X-HTTP-Session-Id",this.D),xl(this,n),this.o&&i&&Sl(n,this.o,i),Yu(this.i,s),this.Ra&&Su(n,"TYPE","init"),this.ja?(Su(n,"$req",e),Su(n,"SID","null"),s.$=!0,nu(s,n,null)):nu(s,n,e),this.G=2}}else 3==this.G&&(t?Pl(this,t):0==this.l.length||Wu(this.i)||Pl(this))},Mo.Ga=function(){if(this.u=null,Bl(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=jc(Ko(this.bb,this),t)}},Mo.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Vc(10),Dl(this),Bl(this))},Mo.ab=function(){null!=this.v&&(this.v=null,Dl(this),Fl(this),Vc(19))},Mo.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Vc(2)):(this.h.info("Failed to ping google.com"),Vc(1))},Mo=Ql.prototype,Mo.xa=function(){},Mo.wa=function(){},Mo.va=function(){},Mo.ua=function(){},Mo.Oa=function(){},Xl.prototype.g=function(t,e){return new Yl(t,e)},Wo(Yl,nc),Yl.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),dc(Ko(t.hb,t,e))),Vc(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Gl(t,null,t.W),Ml(t)},Yl.prototype.close=function(){Nl(this.g)},Yl.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,Ol(this.g,e)}else this.v?(e={},e.__data__=ic(t),Ol(this.g,e)):Ol(this.g,t)},Yl.prototype.M=function(){this.g.j=null,delete this.j,Nl(this.g),delete this.g,Yl.Z.M.call(this)},Wo(Jl,Wc),Wo(Zl,Qc),Wo(th,Ql),th.prototype.xa=function(){rc(this.g,"a")},th.prototype.wa=function(t){rc(this.g,new Jl(t))},th.prototype.va=function(t){rc(this.g,new Zl(t))},th.prototype.ua=function(){rc(this.g,"b")},Xl.prototype.createWebChannel=Xl.prototype.g,Yl.prototype.send=Yl.prototype.u,Yl.prototype.open=Yl.prototype.m,Yl.prototype.close=Yl.prototype.close,Bc.NO_ERROR=0,Bc.TIMEOUT=8,Bc.HTTP_ERROR=6,qc.COMPLETE="complete",Hc.EventType=Gc,Gc.OPEN="a",Gc.CLOSE="b",Gc.ERROR="c",Gc.MESSAGE="d",nc.prototype.listen=nc.prototype.N,dl.prototype.listenOnce=dl.prototype.O,dl.prototype.getLastError=dl.prototype.La,dl.prototype.getLastErrorCode=dl.prototype.Da,dl.prototype.getStatus=dl.prototype.ba,dl.prototype.getResponseJson=dl.prototype.Qa,dl.prototype.getResponseText=dl.prototype.ga,dl.prototype.send=dl.prototype.ea;var eh=Po.createWebChannelTransport=function(){return new Xl},nh=Po.getStatEventTarget=function(){return Lc()},rh=Po.ErrorCode=Bc,sh=Po.EventType=qc,ih=Po.Event=Oc,oh=Po.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ah=Po.FetchXmlHttpFactory=il,ch=Po.WebChannel=Hc,uh=Po.XhrIo=dl;const lh="@firebase/firestore";
/**
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
 */class hh{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}hh.UNAUTHENTICATED=new hh(null),hh.GOOGLE_CREDENTIALS=new hh("google-credentials-uid"),hh.FIRST_PARTY=new hh("first-party-uid"),hh.MOCK_USER=new hh("mock-user");
/**
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
 */
let dh="9.8.4";
/**
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
 */const fh=new Jt("@firebase/firestore");function ph(){return fh.logLevel}function gh(t,...e){if(fh.logLevel<=Gt.DEBUG){const n=e.map(vh);fh.debug(`Firestore (${dh}): ${t}`,...n)}}function mh(t,...e){if(fh.logLevel<=Gt.ERROR){const n=e.map(vh);fh.error(`Firestore (${dh}): ${t}`,...n)}}function yh(t,...e){if(fh.logLevel<=Gt.WARN){const n=e.map(vh);fh.warn(`Firestore (${dh}): ${t}`,...n)}}function vh(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function wh(t="Unexpected state"){const e=`FIRESTORE (${dh}) INTERNAL ASSERTION FAILED: `+t;throw mh(e),new Error(e)}function bh(t,e){t||wh()}function Ih(t,e){return t}
/**
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
 */const Eh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _h extends kt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Th{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class kh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(hh.UNAUTHENTICATED)))}shutdown(){}}class Ch{constructor(t){this.t=t,this.currentUser=hh.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Th;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Th,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{gh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(gh("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Th)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(gh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(bh("string"==typeof e.accessToken),new kh(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return bh(null===t||"string"==typeof t),new hh(t)}}class Ah{constructor(t,e,n){this.type="FirstParty",this.user=hh.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Nh{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Ah(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(hh.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rh{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&gh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,gh("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{gh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):gh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(bh("string"==typeof t.token),this.p=t.token,new Dh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Oh(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class Mh{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Oh(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Lh(t,e){return t<e?-1:t>e?1:0}function Ph(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */
class xh{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _h(Eh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _h(Eh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _h(Eh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _h(Eh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return xh.fromMillis(Date.now())}static fromDate(t){return xh.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new xh(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Lh(this.nanoseconds,t.nanoseconds):Lh(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Uh{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Uh(t)}static min(){return new Uh(new xh(0,0))}static max(){return new Uh(new xh(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Vh{constructor(t,e,n){void 0===e?e=0:e>t.length&&wh(),void 0===n?n=t.length-e:n>t.length-e&&wh(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Vh.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vh?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Fh extends Vh{construct(t,e,n){return new Fh(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new _h(Eh.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Fh(e)}static emptyPath(){return new Fh([])}}const jh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bh extends Vh{construct(t,e,n){return new Bh(t,e,n)}static isValidIdentifier(t){return jh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bh.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Bh(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new _h(Eh.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new _h(Eh.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _h(Eh.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new _h(Eh.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Bh(e)}static emptyPath(){return new Bh([])}}
/**
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
 */class qh{constructor(t){this.path=t}static fromPath(t){return new qh(Fh.fromString(t))}static fromName(t){return new qh(Fh.fromString(t).popFirst(5))}static empty(){return new qh(Fh.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Fh.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Fh.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new qh(new Fh(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class $h{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}$h.UNKNOWN_ID=-1;function zh(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Uh.fromTimestamp(1e9===r?new xh(n+1,0):new xh(n,r));return new Kh(s,qh.empty(),e)}function Hh(t){return new Kh(t.readTime,t.key,-1)}class Kh{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Kh(Uh.min(),qh.empty(),-1)}static max(){return new Kh(Uh.max(),qh.empty(),-1)}}function Gh(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=qh.comparator(t.documentKey,e.documentKey),0!==n?n:Lh(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Wh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function Xh(t){if(t.code!==Eh.FAILED_PRECONDITION||t.message!==Wh)throw t;gh("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Yh{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&wh(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Yh(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Yh?e:Yh.resolve(e)}catch(t){return Yh.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Yh.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Yh.reject(e)}static resolve(t){return new Yh(((e,n)=>{e(t)}))}static reject(t){return new Yh(((e,n)=>{n(t)}))}static waitFor(t){return new Yh(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=Yh.resolve(!1);for(const n of t)e=e.next((t=>t?Yh.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Yh(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new Yh(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
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
 */function Jh(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class Zh{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
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
 */function td(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ed(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */Zh.ot=-1;class rd{constructor(t,e){this.comparator=t,this.root=e||id.EMPTY}insert(t,e){return new rd(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,id.BLACK,null,null))}remove(t){return new rd(this.comparator,this.root.remove(t,this.comparator).copy(null,null,id.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sd(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sd(this.root,t,this.comparator,!1)}getReverseIterator(){return new sd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sd(this.root,t,this.comparator,!0)}}class sd{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class id{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:id.RED,this.left=null!=r?r:id.EMPTY,this.right=null!=s?s:id.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new id(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return id.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return id.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,id.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,id.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wh();if(this.right.isRed())throw wh();const t=this.left.check();if(t!==this.right.check())throw wh();return t+(this.isRed()?0:1)}}id.EMPTY=null,id.RED=!0,id.BLACK=!1,id.EMPTY=new class{constructor(){this.size=0}get key(){throw wh()}get value(){throw wh()}get color(){throw wh()}get left(){throw wh()}get right(){throw wh()}copy(t,e,n,r,s){return this}insert(t,e,n){return new id(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class od{constructor(t){this.comparator=t,this.data=new rd(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ad(this.data.getIterator())}getIteratorFrom(t){return new ad(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof od))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new od(this.comparator);return e.data=t,e}}class ad{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class cd{constructor(t){this.fields=t,t.sort(Bh.comparator)}static empty(){return new cd([])}unionWith(t){let e=new od(Bh.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new cd(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ph(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */
/**
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
 */
class ud{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ud(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ud(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Lh(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ud.EMPTY_BYTE_STRING=new ud("");const ld=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hd(t){if(bh(!!t),"string"==typeof t){let e=0;const n=ld.exec(t);if(bh(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dd(t.seconds),nanos:dd(t.nanos)}}function dd(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function fd(t){return"string"==typeof t?ud.fromBase64String(t):ud.fromUint8Array(t)}
/**
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
 */function pd(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gd(t){const e=t.mapValue.fields.__previous_value__;return pd(e)?gd(e):e}function md(t){const e=hd(t.mapValue.fields.__local_write_time__.timestampValue);return new xh(e.seconds,e.nanos)}
/**
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
 */class yd{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class vd{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new vd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof vd&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */function wd(t){return null==t}function bd(t){return 0===t&&1/t==-1/0}function Id(t){return"number"==typeof t&&Number.isInteger(t)&&!bd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */const Ed={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _d(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pd(t)?4:Ud(t)?9007199254740991:10:wh()}function Td(t,e){if(t===e)return!0;const n=_d(t);if(n!==_d(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return md(t).isEqual(md(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=hd(t.timestampValue),r=hd(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return fd(t.bytesValue).isEqual(fd(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return dd(t.geoPointValue.latitude)===dd(e.geoPointValue.latitude)&&dd(t.geoPointValue.longitude)===dd(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return dd(t.integerValue)===dd(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=dd(t.doubleValue),r=dd(e.doubleValue);return n===r?bd(n)===bd(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ph(t.arrayValue.values||[],e.arrayValue.values||[],Td);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(td(n)!==td(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Td(n[s],r[s])))return!1;return!0}(t,e);default:return wh()}}function kd(t,e){return void 0!==(t.values||[]).find((t=>Td(t,e)))}function Sd(t,e){if(t===e)return 0;const n=_d(t),r=_d(e);if(n!==r)return Lh(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Lh(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=dd(t.integerValue||t.doubleValue),r=dd(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Cd(t.timestampValue,e.timestampValue);case 4:return Cd(md(t),md(e));case 5:return Lh(t.stringValue,e.stringValue);case 6:return function(t,e){const n=fd(t),r=fd(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Lh(n[s],r[s]);if(0!==t)return t}return Lh(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Lh(dd(t.latitude),dd(e.latitude));return 0!==n?n:Lh(dd(t.longitude),dd(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Sd(n[s],r[s]);if(t)return t}return Lh(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ed.mapValue&&e===Ed.mapValue)return 0;if(t===Ed.mapValue)return 1;if(e===Ed.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Lh(r[o],i[o]);if(0!==t)return t;const e=Sd(n[r[o]],s[i[o]]);if(0!==e)return e}return Lh(r.length,i.length)}(t.mapValue,e.mapValue);default:throw wh()}}function Cd(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Lh(t,e);const n=hd(t),r=hd(e),s=Lh(n.seconds,r.seconds);return 0!==s?s:Lh(n.nanos,r.nanos)}function Ad(t){return Nd(t)}function Nd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=hd(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fd(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,qh.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Nd(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Nd(t.fields[s])}`;return n+"}"}(t.mapValue):wh();var e,n}function Dd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rd(t){return!!t&&"integerValue"in t}function Od(t){return!!t&&"arrayValue"in t}function Md(t){return!!t&&"nullValue"in t}function Ld(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pd(t){return!!t&&"mapValue"in t}function xd(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ed(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=xd(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xd(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ud(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Vd{constructor(t){this.value=t}static empty(){return new Vd({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Pd(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xd(e)}setAll(t){let e=Bh.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=xd(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Pd(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Td(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Pd(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ed(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Vd(xd(this.value))}}function Fd(t){const e=[];return ed(t.fields,((t,n)=>{const r=new Bh([t]);if(Pd(n)){const t=Fd(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new cd(e)
/**
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
 */}class jd{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new jd(t,0,Uh.min(),Uh.min(),Vd.empty(),0)}static newFoundDocument(t,e,n){return new jd(t,1,e,Uh.min(),n,0)}static newNoDocument(t,e){return new jd(t,2,e,Uh.min(),Vd.empty(),0)}static newUnknownDocument(t,e){return new jd(t,3,e,Uh.min(),Vd.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vd.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vd.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Uh.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof jd&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jd(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Bd{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Bd(t,e,n,r,s,i,o)}function $d(t){const e=Ih(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ad(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),wd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ad(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ad(t))).join(",")),e.ut=t}return e.ut}function zd(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ad(e.value)}`;var e})).join(", ")}]`),wd(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ad(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ad(t))).join(",")),`Target(${e})`}function Hd(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!sf(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Td(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!af(t.startAt,e.startAt)&&af(t.endAt,e.endAt)}function Kd(t){return qh.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Gd extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Wd(t,e,n):"array-contains"===e?new Jd(t,n):"in"===e?new Zd(t,n):"not-in"===e?new tf(t,n):"array-contains-any"===e?new ef(t,n):new Gd(t,e,n)}static ct(t,e,n){return"in"===e?new Qd(t,n):new Xd(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Sd(e,this.value)):null!==e&&_d(this.value)===_d(e)&&this.at(Sd(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return wh()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Wd extends Gd{constructor(t,e,n){super(t,e,n),this.key=qh.fromName(n.referenceValue)}matches(t){const e=qh.comparator(t.key,this.key);return this.at(e)}}class Qd extends Gd{constructor(t,e){super(t,"in",e),this.keys=Yd("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Xd extends Gd{constructor(t,e){super(t,"not-in",e),this.keys=Yd("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Yd(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>qh.fromName(t.referenceValue)))}class Jd extends Gd{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Od(e)&&kd(e.arrayValue,this.value)}}class Zd extends Gd{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&kd(this.value.arrayValue,e)}}class tf extends Gd{constructor(t,e){super(t,"not-in",e)}matches(t){if(kd(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!kd(this.value.arrayValue,e)}}class ef extends Gd{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Od(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>kd(this.value.arrayValue,t)))}}class nf{constructor(t,e){this.position=t,this.inclusive=e}}class rf{constructor(t,e="asc"){this.field=t,this.dir=e}}function sf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function of(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?qh.comparator(qh.fromName(o.referenceValue),n.key):Sd(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function af(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Td(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class cf{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function uf(t,e,n,r,s,i,o,a){return new cf(t,e,n,r,s,i,o,a)}function lf(t){return new cf(t)}function hf(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function df(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ff(t){for(const e of t.filters)if(e.ht())return e.field;return null}function pf(t){return null!==t.collectionGroup}function gf(t){const e=Ih(t);if(null===e.lt){e.lt=[];const t=ff(e),n=df(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new rf(t)),e.lt.push(new rf(Bh.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new rf(Bh.keyField(),t))}}}return e.lt}function mf(t){const e=Ih(t);if(!e.ft)if("F"===e.limitType)e.ft=qd(e.path,e.collectionGroup,gf(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of gf(e)){const e="desc"===s.dir?"asc":"desc";t.push(new rf(s.field,e))}const n=e.endAt?new nf(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new nf(e.startAt.position,e.startAt.inclusive):null;e.ft=qd(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function yf(t,e,n){return new cf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vf(t,e){return Hd(mf(t),mf(e))&&t.limitType===e.limitType}function wf(t){return`${$d(mf(t))}|lt:${t.limitType}`}function bf(t){return`Query(target=${zd(mf(t))}; limitType=${t.limitType})`}function If(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):qh.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=of(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,gf(t),e))&&!(t.endAt&&!function(t,e,n){const r=of(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,gf(t),e))}(t,e)}function Ef(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _f(t){return(e,n)=>{let r=!1;for(const s of gf(t)){const t=Tf(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Tf(t,e,n){const r=t.field.isKeyField()?qh.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Sd(r,s):wh()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return wh()}}
/**
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
 */function kf(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bd(e)?"-0":e}}function Sf(t){return{integerValue:""+t}}function Cf(t,e){return Id(e)?Sf(e):kf(t,e)}
/**
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
 */class Af{constructor(){this._=void 0}}function Nf(t,e,n){return t instanceof Of?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Mf?Lf(t,e):t instanceof Pf?xf(t,e):function(t,e){const n=Rf(t,e),r=Vf(n)+Vf(t._t);return Rd(n)&&Rd(t._t)?Sf(r):kf(t.wt,r)}(t,e)}function Df(t,e,n){return t instanceof Mf?Lf(t,e):t instanceof Pf?xf(t,e):n}function Rf(t,e){return t instanceof Uf?Rd(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Of extends Af{}class Mf extends Af{constructor(t){super(),this.elements=t}}function Lf(t,e){const n=Ff(e);for(const r of t.elements)n.some((t=>Td(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Pf extends Af{constructor(t){super(),this.elements=t}}function xf(t,e){let n=Ff(e);for(const r of t.elements)n=n.filter((t=>!Td(t,r)));return{arrayValue:{values:n}}}class Uf extends Af{constructor(t,e){super(),this.wt=t,this._t=e}}function Vf(t){return dd(t.integerValue||t.doubleValue)}function Ff(t){return Od(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class jf{constructor(t,e){this.field=t,this.transform=e}}function Bf(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Mf&&e instanceof Mf||t instanceof Pf&&e instanceof Pf?Ph(t.elements,e.elements,Td):t instanceof Uf&&e instanceof Uf?Td(t._t,e._t):t instanceof Of&&e instanceof Of}(t.transform,e.transform)}class qf{constructor(t,e){this.version=t,this.transformResults=e}}class $f{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new $f}static exists(t){return new $f(void 0,t)}static updateTime(t){return new $f(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zf(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Hf{}function Kf(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new np(t.key,$f.none()):new Yf(t.key,t.data,$f.none());{const n=t.data,r=Vd.empty();let s=new od(Bh.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Jf(t.key,r,new cd(s.toArray()),$f.none())}}function Gf(t,e,n){t instanceof Yf?function(t,e,n){const r=t.value.clone(),s=tp(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Jf?function(t,e,n){if(!zf(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=tp(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Zf(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Wf(t,e,n,r){return t instanceof Yf?function(t,e,n,r){if(!zf(t.precondition,e))return n;const s=t.value.clone(),i=ep(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jf?function(t,e,n,r){if(!zf(t.precondition,e))return n;const s=ep(t.fieldTransforms,r,e),i=e.data;return i.setAll(Zf(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return zf(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Qf(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Rf(r.transform,t||null);null!=s&&(null===n&&(n=Vd.empty()),n.set(r.field,s))}return n||null}function Xf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ph(t,e,((t,e)=>Bf(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yf extends Hf{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Jf extends Hf{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zf(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function tp(t,e,n){const r=new Map;bh(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Df(o,a,n[s]))}return r}function ep(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Nf(t,i,e))}return r}class np extends Hf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rp extends Hf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class sp{constructor(t){this.count=t}}
/**
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
 */var ip,op;function ap(t){switch(t){default:return wh();case Eh.CANCELLED:case Eh.UNKNOWN:case Eh.DEADLINE_EXCEEDED:case Eh.RESOURCE_EXHAUSTED:case Eh.INTERNAL:case Eh.UNAVAILABLE:case Eh.UNAUTHENTICATED:return!1;case Eh.INVALID_ARGUMENT:case Eh.NOT_FOUND:case Eh.ALREADY_EXISTS:case Eh.PERMISSION_DENIED:case Eh.FAILED_PRECONDITION:case Eh.ABORTED:case Eh.OUT_OF_RANGE:case Eh.UNIMPLEMENTED:case Eh.DATA_LOSS:return!0}}function cp(t){if(void 0===t)return mh("GRPC error has no .code"),Eh.UNKNOWN;switch(t){case ip.OK:return Eh.OK;case ip.CANCELLED:return Eh.CANCELLED;case ip.UNKNOWN:return Eh.UNKNOWN;case ip.DEADLINE_EXCEEDED:return Eh.DEADLINE_EXCEEDED;case ip.RESOURCE_EXHAUSTED:return Eh.RESOURCE_EXHAUSTED;case ip.INTERNAL:return Eh.INTERNAL;case ip.UNAVAILABLE:return Eh.UNAVAILABLE;case ip.UNAUTHENTICATED:return Eh.UNAUTHENTICATED;case ip.INVALID_ARGUMENT:return Eh.INVALID_ARGUMENT;case ip.NOT_FOUND:return Eh.NOT_FOUND;case ip.ALREADY_EXISTS:return Eh.ALREADY_EXISTS;case ip.PERMISSION_DENIED:return Eh.PERMISSION_DENIED;case ip.FAILED_PRECONDITION:return Eh.FAILED_PRECONDITION;case ip.ABORTED:return Eh.ABORTED;case ip.OUT_OF_RANGE:return Eh.OUT_OF_RANGE;case ip.UNIMPLEMENTED:return Eh.UNIMPLEMENTED;case ip.DATA_LOSS:return Eh.DATA_LOSS;default:return wh()}}(op=ip||(ip={}))[op.OK=0]="OK",op[op.CANCELLED=1]="CANCELLED",op[op.UNKNOWN=2]="UNKNOWN",op[op.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",op[op.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",op[op.NOT_FOUND=5]="NOT_FOUND",op[op.ALREADY_EXISTS=6]="ALREADY_EXISTS",op[op.PERMISSION_DENIED=7]="PERMISSION_DENIED",op[op.UNAUTHENTICATED=16]="UNAUTHENTICATED",op[op.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",op[op.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",op[op.ABORTED=10]="ABORTED",op[op.OUT_OF_RANGE=11]="OUT_OF_RANGE",op[op.UNIMPLEMENTED=12]="UNIMPLEMENTED",op[op.INTERNAL=13]="INTERNAL",op[op.UNAVAILABLE=14]="UNAVAILABLE",op[op.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class up{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ed(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return nd(this.inner)}size(){return this.innerSize}}
/**
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
 */const lp=new rd(qh.comparator);function hp(){return lp}const dp=new rd(qh.comparator);function fp(...t){let e=dp;for(const n of t)e=e.insert(n.key,n);return e}function pp(t){let e=dp;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function gp(){return yp()}function mp(){return yp()}function yp(){return new up((t=>t.toString()),((t,e)=>t.isEqual(e)))}const vp=new rd(qh.comparator),wp=new od(qh.comparator);function bp(...t){let e=wp;for(const n of t)e=e.add(n);return e}const Ip=new od(Lh);function Ep(){return Ip}
/**
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
 */class _p{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Tp.createSynthesizedTargetChangeForCurrentChange(t,e)),new _p(Uh.min(),n,Ep(),hp(),bp())}}class Tp{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Tp(ud.EMPTY_BYTE_STRING,e,bp(),bp(),bp())}}
/**
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
 */class kp{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class Sp{constructor(t,e){this.targetId=t,this.It=e}}class Cp{constructor(t,e,n=ud.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ap{constructor(){this.Tt=0,this.Et=Rp(),this.At=ud.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=bp(),e=bp(),n=bp();return this.Et.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:wh()}})),new Tp(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Rp()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Np{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=hp(),this.Bt=Dp(),this.Lt=new od(Lh)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:wh()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(Kd(t))if(0===n){const n=new qh(t.path);this.Kt(e,n,jd.newNoDocument(n,Uh.min()))}else bh(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Kd(s.target)){const e=new qh(s.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,jd.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=bp();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new _p(t,e,this.Lt,this.$t,n);return this.$t=hp(),this.Bt=Dp(),this.Lt=new od(Lh),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Ap,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new od(Lh),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||gh("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Ap),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function Dp(){return new rd(qh.comparator)}function Rp(){return new rd(qh.comparator)}
/**
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
 */const Op=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Mp=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Lp{constructor(t,e){this.databaseId=t,this.dt=e}}function Pp(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xp(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Up(t,e){return Pp(t,e.toTimestamp())}function Vp(t){return bh(!!t),Uh.fromTimestamp(function(t){const e=hd(t);return new xh(e.seconds,e.nanos)}(t))}function Fp(t,e){return function(t){return new Fh(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function jp(t){const e=Fh.fromString(t);return bh(ug(e)),e}function Bp(t,e){return Fp(t.databaseId,e.path)}function qp(t,e){const n=jp(e);if(n.get(1)!==t.databaseId.projectId)throw new _h(Eh.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _h(Eh.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new qh(Kp(n))}function $p(t,e){return Fp(t.databaseId,e)}function zp(t){const e=jp(t);return 4===e.length?Fh.emptyPath():Kp(e)}function Hp(t){return new Fh(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kp(t){return bh(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Gp(t,e,n){return{name:Bp(t,e),fields:n.value.mapValue.fields}}function Wp(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:wh()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(bh(void 0===e||"string"==typeof e),ud.fromBase64String(e||"")):(bh(void 0===e||e instanceof Uint8Array),ud.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Eh.UNKNOWN:cp(t.code);return new _h(e,t.message||"")}(o);n=new Cp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qp(t,r.document.name),i=Vp(r.document.updateTime),o=new Vd({mapValue:{fields:r.document.fields}}),a=jd.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new kp(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qp(t,r.document),i=r.readTime?Vp(r.readTime):Uh.min(),o=jd.newNoDocument(s,i),a=r.removedTargetIds||[];n=new kp([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qp(t,r.document),i=r.removedTargetIds||[];n=new kp([],i,s,null)}else{if(!("filter"in e))return wh();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new sp(r),i=t.targetId;n=new Sp(i,s)}}return n}function Qp(t,e){let n;if(e instanceof Yf)n={update:Gp(t,e.key,e.value)};else if(e instanceof np)n={delete:Bp(t,e.key)};else if(e instanceof Jf)n={update:Gp(t,e.key,e.data),updateMask:cg(e.fieldMask)};else{if(!(e instanceof rp))return wh();n={verify:Bp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Of)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Mf)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Pf)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Uf)return{fieldPath:e.field.canonicalString(),increment:n._t};throw wh()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Up(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:wh()}(t,e.precondition)),n}function Xp(t,e){return t&&t.length>0?(bh(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Vp(t.updateTime):Vp(e);return n.isEqual(Uh.min())&&(n=Vp(e)),new qf(n,t.transformResults||[])}(t,e)))):[]}function Yp(t,e){return{documents:[$p(t,e.path)]}}function Jp(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=$p(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$p(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ld(t.value))return{unaryFilter:{field:sg(t.field),op:"IS_NAN"}};if(Md(t.value))return{unaryFilter:{field:sg(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ld(t.value))return{unaryFilter:{field:sg(t.field),op:"IS_NOT_NAN"}};if(Md(t.value))return{unaryFilter:{field:sg(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sg(t.field),op:rg(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:sg(t.field),direction:ng(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||wd(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Zp(t){let e=zp(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){bh(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=eg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new rf(ig(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,wd(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new nf(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new nf(n,e)}(n.endAt)),uf(e,s,o,i,a,"F",c,u)}function tg(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return wh()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function eg(t){return t?void 0!==t.unaryFilter?[ag(t)]:void 0!==t.fieldFilter?[og(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>eg(t))).reduce(((t,e)=>t.concat(e))):wh():[]}function ng(t){return Op[t]}function rg(t){return Mp[t]}function sg(t){return{fieldPath:t.canonicalString()}}function ig(t){return Bh.fromServerFormat(t.fieldPath)}function og(t){return Gd.create(ig(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wh()}}(t.fieldFilter.op),t.fieldFilter.value)}function ag(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ig(t.unaryFilter.field);return Gd.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ig(t.unaryFilter.field);return Gd.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ig(t.unaryFilter.field);return Gd.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ig(t.unaryFilter.field);return Gd.create(s,"!=",{nullValue:"NULL_VALUE"});default:return wh()}}function cg(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ug(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */const lg=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],hg=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dg=hg;
/**
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
 */
/**
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
 */
class fg{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Gf(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Wf(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Wf(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=mp();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Kf(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Uh.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),bp())}isEqual(t){return this.batchId===t.batchId&&Ph(this.mutations,t.mutations,((t,e)=>Xf(t,e)))&&Ph(this.baseMutations,t.baseMutations,((t,e)=>Xf(t,e)))}}class pg{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){bh(t.mutations.length===n.length);let r=vp;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new pg(t,e,n,r)}}
/**
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
 */class gg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class mg{constructor(t,e,n,r,s=Uh.min(),i=Uh.min(),o=ud.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new mg(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new mg(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new mg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
 */class yg{constructor(t){this.ne=t}}function vg(t){const e=Zp({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?yf(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
class wg{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(dd(t.integerValue));else if("doubleValue"in t){const n=dd(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),bd(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(fd(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Ud(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):wh()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),qh.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}wg.ye=new wg;
/**
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
 */
class bg{constructor(){this.ze=new Ig}addToCollectionParentIndex(t,e){return this.ze.add(e),Yh.resolve()}getCollectionParents(t,e){return Yh.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Yh.resolve()}deleteFieldIndex(t,e){return Yh.resolve()}getDocumentsMatchingTarget(t,e){return Yh.resolve(null)}getIndexType(t,e){return Yh.resolve(0)}getFieldIndexes(t,e){return Yh.resolve([])}getNextCollectionGroupToUpdate(t){return Yh.resolve(null)}getMinOffset(t,e){return Yh.resolve(Kh.min())}getMinOffsetFromCollectionGroup(t,e){return Yh.resolve(Kh.min())}updateCollectionGroup(t,e,n){return Yh.resolve()}updateIndexEntries(t,e){return Yh.resolve()}}class Ig{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new od(Fh.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new od(Fh.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Eg{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Eg(t,Eg.DEFAULT_COLLECTION_PERCENTILE,Eg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Eg.DEFAULT_COLLECTION_PERCENTILE=10,Eg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Eg.DEFAULT=new Eg(41943040,Eg.DEFAULT_COLLECTION_PERCENTILE,Eg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Eg.DISABLED=new Eg(-1,0,0);
/**
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
 */
class _g{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new _g(0)}static Rn(){return new _g(-1)}}
/**
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
 */
/**
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
 */
class Tg{constructor(){this.changes=new up((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,jd.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Yh.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
class kg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Sg{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Wf(n.mutation,t,cd.empty(),xh.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,bp()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=bp()){const r=gp();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=fp();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=gp();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,bp())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=hp();const i=yp(),o=yp();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Jf)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Wf(o.mutation,e,o.mutation.getFieldMask(),xh.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new kg(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=yp();let r=new rd(((t,e)=>t-e)),s=bp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||cd.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||bp()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=mp();c.forEach((t=>{if(!s.has(t)){const r=Kf(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Yh.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return qh.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Yh.resolve(gp());let o=-1,a=s;return i.next((e=>Yh.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Yh.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,bp()))).next((t=>({batchId:o,changes:pp(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new qh(e)).next((t=>{let e=fp();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=fp();return this.indexManager.getCollectionParents(t,r).next((i=>Yh.forEach(i,(i=>{const o=function(t,e){return new cf(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,jd.newInvalidDocument(n)))}));let n=fp();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&Wf(i.mutation,s,cd.empty(),xh.now()),If(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Yh.resolve(jd.newInvalidDocument(e))}}
/**
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
 */class Cg{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Yh.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Vp(n.createTime)}),Yh.resolve()}getNamedQuery(t,e){return Yh.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:vg(t.bundledQuery),readTime:Vp(t.readTime)}}(e)),Yh.resolve()}}
/**
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
 */class Ag{constructor(){this.overlays=new rd(qh.comparator),this.Xn=new Map}getOverlay(t,e){return Yh.resolve(this.overlays.get(e))}getOverlays(t,e){const n=gp();return Yh.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),Yh.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Yh.resolve()}getOverlaysForCollection(t,e,n){const r=gp(),s=e.length+1,i=new qh(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Yh.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new rd(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=gp(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=gp(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Yh.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new gg(e,n));let s=this.Xn.get(e);void 0===s&&(s=bp(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
/**
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
 */class Ng{constructor(){this.Zn=new od(Dg.ts),this.es=new od(Dg.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Dg(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Dg(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new qh(new Fh([])),n=new Dg(e,t),r=new Dg(e,t+1),s=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new qh(new Fh([])),n=new Dg(e,t),r=new Dg(e,t+1);let s=bp();return this.es.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Dg(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Dg{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return qh.comparator(t.key,e.key)||Lh(t.ls,e.ls)}static ns(t,e){return Lh(t.ls,e.ls)||qh.comparator(t.key,e.key)}}
/**
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
 */class Rg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new od(Dg.ts)}checkEmpty(t){return Yh.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new fg(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new Dg(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Yh.resolve(i)}lookupMutationBatch(t,e){return Yh.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return Yh.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Yh.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Yh.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Dg(e,0),r=new Dg(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);s.push(e)})),Yh.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new od(Lh);return e.forEach((t=>{const e=new Dg(t,0),r=new Dg(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Yh.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;qh.isDocumentKey(s)||(s=s.child(""));const i=new Dg(new qh(s),0);let o=new od(Lh);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),i),Yh.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){bh(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Yh.forEach(e.mutations,(r=>{const s=new Dg(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Dg(e,0),r=this.ds.firstAfterOrEqual(n);return Yh.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Yh.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class Og{constructor(t){this.ps=t,this.docs=new rd(qh.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Yh.resolve(n?n.document.mutableCopy():jd.newInvalidDocument(e))}getEntries(t,e){let n=hp();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():jd.newInvalidDocument(t))})),Yh.resolve(n)}getAllFromCollection(t,e,n){let r=hp();const s=new qh(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Gh(Hh(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Yh.resolve(r)}getAllFromCollectionGroup(t,e,n,r){wh()}Is(t,e){return Yh.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Mg(this)}getSize(t){return Yh.resolve(this.size)}}class Mg extends Tg{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),Yh.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
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
 */class Lg{constructor(t){this.persistence=t,this.Ts=new up((t=>$d(t)),Hd),this.lastRemoteSnapshotVersion=Uh.min(),this.highestTargetId=0,this.Es=0,this.As=new Ng,this.targetCount=0,this.Rs=_g.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Yh.resolve()}getLastRemoteSnapshotVersion(t){return Yh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Yh.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Yh.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Yh.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new _g(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Yh.resolve()}updateTargetData(t,e){return this.vn(e),Yh.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Yh.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Yh.waitFor(s).next((()=>r))}getTargetCount(t){return Yh.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Yh.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Yh.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),Yh.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Yh.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Yh.resolve(n)}containsKey(t,e){return Yh.resolve(this.As.containsKey(e))}}
/**
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
 */class Pg{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Zh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Lg(this),this.indexManager=new bg,this.remoteDocumentCache=function(t){return new Og(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new yg(e),this.Ds=new Cg(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ag,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Rg(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){gh("MemoryPersistence","Starting transaction:",t);const r=new xg(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return Yh.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class xg extends Qh{constructor(t){super(),this.currentSequenceNumber=t}}class Ug{constructor(t){this.persistence=t,this.ks=new Ng,this.Os=null}static Ms(t){return new Ug(t)}get Fs(){if(this.Os)return this.Os;throw wh()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Yh.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Yh.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Yh.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Yh.forEach(this.Fs,(n=>{const r=qh.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,Uh.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Yh.or([()=>Yh.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
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
 */
/**
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
 */
class Vg{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=bp(),r=bp();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Vg(t,e.fromCache,n,r)}}
/**
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
 */class Fg{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((s=>s||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Yh.resolve(null)}xi(t,e,n,r){return hf(e)||r.isEqual(Uh.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const i=this.ki(e,s);return this.Oi(e,i,n,r)?this.Ni(t,e):(ph()<=Gt.DEBUG&&gh("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bf(e)),this.Mi(t,i,e,zh(r,-1)))}))}ki(t,e){let n=new od(_f(t));return e.forEach(((e,r)=>{If(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return ph()<=Gt.DEBUG&&gh("QueryEngine","Using full collection scan to execute query:",bf(e)),this.Di.getDocumentsMatchingQuery(t,e,Kh.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class jg{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new rd(Lh),this.Bi=new up((t=>$d(t)),Hd),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sg(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function Bg(t,e,n,r){return new jg(t,e,n,r)}async function qg(t,e){const n=Ih(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=bp();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function $g(t,e){const n=Ih(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Yh.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);bh(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=bp();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function zg(t){const e=Ih(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Hg(t,e){const n=Ih(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ud.EMPTY_BYTE_STRING,Uh.min()).withLastLimboFreeSnapshotVersion(Uh.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=hp(),c=bp();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Kg(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(Uh.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Yh.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=s,t)))}function Kg(t,e,n){let r=bp(),s=bp();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=hp();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Uh.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):gh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function Gg(t,e){const n=Ih(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Wg(t,e){const n=Ih(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((s=>s?(r=s,Yh.resolve(r)):n.Vs.allocateTargetId(t).next((s=>(r=new mg(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Qg(t,e,n){const r=Ih(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Jh(t))throw t;gh("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function Xg(t,e,n){const r=Ih(t);let s=Uh.min(),i=bp();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Ih(t),s=r.Bi.get(n);return void 0!==s?Yh.resolve(r.$i.get(s)):r.Vs.getTargetData(e,n)}(r,t,mf(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?s:Uh.min(),n?i:bp()))).next((t=>(Yg(r,Ef(e),t),{documents:t,ji:i})))))}function Yg(t,e,n){let r=Uh.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}class Jg{constructor(){this.activeTargetIds=Ep()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zg{constructor(){this.Fr=new Jg,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Jg,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class tm{Br(t){}shutdown(){}}
/**
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
 */class em{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){gh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){gh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const nm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class rm{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
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
 */class sm extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);gh("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then((t=>(gh("RestConnection","Received: ",t),t)),(e=>{throw yh("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,r,s,i){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+dh,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=nm[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((s,i)=>{const o=new uh;o.listenOnce(sh.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case rh.NO_ERROR:const e=o.getResponseJson();gh("Connection","XHR received:",JSON.stringify(e)),s(e);break;case rh.TIMEOUT:gh("Connection",'RPC "'+t+'" timed out'),i(new _h(Eh.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const n=o.getStatus();if(gh("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Eh).indexOf(e)>=0?e:Eh.UNKNOWN}(t.status);i(new _h(e,t.message))}else i(new _h(Eh.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new _h(Eh.UNAVAILABLE,"Connection failed."));break;default:wh()}}finally{gh("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=eh(),i=nh(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ah({})),this.uo(o.initMessageHeaders,e,n),mt()||vt()||wt()||bt()||It()||yt()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");gh("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new rm({jr:t=>{l?gh("Connection","Not sending because WebChannel is closed:",t):(u||(gh("Connection","Opening WebChannel transport."),c.open(),u=!0),gh("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,ch.EventType.OPEN,(()=>{l||gh("Connection","WebChannel transport opened.")})),d(c,ch.EventType.CLOSE,(()=>{l||(l=!0,gh("Connection","WebChannel transport closed"),h.eo())})),d(c,ch.EventType.ERROR,(t=>{l||(l=!0,yh("Connection","WebChannel transport errored:",t),h.eo(new _h(Eh.UNAVAILABLE,"The operation could not be completed")))})),d(c,ch.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];bh(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){gh("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=ip[t];if(void 0!==e)return cp(e)}(t),n=s.message;void 0===e&&(e=Eh.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.eo(new _h(e,n)),c.close()}else gh("Connection","WebChannel received:",n),h.no(n)}})),d(i,ih.STAT_EVENT,(t=>{t.stat===oh.PROXY?gh("Connection","Detected buffering proxy"):t.stat===oh.NOPROXY&&gh("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
/**
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
 */
/**
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
 */function im(){return"undefined"!=typeof document?document:null}
/**
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
 */function om(t){return new Lp(t,!0)}class am{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&gh("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
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
 */class cm{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new am(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Eh.RESOURCE_EXHAUSTED?(mh(e.toString()),mh("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Eh.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new _h(Eh.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return gh("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(gh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class um extends cm{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Wp(this.wt,t),n=function(t){if(!("targetChange"in t))return Uh.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Uh.min():e.readTime?Vp(e.readTime):Uh.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Hp(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=Kd(r)?{documents:Yp(t,r)}:{query:Jp(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=xp(t,e.resumeToken):e.snapshotVersion.compareTo(Uh.min())>0&&(n.readTime=Pp(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=tg(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Hp(this.wt),e.removeTarget=t,this.Mo(e)}}class lm extends cm{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(bh(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Xp(t.writeResults,t.commitTime),n=Vp(t.commitTime);return this.listener.Jo(n,e)}return bh(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Hp(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Qp(this.wt,t)))};this.Mo(e)}}
/**
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
 */class hm extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new _h(Eh.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Eh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _h(Eh.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Eh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _h(Eh.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class dm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(mh(e),this.su=!1):gh("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
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
 */class fm{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{Em(this)&&(gh("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ih(t);e.lu.add(4),await gm(e),e._u.set("Unknown"),e.lu.delete(4),await pm(e)}(this))}))})),this._u=new dm(n,r)}}async function pm(t){if(Em(t))for(const e of t.fu)await e(!0)}async function gm(t){for(const e of t.fu)await e(!1)}function mm(t,e){const n=Ih(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Im(n)?bm(n):jm(n).Co()&&vm(n,e))}function ym(t,e){const n=Ih(t),r=jm(n);n.hu.delete(e),r.Co()&&wm(n,e),0===n.hu.size&&(r.Co()?r.ko():Em(n)&&n._u.set("Unknown"))}function vm(t,e){t.wu.Nt(e.targetId),jm(t).Qo(e)}function wm(t,e){t.wu.Nt(e),jm(t).jo(e)}function bm(t){t.wu=new Np({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),jm(t).start(),t._u.iu()}function Im(t){return Em(t)&&!jm(t).Do()&&t.hu.size>0}function Em(t){return 0===Ih(t).lu.size}function _m(t){t.wu=void 0}async function Tm(t){t.hu.forEach(((e,n)=>{vm(t,e)}))}async function km(t,e){_m(t),Im(t)?(t._u.uu(e),bm(t)):t._u.set("Unknown")}async function Sm(t,e,n){if(t._u.set("Online"),e instanceof Cp&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){gh("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Cm(t,n)}else if(e instanceof kp?t.wu.Ut(e):e instanceof Sp?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Uh.min()))try{const e=await zg(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(r);s&&t.hu.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(ud.EMPTY_BYTE_STRING,n.snapshotVersion)),wm(t,e);const r=new mg(n.target,e,1,n.sequenceNumber);vm(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){gh("RemoteStore","Failed to raise snapshot:",e),await Cm(t,e)}}async function Cm(t,e,n){if(!Jh(e))throw e;t.lu.add(1),await gm(t),t._u.set("Offline"),n||(n=()=>zg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{gh("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await pm(t)}))}function Am(t,e){return e().catch((n=>Cm(t,n,e)))}async function Nm(t){const e=Ih(t),n=Bm(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Dm(e);)try{const t=await Gg(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,Rm(e,t)}catch(t){await Cm(e,t)}Om(e)&&Mm(e)}function Dm(t){return Em(t)&&t.au.length<10}function Rm(t,e){t.au.push(e);const n=Bm(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Om(t){return Em(t)&&!Bm(t).Do()&&t.au.length>0}function Mm(t){Bm(t).start()}async function Lm(t){Bm(t).Xo()}async function Pm(t){const e=Bm(t);for(const n of t.au)e.Ho(n.mutations)}async function xm(t,e,n){const r=t.au.shift(),s=pg.from(r,e,n);await Am(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Nm(t)}async function Um(t,e){e&&Bm(t).zo&&await async function(t,e){if(n=e.code,ap(n)&&n!==Eh.ABORTED){const n=t.au.shift();Bm(t).No(),await Am(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Nm(t)}var n}(t,e),Om(t)&&Mm(t)}async function Vm(t,e){const n=Ih(t);n.asyncQueue.verifyOperationInProgress(),gh("RemoteStore","RemoteStore received new credentials");const r=Em(n);n.lu.add(3),await gm(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await pm(n)}async function Fm(t,e){const n=Ih(t);e?(n.lu.delete(2),await pm(n)):e||(n.lu.add(2),await gm(n),n._u.set("Unknown"))}function jm(t){return t.mu||(t.mu=function(t,e,n){const r=Ih(t);return r.tu(),new um(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
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
 */}(t.datastore,t.asyncQueue,{zr:Tm.bind(null,t),Jr:km.bind(null,t),Go:Sm.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Im(t)?bm(t):t._u.set("Unknown")):(await t.mu.stop(),_m(t))}))),t.mu}function Bm(t){return t.gu||(t.gu=function(t,e,n){const r=Ih(t);return r.tu(),new lm(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Lm.bind(null,t),Jr:Um.bind(null,t),Yo:Pm.bind(null,t),Jo:xm.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Nm(t)):(await t.gu.stop(),t.au.length>0&&(gh("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
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
 */}class qm{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Th,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new qm(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _h(Eh.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $m(t,e){if(mh("AsyncQueue",`${e}: ${t}`),Jh(t))return new _h(Eh.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class zm{constructor(t){this.comparator=t?(e,n)=>t(e,n)||qh.comparator(e.key,n.key):(t,e)=>qh.comparator(t.key,e.key),this.keyedMap=fp(),this.sortedSet=new rd(this.comparator)}static emptySet(t){return new zm(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof zm))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new zm;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class Hm{constructor(){this.yu=new rd(qh.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):wh():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Km{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Km(t,e,zm.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Gm{constructor(){this.Iu=void 0,this.listeners=[]}}class Wm{constructor(){this.queries=new up((t=>wf(t)),vf),this.onlineState="Unknown",this.Tu=new Set}}async function Qm(t,e){const n=Ih(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Gm),s)try{i.Iu=await n.onListen(r)}catch(t){const n=$m(t,`Initialization of query '${bf(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Zm(n)}async function Xm(t,e){const n=Ih(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Ym(t,e){const n=Ih(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(s)&&(r=!0);e.Iu=s}}r&&Zm(n)}function Jm(t,e,n){const r=Ih(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Zm(t){t.Tu.forEach((t=>{t.next()}))}class ty{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Km(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Km.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
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
 */
/**
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
 */
class ey{constructor(t){this.key=t}}class ny{constructor(t){this.key=t}}class ry{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=bp(),this.mutatedKeys=bp(),this.Lu=_f(t),this.Uu=new zm(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Hm,r=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=If(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return wh()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new Km(this.query,t.Uu,r,s,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Hm,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=bp(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new ny(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new ey(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=bp();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Km.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class sy{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class iy{constructor(t){this.key=t,this.Xu=!1}}class oy{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new up((t=>wf(t)),vf),this.ec=new Map,this.nc=new Set,this.sc=new rd(qh.comparator),this.ic=new Map,this.rc=new Ng,this.oc={},this.uc=new Map,this.cc=_g.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function ay(t,e){const n=Sy(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const t=await Wg(n.localStore,mf(e));n.isPrimaryClient&&mm(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await cy(n,e,r,"current"===i)}return s}async function cy(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ku(n);s.Oi&&(s=await Xg(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return by(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const s=await Xg(t.localStore,e,!0),i=new ry(e,s.ji),o=i.Ku(s.documents),a=Tp.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);by(t,n,c.zu);const u=new sy(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function uy(t,e){const n=Ih(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((t=>!vf(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qg(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ym(n.remoteStore,r.targetId),vy(n,r.targetId)})).catch(Xh)):(vy(n,r.targetId),await Qg(n.localStore,r.targetId,!0))}async function ly(t,e,n){const r=Cy(t);try{const t=await function(t,e){const n=Ih(t),r=xh.now(),s=e.reduce(((t,e)=>t.add(e.key)),bp());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=hp(),c=bp();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=Qf(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Jf(t.key,e,Fd(e.value.mapValue),$f.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:pp(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new rd(Lh)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await _y(r,t.changes),await Nm(r.remoteStore)}catch(t){const e=$m(t,"Failed to persist write");n.reject(e)}}async function hy(t,e){const n=Ih(t);try{const t=await Hg(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(bh(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?bh(r.Xu):t.removedDocuments.size>0&&(bh(r.Xu),r.Xu=!1))})),await _y(n,t,e)}catch(t){await Xh(t)}}function dy(t,e,n){const r=Ih(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Ih(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Eu(e)&&(r=!0)})),r&&Zm(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fy(t,e,n){const r=Ih(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let t=new rd(qh.comparator);t=t.insert(i,jd.newNoDocument(i,Uh.min()));const n=bp().add(i),s=new _p(Uh.min(),new Map,new od(Lh),t,n);await hy(r,s),r.sc=r.sc.remove(i),r.ic.delete(e),Ey(r)}else await Qg(r.localStore,e,!1).then((()=>vy(r,e,n))).catch(Xh)}async function py(t,e){const n=Ih(t),r=e.batch.batchId;try{const t=await $g(n.localStore,e);yy(n,r,null),my(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _y(n,t)}catch(t){await Xh(t)}}async function gy(t,e,n){const r=Ih(t);try{const t=await function(t,e){const n=Ih(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(bh(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);yy(r,e,n),my(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _y(r,t)}catch(n){await Xh(n)}}function my(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function yy(t,e,n){const r=Ih(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function vy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||wy(t,e)}))}function wy(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(ym(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ey(t))}function by(t,e,n){for(const r of n)r instanceof ey?(t.rc.addReference(r.key,e),Iy(t,r)):r instanceof ny?(gh("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||wy(t,r.key)):wh()}function Iy(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(gh("SyncEngine","New document in limbo: "+n),t.nc.add(r),Ey(t))}function Ey(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new qh(Fh.fromString(e)),r=t.cc.next();t.ic.set(r,new iy(n)),t.sc=t.sc.insert(n,r),mm(t.remoteStore,new mg(mf(lf(n.path)),r,2,Zh.ot))}}async function _y(t,e,n){const r=Ih(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Vg.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=Ih(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Yh.forEach(e,(e=>Yh.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Yh.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Jh(t))throw t;gh("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,s)}}}(r.localStore,i))}async function Ty(t,e){const n=Ih(t);if(!n.currentUser.isEqual(e)){gh("SyncEngine","User change. New user:",e.toKey());const t=await qg(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new _h(Eh.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await _y(n,t.Ki)}}function ky(t,e){const n=Ih(t),r=n.ic.get(e);if(r&&r.Xu)return bp().add(r.key);{let t=bp();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function Sy(t){const e=Ih(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ky.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fy.bind(null,e),e.Zu.Go=Ym.bind(null,e.eventManager),e.Zu.lc=Jm.bind(null,e.eventManager),e}function Cy(t){const e=Ih(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=py.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gy.bind(null,e),e}class Ay{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=om(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Bg(this.persistence,new Fg,t.initialUser,this.wt)}_c(t){return new Pg(Ug.Ms,this.wt)}dc(t){return new Zg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ny{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>dy(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ty.bind(null,this.syncEngine),await Fm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wm}createDatastore(t){const e=om(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new sm(r));var r;return function(t,e,n,r){return new hm(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>dy(this.syncEngine,t,0),i=em.V()?new em:new tm,new fm(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new oy(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ih(t);gh("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await gm(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class Dy{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */
/**
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
 */
class Ry{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=hh.UNAUTHENTICATED,this.clientId=Mh.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{gh("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(gh("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _h(Eh.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Th;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=$m(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Oy(t,e){t.asyncQueue.verifyOperationInProgress(),gh("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await qg(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function My(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ly(t);gh("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Vm(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Vm(e.remoteStore,n))),t.onlineComponents=e}async function Ly(t){return t.offlineComponents||(gh("FirestoreClient","Using default OfflineComponentProvider"),await Oy(t,new Ay)),t.offlineComponents}async function Py(t){return t.onlineComponents||(gh("FirestoreClient","Using default OnlineComponentProvider"),await My(t,new Ny)),t.onlineComponents}function xy(t){return Py(t).then((t=>t.syncEngine))}async function Uy(t){const e=await Py(t),n=e.eventManager;return n.onListen=ay.bind(null,e.syncEngine),n.onUnlisten=uy.bind(null,e.syncEngine),n}function Vy(t,e,n={}){const r=new Th;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Dy({next:n=>{e.enqueueAndForget((()=>Xm(t,o))),n.fromCache&&"server"===r.source?s.reject(new _h(Eh.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new ty(n,i,{includeMetadataChanges:!0,Du:!0});return Qm(t,o)}(await Uy(t),t.asyncQueue,e,n,r))),r.promise}const Fy=new Map;
/**
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
 */function jy(t,e,n){if(!n)throw new _h(Eh.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function By(t,e,n,r){if(!0===e&&!0===r)throw new _h(Eh.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qy(t){if(!qh.isDocumentKey(t))throw new _h(Eh.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $y(t){if(qh.isDocumentKey(t))throw new _h(Eh.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zy(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":wh()}function Hy(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _h(Eh.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zy(t);throw new _h(Eh.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class Ky{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new _h(Eh.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _h(Eh.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,By("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Gy{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ky({}),this._settingsFrozen=!1,t instanceof vd?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _h(Eh.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vd(t.options.projectId)}(t))}get app(){if(!this._app)throw new _h(Eh.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _h(Eh.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ky(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Sh;switch(t.type){case"gapi":const e=t.client;return bh(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Nh(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new _h(Eh.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Fy.get(t);e&&(gh("ComponentProvider","Removing Datastore"),Fy.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */
class Wy{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xy(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Wy(this.firestore,t,this._key)}}class Qy{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Qy(this.firestore,t,this._query)}}class Xy extends Qy{constructor(t,e,n){super(t,e,lf(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Wy(this.firestore,null,new qh(t))}withConverter(t){return new Xy(this.firestore,t,this._path)}}function Yy(t,e,...n){if(t=Ft(t),jy("collection","path",e),t instanceof Gy){const r=Fh.fromString(e,...n);return $y(r),new Xy(t,null,r)}{if(!(t instanceof Wy||t instanceof Xy))throw new _h(Eh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fh.fromString(e,...n));return $y(r),new Xy(t.firestore,null,r)}}function Jy(t,e,...n){if(t=Ft(t),1===arguments.length&&(e=Mh.I()),jy("doc","path",e),t instanceof Gy){const r=Fh.fromString(e,...n);return qy(r),new Wy(t,null,new qh(r))}{if(!(t instanceof Wy||t instanceof Xy))throw new _h(Eh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fh.fromString(e,...n));return qy(r),new Wy(t.firestore,t instanceof Xy?t.converter:null,new qh(r))}}
/**
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
 */
class Zy{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new am(this,"async_queue_retry"),this.Kc=()=>{const t=im();t&&gh("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=im();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=im();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Th;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(Wo){if(!Jh(Wo))throw Wo;gh("AsyncQueue","Operation failed with retryable error: "+Wo)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw mh("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=qm.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&wh()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function tv(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(t,["next","error","complete"])}class ev extends Gy{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Zy,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||sv(this),this._firestoreClient.terminate()}}function nv(t=hn()){return sn(t,"firestore").getImmediate()}function rv(t){return t._firestoreClient||sv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sv(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new yd(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ry(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
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
 */
/**
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
 */
class iv{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _h(Eh.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bh(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class ov{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ov(ud.fromBase64String(t))}catch(t){throw new _h(Eh.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ov(ud.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class av{constructor(t){this._methodName=t}}
/**
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
 */class cv{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _h(Eh.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _h(Eh.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Lh(this._lat,t._lat)||Lh(this._long,t._long)}}
/**
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
 */const uv=/^__.*__$/;class lv{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Jf(t,this.data,this.fieldMask,e,this.fieldTransforms):new Yf(t,this.data,e,this.fieldTransforms)}}function hv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wh()}}class dv{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new dv(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return kv(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(hv(this.Zc)&&uv.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class fv{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||om(t)}aa(t,e,n,r=!1){return new dv({Zc:t,methodName:e,ca:n,path:Bh.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function pv(t){const e=t._freezeSettings(),n=om(t._databaseId);return new fv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gv(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Iv("Data must be an object, but it was:",o,r);const a=wv(r,o);let c,u;if(i.merge)c=new cd(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Ev(e,r,n);if(!o.contains(s))throw new _h(Eh.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Sv(t,s)||t.push(s)}c=new cd(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new lv(new Vd(a),c,u)}class mv extends av{_toFieldTransform(t){return new jf(t.path,new Of)}isEqual(t){return t instanceof mv}}function yv(t,e,n,r=!1){return vv(n,t.aa(r?4:3,e))}function vv(t,e){if(bv(t=Ft(t)))return Iv("Unsupported field value:",e,t),wv(t,e);if(t instanceof av)return function(t,e){if(!hv(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=vv(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ft(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Cf(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=xh.fromDate(t);return{timestampValue:Pp(e.wt,n)}}if(t instanceof xh){const n=new xh(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Pp(e.wt,n)}}if(t instanceof cv)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ov)return{bytesValue:xp(e.wt,t._byteString)};if(t instanceof Wy){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Fp(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${zy(t)}`)}(t,e)}function wv(t,e){const n={};return nd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ed(t,((t,r)=>{const s=vv(r,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function bv(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof xh||t instanceof cv||t instanceof ov||t instanceof Wy||t instanceof av)}function Iv(t,e,n){if(!bv(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=zy(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Ev(t,e,n){if((e=Ft(e))instanceof iv)return e._internalPath;if("string"==typeof e)return Tv(t,e);throw kv("Field path arguments must be of type string or ",t,!1,void 0,n)}const _v=new RegExp("[~\\*/\\[\\]]");function Tv(t,e,n){if(e.search(_v)>=0)throw kv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iv(...e.split("."))._internalPath}catch(r){throw kv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kv(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new _h(Eh.INVALID_ARGUMENT,a+t+c)}function Sv(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class Cv{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wy(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Av(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Nv("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Av extends Cv{data(){return super.data()}}function Nv(t,e){return"string"==typeof e?Tv(t,e):e instanceof iv?e._internalPath:e._delegate._internalPath}
/**
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
 */class Dv{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Rv extends Cv{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ov(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Nv("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ov extends Rv{data(t={}){return super.data(t)}}class Mv{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Dv(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ov(this._firestore,this._userDataWriter,n.key,n,new Dv(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new _h(Eh.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Ov(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Dv(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Ov(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Dv(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Lv(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Lv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wh()}}
/**
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
 */
function Pv(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new _h(Eh.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xv{}function Uv(t,...e){for(const n of e)t=n._apply(t);return t}class Vv extends xv{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=pv(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new _h(Eh.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){$v(o,i);const e=[];for(const n of o)e.push(qv(r,t,n));a={arrayValue:{values:e}}}else a=qv(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||$v(o,i),a=yv(n,e,o,"in"===i||"not-in"===i);const c=Gd.create(s,i,a);return function(t,e){if(e.ht()){const n=ff(t);if(null!==n&&!n.isEqual(e.field))throw new _h(Eh.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=df(t);null!==r&&zv(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new _h(Eh.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _h(Eh.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new Qy(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new cf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Fv(t,e,n){const r=e,s=Nv("where",t);return new Vv(s,r,n)}class jv extends xv{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new _h(Eh.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new _h(Eh.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new rf(e,n);return function(t,e){if(null===df(t)){const n=ff(t);null!==n&&zv(t,n,e.field)}}(t,r),r}(t._query,this.fa,this.wa);return new Qy(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new cf(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Bv(t,e="asc"){const n=e,r=Nv("orderBy",t);return new jv(r,n)}function qv(t,e,n){if("string"==typeof(n=Ft(n))){if(""===n)throw new _h(Eh.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pf(e)&&-1!==n.indexOf("/"))throw new _h(Eh.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fh.fromString(n));if(!qh.isDocumentKey(r))throw new _h(Eh.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dd(t,new qh(r))}if(n instanceof Wy)return Dd(t,n._key);throw new _h(Eh.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zy(n)}.`)}function $v(t,e){if(!Array.isArray(t)||0===t.length)throw new _h(Eh.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new _h(Eh.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function zv(t,e,n){if(!n.isEqual(e))throw new _h(Eh.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */
/**
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
 */
class Hv{convertValue(t,e="none"){switch(_d(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dd(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fd(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw wh()}}convertObject(t,e){const n={};return ed(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new cv(dd(t.latitude),dd(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gd(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(md(t));default:return null}}convertTimestamp(t){const e=hd(t);return new xh(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Fh.fromString(t);bh(ug(n));const r=new vd(n.get(1),n.get(3)),s=new qh(n.popFirst(5));return r.isEqual(e)||mh(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
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
 */function Kv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Gv extends Hv{constructor(t){super(),this.firestore=t}convertBytes(t){return new ov(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Wy(this.firestore,null,e)}}function Wv(t){t=Hy(t,Qy);const e=Hy(t.firestore,ev),n=rv(e),r=new Gv(e);return Pv(t._query),Vy(n,t._query).then((n=>new Mv(e,r,t,n)))}function Qv(t,e){const n=Hy(t.firestore,ev),r=Jy(t),s=Kv(t.converter,e);return Yv(n,[gv(pv(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,$f.exists(!1))]).then((()=>r))}function Xv(t,...e){var n,r,s;t=Ft(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||tv(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(tv(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,u,l;if(t instanceof Wy)u=Hy(t.firestore,ev),l=lf(t._key.path),c={next:n=>{e[o]&&e[o](Jv(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Hy(t,Qy);u=Hy(n.firestore,ev),l=n._query;const r=new Gv(u);c={next:t=>{e[o]&&e[o](new Mv(u,r,n,t))},error:e[o+1],complete:e[o+2]},Pv(t._query)}return function(t,e,n,r){const s=new Dy(r),i=new ty(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Qm(await Uy(t),i))),()=>{s.Tc(),t.asyncQueue.enqueueAndForget((async()=>Xm(await Uy(t),i)))}}(rv(u),l,a,c)}function Yv(t,e){return function(t,e){const n=new Th;return t.asyncQueue.enqueueAndForget((async()=>ly(await xy(t),e,n))),n.promise}(rv(t),e)}function Jv(t,e,n){const r=n.docs.get(e._key),s=new Gv(t);return new Rv(t,s,e._key,r,new Dv(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */function Zv(){return new mv("serverTimestamp")}!function(t,e=!0){!function(t){dh=t}(un),rn(new jt("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new ev(r,new Ch(t.getProvider("auth-internal")),new Rh(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),dn(lh,"3.4.11",t),dn(lh,"3.4.11","esm2017")}();var tw=n(262);const ew={apiKey:"AIzaSyBRfQpbFsQcEK5sP6Tlv_x429zzTVoQHF0",authDomain:"army-app-3f258.firebaseapp.com",projectId:"army-app-3f258",storageBucket:"army-app-3f258.appspot.com",messagingSenderId:"1038167981016",appId:"1:1038167981016:web:91e4caa58119a1f3e990ad",measurementId:"G-1D1TXMW3XH"},nw=ln(ew),rw=Oo(nw),sw=nv(nw);rw.languageCode="en";const iw=Yy(sw,"colors");function ow(){const t=(0,tw.iH)(null),e=Rs(rw,(e=>t.value=e));(0,r.Ah)(e);const n=(0,r.Fl)((()=>null!==t.value)),s=async()=>{const t=new _s;t.setCustomParameters({lang:"en"}),await Di(rw,t).then((async t=>{const e=Uv(iw,Fv("userId","==",t.user.uid)),n=await Wv(e);let r=0;n.forEach((()=>{r++})),0==r&&Qv(iw,{userId:t.user.uid,color:"#"+Math.floor(16777215*Math.random()).toString(16)})}))},i=()=>Os(rw);return{user:t,isLogin:n,signIn:s,logOut:i}}const aw=Yy(sw,"messages"),cw=Uv(aw,Bv("createdAt"));function uw(){const t=(0,tw.iH)([]),e=Xv(cw,(e=>{t.value=e.docs.map((t=>({id:t.id,...t.data()}))).reverse()}));(0,r.Ah)(e);const{user:n,isLogin:s}=ow(),i=t=>{if(!s.value)return;const{photoURL:e,uid:r,displayName:i}=n.value;t&&Qv(aw,{userName:i,userId:r,userPhotoURL:e,text:t,datetime:Date.now(),createdAt:Zv()})};return{messages:t,sendMessage:i}}function lw(){const t=(0,tw.iH)([]),e=Xv(iw,(e=>{t.value=e.docs.map((t=>({id:t.id,...t.data()}))).reverse()}));(0,r.Ah)(e);const n=e=>{t.value.forEach((t=>{if(t.userId==e)return t.color}))};return{colors:t,getColor:n}}var hw={setup(){const{user:t,isLogin:e,signIn:n,logOut:r}=ow(),{colors:s}=lw();return{user:t,isLogin:e,signIn:n,logOut:r,colors:s}},methods:{handleScroll(){window.scrollY+window.innerHeight+2>=document.body.scrollHeight?this.$refs.header.style.transform="scale(0.97)":this.$refs.header.style.transform="scale(1)"}},computed:{getColor(){if(this.isLogin){let t="";return this.colors.forEach((e=>{e.userId!=this.user.uid||(t=e.color)})),t}return"#e36858"}},created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},dw=n(744);const fw=(0,dw.Z)(hw,[["render",at]]);var pw=fw;const gw={class:"footer",ref:"footer"},mw={class:"copyright"},yw=(0,r.Uk)(" © 2022 "),vw={key:0},ww=(0,r.Uk)(" Babich Dmitriy "),bw=(0,r._)("div",{class:"phone"},"375 (29) 589-02-91",-1),Iw=(0,r.uE)('<div class="messangers"><a href="https://www.instagram.com/l3.dima/" target="_blank" class="instagram"><i class="fab fa-instagram"></i></a><a href="https://t.me/l3Dima" target="_blank" class="telegram"><i class="fab fa-telegram-plane"></i></a><a href="https://twitter.com/BabicDmitrij" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a><a href="https://vk.com/l3_dima" target="_blank" class="vk"><i class="fab fa-vk"></i></a></div>',1);function Ew(t,e,n,s,i,o){return(0,r.wg)(),(0,r.iD)("div",gw,[(0,r._)("div",mw,[(0,r._)("div",null,[yw,o.getWidth<=390?((0,r.wg)(),(0,r.iD)("br",vw)):(0,r.kq)("",!0),ww]),bw]),Iw],512)}var _w={computed:{getWidth(){return window.screen.width}}};const Tw=(0,dw.Z)(_w,[["render",Ew]]);var kw=Tw;const Sw=["src"],Cw={class:"comment-box"},Aw={key:0,class:"info"},Nw=["innerHTML"];function Dw(t,e,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",{class:(0,s.C_)(["comment",n.sender?"flex-row-reverse":""])},[(0,r._)("div",{class:(0,s.C_)(["wd-85",n.sender?"flex-row-reverse":""])},[(0,r._)("div",null,[(0,r._)("img",{src:n.data.userPhotoURL,alt:"avatar",class:(0,s.C_)(n.sender?"left":"right")},null,10,Sw)]),(0,r._)("div",Cw,[n.sender?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",Aw,[(0,r._)("div",{class:"name",style:(0,s.j5)({color:a.getColor})},(0,s.zw)(n.data.userName),5)])),(0,r._)("div",{class:"message",style:(0,s.j5)({background:n.sender?a.getColor:"#b7b9a8",color:n.sender?a.getColorText:"#000"})},(0,s.zw)(n.data.text),5)])],2),(0,r._)("div",{class:(0,s.C_)(["time",n.sender?"tm-sender":"tm"]),innerHTML:o.date.replace(/, /gi,"<br>")},null,10,Nw)],2)}var Rw=n(767),Ow=n.n(Rw),Mw={data(){return{date:new Date(this.data.datetime).toLocaleString("ru",{hour12:!1})}},props:["data","sender"],setup(){const{isLogin:t}=ow(),{colors:e}=lw();return{colors:e,isLogin:t}},computed:{getColor(){let t="";return this.colors.forEach((e=>{e.userId!=this.data.userId||(t=e.color)})),t},getColorText(){let t="",e=!1;return this.colors.forEach((n=>{if(n.userId==this.data.userId){t=n.color;const r=Ow()(t);e=r.isLight()}})),e?"#000000":"#ffffff"}}};const Lw=(0,dw.Z)(Mw,[["render",Dw]]);var Pw=Lw,xw={data(){return{days:null,hours:null,minutes:null,seconds:null,end:!1,interval:null,isPlay:!1}},methods:{countdownTimer(){const t=new Date(2023,9,27),e=t-new Date;e<=0&&clearInterval(this.interval),this.days=e>0?Math.floor(e/1e3/60/60/24):0,this.hours=e>0?Math.floor(e/1e3/60/60)%24:0,this.minutes=e>0?Math.floor(e/1e3/60)%60:0,this.seconds=e>0?Math.floor(e/1e3)%60:0,this.days<=0&&this.hours<=0&&this.minutes<=0&&this.seconds<=0?this.end=!0:this.end=!1},setColor(t){this.colors.forEach((e=>{if(e.userId==t)return e}))},handleScroll(){window.scrollY+window.innerHeight+2>=document.body.scrollHeight?this.$refs.middle.style.transform="scale(0.97)":this.$refs.middle.style.transform="scale(1)"},playAudio(){this.isPlay=!0,this.$refs.audio.play()}},created(){window.addEventListener("scroll",this.handleScroll)},mounted(){let t="",e=window.screen.width<=768?18:30;for(let n=0;n<e;n++)t+=(t?",":"")+1*-n+"px "+1*n+"px 0 #e36858";this.$refs.finnaly.style.textShadow=t,this.$refs.timer.style.textShadow=t,this.countdownTimer(),this.interval=setInterval(this.countdownTimer,1e3),this.$refs.audio.volume=.69,this.$refs.audio.onended=()=>{this.isPlay=!1}},unmounted(){window.removeEventListener("scroll",this.handleScroll)},computed:{tDays(){return this.days<10?"0"+this.days:this.days},tHours(){return this.hours<10?"0"+this.hours:this.hours},tMinutes(){return this.minutes<10?"0"+this.minutes:this.minutes},tSeconds(){return this.seconds<10?"0"+this.seconds:this.seconds}},setup(){const{user:t,isLogin:e,signIn:n,logOut:r}=ow(),{messages:s,sendMessage:i}=uw(),o=(0,tw.iH)(""),a=()=>{i(o.value),o.value=""};return{user:t,isLogin:e,signIn:n,logOut:r,messages:s,message:o,addComment:a}},components:{Header:pw,Footer:kw,Message:Pw}};const Uw=(0,dw.Z)(xw,[["render",rt]]);var Vw=Uw}}]);
//# sourceMappingURL=849.14b6c61a.js.map