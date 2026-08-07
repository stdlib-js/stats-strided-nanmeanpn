"use strict";var p=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var l=p(function(C,m){
function k(e,a,i,s){var u,c,r,n,t,o,v,f,y;if(u=a.data,c=a.accessors[0],e===1||i===0)return c(u,s);for(r=s,y=r,t=0,v=0,f=0;f<e;f++)n=c(u,r),n===n&&(v+=1,t+=n),r+=i;if(v===0)return NaN;for(t/=v,o=0,r=y,f=0;f<e;f++)n=c(u,r),n===n&&(o+=n-t),r+=i;return t+o/v}m.exports=k
});var q=p(function(D,x){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=l();function R(e,a,i,s){var u,c,r,n,t,o,v;if(e<=0)return NaN;if(c=O(a),c.accessorProtocol)return P(e,c,i,s);if(e===1||i===0)return a[s];for(u=s,n=0,o=0,v=0;v<e;v++)r=a[u],r===r&&(o+=1,n+=r),u+=i;if(o===0)return NaN;for(n/=o,u=s,t=0,v=0;v<e;v++)r=a[u],r===r&&(t+=r-n),u+=i;return n+t/o}x.exports=R
});var g=p(function(E,b){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=q();function w(e,a,i){return h(e,a,i,d(e,i))}b.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=g(),A=q();z(j,"ndarray",A);module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
