"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"sqlserver",title:"Microsoft SQLServer"},l=void 0,p={unversionedId:"development/extensions-contrib/sqlserver",id:"development/extensions-contrib/sqlserver",title:"Microsoft SQLServer",description:"\x3c!--",source:"@site/docs/26.0.0/development/extensions-contrib/sqlserver.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/sqlserver",permalink:"/docs/26.0.0/development/extensions-contrib/sqlserver",draft:!1,tags:[],version:"current",frontMatter:{id:"sqlserver",title:"Microsoft SQLServer"}},d={},c=[{value:"Setting up SQLServer",id:"setting-up-sqlserver",level:2}],u={toc:c},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use this Apache Druid extension, ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions#loading-extensions"},"include")," ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlserver-metadata-storage")," in the extensions load list."),(0,o.kt)("h2",{id:"setting-up-sqlserver"},"Setting up SQLServer"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Microsoft SQLServer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a druid database and user"),(0,o.kt)("p",{parentName:"li"},"Create the druid user"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Microsoft SQL Server Management Studio - Security - Logins - New Login...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a druid user, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"diurd")," when prompted for the password."),(0,o.kt)("p",{parentName:"li"},"Create a druid database owned by the user we just created")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Databases - New Database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Database Name: druid, Owner: druid"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the Microsoft JDBC library to the Druid classpath")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To ensure the com.microsoft.sqlserver.jdbc.SQLServerDriver class is loaded you will have to add the appropriate Microsoft JDBC library (sqljdbc*.jar) to the Druid classpath."),(0,o.kt)("li",{parentName:"ul"},'For instance, if all jar files in your "druid/lib" directory are automatically added to your Druid classpath, then manually download the Microsoft JDBC drivers from ( ',(0,o.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-ca/download/details.aspx?id=11774"},"https://www.microsoft.com/en-ca/download/details.aspx?id=11774"),") and drop it into my druid/lib directory.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure your Druid metadata storage extension:"),(0,o.kt)("p",{parentName:"li"},"Add the following parameters to your Druid configuration, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"<host>"),"\nwith the location (host name and port) of the database."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"druid.metadata.storage.type=sqlserver\ndruid.metadata.storage.connector.connectURI=jdbc:sqlserver://<host>;databaseName=druid\ndruid.metadata.storage.connector.user=druid\ndruid.metadata.storage.connector.password=diurd\n")))))}f.isMDXComponent=!0}}]);