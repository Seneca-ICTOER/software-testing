"use strict";(self.webpackChunksft211=self.webpackChunksft211||[]).push([[615],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=o,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||r;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4325:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],i={id:"QA-1",title:"Quality Assurance",sidebar_position:2,description:"An introduction to quality assurance."},l="Quality Assurance",u={unversionedId:"F-QA/QA-1",id:"F-QA/QA-1",isDocsHomePage:!1,title:"Quality Assurance",description:"An introduction to quality assurance.",source:"@site/docs/F-QA/QA-1.md",sourceDirName:"F-QA",slug:"/F-QA/QA-1",permalink:"/F-QA/QA-1",editUrl:"https://github.com/Seneca-ICTOER/software-testing/tree/main/docs/F-QA/QA-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"QA-1",title:"Quality Assurance",sidebar_position:2,description:"An introduction to quality assurance."},sidebar:"courseNotesSidebar",previous:{title:"Software Testing Life Cycle",permalink:"/E-SDLC/STLC-3"},next:{title:"The Software Test Plan",permalink:"/F-QA/test-plan-2"}},h=[{value:"Agile Projects",id:"agile-projects",children:[{value:"Themes",id:"themes",children:[],level:3},{value:"Epics",id:"epics",children:[],level:3},{value:"Issues",id:"issues",children:[],level:3},{value:"User Stories",id:"user-stories",children:[],level:3}],level:2},{value:"Kanban Boards",id:"kanban-boards",children:[],level:2}],c={toc:h};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quality-assurance"},"Quality Assurance"),(0,r.kt)("p",null,"In the early days of software development, quality assurance was almost overlooked. If the program worked and met minimal standards it was considered good enough. Over the years, software has grown larger, more complicated, and has been integrated into many aspects of our lives. Whereas in the early days software was run by professionals who could work around the many glitches that were found, as software migrated to use by the general population, it had to be of much higher quality. As a result of this, quality assurance, once relegated to an afterthought, has become an important part of the software development process."),(0,r.kt)("p",null,"Software quality assurance is a process to assure that all parts of the software development process are monitored and comply with relevant standards and meet all project requirements. There are quality assurance standards like ISO 9000 and others that might need to be complied with. Modern software quality assurance looks at the entire software development lifecycle from gathering requirements, to design, coding, and even documentation. We will focus on software quality assurance aimed at coding and ensuring that the resulting code is of high quality and meets the requirements."),(0,r.kt)("p",null,"The rest of this section will look at some of the documents we need to produce as part of the quality assurance process and then we'll move on to look at how we can use software tools to help us manage the entire process."),(0,r.kt)("h2",{id:"agile-projects"},"Agile Projects"),(0,r.kt)("p",null,"Traditional project management was driven by due dates. The project was laid out in terms of deliverables and dates assigned to each one. This was typically done using something like a Gantt chart where you could show what work could be conducted in parallel or what work was dependent on other work being finished first. There were two problems with this approach. The first was that it was inflexible so that any unexpected event in the preparation of a deliverable would require a complete rescheduling of all deliverables after that. The second problem was that if a deliverable turned out to be more complicated than initially thought, there was no way to easily break it down into smaller units of work. As a result of these shortcomings, this type of project management was usually doomed to failure."),(0,r.kt)("p",null,"The agile approach to project management has a much more flexible way of breaking down the tasks that need to be done to complete a project. Agile breaks down a project into themes or initiatives, epics or projects, and tasks or issues. We will explore each of these below."),(0,r.kt)("h3",{id:"themes"},"Themes"),(0,r.kt)("p",null,"A theme is one of the major goals of the project. It is usually a long term objective that is a major and significant component of the project. A theme can also be viewed as a major strategic business objective. For example, if you decide you want to break into the project management software market then this would be the theme of your project. Of course, a theme is too broad an objective and it needs to be broken down into smaller, more manageable objectives."),(0,r.kt)("h3",{id:"epics"},"Epics"),(0,r.kt)("p",null,"An epic is a larger body of work that constitutes one of the main components of a theme. Epics are typically measurable which means that you can readily determine when they have been completed. For our example of penetrating the project management software market, we might layout the following two epics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New features - an effort to develop new features for our project management software,"),(0,r.kt)("li",{parentName:"ul"},"Enhancement - and effort to enhance the current features of our software to make it suitable for use by project managers.")),(0,r.kt)("p",null,"These epics are major pieces of work which need to be broken down into smaller, more manageable steps."),(0,r.kt)("h3",{id:"issues"},"Issues"),(0,r.kt)("p",null,"An issue it is one of the tasks that needs to be completed as part of an epic. An issue is a small enough task that it can be performed in a reasonable amount of time, say a few days or a week. Issues are readily actionable which means that you can easily do work to complete them. For the new features epic of our attempt to penetrate the project management software market, we could break it down into 3 issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Researching the project management tool market,"),(0,r.kt)("li",{parentName:"ul"},"Designing new features that we want to implement,"),(0,r.kt)("li",{parentName:"ul"},"Developing the new features that we are going to implement.")),(0,r.kt)("p",null,"Each of these issues is still fairly large and it can be broken down further into child issues or sub-tasks. Sub-tasks could be created to break it down into more manageable units or it could be broken down based upon the skills necessary to perform the sub-task."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;Themes, epics and issues.&quot; ",src:a(4638).Z})),(0,r.kt)("p",null,"The breakdown into themes, epics and issues is highly flexible and can be changed at any time to reflect changes in the project. This could be a change in requirements or a realization that new issues need to be created due to the size of an epic or another problem."),(0,r.kt)("h3",{id:"user-stories"},"User Stories"),(0,r.kt)("p",null,"In the traditional management process, individual tasks were created based upon the technical needs of the project and contained lots of details of the technical work that needed to be performed. The problem with this was that it missed the big picture. The developer did not see how this small work item fitted into the larger picture and what functionality it was going to deliver to the end user."),(0,r.kt)("p",null,"In an effort to keep the developers informed of the importance of what they're working on and to let them see how it fits into the big picture, it has been common to specify tasks as user stories. The user story is a small piece of work that represents some kind of functionality that the end user wants implemented. The implication is that rather than building technical details, we now build units of functionality that are needed by the end user."),(0,r.kt)("p",null,"User stories are effective because they convey the user's perspective to the developer and they are also specified in terms that the customer can readily understand. By focusing on the customers needs, we do not lose focus and deliver what the customer wants. User stories create a shared understanding amongst all shareholders in the project so that everybody knows what is being developed and why. User stories also allow us to prioritize the work items based upon their value to the business."),(0,r.kt)("p",null,"As an example of a user story, consider:"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"As a visitor to the project management website, I want to be able to filter the different projects based upon the project name as well as the personnel working on the project.\n"))),(0,r.kt)("p",null,"You should write your user stories so that they define when the story is done. In other words, they should make it obvious when this task is complete and they should contain something that tells us how we can test to determine when the task has finished."),(0,r.kt)("p",null,"User stories usually correspond to an issue but that does not mean that they are atomic units. Issues can be broken down further into child issues or sub-tasks. These child issues can, of course, have their own user stories attached to them."),(0,r.kt)("p",null,"Each user story should be ",(0,r.kt)("strong",{parentName:"p"},"INVEST"),"able:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"I"),"ndependent - the story should not depend on other stories and can be completed on its own,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"N"),"egotiable - it should open a conversation with the customer to invite refinement and change,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"V"),"aluable - it should provide significant value to the project,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"E"),"stimable - it should be estimated to be the right size for an issue,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S"),"mall - it should be able to be completed in a few days,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"T"),"estable - it should have clear acceptance criteria so tests can be writtten to verify it.")),(0,r.kt)("h2",{id:"kanban-boards"},"Kanban Boards"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&quot;Kanban Board&quot; ",src:a(2824).Z})),(0,r.kt)("p",null,"A Kanban board displays the progress of our project as three or more columns. At its simplest, a Kanban board has a list of requested issues in the first column, issues which are in progress in the middle column, and issues which are completed in the right column."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Requested"),(0,r.kt)("th",{parentName:"tr",align:null},"In Progress"),(0,r.kt)("th",{parentName:"tr",align:null},"Done"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Implement skeletal architecture"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The first Kanban board was developed in the 1940s for Toyota automotive in Japan. The goal was to control and manage work and inventory at every stage of the production process. Kanban is an inherently visual display of the progress of work in a system. The columns represent the steps in the overall process and the position of items in the columns allows you to visually see exactly where things are on their way through the process. By adding columns to the Kanban board, you will be able to tailor the board to the software process you are using."),(0,r.kt)("p",null,"To use a Kanban board, issues start out in the leftmost column until people are ready to start working on them. Once they have started, they can be moved to the middle column to show that the issues are being worked on. Finally, once all of the work on the issue has been completed, the issue is moved to the done column on the right. We are free to add more columns to our Kanban board as necessary for our particular project. In our situation, where were we will be dealing with quality assurance issues, we can add an extra column to represent the quality assurance process."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Requested"),(0,r.kt)("th",{parentName:"tr",align:null},"In Progress"),(0,r.kt)("th",{parentName:"tr",align:null},"QA"),(0,r.kt)("th",{parentName:"tr",align:null},"Done"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Implement skeletal architecture"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"One of the things you can use a Kanban board for is to limit the amount of work in progress. Many of the tools that use the Kanban method allow you to put a limit on the number of issues which can be placed in any of the in-progress columns. This is to ensure that your team is not overloaded by having too many issues in progress at the same time."))}d.isMDXComponent=!0},2824:function(e,t,a){t.Z=a.p+"assets/images/kanban-board-user-2a5c9d8f50b78ab3bbb16e29cbbc229b.png"},4638:function(e,t,a){t.Z=a.p+"assets/images/theme-epic-issue-76b8a7e8ee4d067c089c34d27b333575.jpg"}}]);