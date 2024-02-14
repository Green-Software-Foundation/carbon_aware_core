"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[4220],{3596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(7624),a=t(5788);const s={},o="7. Data Source Interfaces",i={id:"architecture/decisions/data-source-interfaces",title:"7. Data Source Interfaces",description:"Status",source:"@site/docs/architecture/decisions/0007-data-source-interfaces.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/data-source-interfaces",permalink:"/carbon-aware-sdk/docs/architecture/decisions/data-source-interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0007-data-source-interfaces.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"6. Data Source Registration",permalink:"/carbon-aware-sdk/docs/architecture/decisions/data-source-registration"},next:{title:"8. Data Source Configuration",permalink:"/carbon-aware-sdk/docs/architecture/decisions/data-source-configuration"}},c={},d=[{value:"Status",id:"status",level:2},{value:"Date",id:"date",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Current Implementation",id:"current-implementation",level:3},{value:"Interfaces",id:"interfaces",level:4},{value:"Aggregators",id:"aggregators",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Future Implications",id:"future-implications",level:3},{value:"Green Impact",id:"green-impact",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"7-data-source-interfaces",children:"7. Data Source Interfaces"}),"\n",(0,r.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,r.jsx)(n.p,{children:"Accepted"}),"\n",(0,r.jsx)(n.h2,{id:"date",children:"Date"}),"\n",(0,r.jsx)(n.p,{children:"2022-11-1"}),"\n",(0,r.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,r.jsxs)(n.p,{children:["Data sources can meet the needs of multiple use-cases, but all data sources\nshould not be expected to meet all needs. Currently, the ",(0,r.jsx)(n.code,{children:"JsonDataSource"})," throws\na ",(0,r.jsx)(n.code,{children:"NotImplementedException"})," for forecast-related methods required by the\n",(0,r.jsx)(n.code,{children:"ICarbonAwareDataSource"})," interface. As functionality expands in this way it\nbecomes harder maintain data sources and it prevents programmatic understanding\nof which methods are actually available to the user."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if someone wanted to expand functionality to include access to\npower generation sources (coal, hydro, solar, etc.), such a change breaks\nexisting data sources and likely forces them into a similar workaround of\nraising exceptions to meet the new interface. Users may similarly start to see a\n",(0,r.jsx)(n.code,{children:"power-consumption"})," command in the CLI that throws errors for the data source\nthey are using."]}),"\n",(0,r.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,r.jsxs)(n.p,{children:["The project will strive toward the\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Interface_segregation_principle",children:"interface segregation principle"}),"\nof ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/SOLID",children:"SOLID"})," design by using separate\ninterfaces for unique ",(0,r.jsx)(n.a,{href:"https://martinfowler.com/bliki/RoleInterface.html",children:"roles"}),"\nthat a data source may serve. This is often signalled by a different\nmodel/schema being returned by the methods."]}),"\n",(0,r.jsx)(n.p,{children:"A single data sources can implement multiple interfaces."}),"\n",(0,r.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,r.jsx)(n.h3,{id:"current-implementation",children:"Current Implementation"}),"\n",(0,r.jsx)(n.h4,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(n.p,{children:["To align with this decision, the ",(0,r.jsx)(n.code,{children:"ICarbonIntensityDataSource"})," interface would be\nbroken into two interfaces:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IEmissionsDataSource"})," \u2013 for data sources of measured emissions data"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IForecastDataSource"})," \u2013 for data sources of forecasted emissions data"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"aggregators",children:"Aggregators"}),"\n",(0,r.jsx)(n.p,{children:"There is also no need for these data sources to have a shared aggregator as none\nof the existing aggregator functions leverage both types of data together. Thus,\nthere should be two corresponding aggregators:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"EmissionsAggregator"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ForecastAggregator"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Each aggregator should have its own parameters class, however the appropriate\nway to split up the existing ",(0,r.jsx)(n.code,{children:"CarbonAwareParameters"})," class is less\nstraight-forward due to the large amount of shared code. How to split up this\nclass should be the subject of its own ADR, and it should continue to be shared\nby both aggregators until an agreed upon design has been reached."]}),"\n",(0,r.jsx)(n.h4,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Each data source type should be independently configurable. So an example config\nof"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "carbonAwareVars": {\n    "carbonIntensityDataSource": "WattTime"\n    // ...\n  }\n  // ...\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"becomes the following with no user-facing changes since WattTime implements both\ninterfaces:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "carbonAwareVars": {\n    "emissionsDataSource": "WattTime",\n    "forecastDataSource": "WattTime"\n    // ...\n  }\n  // ...\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"But it now becomes possible to configure different sources for each type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "carbonAwareVars": {\n    "emissionsDataSource": "JSON",\n    "forecastDataSource": "WattTime"\n    // ...\n  }\n  // ...\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Other Config Considerations"})," ",(0,r.jsx)(n.em,{children:"When no data source is specified..."})," Use a\ndefault data source following the\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Null_object_pattern",children:"null object pattern"})," to\nprovide empty, but strongly-typed responses."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"When the data source type is not implemented by the specified data source..."}),"\nThrow an exception, alerting the operator to improper configuration."]}),"\n",(0,r.jsx)(n.h3,{id:"future-implications",children:"Future Implications"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"New Aggregators"})," A hypothetical feature which returned the differences between\nforecasted emissions and measured emissions would implement a\n",(0,r.jsx)(n.code,{children:"ForecastEmissionsAggregator"})," to get the data from both sources and do the\ncalculations."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"New Interfaces"})," A hypothetical feature which exposed power generation data\nwould create an ",(0,r.jsx)(n.code,{children:"IPowerGenerationDataSource"})," which any data source with access\nto such data could implement."]}),"\n",(0,r.jsxs)(n.p,{children:['It would be configured by operators the same way as existing data source types,\nby looking up the matching name of the interface (without the leading "I") in\nthe ',(0,r.jsx)(n.code,{children:"carbonAwareVars"})," section of the config."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "carbonAwareVars": {\n    "emissionsDataSource": "JSON",\n    "forecastDataSource": "WattTime",\n    "powerGenerationDataSource": "MyNewDataSourceName"\n    // ...\n  }\n  // ...\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Features would be exposed to consumers via a ",(0,r.jsx)(n.code,{children:"PowerGenerationAggregator"})," or some\njoint aggregator that merges data with another source, depending on the\nuse-case."]}),"\n",(0,r.jsx)(n.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,r.jsx)(n.p,{children:"Neutral"})]})}function h(e={}){const{wrapper:n}={...(0,a.MN)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5788:(e,n,t)=>{t.d(n,{MN:()=>d});var r=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,f=u["".concat(c,".").concat(p)]||u[p]||l[p]||s;return t?r.createElement(f,o(o({ref:n},h),{},{components:t})):r.createElement(f,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);