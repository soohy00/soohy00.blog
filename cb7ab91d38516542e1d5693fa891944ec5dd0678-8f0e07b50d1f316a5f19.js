(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[529],{2912:function(n,t,r){"use strict";var e=r(6540);const i=r(1510).default.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1ttlsnf-0"})(["margin-bottom:24px;font-size:",";font-weight:700;line-height:1.3;color:",";word-break:break-all;& > a{text-decoration:none;color:inherit;transition:all 0.2s;}& > a:hover{color:",";}"],(n=>n.size),(n=>n.theme.colors.text),(n=>n.theme.colors.secondaryText));t.A=n=>{let{size:t,children:r}=n;return e.createElement(i,{size:{sm:"19.2px",md:"25.6px",bg:"32px"}[t]}," ",r," ")}},698:function(n,t,r){"use strict";var e=r(1510);t.A=e.default.div.withConfig({displayName:"VerticalSpace",componentId:"sc-fbwjqc-0"})(["height:","px;"],(n=>n.size))},1033:function(n){n.exports=function(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}},909:function(n,t,r){var e=r(641),i=r(8329)(e);n.exports=i},3120:function(n,t,r){var e=r(4528),i=r(5891);n.exports=function n(t,r,o,u,a){var c=-1,f=t.length;for(o||(o=i),a||(a=[]);++c<f;){var l=t[c];r>0&&o(l)?r>1?n(l,r-1,o,u,a):e(a,l):u||(a[a.length]=l)}return a}},6649:function(n,t,r){var e=r(3221)();n.exports=e},641:function(n,t,r){var e=r(6649),i=r(5950);n.exports=function(n,t){return n&&e(n,t,i)}},5128:function(n,t,r){var e=r(909),i=r(4894);n.exports=function(n,t){var r=-1,o=i(n)?Array(n.length):[];return e(n,(function(n,e,i){o[++r]=t(n,e,i)})),o}},6155:function(n,t,r){var e=r(4932),i=r(7422),o=r(5389),u=r(5128),a=r(3937),c=r(7301),f=r(3714),l=r(3488),s=r(6449);n.exports=function(n,t,r){t=t.length?e(t,(function(n){return s(n)?function(t){return i(t,1===n.length?n[0]:n)}:n})):[l];var v=-1;t=e(t,c(o));var p=u(n,(function(n,r,i){return{criteria:e(t,(function(t){return t(n)})),index:++v,value:n}}));return a(p,(function(n,t){return f(n,t,r)}))}},9302:function(n,t,r){var e=r(3488),i=r(6757),o=r(2865);n.exports=function(n,t){return o(i(n,t,e),n+"")}},9570:function(n,t,r){var e=r(7334),i=r(3243),o=r(3488),u=i?function(n,t){return i(n,"toString",{configurable:!0,enumerable:!1,value:e(t),writable:!0})}:o;n.exports=u},3937:function(n){n.exports=function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}},3730:function(n,t,r){var e=r(4394);n.exports=function(n,t){if(n!==t){var r=void 0!==n,i=null===n,o=n==n,u=e(n),a=void 0!==t,c=null===t,f=t==t,l=e(t);if(!c&&!l&&!u&&n>t||u&&a&&f&&!c&&!l||i&&a&&f||!r&&f||!o)return 1;if(!i&&!u&&!l&&n<t||l&&r&&o&&!i&&!u||c&&r&&o||!a&&o||!f)return-1}return 0}},3714:function(n,t,r){var e=r(3730);n.exports=function(n,t,r){for(var i=-1,o=n.criteria,u=t.criteria,a=o.length,c=r.length;++i<a;){var f=e(o[i],u[i]);if(f)return i>=c?f:f*("desc"==r[i]?-1:1)}return n.index-t.index}},8329:function(n,t,r){var e=r(4894);n.exports=function(n,t){return function(r,i){if(null==r)return r;if(!e(r))return n(r,i);for(var o=r.length,u=t?o:-1,a=Object(r);(t?u--:++u<o)&&!1!==i(a[u],u,a););return r}}},3221:function(n){n.exports=function(n){return function(t,r,e){for(var i=-1,o=Object(t),u=e(t),a=u.length;a--;){var c=u[n?a:++i];if(!1===r(o[c],c,o))break}return t}}},3243:function(n,t,r){var e=r(872),i=function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch(t){}}();n.exports=i},5891:function(n,t,r){var e=r(1873),i=r(2428),o=r(6449),u=e?e.isConcatSpreadable:void 0;n.exports=function(n){return o(n)||i(n)||!!(u&&n&&n[u])}},6800:function(n,t,r){var e=r(5288),i=r(4894),o=r(361),u=r(3805);n.exports=function(n,t,r){if(!u(r))return!1;var a=typeof t;return!!("number"==a?i(r)&&o(t,r.length):"string"==a&&t in r)&&e(r[t],n)}},6757:function(n,t,r){var e=r(1033),i=Math.max;n.exports=function(n,t,r){return t=i(void 0===t?n.length-1:t,0),function(){for(var o=arguments,u=-1,a=i(o.length-t,0),c=Array(a);++u<a;)c[u]=o[t+u];u=-1;for(var f=Array(t+1);++u<t;)f[u]=o[u];return f[t]=r(c),e(n,this,f)}}},2865:function(n,t,r){var e=r(9570),i=r(1811)(e);n.exports=i},1811:function(n){var t=Date.now;n.exports=function(n){var r=0,e=0;return function(){var i=t(),o=16-(i-e);if(e=i,o>0){if(++r>=800)return arguments[0]}else r=0;return n.apply(void 0,arguments)}}},7334:function(n){n.exports=function(n){return function(){return n}}},8221:function(n,t,r){var e=r(3805),i=r(124),o=r(9374),u=Math.max,a=Math.min;n.exports=function(n,t,r){var c,f,l,s,v,p,h=0,x=!1,d=!1,g=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function m(t){var r=c,e=f;return c=f=void 0,h=t,s=n.apply(e,r)}function b(n){var r=n-p;return void 0===p||r>=t||r<0||d&&n-h>=l}function y(){var n=i();if(b(n))return w(n);v=setTimeout(y,function(n){var r=t-(n-p);return d?a(r,l-(n-h)):r}(n))}function w(n){return v=void 0,g&&c?m(n):(c=f=void 0,s)}function T(){var n=i(),r=b(n);if(c=arguments,f=this,p=n,r){if(void 0===v)return function(n){return h=n,v=setTimeout(y,t),x?m(n):s}(p);if(d)return clearTimeout(v),v=setTimeout(y,t),m(p)}return void 0===v&&(v=setTimeout(y,t)),s}return t=o(t)||0,e(r)&&(x=!!r.leading,l=(d="maxWait"in r)?u(o(r.maxWait)||0,t):l,g="trailing"in r?!!r.trailing:g),T.cancel=function(){void 0!==v&&clearTimeout(v),h=0,c=p=f=v=void 0},T.flush=function(){return void 0===v?s:w(i())},T}},124:function(n,t,r){var e=r(9325);n.exports=function(){return e.Date.now()}},3031:function(n,t,r){var e=r(3120),i=r(6155),o=r(9302),u=r(6800),a=o((function(n,t){if(null==n)return[];var r=t.length;return r>1&&u(n,t[0],t[1])?t=[]:r>2&&u(t[0],t[1],t[2])&&(t=[t[0]]),i(n,e(t,1),[])}));n.exports=a},7350:function(n,t,r){var e=r(8221),i=r(3805);n.exports=function(n,t,r){var o=!0,u=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return i(r)&&(o="leading"in r?!!r.leading:o,u="trailing"in r?!!r.trailing:u),e(n,t,{leading:o,maxWait:t,trailing:u})}}}]);
//# sourceMappingURL=cb7ab91d38516542e1d5693fa891944ec5dd0678-8f0e07b50d1f316a5f19.js.map