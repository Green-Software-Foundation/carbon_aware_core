"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[1848],{3724:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(7624),o=r(5788);const i={},s="4. Documentation",c={id:"architecture/decisions/documentation",title:"4. Documentation",description:"Status",source:"@site/docs/architecture/decisions/0004-documentation.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/documentation",permalink:"/carbon-aware-sdk/docs/architecture/decisions/documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0004-documentation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. Move Command Line Parameters to Config File",permalink:"/carbon-aware-sdk/docs/architecture/decisions/command-line-params-to-config"},next:{title:"5. WebAPI to use IAsyncEnumerable to stream potentially large responses",permalink:"/carbon-aware-sdk/docs/architecture/decisions/IAsyncEnumerable-HttpResponseExceptionFilter"}},a={},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Immediate Changes",id:"immediate-changes",level:3},{value:"Longer Term Impact",id:"longer-term-impact",level:3},{value:"Green Impact",id:"green-impact",level:2},{value:"Appendix",id:"appendix",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.MN)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"4-documentation",children:"4. Documentation"}),"\n",(0,t.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,t.jsx)(n.p,{children:"Accepted"}),"\n",(0,t.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,t.jsx)(n.p,{children:"There are README.md files in many different directories and little clarity as to\nwho that documentation is meant to serve. Some are focused on users operating\nthe software, others on developers extending the software, sometimes both in the\nsame file. There are also various other markdown files with a wide range of\ncompleteness. As a user it is hard to know where to look to run the software and\nas a developer it is unclear where new documentation should live and for whom it\nneeds to be written."}),"\n",(0,t.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,t.jsxs)(n.p,{children:["Documents containing metadata about the repository/project or communicating\norganizational processes shall live at the root. Examples include the project\noverview ",(0,t.jsx)(n.code,{children:"README.md"}),", ",(0,t.jsx)(n.code,{children:"CONTRIBUTING.md"}),", ",(0,t.jsx)(n.code,{children:"LICENSE.md"}),", etc."]}),"\n",(0,t.jsxs)(n.p,{children:["All documentation regarding the usage, extension, or additional development of\nthe carbon-aware-sdk software shall live in the ",(0,t.jsx)(n.code,{children:"/docs"})," directory."]}),"\n",(0,t.jsx)(n.p,{children:"Documentation focused on using the software as-is (CLI installation,\nconfiguration docs, running the web API, etc) shall be kept separate from\ndocumentation focused on developing new features or extending the sdk."}),"\n",(0,t.jsxs)(n.p,{children:["No documentation shall live outside the ",(0,t.jsx)(n.code,{children:"root"})," or ",(0,t.jsx)(n.code,{children:"/docs"})," directories. All other\n",(0,t.jsx)(n.code,{children:"README.md"})," files must only contain relative links back to the appropriate\n",(0,t.jsx)(n.code,{children:"/docs"})," file. EG:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"./src/CarbonAware.WebApi/README.md"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"# CarbonAware.WebApi\n\n- [Getting started](/carbon-aware-sdk/docs/tutorial-basics/carbon-aware-webapi)\n- [Architecture](/carbon-aware-sdk/docs/architecture/overview)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To enforce file consistency for readers and authors, documentation will be\nlinted using\n",(0,t.jsx)(n.a,{href:"https://github.com/DavidAnson/markdownlint/tree/main",children:"markdownlint"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,t.jsx)(n.h3,{id:"immediate-changes",children:"Immediate Changes"}),"\n",(0,t.jsx)(n.p,{children:"If this structure is accepted the follow changes would be required to align the\nrepository:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["placeholder files in ",(0,t.jsx)(n.code,{children:"/carbon-aware-sdk"})," are deleted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/carbon-aware-sdk/license.md"})," is moved to ",(0,t.jsx)(n.code,{children:"/LICENSE.md"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/carbon-aware-sdk/Readme.md"})," content is rehomed to ",(0,t.jsx)(n.code,{children:"/README.md"})," as\nappropriate."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/images/placehold.md"})," is deleted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/images"})," directory is moved to ",(0,t.jsx)(n.code,{children:"/docs/images"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"overview.md"})," content is rehomed to the ",(0,t.jsx)(n.code,{children:"/docs"})," directory as\nappropriate."]}),"\n",(0,t.jsxs)(n.li,{children:["Content from the ",(0,t.jsx)(n.code,{children:"README.md"})," files in the ",(0,t.jsx)(n.code,{children:"/src"})," directory/sub-directories\n(detailed below) are rehomed to new files in the ",(0,t.jsx)(n.code,{children:"/docs"})," directory.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\README.md"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\CarbonAware.Aggregators\\src\\CarbonAware\\README.md"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\CarbonAware.LocationSources\\CarbonAware.LocationSources.Azure\\README.md"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\CarbonAware.Tools\\CarbonAware.Tools.AWSRegionTestDataGenerator\\README.md"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\CarbonAware.Tools\\CarbonAware.Tools.AzureRegionTestDataGenerator\\README.md"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\CarbonAware.Tools\\CarbonAware.Tools.WattTimeClient\\src\\README.md"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\CarbonAware.WebApi\\src\\README.md"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"src\\CarbonAware\\src\\docs\\README.md"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Minor formatting changes made to all files to address existing linting\nwarning."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["More examples provided in the ",(0,t.jsx)(n.a,{href:"#appendix",children:"Appendix"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"longer-term-impact",children:"Longer Term Impact"}),"\n",(0,t.jsxs)(n.p,{children:["In the current ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Monorepo",children:"monorepo"})," structure,\nthis change should make documentation easier to find, use, and write. However,\nthis type of consolidation is non-trivial to separate out (especially as it\ngrows) should the project decide to split components into different repositories\nin the future."]}),"\n",(0,t.jsx)(n.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,t.jsx)(n.p,{children:"Neutral"}),"\n",(0,t.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of what this repository's documentation may look like\nfollowing implementation of this ADR proposal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"./\n \u2523 docs/\n \u2503 \u2523 architecture/\n \u2503 \u2503 \u2523 decisions/\n \u2503 \u2503 \u2503 \u2523 0000-ladr-template.md\n \u2503 \u2503 \u2503 \u2523 0001-record-architecture-decisions.md\n \u2503 \u2503 \u2503 \u2523 0002-dev-containers.md\n \u2503 \u2503 \u2503 \u2523 0003-command-line-params-to-config.md\n \u2503 \u2503 \u2503 \u2517 0004-documentation.md\n \u2503 \u2503 \u2523 overview.md\n \u2503 \u2503 \u2523 user-interfaces.md\n \u2503 \u2503 \u2523 aggregators.md\n \u2503 \u2503 \u2517 data-sources.md\n \u2503 \u2523 quickstart.md\n \u2503 \u2523 configuration.md\n \u2503 \u2523 carbon-aware-webapi.md\n \u2503 \u2517 carbon-aware-cli.md\n \u2523 samples/\n \u2503 \u2523 helmexample/\n \u2503 \u2503 \u2517 README.md\n \u2503 \u2517 python-proxy-server/\n \u2503   \u2517 README.md\n \u2523 README.md\n \u2523 CONTRIBUTIING.md\n \u2517 LICENSE.md\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.MN)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5788:(e,n,r)=>{r.d(n,{MN:()=>d});var t=r(1504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),d=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,p=m["".concat(a,".").concat(u)]||m[u]||l[u]||i;return r?t.createElement(p,s(s({ref:n},h),{},{components:r})):t.createElement(p,s({ref:n},h))}));h.displayName="MDXCreateElement"}}]);