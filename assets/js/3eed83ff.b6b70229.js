"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[575],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,h=m["".concat(l,".").concat(p)]||m[p]||c[p]||s;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},62982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),r=["components"],o={id:"architecture",title:"Design"},l=void 0,d={unversionedId:"design/architecture",id:"design/architecture",title:"Design",description:"\x3c!--",source:"@site/docs/28.0.0/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/docs/28.0.0/design/architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"architecture",title:"Design"},sidebar:"docs",previous:{title:"JDBC connector",permalink:"/docs/28.0.0/tutorials/tutorial-jdbc"},next:{title:"Segments",permalink:"/docs/28.0.0/design/segments"}},u={},m=[{value:"Druid architecture",id:"druid-architecture",level:2},{value:"Druid services",id:"druid-services",level:2},{value:"Druid servers",id:"druid-servers",level:2},{value:"External dependencies",id:"external-dependencies",level:2},{value:"Deep storage",id:"deep-storage",level:3},{value:"Metadata storage",id:"metadata-storage",level:3},{value:"ZooKeeper",id:"zookeeper",level:3},{value:"Storage design",id:"storage-design",level:2},{value:"Datasources and segments",id:"datasources-and-segments",level:3},{value:"Indexing and handoff",id:"indexing-and-handoff",level:3},{value:"Segment identifiers",id:"segment-identifiers",level:3},{value:"Segment versioning",id:"segment-versioning",level:3},{value:"Segment lifecycle",id:"segment-lifecycle",level:3},{value:"Availability and consistency",id:"availability-and-consistency",level:3},{value:"Query processing",id:"query-processing",level:2}],c={toc:m},p="wrapper";function h(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Druid has a distributed architecture that is designed to be cloud-friendly and easy to operate. You can configure and scale services independently so you have maximum flexibility over cluster operations. This design includes enhanced fault tolerance: an outage of one component does not immediately affect other components."),(0,s.kt)("h2",{id:"druid-architecture"},"Druid architecture"),(0,s.kt)("p",null,"The following diagram shows the services that make up the Druid architecture, how they are typically organized into servers, and how queries and data flow through this architecture."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Druid architecture",src:a(91354).Z,width:"1920",height:"1080"})),(0,s.kt)("p",null,"The following sections describe the components of this architecture. "),(0,s.kt)("h2",{id:"druid-services"},"Druid services"),(0,s.kt)("p",null,"Druid has several types of services:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/design/coordinator"},(0,s.kt)("strong",{parentName:"a"},"Coordinator"))," service manages data availability on the cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/design/overlord"},(0,s.kt)("strong",{parentName:"a"},"Overlord"))," service controls the assignment of data ingestion workloads."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/design/broker"},(0,s.kt)("strong",{parentName:"a"},"Broker"))," handles queries from external clients."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/design/router"},(0,s.kt)("strong",{parentName:"a"},"Router"))," services are optional; they route requests to Brokers, Coordinators, and Overlords."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/design/historical"},(0,s.kt)("strong",{parentName:"a"},"Historical"))," services store queryable data."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/design/middlemanager"},(0,s.kt)("strong",{parentName:"a"},"MiddleManager"))," services ingest data.")),(0,s.kt)("p",null,"You can view services in the ",(0,s.kt)("strong",{parentName:"p"},"Services")," tab in the web console: "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Druid services",src:a(45468).Z,title:"Services in the web console",width:"1250",height:"640"})),(0,s.kt)("h2",{id:"druid-servers"},"Druid servers"),(0,s.kt)("p",null,"Druid services can be deployed any way you like, but for ease of deployment we suggest organizing them into three server types: Master, Query, and Data."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Master"),": Runs Coordinator and Overlord processes, manages data availability and ingestion."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Query"),": Runs Broker and optional Router processes, handles queries from external clients."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Data"),": Runs Historical and MiddleManager processes, executes ingestion workloads and stores all queryable data.")),(0,s.kt)("p",null,"For more details on process and server organization, please see ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/processes"},"Druid Processes and Servers"),"."),(0,s.kt)("h2",{id:"external-dependencies"},"External dependencies"),(0,s.kt)("p",null,"In addition to its built-in process types, Druid also has three external dependencies. These are intended to be able to\nleverage existing infrastructure, where present."),(0,s.kt)("h3",{id:"deep-storage"},"Deep storage"),(0,s.kt)("p",null,"Druid uses deep storage to store any data that has been ingested into the system. Deep storage is shared file\nstorage accessible by every Druid server. In a clustered deployment, this is typically a distributed object store like S3 or\nHDFS, or a network mounted filesystem. In a single-server deployment, this is typically local disk."),(0,s.kt)("p",null,"Druid uses deep storage for the following purposes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To store all the data you ingest. Segments that get loaded onto Historical processes for low latency queries are also kept in deep storage for backup purposes. Additionally, segments that are only in deep storage can be used for ",(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/querying/query-deep-storage"},"queries from deep storage"),"."),(0,s.kt)("li",{parentName:"ul"},"As a way to transfer data in the background between Druid processes. Druid stores data in files called ",(0,s.kt)("em",{parentName:"li"},"segments"),".")),(0,s.kt)("p",null,"Historical processes cache data segments on local disk and serve queries from that cache as well as from an in-memory cache.\nSegments on disk for Historical processes provide the low latency querying performance Druid is known for."),(0,s.kt)("p",null,"You can also query directly from deep storage. When you query segments that exist only in deep storage, you trade some performance  for the ability to query more of your data without necessarily having to scale your Historical processes."),(0,s.kt)("p",null,"When determining sizing for your storage, keep the following in mind:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Deep storage needs to be able to hold all the data that you ingest into Druid."),(0,s.kt)("li",{parentName:"ul"},"On disk storage for Historical processes need to be able to accommodate the data you want to load onto them to run queries. The data on Historical processes should be data you access frequently and need to run low latency queries for. ")),(0,s.kt)("p",null,"Deep storage is an important part of Druid's elastic, fault-tolerant design. Druid bootstraps from deep storage even\nif every single data server is lost and re-provisioned."),(0,s.kt)("p",null,"For more details, please see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/deep-storage"},"Deep storage")," page."),(0,s.kt)("h3",{id:"metadata-storage"},"Metadata storage"),(0,s.kt)("p",null,"The metadata storage holds various shared system metadata such as segment usage information and task information. In a\nclustered deployment, this is typically a traditional RDBMS like PostgreSQL or MySQL. In a single-server\ndeployment, it is typically a locally-stored Apache Derby database."),(0,s.kt)("p",null,"For more details, please see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/metadata-storage"},"Metadata storage")," page."),(0,s.kt)("h3",{id:"zookeeper"},"ZooKeeper"),(0,s.kt)("p",null,"Used for internal service discovery, coordination, and leader election."),(0,s.kt)("p",null,"For more details, please see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/zookeeper"},"ZooKeeper")," page."),(0,s.kt)("h2",{id:"storage-design"},"Storage design"),(0,s.kt)("h3",{id:"datasources-and-segments"},"Datasources and segments"),(0,s.kt)("p",null,"Druid data is stored in ",(0,s.kt)("em",{parentName:"p"},"datasources"),", which are similar to tables in a traditional RDBMS. Each datasource is\npartitioned by time and, optionally, further partitioned by other attributes. Each time range is called a ",(0,s.kt)("em",{parentName:"p"},"chunk")," (for\nexample, a single day, if your datasource is partitioned by day). Within a chunk, data is partitioned into one or more\n",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/segments"},(0,s.kt)("em",{parentName:"a"},"segments")),". Each segment is a single file, typically comprising up to a few million rows of data. Since segments are\norganized into time chunks, it's sometimes helpful to think of segments as living on a timeline like the following:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Segment timeline",src:a(34863).Z,width:"1548",height:"535"})),(0,s.kt)("p",null,"A datasource may have anywhere from just a few segments, up to hundreds of thousands and even millions of segments. Each\nsegment is created by a MiddleManager as ",(0,s.kt)("em",{parentName:"p"},"mutable")," and ",(0,s.kt)("em",{parentName:"p"},"uncommitted"),". Data is queryable as soon as it is added to\nan uncommitted segment. The segment\nbuilding process accelerates later queries by producing a data file that is compact and indexed:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Conversion to columnar format"),(0,s.kt)("li",{parentName:"ul"},"Indexing with bitmap indexes"),(0,s.kt)("li",{parentName:"ul"},"Compression",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Dictionary encoding with id storage minimization for String columns"),(0,s.kt)("li",{parentName:"ul"},"Bitmap compression for bitmap indexes"),(0,s.kt)("li",{parentName:"ul"},"Type-aware compression for all columns")))),(0,s.kt)("p",null,"Periodically, segments are ",(0,s.kt)("em",{parentName:"p"},"committed")," and ",(0,s.kt)("em",{parentName:"p"},"published")," to ",(0,s.kt)("a",{parentName:"p",href:"#deep-storage"},"deep storage"),",\nbecome immutable, and move from MiddleManagers to the Historical processes. An entry about the segment is also written\nto the ",(0,s.kt)("a",{parentName:"p",href:"#metadata-storage"},"metadata store"),". This entry is a self-describing bit of metadata about the segment, including\nthings like the schema of the segment, its size, and its location on deep storage. These entries tell the\nCoordinator what data is available on the cluster."),(0,s.kt)("p",null,"For details on the segment file format, please see ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/segments"},"segment files"),"."),(0,s.kt)("p",null,"For details on modeling your data in Druid, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/schema-design"},"schema design"),"."),(0,s.kt)("h3",{id:"indexing-and-handoff"},"Indexing and handoff"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Indexing")," is the mechanism by which new segments are created, and ",(0,s.kt)("em",{parentName:"p"},"handoff")," is the mechanism by which they are published\nand begin being served by Historical processes. On the indexing side:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An ",(0,s.kt)("em",{parentName:"li"},"indexing task"),' starts running and building a new segment. It must determine the identifier of the segment before\nit starts building it. For a task that is appending (like a Kafka task, or an index task in append mode) this is\ndone by calling an "allocate" API on the Overlord to potentially add a new partition to an existing set of segments. For\na task that is overwriting (like a Hadoop task, or an index task ',(0,s.kt)("em",{parentName:"li"},"not")," in append mode) this is done by locking an\ninterval and creating a new version number and new set of segments."),(0,s.kt)("li",{parentName:"ol"},"If the indexing task is a realtime task (like a Kafka task) then the segment is immediately queryable at this point.\nIt's available, but unpublished."),(0,s.kt)("li",{parentName:"ol"},"When the indexing task has finished reading data for the segment, it pushes it to deep storage and then publishes it\nby writing a record into the metadata store."),(0,s.kt)("li",{parentName:"ol"},"If the indexing task is a realtime task, then to ensure data is continuously available for queries, it waits for a Historical process to load the segment. If the\nindexing task is not a realtime task, it exits immediately.")),(0,s.kt)("p",null,"On the Coordinator / Historical side:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The Coordinator polls the metadata store periodically (by default, every 1 minute) for newly published segments."),(0,s.kt)("li",{parentName:"ol"},"When the Coordinator finds a segment that is published and used, but unavailable, it chooses a Historical process\nto load that segment and instructs that Historical to do so."),(0,s.kt)("li",{parentName:"ol"},"The Historical loads the segment and begins serving it."),(0,s.kt)("li",{parentName:"ol"},"At this point, if the indexing task was waiting for handoff, it will exit.")),(0,s.kt)("h3",{id:"segment-identifiers"},"Segment identifiers"),(0,s.kt)("p",null,"Segments all have a four-part identifier with the following components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Datasource name."),(0,s.kt)("li",{parentName:"ul"},"Time interval (for the time chunk containing the segment; this corresponds to the ",(0,s.kt)("inlineCode",{parentName:"li"},"segmentGranularity")," specified\nat ingestion time)."),(0,s.kt)("li",{parentName:"ul"},"Version number (generally an ISO8601 timestamp corresponding to when the segment set was first started)."),(0,s.kt)("li",{parentName:"ul"},"Partition number (an integer, unique within a datasource+interval+version; may not necessarily be contiguous).")),(0,s.kt)("p",null,"For example, this is the identifier for a segment in datasource ",(0,s.kt)("inlineCode",{parentName:"p"},"clarity-cloud0"),", time chunk\n",(0,s.kt)("inlineCode",{parentName:"p"},"2018-05-21T16:00:00.000Z/2018-05-21T17:00:00.000Z"),", version ",(0,s.kt)("inlineCode",{parentName:"p"},"2018-05-21T15:56:09.909Z"),", and partition number 1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"clarity-cloud0_2018-05-21T16:00:00.000Z_2018-05-21T17:00:00.000Z_2018-05-21T15:56:09.909Z_1\n")),(0,s.kt)("p",null,"Segments with partition number 0 (the first partition in a chunk) omit the partition number, like the following\nexample, which is a segment in the same time chunk as the previous one, but with partition number 0 instead of 1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"clarity-cloud0_2018-05-21T16:00:00.000Z_2018-05-21T17:00:00.000Z_2018-05-21T15:56:09.909Z\n")),(0,s.kt)("h3",{id:"segment-versioning"},"Segment versioning"),(0,s.kt)("p",null,'You may be wondering what the "version number" described in the previous section is for. Or, you might not be, in which\ncase good for you and you can skip this section!'),(0,s.kt)("p",null,"The version number provides a form of ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multiversion_concurrency_control"},(0,s.kt)("em",{parentName:"a"},"multi-version concurrency control"))," (MVCC) to\nsupport batch-mode overwriting. If all you ever do is append data, then there will be just a\nsingle version for each time chunk. But when you overwrite data, Druid will seamlessly switch from\nquerying the old version to instead query the new, updated versions. Specifically, a new set of\nsegments is created with the same datasource, same time interval, but a higher version number. This is a signal to the\nrest of the Druid system that the older version should be removed from the cluster, and the new version should replace\nit."),(0,s.kt)("p",null,"The switch appears to happen instantaneously to a user, because Druid handles this by first loading the new data (but\nnot allowing it to be queried), and then, as soon as the new data is all loaded, switching all new queries to use those\nnew segments. Then it drops the old segments a few minutes later."),(0,s.kt)("h3",{id:"segment-lifecycle"},"Segment lifecycle"),(0,s.kt)("p",null,"Each segment has a lifecycle that involves the following three major areas:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Metadata store:")," Segment metadata (a small JSON payload generally no more than a few KB) is stored in the\n",(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/design/metadata-storage"},"metadata store")," once a segment is done being constructed. The act of inserting\na record for a segment into the metadata store is called ",(0,s.kt)("em",{parentName:"li"},"publishing"),". These metadata records have a boolean flag\nnamed ",(0,s.kt)("inlineCode",{parentName:"li"},"used"),", which controls whether the segment is intended to be queryable or not. Segments created by realtime tasks will be\navailable before they are published, since they are only published when the segment is complete and will not accept\nany additional rows of data."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Deep storage:")," Segment data files are pushed to deep storage once a segment is done being constructed. This\nhappens immediately before publishing metadata to the metadata store."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Availability for querying:")," Segments are available for querying on some Druid data server, like a realtime task, directly from deep storage, or a Historical process.")),(0,s.kt)("p",null,"You can inspect the state of currently active segments using the Druid SQL\n",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/querying/sql-metadata-tables#segments-table"},(0,s.kt)("inlineCode",{parentName:"a"},"sys.segments")," table"),". It includes the following flags:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_published"),": True if segment metadata has been published to the metadata store and ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," is true."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_available"),": True if the segment is currently available for querying, either on a realtime task or Historical\nprocess."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_realtime"),": True if the segment is ",(0,s.kt)("em",{parentName:"li"},"only")," available on realtime tasks. For datasources that use realtime ingestion,\nthis will generally start off ",(0,s.kt)("inlineCode",{parentName:"li"},"true")," and then become ",(0,s.kt)("inlineCode",{parentName:"li"},"false")," as the segment is published and handed off."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_overshadowed"),": True if the segment is published (with ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," set to true) and is fully overshadowed by some other\npublished segments. Generally this is a transient state, and segments in this state will soon have their ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," flag\nautomatically set to false.")),(0,s.kt)("h3",{id:"availability-and-consistency"},"Availability and consistency"),(0,s.kt)("p",null,"Druid has an architectural separation between ingestion and querying, as described above in\n",(0,s.kt)("a",{parentName:"p",href:"#indexing-and-handoff"},"Indexing and handoff"),". This means that when understanding Druid's availability and\nconsistency properties, we must look at each function separately."),(0,s.kt)("p",null,"On the ",(0,s.kt)("strong",{parentName:"p"},"ingestion side"),", Druid's primary ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/#ingestion-methods"},"ingestion methods")," are all\npull-based and offer transactional guarantees. This means that you are guaranteed that ingestion using these\nmethods will publish in an all-or-nothing manner:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Supervised "seekable-stream" ingestion methods like ',(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-ingestion"},"Kafka")," and\n",(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kinesis-ingestion"},"Kinesis"),". With these methods, Druid commits stream offsets to its\n",(0,s.kt)("a",{parentName:"li",href:"#metadata-storage"},"metadata store")," alongside segment metadata, in the same transaction. Note that ingestion of data\nthat has not yet been published can be rolled back if ingestion tasks fail. In this case, partially-ingested data is\ndiscarded, and Druid will resume ingestion from the last committed set of stream offsets. This ensures exactly-once\npublishing behavior."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/ingestion/hadoop"},"Hadoop-based batch ingestion"),". Each task publishes all segment metadata in a single\ntransaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/ingestion/native-batch"},"Native batch ingestion"),". In parallel mode, the supervisor task publishes all segment\nmetadata in a single transaction after the subtasks are finished. In simple (single-task) mode, the single task\npublishes all segment metadata in a single transaction after it is complete.")),(0,s.kt)("p",null,"Additionally, some ingestion methods offer an ",(0,s.kt)("em",{parentName:"p"},"idempotency")," guarantee. This means that repeated executions of the same\ningestion will not cause duplicate data to be ingested:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Supervised "seekable-stream" ingestion methods like ',(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-ingestion"},"Kafka")," and\n",(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kinesis-ingestion"},"Kinesis")," are idempotent due to the fact that stream offsets and\nsegment metadata are stored together and updated in lock-step."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/ingestion/hadoop"},"Hadoop-based batch ingestion")," is idempotent unless one of your input sources\nis the same Druid datasource that you are ingesting into. In this case, running the same task twice is non-idempotent,\nbecause you are adding to existing data instead of overwriting it."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/ingestion/native-batch"},"Native batch ingestion")," is idempotent unless\n",(0,s.kt)("a",{parentName:"li",href:"/docs/28.0.0/ingestion/native-batch"},(0,s.kt)("inlineCode",{parentName:"a"},"appendToExisting"))," is true, or one of your input sources is the same Druid datasource\nthat you are ingesting into. In either of these two cases, running the same task twice is non-idempotent, because you\nare adding to existing data instead of overwriting it.")),(0,s.kt)("p",null,"On the ",(0,s.kt)("strong",{parentName:"p"},"query side"),", the Druid Broker is responsible for ensuring that a consistent set of segments is involved in a\ngiven query. It selects the appropriate set of segment versions to use when the query starts based on what is currently\navailable. This is supported by ",(0,s.kt)("em",{parentName:"p"},"atomic replacement"),", a feature that ensures that from a user's perspective, queries\nflip instantaneously from an older version of data to a newer set of data, with no consistency or performance impact.\n(See ",(0,s.kt)("a",{parentName:"p",href:"#segment-versioning"},"segment versioning")," above.)\nThis is used for Hadoop-based batch ingestion, native batch ingestion when ",(0,s.kt)("inlineCode",{parentName:"p"},"appendToExisting")," is false, and compaction."),(0,s.kt)("p",null,"Note that atomic replacement happens for each time chunk individually. If a batch ingestion task or compaction\ninvolves multiple time chunks, then each time chunk will undergo atomic replacement soon after the task finishes, but\nthe replacements will not all happen simultaneously."),(0,s.kt)("p",null,"Typically, atomic replacement in Druid is based on a ",(0,s.kt)("em",{parentName:"p"},"core set")," concept that works in conjunction with segment versions.\nWhen a time chunk is overwritten, a new core set of segments is created with a higher version number. The core set\nmust ",(0,s.kt)("em",{parentName:"p"},"all")," be available before the Broker will use them instead of the older set. There can also only be one core set\nper version per time chunk. Druid will also only use a single version at a time per time chunk. Together, these\nproperties provide Druid's atomic replacement guarantees."),(0,s.kt)("p",null,"Druid also supports an experimental ",(0,s.kt)("em",{parentName:"p"},"segment locking")," mode that is activated by setting\n",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/tasks#context"},(0,s.kt)("inlineCode",{parentName:"a"},"forceTimeChunkLock"))," to false in the context of an ingestion task. In this case, Druid\ncreates an ",(0,s.kt)("em",{parentName:"p"},"atomic update group")," using the existing version for the time chunk, instead of creating a new core set\nwith a new version number. There can be multiple atomic update groups with the same version number per time chunk. Each\none replaces a specific set of earlier segments in the same time chunk and with the same version number. Druid will\nquery the latest one that is fully available. This is a more powerful version of the core set concept, because it\nenables atomically replacing a subset of data for a time chunk, as well as doing atomic replacement and appending\nsimultaneously."),(0,s.kt)("p",null,"If segments become unavailable due to multiple Historicals going offline simultaneously (beyond your replication\nfactor), then Druid queries will include only the segments that are still available. In the background, Druid will\nreload these unavailable segments on other Historicals as quickly as possible, at which point they will be included in\nqueries again."),(0,s.kt)("h2",{id:"query-processing"},"Query processing"),(0,s.kt)("p",null,"Queries are distributed across the Druid cluster, and managed by a Broker.\nQueries first enter the ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/broker"},"Broker"),", which identifies the segments with data that may pertain to that query.\nThe list of segments is always pruned by time, and may also be pruned by other attributes depending on how your\ndatasource is partitioned. The Broker will then identify which ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/historical"},"Historicals")," and\n",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/middlemanager"},"MiddleManagers")," are serving those segments and distributes a rewritten subquery to each of those processes.\nThe Historical/MiddleManager processes execute each subquery and return results to the Broker. The Broker merges the partial results\nto get the final answer, which it returns to the original caller."),(0,s.kt)("p",null,"Time and attribute pruning is an important way that Druid limits the amount of data that must be scanned for each query, but it is\nnot the only way. For filters at a more granular level than what the Broker can use for pruning,\n",(0,s.kt)("a",{parentName:"p",href:"#datasources-and-segments"},"indexing structures"),"\ninside each segment allow Historicals to figure out which (if any) rows match the filter set before looking at any row of\ndata. Once a Historical knows which rows match a particular query, it only accesses the specific rows and columns it needs for that\nquery."),(0,s.kt)("p",null,"So Druid uses three different techniques to maximize query performance:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Pruning the set of segments accessed for a query."),(0,s.kt)("li",{parentName:"ul"},"Within each segment, using indexes to identify which rows must be accessed."),(0,s.kt)("li",{parentName:"ul"},"Within each segment, only reading the specific rows and columns that are relevant to a particular query.")),(0,s.kt)("p",null,"For more details about how Druid executes queries, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/28.0.0/querying/query-execution"},"Query execution"),"\ndocumentation."))}h.isMDXComponent=!0},91354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/druid-architecture-c89f21addd50d76d07dbc3a730cd856f.png"},34863:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/druid-timeline-1eb095729ad3c5084dc7ff60aad39421.png"},45468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/services-overview-626a864a11edcf4945591a35d4a3814c.png"}}]);