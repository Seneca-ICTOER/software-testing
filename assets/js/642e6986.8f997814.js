"use strict";(self.webpackChunksft211=self.webpackChunksft211||[]).push([[350],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return p}});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=i.createContext({}),l=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),c=l(r),p=o,f=c["".concat(u,".").concat(p)]||c[p]||d[p]||n;return r?i.createElement(f,s(s({ref:t},h),{},{components:r})):i.createElement(f,s({ref:t},h))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=c;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<n;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4343:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return h},default:function(){return c}});var i=r(7462),o=r(3366),n=(r(7294),r(3905)),s=["components"],a={id:"Jira-bug-report-7",title:"Bug Reporting",sidebar_position:7,description:"Procedure for reporting bugs."},u="Bug Reporting",l={unversionedId:"F-QA/Jira-bug-report-7",id:"F-QA/Jira-bug-report-7",isDocsHomePage:!1,title:"Bug Reporting",description:"Procedure for reporting bugs.",source:"@site/docs/F-QA/bug-report-7.md",sourceDirName:"F-QA",slug:"/F-QA/Jira-bug-report-7",permalink:"/F-QA/Jira-bug-report-7",editUrl:"https://github.com/Seneca-ICTOER/software-testing/tree/main/docs/F-QA/bug-report-7.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"Jira-bug-report-7",title:"Bug Reporting",sidebar_position:7,description:"Procedure for reporting bugs."},sidebar:"courseNotesSidebar",previous:{title:"Jira",permalink:"/F-QA/Jira-1"},next:{title:"Version Control",permalink:"/F-QA/version-control-7"}},h=[{value:"Summary",id:"summary",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Test ID",id:"test-id",children:[],level:2},{value:"Platform",id:"platform",children:[],level:2},{value:"Operating System",id:"operating-system",children:[],level:2},{value:"Browser",id:"browser",children:[],level:2},{value:"Expected Result",id:"expected-result",children:[],level:2},{value:"Actual Result",id:"actual-result",children:[],level:2},{value:"To Reproduce",id:"to-reproduce",children:[],level:2},{value:"Labels",id:"labels",children:[],level:2},{value:"Attachments",id:"attachments",children:[],level:2},{value:"Linked Issue",id:"linked-issue",children:[],level:2},{value:"Severity",id:"severity",children:[],level:2},{value:"Bug Reporting",id:"bug-reporting-1",children:[],level:2}],d={toc:h};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bug-reporting"},"Bug Reporting"),(0,n.kt)("p",null,"During the testing of the software, it is probable that bugs will be found and need to be reported. The information that needs to be reported about a bug includes the identifier of the test which failed, the environment in which the test was found, instructions on how to reproduce the bug, the actual result of the test which failed and the severity of the bug. This information is shown in the bug reporting form below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&quot;Jira Bug Creation&quot; ",src:r(9784).Z}),"\n",(0,n.kt)("img",{alt:"&quot;Jira Bug Creation&quot; ",src:r(772).Z})),(0,n.kt)("p",null,"I have modified the bug reporting form on Jira to add the new required fields, as shown in the diagram above. You can modify your own bug form on Jira by going into project settings under issue types and editing the bug issue. Once you select the bug issue, there will be form fields on the right that you can drag into your form. Most of the fields I added were simple text fields Or multiline text fields with the exception of these severity which was actually a drop down. I set the list of available severity types as critical, high, medium, low, and cosmetic. You should modify your form to be similar to the one shown above."),(0,n.kt)("p",null,"The information in the various fields is described below."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This is a short one line summary of the bug that describes what it is. You might include the test number to make it easier to relate it to a failed test."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This is where you can put in a freeform description of the bug. This is where you would put information which you cannot fit into any of the other fields."),(0,n.kt)("h2",{id:"test-id"},"Test ID"),(0,n.kt)("p",null,"This is where you can put in the identifier for the test which failed. In the situation where you found a bug without it being related to a test, you can either leave this blank or put in a short description of how you found the buck."),(0,n.kt)("h2",{id:"platform"},"Platform"),(0,n.kt)("p",null,"This is the hardware platform on which you found the bug. You might have found it on a Windows PC, a Macintosh, or maybe an AWS cloud server."),(0,n.kt)("h2",{id:"operating-system"},"Operating System"),(0,n.kt)("p",null,"This is the operating system that was running when you found the bug."),(0,n.kt)("h2",{id:"browser"},"Browser"),(0,n.kt)("p",null,"This is where you can describe the web browser you used, if you used web browser. You should list the type of web browser as well as the version."),(0,n.kt)("h2",{id:"expected-result"},"Expected Result"),(0,n.kt)("p",null,"Here you list the expected result of the test as described in the original test."),(0,n.kt)("h2",{id:"actual-result"},"Actual Result"),(0,n.kt)("p",null,"This is the actual result you obtained from running the test."),(0,n.kt)("h2",{id:"to-reproduce"},"To Reproduce"),(0,n.kt)("p",null,"These are the series of steps necessary to reproduce the bug. In some cases we producing a bug is not easy and you have to follow an exact series of steps pierced you should list that exact series of steps here so that the people trying to fix the bug can reproduce it."),(0,n.kt)("h2",{id:"labels"},"Labels"),(0,n.kt)("p",null,"This is where you can assign a label to categorize your bug report. You might use a label like ",(0,n.kt)("strong",{parentName:"p"},"test-failure"),", ",(0,n.kt)("strong",{parentName:"p"},"UI-bug"),", or ",(0,n.kt)("strong",{parentName:"p"},"performance-bug")," as a way to categorize your bugs and make them easier to find. Note that there is a combo box above the Kanban board which allows you to filter the issues displayed based on the labels attached to them. There is also a combo box for the type of issue. These can be used to filter just the issues you want to see in the Kanban board."),(0,n.kt)("h2",{id:"attachments"},"Attachments"),(0,n.kt)("p",null,"You might have a lot of information about the bug which can help the developer solve the bug. This might include screen shots, erroneous output, log files, test data used, ",(0,n.kt)("em",{parentName:"p"},"etc."),". All of this information can be attached to the issue here to make it easier for the developer to solve the bug."),(0,n.kt)("h2",{id:"linked-issue"},"Linked Issue"),(0,n.kt)("p",null,'You should link the bug report to the original test issue. You can use the "related to" type of link and then search for the original test by typing UT))1 into the search box which appears. As long as UT001 is in the name for thee unit test issue, it will be easily found. This is a good reason to include test identifiers and other identifiers in the short descriptions of issues.'),(0,n.kt)("h2",{id:"severity"},"Severity"),(0,n.kt)("p",null,"Here's where you can categorize the bug based upon its severity. Critical bugs are normally show stoppers that will render the system unusable. High priority bugs our bugs which impact functionality in some way but do not necessarily stop the system. Nonetheless high priority bugs should be fixed soon. Medium priority bugs are not as important as high priority but still need to be fixed. Low priority bugs probably need to be fixed at some point but only when the team is not fixing bugs of higher priority. Cosmetic bugs are often bugs that affect the way something looks without really affecting the functionality. They might be fixed or they might not be fixed."),(0,n.kt)("h2",{id:"bug-reporting-1"},"Bug Reporting"),(0,n.kt)("p",null,"Once you create an issue in jira and set it to be of type bug and fill in all the required information, it is entered into the system and the team leader or project manager we'll look at the bug and typically assign someone to solve it. They will use the severity of a bug to determine how soon they assigned someone to work on the bug or even whether the bug is solved at all.\nYou should note that almost every major software product is shipped with many known bugs. Many of these are very low priority bugs that the average user will never encounter. Although these bugs might be of low priority, they can actually be quite expensive to fix. Therefore products are shipped with these bugs in place knowing that the average user will never find them and delaying fixing them until there is enough time and money to tackle the problem."))}c.isMDXComponent=!0},9784:function(e,t,r){t.Z=r.p+"assets/images/jira-bug-report1-c79db6b2015754a91eef0bd2c8ce99f9.jpg"},772:function(e,t,r){t.Z=r.p+"assets/images/jira-bug-report2-0e05c4ac3dadfe6a510e18cb0940f212.jpg"}}]);