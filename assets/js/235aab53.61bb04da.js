"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[3632],{4132:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(7624),r=t(5788);const s={sidebar_position:3},o="Data Sources",c={id:"architecture/data-sources",title:"Data Sources",description:"Data sources allow developers easily integrate different data providers into the",source:"@site/docs/architecture/data-sources.md",sourceDirName:"architecture",slug:"/architecture/data-sources",permalink:"/carbon-aware-sdk/docs/architecture/data-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/data-sources.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/carbon-aware-sdk/docs/architecture/overview"},next:{title:"C# Client Library",permalink:"/carbon-aware-sdk/docs/architecture/c-sharp-client-library"}},i={},d=[{value:"Data Sources&#39; Responsibility",id:"data-sources-responsibility",level:2},{value:"GSF Handler &lt; - &gt; Data Source Contract",id:"gsf-handler-----data-source-contract",level:3},{value:"Post-Processing Caveat",id:"post-processing-caveat",level:4},{value:"Creating a New Data Source",id:"creating-a-new-data-source",level:2},{value:"Adding/Extending a Data Source Interface",id:"addingextending-a-data-source-interface",level:3},{value:"Add Dependency Injection Configuration",id:"add-dependency-injection-configuration",level:3},{value:"Register the New Data Source",id:"register-the-new-data-source",level:3},{value:"Adding Tests",id:"adding-tests",level:3},{value:"Try it Out",id:"try-it-out",level:3}];function l(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"data-sources",children:"Data Sources"}),"\n",(0,n.jsxs)(a.p,{children:["Data sources allow developers easily integrate different data providers into the\ncarbon aware SDK (",(0,n.jsx)(a.a,{href:"https://www.wattime.org",children:"WattTime"}),",\n",(0,n.jsx)(a.a,{href:"https://www.electricitymaps.com/",children:"ElectricityMaps"}),",\n",(0,n.jsx)(a.a,{href:"https://www.co2signal.com/",children:"ElectricityMapsFree"})," etc) to be made available to\nall higher-level user-interfaces (WebAPI, CLI, etc), while avoiding the details\nof how to interact with any specific provider."]}),"\n",(0,n.jsx)(a.h2,{id:"data-sources-responsibility",children:"Data Sources' Responsibility"}),"\n",(0,n.jsx)(a.p,{children:"Data sources act as the data ingestion tier for the SDK, handling the retrieval\nof data from a given data provider. They contain specific knowledge about the\ndata provider they access, such as flags used in requests, fields that come back\nin responses, special use cases etc. They also handle any external calls that\nmust be made to access the data provider. While helper clients can be built to\nhandle these calls, only the data source should have access to, and knowledge\nof, that client."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"For example, the WattTimeDataSource has a reference to a private\nWattTimeClient within it's implementation. The WattTimeClient handles the HTTP\nGET/POST calls to WattTime and the data source invokes the client once it has\nprocessed the request, and then processes the response before returning a\nfinal result."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"gsf-handler-----data-source-contract",children:"GSF Handler < - > Data Source Contract"}),"\n",(0,n.jsx)(a.p,{children:'In order for the SDK to support different data sources, there is a defined\ncontract between the Handler and the Data tier. The handler acts as the\n"Business Logic" of the application so it needs a standard way of requesting\ndata from the data source and a standard response in return. This means that\neach data source is responsible for:'}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Pre-processing any arguments passed to it from the handler to create the\nexpected request for the data provider."}),"\n",(0,n.jsx)(a.li,{children:"Post-processing the data provider result to create the expected return type\nfor the Handler."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Each handler is responsible for interacting on its own domain. For instance,\nEmissionsHandler can have a method ",(0,n.jsx)(a.code,{children:"GetAverageCarbonIntensityAsync()"})," to pull\nEmissionsData data from a configured data source and calculate the average\ncarbon intensity. ForecastHandler can have a method ",(0,n.jsx)(a.code,{children:"GetCurrentForecastAsync()"}),",\nthat will return a EmissionsForecast instance."]}),"\n",(0,n.jsx)(a.h4,{id:"post-processing-caveat",children:"Post-Processing Caveat"}),"\n",(0,n.jsxs)(a.p,{children:["Post-processing should only ensure the types are what is expected and to fix any\ninconsistencies or issues that may be known to that specific data source. This\npost-processing ",(0,n.jsx)(a.strong,{children:"should not"})," do any extra data operations beyond those\nrequired to fulfill the Handler request ( i.e., averaging, min/max ops etc.).\nIn other words, the data source should only manipulate data for the aim of\nreturning ",(0,n.jsx)(a.em,{children:"valid*"})," data in the boundaries requested by the Handler."]}),"\n",(0,n.jsxs)(a.p,{children:["* What constitutes ",(0,n.jsx)(a.em,{children:"valid"})," data varies between data sources. It may be the case\nthat some data sources don't handle time boundaries well so extra processing may\nbe required to ensure the data returned is what the handler expects assuming\nit was any data source and that those edge cases would be handled properly."]}),"\n",(0,n.jsx)(a.h2,{id:"creating-a-new-data-source",children:"Creating a New Data Source"}),"\n",(0,n.jsxs)(a.p,{children:["Each new data source should be a new .NET project under the\n",(0,n.jsx)(a.code,{children:"CarbonAware.DataSources"})," namespace and corresponding directory. This project\nshould have a reference to the ",(0,n.jsx)(a.code,{children:"CarbonAware"})," project, and include the\n",(0,n.jsx)(a.code,{children:"Microsoft.Extensions.DependencyInjection"})," package. It should also be added to\nthe solution. We have provided a command snippet below:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"cd src\ndotnet new classlib --name CarbonAware.DataSources.MyNewDataSource -o CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/src\ndotnet sln add CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/src/CarbonAware.DataSources.MyNewDataSource.csproj\ndotnet add CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/src/CarbonAware.DataSources.MyNewDataSource.csproj reference CarbonAware/src/CarbonAware.csproj\ncd CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/src\ndotnet add package Microsoft.Extensions.DependencyInjection\n"})}),"\n",(0,n.jsx)(a.h3,{id:"addingextending-a-data-source-interface",children:"Adding/Extending a Data Source Interface"}),"\n",(0,n.jsx)(a.p,{children:"Each new data source should extend from a generic data source interface. A data\nsource interface defines all the parameters and functions that any data source\nthat falls under it's purview must define/implement. By defining the interface,\nit allows the SDK to switch between the set of data sources seamlessly because\nthey all share the same input functions and output types."}),"\n",(0,n.jsxs)(a.p,{children:["Currently there are 2 data source interfaces defined - ",(0,n.jsx)(a.code,{children:"IEmissionsDataSource"}),"\nand ",(0,n.jsx)(a.code,{children:"IForecastDataSource"})," - which provides functionality for retrieving actual\nand forecasted carbon intensity data respectively. A new data source interface\nshould be defined only when there is a new general area of calculation that is\nbeing introduced to the SDK."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"using CarbonAware.Interfaces;\nusing CarbonAware.Model;\nusing Microsoft.Extensions.Logging;\nnamespace CarbonAware.DataSources.MyNewDataSource;\npublic class MyNewDataSource: IEmissionsDataSource\n{\n    ...\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"add-dependency-injection-configuration",children:"Add Dependency Injection Configuration"}),"\n",(0,n.jsxs)(a.p,{children:["The SDK uses dependency injection to load registered data sources based on set\nenvironment variables. For a data source to be registered, it need to have a\nService Collection Extension defined. To do so, add a ",(0,n.jsx)(a.code,{children:"Configuration"})," directory\nin your data source project and create a new ServiceCollectionExtensions file.\nWe have provided a command snippet below:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"cd src/CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/src\nmkdir Configuration\ntouch Configuration\\ServiceCollectionExtensions.cs\n"})}),"\n",(0,n.jsx)(a.p,{children:"Using the skeleton below, add the data source specific configuration and\nimplementation instances to the service collection."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection.Extensions;\nnamespace CarbonAware.DataSources.MyNewDataSource.Configuration;\npublic static class ServiceCollectionExtensions\n{\n    public static void AddMyNewDataSource(this IServiceCollection services)\n    {\n        // ... register your data source with the IServiceCollection instance\n    }\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"register-the-new-data-source",children:"Register the New Data Source"}),"\n",(0,n.jsxs)(a.p,{children:["Once the data source's ServiceCollectionExtensions is configured, it can be\nregistered as an available data source for the SDK by adding to the switch\nstatement found in the AddDataSourceService function of\n",(0,n.jsx)(a.a,{href:"../../src/CarbonAware.DataSources/CarbonAware.DataSources.Registration%5CConfiguration%5CServiceCollectionExtensions.cs",children:"this file"}),".\nNote you will need to add a new enum type to the ",(0,n.jsx)(a.code,{children:"DataSourceType"}),"\n",(0,n.jsx)(a.a,{href:"../../src/CarbonAware.DataSources/CarbonAware.DataSources.Registration/Configuration/DataSourceType.cs",children:"enum file"}),"\nto reference in the switch statement."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"    switch (dataSourceType)\n    {\n        ...\n        case DataSourceType.MyNewDataSourceEnum:\n        {\n            services.AddMyNewDataSource();\n            break;\n        }\n        ...\n    }\n"})}),"\n",(0,n.jsx)(a.h3,{id:"adding-tests",children:"Adding Tests"}),"\n",(0,n.jsx)(a.p,{children:"Each new data source is expected to come with a robust unit test suite that\nensures that the main flows and edge cases are properly handled. This also\nensures that the SDK can switch seamlessly between data sources and the\nexperiences up the stack remains consistent and helpful to the user."}),"\n",(0,n.jsxs)(a.p,{children:["The unit tests should be added as a new project under the data source's test\ndirectory:\n",(0,n.jsx)(a.code,{children:"CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/test"}),". Be sure\nto include a reference to the data source's project and add it to the solution.\nWe have provided a command snippet below:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"cd src\ndotnet new nunit --name CarbonAware.DataSources.MyNewDataSource.Tests -o CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/test\ndotnet sln CarbonAwareSDK.sln add CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource/test/CarbonAware.DataSources.MyNewDataSource.Tests.csproj\ncd CarbonAware.DataSources/CarbonAware.DataSources.MyNewDataSource\ndotnet add test/CarbonAware.DataSources.MyNewDataSource.Tests.csproj reference src/CarbonAware.DataSources.MyNewDataSource.csproj\n"})}),"\n",(0,n.jsx)(a.h3,{id:"try-it-out",children:"Try it Out"}),"\n",(0,n.jsxs)(a.p,{children:["You are now ready to try out your new data source! If you added a new\n",(0,n.jsx)(a.code,{children:"IEmissionsDataSource"}),", you can configure it using the ",(0,n.jsx)(a.code,{children:"EmissionsDataSource"}),"\nsetting:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'DataSources__EmissionsDataSource="MyNewDataSource"\nDataSources__Configurations__MyNewDataSource__Proxy__UseProxy=true\n'})}),"\n",(0,n.jsx)(a.p,{children:"Both the WebAPI and the CLI read the env variables in so once set, you can spin\nup either and send requests to get data from the new data source."})]})}function u(e={}){const{wrapper:a}={...(0,r.MN)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5788:(e,a,t)=>{t.d(a,{MN:()=>d});var n=t(1504);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),d=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=d(t),p=r,w=h["".concat(i,".").concat(p)]||h[p]||l[p]||s;return t?n.createElement(w,o(o({ref:a},u),{},{components:t})):n.createElement(w,o({ref:a},u))}));u.displayName="MDXCreateElement"}}]);