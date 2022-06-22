"use strict";(self.webpackChunksft211=self.webpackChunksft211||[]).push([[317],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,f=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return n?o.createElement(f,s(s({ref:t},h),{},{components:n})):o.createElement(f,s({ref:t},h))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9338:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],a={id:"introduction-testing",title:"Introduction to Testing",sidebar_position:1,description:"An introduction to software testing and debugging."},l="The Origin of this Course",u={unversionedId:"A-Introduction/introduction-testing",id:"A-Introduction/introduction-testing",isDocsHomePage:!1,title:"Introduction to Testing",description:"An introduction to software testing and debugging.",source:"@site/docs/A-Introduction/introduction-testing.md",sourceDirName:"A-Introduction",slug:"/A-Introduction/introduction-testing",permalink:"/A-Introduction/introduction-testing",editUrl:"https://github.com/Seneca-ICTOER/software-testing/tree/main/docs/A-Introduction/introduction-testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction-testing",title:"Introduction to Testing",sidebar_position:1,description:"An introduction to software testing and debugging."},sidebar:"courseNotesSidebar",previous:{title:"Table of Contents",permalink:"/"},next:{title:"The Importance of Testing",permalink:"/A-Introduction/need-for-testing-2"}},h=[{value:"Debugging",id:"debugging",children:[],level:2},{value:"What Does Testing Prove?",id:"what-does-testing-prove",children:[],level:2},{value:"Testing Versus Debugging",id:"testing-versus-debugging",children:[],level:2}],d={toc:h};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-origin-of-this-course"},"The Origin of this Course"),(0,i.kt)("p",null,"This course grew out of the observation that students were not skilled at testing and debugging and that this skill has become required by the industry. The goals of this course are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To show students the differences between testing and debugging."),(0,i.kt)("li",{parentName:"ol"},"To show students how to do proper software testing."),(0,i.kt)("li",{parentName:"ol"},"To show students many debugging techniques and tools."),(0,i.kt)("li",{parentName:"ol"},"To introduce students to how testing is done in industry and the tools used to manage it.")),(0,i.kt)("p",null,"The fourth goal came from discussions with a test lead in industry. She is a developer who became a passionate tester of her company's point of sale product. She pointed out that new graduates came into the industry with little knowledge of the software testing life cycle nor the tools used to manage it. She also pointed out that working in Quality Assurance (QA) is where many new graduates and those on co-op work terms start out. Her input shaped the second half of the course where students get to use tools to manage a small project and do the necessary testing and debugging."),(0,i.kt)("p",null,"By the end of this course, the student will know how to test and debug code as well as be ready to move into a team in industry that uses QA as part of the software development life cycle."),(0,i.kt)("h1",{id:"introduction-to-testing"},"Introduction to Testing"),(0,i.kt)("p",null,"Software is one of the most complex things built by humans. The complexity of modern software is such that it stretches the mental capabilities of almost all of us. Getting it right is far more difficult than it looks. You have to consider:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"will the software produce the correct results?"),(0,i.kt)("li",{parentName:"ul"},"will the software work with edge cases like no data?"),(0,i.kt)("li",{parentName:"ul"},"will the software have the required efficiency?"),(0,i.kt)("li",{parentName:"ul"},"will the software fail under high loads?"),(0,i.kt)("li",{parentName:"ul"},"will the software do something sensible when it receives bad data?"),(0,i.kt)("li",{parentName:"ul"},"has the software been integrated with the rest of the system so that there are no interactions which cause errors?"),(0,i.kt)("li",{parentName:"ul"},"if there is an unanticipated error, can the software recover and return itself to a stable state?")),(0,i.kt)("p",null,"Software testing is the process of testing your software to see if it works and meets all of its performance and functional requirements. In the early days of software development, this area was neglected or given minimal time and effort. Over the years, software got more complex, bigger and the users expected higher quality. Thus, the once neglected area of testing has risen to being a vital part of the software development life cycle."),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Testing to determine if there are problems in the software is only part of the process. After you determine that the software is incorrect, you need to find and fix the problem. This can be a highly complex and involved process that can take a long of time."),(0,i.kt)("p",null,"The process of debugging can be broken down into smaller steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"locate the source of the bug,"),(0,i.kt)("li",{parentName:"ul"},"determine how to fix the bug,"),(0,i.kt)("li",{parentName:"ul"},"implement the solution.")),(0,i.kt)("p",null,"The first step, locating the source of the bug, is often the most time-consuming. The job of the developer is similar to that of a detective. You gather evidence and look for clues as to what might have caused the bug. Often, you do not have the information you need and need to insert print statements in the code to produce additional information. Tools like debuggers can also be valuable aids in tracking down bugs as they allow you to pause the code at key points and examine the values of the variables."),(0,i.kt)("h2",{id:"what-does-testing-prove"},"What Does Testing Prove?"),(0,i.kt)("p",null,"Testing proves that the tests you ran work correctly. It does not prove that your software is correct. Your software could pass all tests with flying colours yet still have undiscovered bugs in it. The amount of bugs discovered is proportional to the amount of time spent debugging. However, this is not a linear relationship as you discover lots of bugs when you start testing and fewer and fewer as you continue testing. At some point, you reach the point of dimishing returns where it will take enormous time and effort to discover more bugs. This is when testing usually stops. You have to hope that if you cannot find any more bugs, you customers will not find any more either."),(0,i.kt)("p",null,"Many people think that, after testing, the software is correct. While this might be true, it is usually false. Getting software perfectly correct is almost impossible. Great effort has been expended in finding ways to prove software correct but this has failed for all but the smallest programs."),(0,i.kt)("p",null,'Another common fallacy is that "I use XXX every day and never see a problem so it must be debugged." Most people use applications the same way every day and do not push the applications to their limits or explore all the features. All you are observing is that the program works correctly for what you use it for. Most applications are shipped with many known bugs. The developers thought that they were not worth fixing because the customer would probably never encounter them or there would be work-around solutions. The fact is that almost all software has bugs in it.'),(0,i.kt)("h2",{id:"testing-versus-debugging"},"Testing Versus Debugging"),(0,i.kt)("p",null,"Testing and debugging are not the same thing. Testing is the process of running the software and determining that the results are what you expect them to be and, therefore, correct. Debugging is the process of trying to locate and fix a problem in code that you know has a bug in it. While testing and debugging are often carried out one after the other, they are separate processes and should not be confused with one another."),(0,i.kt)("p",null,"In a large company, the tests will be run by the quality assurance team. Once a bug is discovered, the bug report will be sent in to the project manager or team lead who will then assign a developer to debug and fix the problem. In a smaller company, they might not have sufficient personnel to staff the different roles and the developer might be the one who both runs the tests and fixes the bugs. Regardless of who actually does the testing and debugging, the important point to remember is that they are separate tasks."))}c.isMDXComponent=!0}}]);