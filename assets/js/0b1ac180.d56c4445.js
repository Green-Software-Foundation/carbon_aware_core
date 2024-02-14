"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[4320],{8380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(7624),i=t(5788);const s={sidebar_position:1},a="Architecture Overview",o={id:"architecture/overview",title:"Architecture Overview",description:"The Carbon Aware SDK is built with three tiers where each tier has its own set",source:"@site/docs/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/carbon-aware-sdk/docs/architecture/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/carbon-aware-sdk/docs/category/architecture"},next:{title:"Data Sources",permalink:"/carbon-aware-sdk/docs/architecture/data-sources"}},c={},d=[{value:"Consumer Tier",id:"consumer-tier",level:2},{value:"Business Logic Tier",id:"business-logic-tier",level:2},{value:"Handlers",id:"handlers",level:3},{value:"Data Tier",id:"data-tier",level:2},{value:"Data Source Interface",id:"data-source-interface",level:3},{value:"Data Source Implementation",id:"data-source-implementation",level:3},{value:"Dependency Registration",id:"dependency-registration",level:2},{value:"Example Call Flow",id:"example-call-flow",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,i.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Carbon Aware SDK is built with three tiers where each tier has its own set\nof responsibilities."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Consumer Tier"}),"\n",(0,r.jsx)(n.li,{children:"Business Logic Tier"}),"\n",(0,r.jsx)(n.li,{children:"Data Tier"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Each tier only has knowledge of its own responsibilities, and specific channels\nof communication between adjacent tiers. This allows the SDK to switch to\ndifferent implementations withing the same tier without any necessary code\nchanges."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tiers architecture diagram",src:t(8516).c+"",width:"717",height:"511"})}),"\n",(0,r.jsx)(n.h2,{id:"consumer-tier",children:"Consumer Tier"}),"\n",(0,r.jsx)(n.p,{children:"The consumer tier is the entry point for interacting with the SDK. It handles\ntaking the user input and deciding which handler(s) should handle processing the\ninput. There are currently 2 different consumers that can be used in the SDK"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A RESTful WebAPI that can be called using HTTP requests."}),"\n",(0,r.jsx)(n.li,{children:"A command line tool that runs directly on a host machine."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Both consumers access the same components in the tiers below."}),"\n",(0,r.jsx)(n.h2,{id:"business-logic-tier",children:"Business Logic Tier"}),"\n",(0,r.jsx)(n.p,{children:"The business logic tier functions as the processor, taking in the user input and\nfiguring out how to fulfill it. It is comprised of a set of handlers that know\nwhat type of data they need and how to calculate the result."}),"\n",(0,r.jsx)(n.h3,{id:"handlers",children:"Handlers"}),"\n",(0,r.jsx)(n.p,{children:"Handlers have knowledge of the underlying data source interfaces in the data\ntier. A Handler takes in consumer requests, calls the specified data source, and\nperforms any data aggregation required before returning the result to the\nconsumer. Each Handler is responsible for handling requests specific to a\nfunctionality."}),"\n",(0,r.jsxs)(n.p,{children:["Currently, the SDK provides 2 handlers for obtaining the carbon emissions data-\n",(0,r.jsx)(n.code,{children:"EmissionsHandler"})," and ",(0,r.jsx)(n.code,{children:"ForecastHandler"})," to handle requests for actual carbon\nemissions and forecasted carbon emissions respectively. The ",(0,r.jsx)(n.code,{children:"EmissionsHandler"}),"\nhandles requests for various carbon emissions information. It can calculate the\naverage carbon emissions over a time period, or the best carbon emissions given\na set of locations. It can transform forecasted carbon emissions to suit\nparticular use-cases. It can also just deliver the emissions data points in a\nstandard schema without performing any calculations. The ",(0,r.jsx)(n.code,{children:"ForecastHandler"})," is\nresponsible for getting the forecasted carbon emissions values from the\nunderlying datasource. It can filter the emissions forecast based on the window\nsize passed as an input and can also perform operations like finding the rolling\naverage of emission values for a give window size. In addition to the above\nhandlers, there is a ",(0,r.jsx)(n.code,{children:"LocationHandler"})," which is responsible for retrieving all\nthe locations supported by the underlying data source."]}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/carbon-aware-sdk/docs/architecture/c-sharp-client-library",children:"c-sharp-client-library README"})," for more\ndetailed information."]}),"\n",(0,r.jsx)(n.h2,{id:"data-tier",children:"Data Tier"}),"\n",(0,r.jsx)(n.p,{children:"The data tier is responsible for ingesting data into the SDK. It is comprised of\na set of data source interfaces representing the broad categories of data used\nby the SDK."}),"\n",(0,r.jsx)(n.h3,{id:"data-source-interface",children:"Data Source Interface"}),"\n",(0,r.jsx)(n.p,{children:"A data source interface defines all the necessary parameters and functions\nneeded to access that category of data. These definitions must be independent of\nspecific data sources and use abstracted input/output parameters expected from\nthe business logic tier. This abstraction enables multiple data sources to\nextend a multiple interfaces and be switched out and configured based on the\nneeds of the operator."}),"\n",(0,r.jsx)(n.h3,{id:"data-source-implementation",children:"Data Source Implementation"}),"\n",(0,r.jsx)(n.p,{children:"A data source inherits from a single or multiple data source interfaces and does\nthe work of accessing a specific data provider. Each data source the information\nspecific to the data provider it is accessing, including any authentication\nneeds, the format of the request and response, etc. It is also responsible for\nconverting the request from the business logic tier into the required provider\nrequest, and similarly, converting the provider response back into the expected\nresult."}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/carbon-aware-sdk/docs/architecture/data-sources",children:"data source README"})," for more detailed information."]}),"\n",(0,r.jsx)(n.h2,{id:"dependency-registration",children:"Dependency Registration"}),"\n",(0,r.jsx)(n.p,{children:"The SDK uses dependency injection to load the data sources based on set\nenvironment variables. To register a new dependency, a new\nServiceCollectionExtension method must be defined. These dependencies are loaded\nin a hierarchical structure such that:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Each data source defines a ",(0,r.jsx)(n.code,{children:"ServiceCollectionExtension"})," method."]}),"\n",(0,r.jsxs)(n.li,{children:["All available data sources are registered in the ",(0,r.jsx)(n.code,{children:"DataSource.Registration"}),"\nproject."]}),"\n",(0,r.jsxs)(n.li,{children:["The GSF library defines a ",(0,r.jsx)(n.code,{children:"ServiceCollectionExtension"})," method where it\nregisters the data sources for the handlers to use."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"Program.cs"})," file registers the GSF library classes at startup"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-call-flow",children:"Example Call Flow"}),"\n",(0,r.jsxs)(n.p,{children:["The swimlanes diagram below follows an example call through all 3 tiers of the\narchitecture. In this diagram, the ",(0,r.jsx)(n.em,{children:"Client"})," is a user of the SDK and the ",(0,r.jsx)(n.em,{children:"Data\nProvider"})," is a source of raw data, such as ",(0,r.jsx)(n.a,{href:"https://www.wattime.org",children:"WattTime"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tiers flow diagram",src:t(4140).c+"",width:"1300",height:"1016"})})]})}function h(e={}){const{wrapper:n}={...(0,i.MN)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5788:(e,n,t)=>{t.d(n,{MN:()=>d});var r=t(1504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,f=u["".concat(c,".").concat(p)]||u[p]||l[p]||s;return t?r.createElement(f,a(a({ref:n},h),{},{components:t})):r.createElement(f,a({ref:n},h))}));h.displayName="MDXCreateElement"},4140:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/overview-tiers-swimlanes-80838b0b809c39a74bcb042b0b24fb79.png"},8516:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/tiers-architecture.drawio-bed72b086a7d97f4eff8a69a941cdc1c.png"}}]);