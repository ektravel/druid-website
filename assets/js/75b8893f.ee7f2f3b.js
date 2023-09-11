"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],l={id:"reset-cluster",title:"reset-cluster tool"},i=void 0,c={unversionedId:"operations/reset-cluster",id:"operations/reset-cluster",title:"reset-cluster tool",description:"\x3c!--",source:"@site/docs/26.0.0/operations/reset-cluster.md",sourceDirName:"operations",slug:"/operations/reset-cluster",permalink:"/docs/26.0.0/operations/reset-cluster",draft:!1,tags:[],version:"current",frontMatter:{id:"reset-cluster",title:"reset-cluster tool"},sidebar:"docs",previous:{title:"dump-segment tool",permalink:"/docs/26.0.0/operations/dump-segment"},next:{title:"insert-segment-to-db tool",permalink:"/docs/26.0.0/operations/insert-segment-to-db"}},u={},p=[],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"reset-cluster")," tool can be used to completely wipe out Apache Druid cluster state stored on Metadata and Deep storage. This is\nintended to be used in dev/test environments where you typically want to reset the cluster before running\nthe test suite.\n",(0,a.kt)("inlineCode",{parentName:"p"},"reset-cluster")," automatically figures out necessary information from Druid cluster configuration. So the java classpath\nused in the command must have all the necessary druid configuration files."),(0,a.kt)("p",null,"It can be run in one of the following ways."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'java -classpath "/my/druid/lib/*" -Ddruid.extensions.loadList="[]" org.apache.druid.cli.Main \\\n  tools reset-cluster \\\n  [--metadataStore] \\\n  [--segmentFiles] \\\n  [--taskLogs] \\\n  [--hadoopWorkingPath]\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'java -classpath "/my/druid/lib/*" -Ddruid.extensions.loadList="[]" org.apache.druid.cli.Main \\\n  tools reset-cluster \\\n  --all\n')),(0,a.kt)("p",null,"Usage documentation can be printed by running following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ java -classpath "/my/druid/lib/*" -Ddruid.extensions.loadList="[]" org.apache.druid.cli.Main help tools reset-cluster\n\nNAME\n        druid tools reset-cluster - Cleanup all persisted state from metadata\n        and deep storage.\n\nSYNOPSIS\n        druid tools reset-cluster [--all] [--hadoopWorkingPath]\n                [--metadataStore] [--segmentFiles] [--taskLogs]\n\nOPTIONS\n        --all\n            delete all state stored in metadata and deep storage\n\n        --hadoopWorkingPath\n            delete hadoopWorkingPath\n\n        --metadataStore\n            delete all records in metadata storage\n\n        --segmentFiles\n            delete all segment files from deep storage\n\n        --taskLogs\n            delete all tasklogs\n')))}f.isMDXComponent=!0}}]);