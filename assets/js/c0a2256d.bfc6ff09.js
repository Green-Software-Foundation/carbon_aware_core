"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[1206],{8099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(4848),i=t(5680);const a={slug:"release-v1.5",title:"Release v1.5",tags:["v1.5","release"]},o=void 0,s={permalink:"/blog/release-v1.5",editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-07-23-release-1.5.mdx",source:"@site/blog/2024-07-23-release-1.5.mdx",title:"Release v1.5",description:"Release 1.5",date:"2024-07-23T00:00:00.000Z",tags:[{inline:!0,label:"v1.5",permalink:"/blog/tags/v-1-5"},{inline:!0,label:"release",permalink:"/blog/tags/release"}],readingTime:1.79,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"release-v1.5",title:"Release v1.5",tags:["v1.5","release"]},unlisted:!1,nextItem:{title:"Release v1.4",permalink:"/blog/release-v1.4"}},d={authorsImageUrls:[]},l=[{value:"Added",id:"added",level:3},{value:"Removed",id:"removed",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Changed",id:"changed",level:3},{value:"API",id:"api",level:4},{value:"API Deployment",id:"api-deployment",level:4},{value:"SDK",id:"sdk",level:4},{value:"Other",id:"other",level:4}];function c(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Release 1.5"}),"\n",(0,r.jsx)(n.p,{children:"This is the WattTime v3 update.  Most notable changes that may require action are for deployment configuration, and these are minor."}),"\n",(0,r.jsx)(n.h3,{id:"added",children:"Added"}),"\n",(0,r.jsx)(n.p,{children:"WattTime v3 API support.  This is an inplace upgrade for v2."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/532",children:"PR #532 Watt Time v3 Support  "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/340",children:"PR #340 Add example for 'podman play kube' "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/536",children:"PR #536 Updated azure-regions.json with new regions "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/519",children:"#519 Remove hackathon sentence from our website banner "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/510",children:"#510 Gap Analysis for WattTime v3 "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/262",children:"#262 Feature Contribution: Publish the docker file in a docker registry "})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"removed",children:"Removed"}),"\n",(0,r.jsx)(n.p,{children:"WattTime v2 API support due to v3 in place replacement."}),"\n",(0,r.jsx)(n.h3,{id:"fixed",children:"Fixed"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/522",children:"PR #522 Remove Hack mention from the Docs's banner "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/535",children:"#535 Bug: Configuration for locations loads twice  "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/516",children:"PR #516 Update published documentation to .NET 8 "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/515",children:"PR #515 overview.md: Fixed three broken links Signed-off-by: joecus1 "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/506",children:"#506 Check our published documentation to identify any references to .NET7 "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/512",children:"#512 Bug: Broken links in overview.md file "})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"changed",children:"Changed"}),"\n",(0,r.jsxs)(n.p,{children:["Updates for WattTime v3 API endpoint from v2, details in the ",(0,r.jsx)(n.a,{href:"./casdk-docs/docs/architecture//decisions/0016-watt-time-v3.md",children:"ADR for WattTime v3 changes"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"No changes"}),"\n",(0,r.jsx)(n.h4,{id:"api-deployment",children:"API Deployment"}),"\n",(0,r.jsx)(n.p,{children:"Due to the change for WattTime v3, there is change to the configuration for WattTime users."}),"\n",(0,r.jsx)(n.p,{children:"With some of the changes to the code, some of the configuration will also needs to change."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Config (v2)"}),(0,r.jsx)(n.th,{children:"Config (v3)"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BalancingAuthorityCacheTTL"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RegionCacheTTL"})}),(0,r.jsx)(n.td,{children:"This is the cache for regions data in seconds, and has a default value of 1 day.  This only needs updating if you set it"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n/a"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"AuthenticationBaseUrl"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"NEW"})," This is the base URL for the WattTime Authentication API and defaults to ",(0,r.jsx)(n.code,{children:"https://api.watttime.org/"})," if not set."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example below if set (note they do not have to be set)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"wattTime_no-proxy": {\n  "Type": "WattTime",\n  "Username": "the_username",\n  "Password": "super_secret_secret",\n  "BaseURL": "https://api.watttime.org/v3/",\n  "AutenticationBaseURL": "https://api.watttime.org", // This is new but not mandatory in config\n  "RegionCacheTTL": 86400, // This is changed but not mandatory in config\n  "Proxy": {\n    "UseProxy": false\n  }\n'})}),"\n",(0,r.jsx)(n.h4,{id:"sdk",children:"SDK"}),"\n",(0,r.jsx)(n.p,{children:"No changes"}),"\n",(0,r.jsx)(n.h4,{id:"other",children:"Other"}),"\n",(0,r.jsx)(n.p,{children:"No changes"}),"\n",(0,r.jsxs)(n.p,{children:["For more details, checkout ",(0,r.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503",children:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5680:(e,n,t)=>{t.d(n,{RP:()=>l});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=i,f=u["".concat(d,".").concat(p)]||u[p]||c[p]||a;return t?r.createElement(f,o(o({ref:n},h),{},{components:t})):r.createElement(f,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);