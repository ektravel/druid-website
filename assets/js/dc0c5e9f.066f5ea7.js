"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"gce-extensions",title:"GCE Extensions"},s=void 0,c={unversionedId:"development/extensions-contrib/gce-extensions",id:"development/extensions-contrib/gce-extensions",title:"GCE Extensions",description:"\x3c!--",source:"@site/docs/26.0.0/development/extensions-contrib/gce-extensions.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/gce-extensions",permalink:"/docs/26.0.0/development/extensions-contrib/gce-extensions",draft:!1,tags:[],version:"current",frontMatter:{id:"gce-extensions",title:"GCE Extensions"}},p={},u=[{value:"Overlord Dynamic Configuration",id:"overlord-dynamic-configuration",level:2},{value:"Known limitations",id:"known-limitations",level:2}],m={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use this Apache Druid extension, ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions#loading-extensions"},"include")," ",(0,o.kt)("inlineCode",{parentName:"p"},"gce-extensions")," in the extensions load list."),(0,o.kt)("p",null,"At the moment, this extension enables only Druid to autoscale instances in GCE."),(0,o.kt)("p",null,"The extension manages the instances to be scaled up and down through the use of the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#resize_managed_group"},"Managed Instance Groups"),"\nof GCE (MIG from now on). This choice has been made to ease the configuration of the machines and simplify their\nmanagement."),(0,o.kt)("p",null,"For this reason, in order to use this extension, the user must have created"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An instance template with the right machine type and image to bu used to run the MiddleManager"),(0,o.kt)("li",{parentName:"ol"},"A MIG that has been configured to use the instance template created in the point above")),(0,o.kt)("p",null,"Moreover, in order to be able to rescale the machines in the MIG, the Overlord must run with a service account\nguaranteeing the following two scopes from the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/googlescopes#computev1"},"Compute Engine API")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/cloud-platform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/compute"))),(0,o.kt)("h2",{id:"overlord-dynamic-configuration"},"Overlord Dynamic Configuration"),(0,o.kt)("p",null,"The Overlord can dynamically change worker behavior."),(0,o.kt)("p",null,"The JSON object can be submitted to the Overlord via a POST request at:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://<OVERLORD_IP>:<port>/druid/indexer/v1/worker\n")),(0,o.kt)("p",null,"Optional Header Parameters for auditing the config change can also be specified."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header Param Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-Druid-Author")),(0,o.kt)("td",{parentName:"tr",align:null},"author making the config change"),(0,o.kt)("td",{parentName:"tr",align:null},'""')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"X-Druid-Comment")),(0,o.kt)("td",{parentName:"tr",align:null},"comment describing the change being done"),(0,o.kt)("td",{parentName:"tr",align:null},'""')))),(0,o.kt)("p",null,"A sample worker config spec is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "autoScaler": {\n    "envConfig" : {\n      "numInstances" : 1,\n      "projectId" : "super-project",\n      "zoneName" : "us-central-1",\n      "managedInstanceGroupName" : "druid-middlemanagers"\n    },\n    "maxNumWorkers" : 4,\n    "minNumWorkers" : 2,\n    "type" : "gce"\n  }\n}\n')),(0,o.kt)("p",null,"The configuration of the autoscaler is quite simple and it is made of two levels only."),(0,o.kt)("p",null,"The external level specifies the ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"\u2014always ",(0,o.kt)("inlineCode",{parentName:"p"},"gce")," in this case\u2014 and two numeric values,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"maxNumWorkers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"minNumWorkers")," used to define the boundaries in between which the\nnumber of instances must be at any time."),(0,o.kt)("p",null,"The internal level is the ",(0,o.kt)("inlineCode",{parentName:"p"},"envConfig")," and it is used to specify"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"numInstances")," used to specify how many workers will be spawned at each\nrequest to provision more workers.  This is safe to be left to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"projectId")," used to specify the name of the project in which the MIG resides"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"zoneName")," used to identify in which zone of the worlds the MIG is"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"managedInstanceGroupName")," used to specify the MIG containing the instances created or\nremoved")),(0,o.kt)("p",null,"Please refer to the Overlord Dynamic Configuration section in the main ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/"},"documentation"),"\nfor parameters other than the ones specified here, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"selectStrategy")," etc."),(0,o.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The module internally uses the ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/listManagedInstances"},"ListManagedInstances"),"\ncall from the API and, while the documentation of the API states that the call can be paged through using the\n",(0,o.kt)("inlineCode",{parentName:"li"},"pageToken")," argument, the responses to such call do not provide any ",(0,o.kt)("inlineCode",{parentName:"li"},"nextPageToken")," to set such parameter. This means\nthat the extension can operate safely with a maximum of 500 MiddleManagers instances at any time (the maximum number\nof instances to be returned for each call).")))}h.isMDXComponent=!0}}]);