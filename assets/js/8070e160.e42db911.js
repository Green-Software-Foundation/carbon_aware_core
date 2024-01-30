"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},r="Setting up and using the Carbon Aware SDK",l={unversionedId:"quickstart",id:"quickstart",title:"Setting up and using the Carbon Aware SDK",description:"This guide will provide you with knowledge and examples necessary to use the",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/carbon-aware-sdk/docs/quickstart",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/carbon-aware-sdk/docs/overview"},next:{title:"test",permalink:"/carbon-aware-sdk/docs/test"}},s={},p=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Setting up the CLI",id:"setting-up-the-cli",level:3},{value:"Calling the SDK via CLI",id:"calling-the-sdk-via-cli",level:3},{value:"Using the Web API",id:"using-the-web-api",level:2},{value:"Setting up the Web API",id:"setting-up-the-web-api",level:3},{value:"Calling the Web API via command line",id:"calling-the-web-api-via-command-line",level:3},{value:"Calling the <code>/emissions/bylocation</code> endpoint",id:"calling-the-emissionsbylocation-endpoint",level:4},{value:"Calling the <code>/emissions/bylocations/best</code> endpoint",id:"calling-the-emissionsbylocationsbest-endpoint",level:4},{value:"Calling the Web API via client libraries",id:"calling-the-web-api-via-client-libraries",level:3},{value:"Client generation",id:"client-generation",level:4},{value:"Python Client installation + example usage",id:"python-client-installation--example-usage",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-and-using-the-carbon-aware-sdk"},"Setting up and using the Carbon Aware SDK"),(0,i.kt)("p",null,"This guide will provide you with knowledge and examples necessary to use the\nSDK, either as a CLI, by directly calling the Web API endpoints or by using\ngenerated libraries for your language of choice!"),(0,i.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,i.kt)("h3",{id:"setting-up-the-cli"},"Setting up the CLI"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},".NET Core 6.0"),(0,i.kt)("li",{parentName:"ul"},"Alternatively:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"VSCode (it is recommended to work in a Dev Container)"),(0,i.kt)("li",{parentName:"ul"},"Remote Containers extension for VSCode:\n",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"))))),(0,i.kt)("p",null,"The CLI can either be run locally with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet")," or in a container, e.g. using\nVSCode Remote Containers (Dev Container). To run locally:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure you have the repository cloned:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"},"https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change directory to: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd carbon-aware-sdk/src/CarbonAware.CLI/src"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you have a WattTime account registered (or other data source) - you will\nneed to configure the application to use them. By default the SDK will use a\npre-generated JSON file with random data. This random data is meant to make\nit easier to get started with the SDK and doesn't represent actual Carbon\ndata. To configure the application, you will need to set up specific\nenvironment variables or modify ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," inside of\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/CarbonAware.WebApi/src")," directory. Detailed information on configuration\ncan be found in the ",(0,i.kt)("a",{parentName:"p",href:"/carbon-aware-sdk/docs/overview"},"overview.md")," file."),(0,i.kt)("p",{parentName:"li"},"Otherwise, you can follow an example configuration below (export these\nenvironment variables in the Terminal):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export DataSources__EmissionsDataSource="WattTime"\nexport DataSources__ForecastDataSource="WattTime"\nexport DataSources__Configurations__WattTime__Type="WattTime"\nexport DataSources__Configurations__WattTime__username="<YOUR_WATTTIME_USERNAME>"\nexport DataSources__Configurations__WattTime__password="<YOUR_WATTTIME_PASSWORD>"\n')),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export DataSources__ForecastDataSource="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__Type="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__APITokenHeader="auth-token"\nexport DataSources__Configurations__ElectricityMaps__APIToken="<YOUR_ELECTRICITYMAPS_TOKEN>"\n')),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' export DataSources__EmissionsDataSource="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__Type="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__token="<CO2SIGNAL_TOKEN>"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the CLI using ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")))),(0,i.kt)("p",null,"The CLI will ask you to at minimum provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"--location (-l)")," parameter."),(0,i.kt)("h3",{id:"calling-the-sdk-via-cli"},"Calling the SDK via CLI"),(0,i.kt)("p",null,"To run the CLI, simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")," and provide it with any parameters. If\nyou fail to pass any parameters, a help screen will be printed out with possible\nparameters and short explanations."),(0,i.kt)("p",null,"To get a list of all locations supported, you can use the Locations API,\nreferenced in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/CarbonAware.CLI/src/Commands/Location"),"\nand the command ",(0,i.kt)("inlineCode",{parentName:"p"},".\\caw locations"),"."),(0,i.kt)("p",null,"Expected output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "eastus": {\n    "Latitude": 37.3719,\n    "Longitude": -79.8164,\n    "Name": "eastus"\n  },\n  ...\n  "switzerlandnorth":{\n    "Latitude": 47.451542,\n    "Longitude": 8.564572,\n    "Name": "switzerlandnorth"\n  },\n  ...\n}\n')),(0,i.kt)("p",null,"For example, to get emissions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"eastus")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"uksouth")," region between\n",(0,i.kt)("inlineCode",{parentName:"p"},"2022-08-23 at 11:15am")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2022-08-23 at 11:20am"),", run:\n",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run -l eastus,uksouth -t 2022-08-23T11:15 --toTime 2022-08-23T11:20")),(0,i.kt)("p",null,"Expected output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'[\n  {\n    "Location": "PJM_ROANOKE",\n    "Time": "2022-08-23T11:20:00+00:00",\n    "Rating": 567.44405487,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "PJM_ROANOKE",\n    "Time": "2022-08-23T11:15:00+00:00",\n    "Rating": 564.72250065,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "PJM_ROANOKE",\n    "Time": "2022-08-23T11:10:00+00:00",\n    "Rating": 564.72250065,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T11:20:00+00:00",\n    "Rating": 422.74808884000004,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T11:15:00+00:00",\n    "Rating": 422.74808884000004,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T11:10:00+00:00",\n    "Rating": 422.74808884000004,\n    "Duration": "00:05:00"\n  }\n]\n')),(0,i.kt)("p",null,"To get the best time and location from a list of locations and a specified time\nwindow, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--best")," flag. E.g. to get the best time and location in a 24\nhour window on the 23rd of August in the regions: ",(0,i.kt)("inlineCode",{parentName:"p"},"eastus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"westus"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"westus3"),",",(0,i.kt)("inlineCode",{parentName:"p"},"uksouth"),", run the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run -l eastus,westus,westus3,uksouth -t 2022-08-23T00:00 --toTime 2022-08-23T23:59 --best\n")),(0,i.kt)("p",null,"Expected output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'[\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T08:50:00+00:00",\n    "Rating": 384.64632976,\n    "Duration": "00:05:00"\n  }\n]\n')),(0,i.kt)("h2",{id:"using-the-web-api"},"Using the Web API"),(0,i.kt)("h3",{id:"setting-up-the-web-api"},"Setting up the Web API"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker Desktop/CLI"),(0,i.kt)("li",{parentName:"ul"},"VSCode (it is recommended to work in a Dev Container)"),(0,i.kt)("li",{parentName:"ul"},"Remote Containers extension for VSCode:\n",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"))),(0,i.kt)("p",null,"First we need to set up the GitHub repository\n(",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"),"):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change directory into the repository: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd carbon-aware-sdk"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open VSCode: ",(0,i.kt)("inlineCode",{parentName:"p"},"code ."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open VSCode Command Palette: (Linux/Windows: ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl + shift + P"),", MacOS:\n",(0,i.kt)("inlineCode",{parentName:"p"},"cmd + shift + P"),"), and run the command:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Remote-Containers: Open Folder in Container")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you have a WattTime account registered (or other data source) - you will\nneed to configure the application to use them. By default the SDK will use a\npre-generated JSON file with random data. To configure the application, you\nwill need to set up specific environment variables or modify\n",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"src/CarbonAware.WebApi/src")," directory. Detailed\ninformation on configuration can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/carbon-aware-sdk/docs/overview"},"overview.md"),"\nfile."),(0,i.kt)("p",{parentName:"li"},"Otherwise, you can follow an example configuration below (export these\nenvironment variables in the Terminal):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export DataSources__EmissionsDataSource="WattTime"\nexport DataSources__ForecastDataSource="WattTime"\nexport DataSources__Configurations__WattTime__Type="WattTime"\nexport DataSources__Configurations__WattTime__username="<YOUR_WATTTIME_USERNAME>"\nexport DataSources__Configurations__WattTime__password="<YOUR_WATTTIME_PASSWORD>"\n')),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export DataSources__ForecastDataSource="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__Type="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__APITokenHeader="auth-token"\nexport DataSources__Configurations__ElectricityMaps__APIToken="<YOUR_ELECTRICITYMAPS_TOKEN>"\n')),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' export DataSources__EmissionsDataSource="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__Type="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__token="<CO2SIGNAL_TOKEN>"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the VSCode Terminal:")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change directory to: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd src/CarbonAware.WebApi/src"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"And run the application using: ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By default, it will be hosted on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:5073")))),(0,i.kt)("h3",{id:"calling-the-web-api-via-command-line"},"Calling the Web API via command line"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl")," or other tool that allows making HTTP requests (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"wget"),")"),(0,i.kt)("li",{parentName:"ul"},"Recommended: ",(0,i.kt)("inlineCode",{parentName:"li"},"jq")," for parsing JSON output: ",(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"https://stedolan.github.io/jq/"))),(0,i.kt)("p",null,"With the API running on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:5073"),", we can make HTTP requests to its\nendpoints, full endpoint description can be found here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/src/CarbonAware.WebApi/src/README.md"},"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/src/CarbonAware.WebApi/src/README.md")),(0,i.kt)("p",null,"To get a list of all locations supported, you can use the Locations API endpoint\n",(0,i.kt)("inlineCode",{parentName:"p"},"/locations")," referenced in\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/CarbonAware.WebApi/src/Controllers/LocationsController.cs"),"."),(0,i.kt)("p",null,"Expected Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "eastus": {\n    "Latitude": 37.3719,\n    "Longitude": -79.8164,\n    "Name": "eastus"\n  },\n  ...\n  "switzerlandnorth":{\n    "Latitude": 47.451542,\n    "Longitude": 8.564572,\n    "Name": "switzerlandnorth"\n  }\n}\n')),(0,i.kt)("h4",{id:"calling-the-emissionsbylocation-endpoint"},"Calling the ",(0,i.kt)("inlineCode",{parentName:"h4"},"/emissions/bylocation")," endpoint"),(0,i.kt)("p",null,"In console, we can run the below command, to request data for a single location\n(currently Azure region names supported) in a particular timeframe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://localhost:5073/emissions/bylocation?location=westus&time=2022-08-23T14%3A00&toTime=2022-08-23T14%3A30" | jq\n')),(0,i.kt)("p",null,"You can omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"| jq")," to get the JSON data raw and unparsed. This is a request\nfor data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"westus")," region from the date ",(0,i.kt)("inlineCode",{parentName:"p"},"2022-08-23 at 14:00")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"2022-08-23 at 14:30"),". (Note: semicolons ",(0,i.kt)("inlineCode",{parentName:"p"},":")," are encoded as ",(0,i.kt)("inlineCode",{parentName:"p"},"%3A")," in URLs)."),(0,i.kt)("p",null,"The sample data output should be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'[\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:30:00+00:00",\n    "rating": 439.07741416000005,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:25:00+00:00",\n    "rating": 438.62382179,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:20:00+00:00",\n    "rating": 438.62382179,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:15:00+00:00",\n    "rating": 439.53100653,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:10:00+00:00",\n    "rating": 439.98459890000004,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:05:00+00:00",\n    "rating": 456.31392422000005,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:00:00+00:00",\n    "rating": 439.98459890000004,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T13:55:00+00:00",\n    "rating": 445.42770734000004,\n    "duration": "00:05:00"\n  }\n]\n')),(0,i.kt)("h4",{id:"calling-the-emissionsbylocationsbest-endpoint"},"Calling the ",(0,i.kt)("inlineCode",{parentName:"h4"},"/emissions/bylocations/best")," endpoint"),(0,i.kt)("p",null,"This endpoint, unlike the previous one, accepts a list of locations and outputs\na single time and location with the LOWEST Carbon Intensity index."),(0,i.kt)("p",null,"In console, we can run the below command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://localhost:5073/emissions/bylocations/best?location=westus&location=eastus&location=westus3&time=2022-08-23T00%3A00&toTime=2022-08-23T23%3A59" | jq\n')),(0,i.kt)("p",null,"You can omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"| jq")," to get the JSON data raw and unparsed. This is a request\nfor the best location and time out of the locations: ",(0,i.kt)("inlineCode",{parentName:"p"},"westus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eastus"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"westus3")," in the time window from ",(0,i.kt)("inlineCode",{parentName:"p"},"2022-08-23 at 00:00")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"2022-08-23 at 23:59")),(0,i.kt)("p",null,"The sample data output should be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "location": "AZPS",\n  "time": "2022-08-23T08:05:00+00:00",\n  "rating": 398.70769323,\n  "duration": "00:05:00"\n}\n')),(0,i.kt)("h3",{id:"calling-the-web-api-via-client-libraries"},"Calling the Web API via client libraries"),(0,i.kt)("p",null,"The SDK can work with libraries for up to 50 languages generated with the\n",(0,i.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/"},"Open API Generator (Swagger)"),". This guide will\nprovide a tutorial to generating clients for java, Python, JavaScript, .NET and\nGoLang. There is also a walkthrough of an example Python script interacting with\nthe SDK."),(0,i.kt)("h4",{id:"client-generation"},"Client generation"),(0,i.kt)("p",null,"Prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"Web API running (locally or hosted online)"),(0,i.kt)("li",{parentName:"ul"},"(Optionally) ",(0,i.kt)("inlineCode",{parentName:"li"},"openapi-generator-cli"))),(0,i.kt)("p",null,"The clients can be generated either by hand with the openapi-generator CLI, or\nby running shell scripts which also call these generators. The easiest way to\ngenerate them after using the Web API, is to do it Terminal ",(0,i.kt)("strong",{parentName:"p"},"while")," the Web\nAPI is running."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In Terminal: Change into directory ",(0,i.kt)("inlineCode",{parentName:"li"},"carbon-aware-sdk/src/clients")),(0,i.kt)("li",{parentName:"ol"},"Run the client generation script, passing the API URL (omitting the initial\n",(0,i.kt)("inlineCode",{parentName:"li"},"http://"),"): ",(0,i.kt)("inlineCode",{parentName:"li"},"./docker-generate-clients.sh host.docker.internal:5073"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If your API is available at a different URL/Port, replace\n",(0,i.kt)("inlineCode",{parentName:"li"},"host.docker.internal:5073")," with that url."))),(0,i.kt)("li",{parentName:"ol"},"You should now see multiple generated clients in that directory (check with\n",(0,i.kt)("inlineCode",{parentName:"li"},"ls"),")")),(0,i.kt)("p",null,"There is an alternative script for generating the tests - ",(0,i.kt)("inlineCode",{parentName:"p"},"generate-clients.sh"),"\nwhich can be ran if you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-generator-cli")," installed locally."),(0,i.kt)("h4",{id:"python-client-installation--example-usage"},"Python Client installation + example usage"),(0,i.kt)("p",null,"After generating the clients, we can now install them. Most generated clients\n(with OpenAPI) should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"README")," file containing instructions on\ninstallation and example usage."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Change directory to ",(0,i.kt)("inlineCode",{parentName:"li"},"cd carbon-aware-sdk/src/clients/python"),". This is the\ngenerated Python client"),(0,i.kt)("li",{parentName:"ol"},"Install the requirements using ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install -r requirements.txt")),(0,i.kt)("li",{parentName:"ol"},"Install the Python client library using\n",(0,i.kt)("a",{parentName:"li",href:"http://pypi.python.org/pypi/setuptools"},(0,i.kt)("inlineCode",{parentName:"a"},"setuptools")),"):\n",(0,i.kt)("inlineCode",{parentName:"li"},"python setup.py install --user")),(0,i.kt)("li",{parentName:"ol"},"The library is now succesfully installed!")),(0,i.kt)("p",null,"There should be an example script in the ",(0,i.kt)("inlineCode",{parentName:"p"},"README")," file, but this guide suggests\ntrying the following example first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'import time\nimport openapi_client\nfrom pprint import pprint\nfrom openapi_client.api import carbon_aware_api\nfrom openapi_client.model.emissions_data import EmissionsData\nfrom  dateutil.parser import parse\n# Defining the host is optional and defaults to http://localhost\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = openapi_client.Configuration(\n        host = "http://localhost:5073"\n)\n# Enter a context with an instance of the API client\nwith openapi_client.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = carbon_aware_api.CarbonAwareApi(api_client)\n    location = "westus" # str |  (optional)\n    time = parse(\'2022-07-22T10:30:00.00Z\') # datetime |  (optional)\n    to_time = parse(\'2022-07-22T11:00:00.00Z\') # datetime |  (optional)\n    duration_minutes = 0 # int |  (optional) (default to 0)\n    try:\n        api_response = api_instance.get_emissions_data_for_location_by_time(location=location, time=time, to_time=to_time, duration_minutes=duration_minutes)\n        pprint(api_response)\n    except openapi_client.ApiException as e:\n        print("Exception when calling CarbonAwareApi->emissions_bylocation_get: %s\\n" % e)\n')),(0,i.kt)("p",null,"Here, we import the ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi_client")," along with other modules generated by the\nAPI. We create a default configuration pointing to Web API at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:5073"),",\nchange it to a different URL if your API is deployed at a different URL/port.\nThis line of code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"        api_response = api_instance.get_emissions_data_for_location_by_time(location=location, time=time, to_time=to_time, duration_minutes=duration_minutes)\n")),(0,i.kt)("p",null,"Calls the Python Client to send a request to the Carbon Aware SDK Web API, for\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"/emissions/bylocation")," endpoint, similarly to what's shown above, when\npolling the API directly with HTTP requests. This is an example request for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"westus")," region, in the time window from ",(0,i.kt)("inlineCode",{parentName:"p"},"2022-07-22 at 10:30am")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"2022-07-22 at 11:00am"),"."))}m.isMDXComponent=!0}}]);