"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=a,N=s["".concat(d,".").concat(c)]||s[c]||m[c]||i;return n?r.createElement(N,l(l({ref:t},u),{},{components:n})):r.createElement(N,l({ref:t},u))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"sql-multivalue-string-functions",title:"SQL multi-value string functions",sidebar_label:"Multi-value string functions"},d=void 0,p={unversionedId:"querying/sql-multivalue-string-functions",id:"querying/sql-multivalue-string-functions",title:"SQL multi-value string functions",description:"\x3c!--",source:"@site/docs/26.0.0/querying/sql-multivalue-string-functions.md",sourceDirName:"querying",slug:"/querying/sql-multivalue-string-functions",permalink:"/docs/26.0.0/querying/sql-multivalue-string-functions",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-multivalue-string-functions",title:"SQL multi-value string functions",sidebar_label:"Multi-value string functions"},sidebar:"docs",previous:{title:"Array functions",permalink:"/docs/26.0.0/querying/sql-array-functions"},next:{title:"JSON functions",permalink:"/docs/26.0.0/querying/sql-json-functions"}},u={},s=[],m={toc:s},c="wrapper";function N(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: Druid SQL and ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/"},"native queries"),".\nThis document describes the SQL language.")),(0,i.kt)("p",null,"Druid supports string dimensions containing multiple values.\nThis page describes the operations you can perform on multi-value string dimensions using ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql"},"Druid SQL"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-data-types#multi-value-strings"},"SQL multi-value strings")," and native ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/multi-value-dimensions"},"Multi-value dimensions")," for more information."),(0,i.kt)("p",null,"All array references in the multi-value string function documentation can refer to multi-value string columns or\n",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," types. These functions are largely identical to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-array-functions"},"array functions"),", but use\n",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," types and behavior. Multi-value strings can also be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," types using ",(0,i.kt)("inlineCode",{parentName:"p"},"MV_TO_ARRAY"),". For\nadditional details about ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," types, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-data-types#arrays"},(0,i.kt)("inlineCode",{parentName:"a"},"ARRAY")," data type documentation"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_FILTER_ONLY(expr, arr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Filters multi-value ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," to include only values contained in array ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_FILTER_NONE(expr, arr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Filters multi-value ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," to include no values contained in array ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_LENGTH(arr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns length of the array expression.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_OFFSET(arr, long)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the array element at the 0-based index supplied, or null for an out of range index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_ORDINAL(arr, long)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the array element at the 1-based index supplied, or null for an out of range index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_CONTAINS(arr, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," is a scalar type, returns 1 if ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," contains ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),". If ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," is an array, returns 1 if ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," contains all elements of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),". Otherwise returns 0.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_OVERLAP(arr1, arr2)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns 1 if ",(0,i.kt)("inlineCode",{parentName:"td"},"arr1")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"arr2")," have any elements in common, else 0.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_OFFSET_OF(arr, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the 0-based index of the first occurrence of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," in the array. If no matching elements exist in the array, returns ",(0,i.kt)("inlineCode",{parentName:"td"},"-1")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=false"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_ORDINAL_OF(arr, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the 1-based index of the first occurrence of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," in the array. If no matching elements exist in the array, returns ",(0,i.kt)("inlineCode",{parentName:"td"},"-1")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=false"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_PREPEND(expr, arr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," at the beginning, the resulting array type determined by the type of the array.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_APPEND(arr1, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Appends ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),", the resulting array type determined by the type of the first array.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_CONCAT(arr1, arr2)")),(0,i.kt)("td",{parentName:"tr",align:null},"Concatenates ",(0,i.kt)("inlineCode",{parentName:"td"},"arr2")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"arr1"),". The resulting array type is determined by the type of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr1"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_SLICE(arr, start, end)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the subarray of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," from the 0-based index start(inclusive) to end(exclusive), or ",(0,i.kt)("inlineCode",{parentName:"td"},"null"),", if start is less than 0, greater than length of arr or greater than end.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_TO_STRING(arr, str)")),(0,i.kt)("td",{parentName:"tr",align:null},"Joins all elements of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," by the delimiter specified by ",(0,i.kt)("inlineCode",{parentName:"td"},"str"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING_TO_MV(str1, str2)")),(0,i.kt)("td",{parentName:"tr",align:null},"Splits ",(0,i.kt)("inlineCode",{parentName:"td"},"str1")," into an array on the delimiter specified by ",(0,i.kt)("inlineCode",{parentName:"td"},"str2"),", which is a regular expression.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MV_TO_ARRAY(str)")),(0,i.kt)("td",{parentName:"tr",align:null},"Converts a multi-value string from a ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR")," to a ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR ARRAY"),".")))))}N.isMDXComponent=!0}}]);