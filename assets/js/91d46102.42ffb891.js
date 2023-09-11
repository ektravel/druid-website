"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1762],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:n,l[1]=u;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],u={id:"datasourcemetadataquery",title:"DatasourceMetadata queries",sidebar_label:"DatasourceMetadata"},i=void 0,s={unversionedId:"querying/datasourcemetadataquery",id:"querying/datasourcemetadataquery",title:"DatasourceMetadata queries",description:"\x3c!--",source:"@site/docs/latest/querying/datasourcemetadataquery.md",sourceDirName:"querying",slug:"/querying/datasourcemetadataquery",permalink:"/docs/latest/querying/datasourcemetadataquery",draft:!1,tags:[],version:"current",frontMatter:{id:"datasourcemetadataquery",title:"DatasourceMetadata queries",sidebar_label:"DatasourceMetadata"},sidebar:"docs",previous:{title:"SegmentMetadata",permalink:"/docs/latest/querying/segmentmetadataquery"},next:{title:"Filters",permalink:"/docs/latest/querying/filters"}},c={},p=[],d={toc:p},m="wrapper";function y(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes a query\ntype that is only available in the native language.")),(0,o.kt)("p",null,"Data Source Metadata queries return metadata information for a dataSource.  These queries return information about:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The timestamp of latest ingested event for the dataSource. This is the ingested event without any consideration of rollup.")),(0,o.kt)("p",null,"The grammar for these queries is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queryType" : "dataSourceMetadata",\n    "dataSource": "sample_datasource"\n}\n')),(0,o.kt)("p",null,"There are 2 main parts to a Data Source Metadata query:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"property"),(0,o.kt)("th",{parentName:"tr",align:null},"description"),(0,o.kt)("th",{parentName:"tr",align:null},"required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryType"),(0,o.kt)("td",{parentName:"tr",align:null},'This String should always be "dataSourceMetadata"; this is the first thing Apache Druid looks at to figure out how to interpret the query'),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,o.kt)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,o.kt)("a",{parentName:"td",href:"/docs/latest/querying/datasource"},"DataSource")," for more information."),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"See ",(0,o.kt)("a",{parentName:"td",href:"/docs/latest/querying/query-context"},"Context")),(0,o.kt)("td",{parentName:"tr",align:null},"no")))),(0,o.kt)("p",null,"The format of the result is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "timestamp" : "2013-05-09T18:24:00.000Z",\n  "result" : {\n    "maxIngestedEventTime" : "2013-05-09T18:24:09.007Z"\n  }\n} ]\n')))}y.isMDXComponent=!0}}]);