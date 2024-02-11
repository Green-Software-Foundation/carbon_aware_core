"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[6353],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Use Carbon Aware SDK with an Azure Function",u={unversionedId:"azure/azure-function/README",id:"azure/azure-function/README",title:"Use Carbon Aware SDK with an Azure Function",description:"Overview",source:"@site/docs/azure/azure-function/README.md",sourceDirName:"azure/azure-function",slug:"/azure/azure-function/",permalink:"/carbon-aware-sdk/docs/azure/azure-function/",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/azure/azure-function/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/carbon-aware-sdk/docs/azure/apim-policy/"},next:{title:"Java Client Example",permalink:"/carbon-aware-sdk/docs/java-client/"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Azure Function Dependency Injection",id:"azure-function-dependency-injection",level:2},{value:"Run Function Locally",id:"run-function-locally",level:2},{value:"Prerequisites to Run",id:"prerequisites-to-run",level:3},{value:"Start Function",id:"start-function",level:3},{value:"<em>Example call for Get Average Carbon Intensity function</em>",id:"example-call-for-get-average-carbon-intensity-function",level:4},{value:"<em>Example call for Get Current Forecast function</em>",id:"example-call-for-get-current-forecast-function",level:4},{value:"Deploy to Azure",id:"deploy-to-azure",level:2},{value:"Prerequisites to Deploy",id:"prerequisites-to-deploy",level:3},{value:"Create Function App",id:"create-function-app",level:3},{value:"Publish Functions",id:"publish-functions",level:3},{value:"References",id:"references",level:2}],l={toc:s},p="wrapper";function f(e){let{components:n,...o}=e;return(0,a.kt)(p,(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-carbon-aware-sdk-with-an-azure-function"},"Use Carbon Aware SDK with an Azure Function"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The sample included showcase the Azure Functions tooling for the Carbon Aware\nSDK ",(0,a.kt)("a",{parentName:"p",href:"../../docs/architecture/c-sharp-client-library.md"},"C# Class Library"),". It\nincludes an implementation for ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAverageCarbonIntensity")," and for\n",(0,a.kt)("inlineCode",{parentName:"p"},"GetCurrentForecast"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAverageCarbonIntensity")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"EmissionsHandler")," to\nreturn the carbon intensity rate of a location for a specific timespan.\n",(0,a.kt)("inlineCode",{parentName:"p"},"GetCurrentForecast")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"ForecastHandler")," to yield the optimal time of a\nspecified location and duration."),(0,a.kt)("p",null,"The functions can run locally for debugging or be deployed to Azure. See the\n",(0,a.kt)("a",{parentName:"p",href:"../../docs/configuration.md#datasources"},"data source configuration docs")," for\ndetailed information about configuring the data source(s) your Azure Function\nwill use."),(0,a.kt)("h2",{id:"azure-function-dependency-injection"},"Azure Function Dependency Injection"),(0,a.kt)("p",null,"The Carbon Aware SDK is included in the function .csproj file by\n",(0,a.kt)("a",{parentName:"p",href:"../../docs/packaging.md#included-scripts"},"creating and adding the SDK as a package"),".\nThe ",(0,a.kt)("a",{target:"_blank",href:t(8014).Z},"Startup.cs")," file uses dependency injection to access the\nhandlers in the library. The following code initializes the C# Library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"}," public override void Configure(IFunctionsHostBuilder builder)\n        {\n            var configuration = builder.GetContext().Configuration;\n            builder.Services\n            .AddEmissionsServices(configuration)\n            .AddForecastServices(configuration);\n        }\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note as the in-process\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection"},"Azure Function uses dependency injection"),"\nthough via\n",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Microsoft.Azure.Functions.Extensions/"},"Microsoft.Azure.Functions.Extensions"),"\nthere is a version conflict of\n",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Microsoft.Extensions.Configuration"},"Microsoft.Extensions.Configuration"),".\nIt is fixed adding a version specific project dependency (in .csproj) to the\nsame version as the Carbon Aware SDK. Microsoft.Extensions.Configuration is\nbackwards compatible.")),(0,a.kt)("h2",{id:"run-function-locally"},"Run Function Locally"),(0,a.kt)("p",null,"Both Azure Function apps can be\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-functions/functions-develop-local"},"run locally"),"\nwithout needing an Azure subscription. The process for running both is the same,\nas they use the same configuration, just call different paths within the SDK."),(0,a.kt)("h3",{id:"prerequisites-to-run"},"Prerequisites to Run"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download"},".NET Core SDK")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local"},"Azure Functions Core Tools")),(0,a.kt)("h3",{id:"start-function"},"Start Function"),(0,a.kt)("p",null,"To run and debug locally, update the ",(0,a.kt)("a",{target:"_blank",href:t(4556).Z},"appsettings.json")," file\nto include the desired ",(0,a.kt)("a",{parentName:"p",href:"../../docs/configuration.md"},"configuration"),"."),(0,a.kt)("p",null,"In the app folder (",(0,a.kt)("inlineCode",{parentName:"p"},"samples/azure/azure-function"),"), run the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"func start")),(0,a.kt)("p",null,"After the function has compiled and is running, the URLs to the functions will\nbe presented."),(0,a.kt)("h4",{id:"example-call-for-get-average-carbon-intensity-function"},(0,a.kt)("em",{parentName:"h4"},"Example call for Get Average Carbon Intensity function")),(0,a.kt)("p",null,"The following example will retrieve the Average Carbon Intensity. For this\nexample, query parameters were used, but the values could also be sent in the\nbody of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:7071/api/GetAverageCarbonIntensity?startDate=2022-03-01T15:30:00Z&endDate=2022-03-01T18:30:00Z&location=eastus'\n")),(0,a.kt)("h4",{id:"example-call-for-get-current-forecast-function"},(0,a.kt)("em",{parentName:"h4"},"Example call for Get Current Forecast function")),(0,a.kt)("p",null,"The following example will call the Current Forecast route. The request can use\neither the request body or query parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request GET \'http://localhost:7071/api/GetCurrentForecast\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "startDate": "2022-11-02T15:30:00Z",\n    "endDate": "2022-11-02T18:30:00Z",\n    "location" : "eastus",\n    "duration": 15\n}\'\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: startDate and endDate must be a valid interval within the future 24\nhours from the time of calling.")),(0,a.kt)("h2",{id:"deploy-to-azure"},"Deploy to Azure"),(0,a.kt)("p",null,"If you have an Azure subscription, you can also deploy these functions to Azure."),(0,a.kt)("h3",{id:"prerequisites-to-deploy"},"Prerequisites to Deploy"),(0,a.kt)("p",null,"You must have the\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/powershell/azure/install-az-ps"},"Azure PowerShell"),"\ninstalled locally to be able to publish to Azure."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local"},"Azure Functions Core Tools")),(0,a.kt)("h3",{id:"create-function-app"},"Create Function App"),(0,a.kt)("p",null,"Log in to Azure: ",(0,a.kt)("inlineCode",{parentName:"p"},"az login")),(0,a.kt)("p",null,"Once the correct subscription is selected run the following script to create a\nnew function app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Function app and storage account names must be unique.\n\n# Variable block\nlet "randomIdentifier=$RANDOM*$RANDOM"\nlocation="eastus"\nresourceGroup="carbon-aware-$randomIdentifier"\nstorage="casaccount$randomIdentifier"\nfunctionApp="carbon-aware-functionapp-$randomIdentifier"\nskuStorage="Standard_LRS"\nfunctionsVersion="3"\n\n# Create a resource group\necho "Creating $resourceGroup in "$location"..."\naz group create --name $resourceGroup --location "$location"\n\n# Create an Azure storage account in the resource group.\necho "Creating $storage"\naz storage account create --name $storage --location "$location" --resource-group $resourceGroup --sku $skuStorage\n\n# Create a serverless function app in the resource group.\necho "Creating $functionApp"\naz functionapp create --name $functionApp --storage-account $storage --consumption-plan-location "$location" --resource-group $resourceGroup --functions-version $functionsVersion\n')),(0,a.kt)("h3",{id:"publish-functions"},"Publish Functions"),(0,a.kt)("p",null,"Update the ",(0,a.kt)("a",{target:"_blank",href:t(4556).Z},"appsettings.json")," file to include the desired\n",(0,a.kt)("a",{parentName:"p",href:"../../docs/configuration.md"},"configuration"),"."),(0,a.kt)("p",null,"To publish the function code to a function app in Azure, use the publish command\nin the samples/azure/azure-function folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"func azure functionapp publish $functionApp\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference?tabs=blob"},"Azure Functions developer guide")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection"},"Use dependency injection in .NET Azure Functions")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash#start"},"Run functions locally")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/scripts/functions-cli-create-serverless?source=recommendations"},"Create a function app for serverless code execution")))}f.isMDXComponent=!0},8014:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/Startup-7c4342c8bcb18dcbbc7425fe80d0b397.cs"},4556:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/appsettings-c5546b12aae431bf752aa097c9902bf3.json"}}]);