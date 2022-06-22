"use strict";(self.webpackChunksft211=self.webpackChunksft211||[]).push([[406],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6793:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],s={id:"test-case-5",title:"Test Cases",sidebar_position:4,description:"How to write a software test case."},o="Software Test Cases",p={unversionedId:"F-QA/test-case-5",id:"F-QA/test-case-5",isDocsHomePage:!1,title:"Test Cases",description:"How to write a software test case.",source:"@site/docs/F-QA/test-case-5.md",sourceDirName:"F-QA",slug:"/F-QA/test-case-5",permalink:"/F-QA/test-case-5",editUrl:"https://github.com/Seneca-ICTOER/software-testing/tree/main/docs/F-QA/test-case-5.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"test-case-5",title:"Test Cases",sidebar_position:4,description:"How to write a software test case."},sidebar:"courseNotesSidebar",previous:{title:"The Software Test Plan",permalink:"/F-QA/test-plan-2"},next:{title:"Jira",permalink:"/F-QA/Jira-1"}},u=[],d={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"software-test-cases"},"Software Test Cases"),(0,l.kt)("p",null,"The test plan describes at a high level testing for the entire project. This is a very general purpose document that is designed to be read by many people on both the QA team, the development team, and management. It describes many different things including the schedule, the personnel involved, the scope of testing, and potential risks to the project. What it does not contain is the low level details of how each of the tests is to be conducted. This information is included in the test case."),(0,l.kt)("p",null,"A test case contains all the information necessary to carry out a particular test including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optionally, the environment in which the test needs to be conducted,"),(0,l.kt)("li",{parentName:"ul"},"a description of the test data and how it can be obtained,"),(0,l.kt)("li",{parentName:"ul"},"The expected results of the test,"),(0,l.kt)("li",{parentName:"ul"},"The status of a test indicating whether it has been completed or not.")),(0,l.kt)("p",null,"The test case tells the testers exactly how to conduct the test and ensures that no steps in the testing process are skipped. Having the individual tests laid out as test cases allows the QA manager to divide the workload among the testers."),(0,l.kt)("p",null,"The test cases will be as varied as the different features of a software which need to be tested. This could include"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Functionality test cases,"),(0,l.kt)("li",{parentName:"ul"},"Unit test cases,"),(0,l.kt)("li",{parentName:"ul"},"Performance test cases,"),(0,l.kt)("li",{parentName:"ul"},"Database test cases,"),(0,l.kt)("li",{parentName:"ul"},"User interface test cases,"),(0,l.kt)("li",{parentName:"ul"},"Integration test cases,"),(0,l.kt)("li",{parentName:"ul"},"Security test cases,"),(0,l.kt)("li",{parentName:"ul"},"and usability test cases.")),(0,l.kt)("p",null,"The test case should include the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a unique test case identifier,"),(0,l.kt)("li",{parentName:"ul"},"A brief description of a test and what it is for,"),(0,l.kt)("li",{parentName:"ul"},"Any assumptions and preconditions that are necessary before a test can be executed,"),(0,l.kt)("li",{parentName:"ul"},"Test data which needs to be provided in order to execute the test,"),(0,l.kt)("li",{parentName:"ul"},"A list of steps which need to be executed to conduct the test,"),(0,l.kt)("li",{parentName:"ul"},"The expected result of the test,"),(0,l.kt)("li",{parentName:"ul"},"The actual result of the test that was obtained and any post conditions which occurred as a result of executing the test,"),(0,l.kt)("li",{parentName:"ul"},"Whether the test passed or failed.")),(0,l.kt)("p",null,"The exact format of the test case might vary between companies, projects, and even between tests within the same project. You should write your test cases to be as simple as possible. They should be easily read and easily interpreted. The instructions should be easy to follow and unambiguous."),(0,l.kt)("p",null,"A test suite is a collection of test plans which have been organized together because they share something in common. It could be that they are testing the same part of the software or it could be that they are testing the same business requirements. The test suite is a way for you to organize your individual low level tests into collections of related tests."),(0,l.kt)("p",null,"The following could be a functionality test:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"ID"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Steps"),(0,l.kt)("th",{parentName:"tr",align:null},"Test Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Expected Results"),(0,l.kt)("th",{parentName:"tr",align:null},"Actual Results"),(0,l.kt)("th",{parentName:"tr",align:null},"Pass/Fail"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TF001"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Login Test"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. go to login page ",(0,l.kt)("br",null)," 2. Enter user name ",(0,l.kt)("br",null)," 3. Enter password ",(0,l.kt)("br",null),' 4. Click "Login"'),(0,l.kt)("td",{parentName:"tr",align:null},"user=John ",(0,l.kt)("br",null)," passwd=secret"),(0,l.kt)("td",{parentName:"tr",align:null},"Successful login"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"We could also have a suite of unit tests to test a particular function, as shown below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"ID"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Steps"),(0,l.kt)("th",{parentName:"tr",align:null},"Test Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Expected Results"),(0,l.kt)("th",{parentName:"tr",align:null},"Actual Results"),(0,l.kt)("th",{parentName:"tr",align:null},"Pass/Fail"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU001"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"x"'),(0,l.kt)("td",{parentName:"tr",align:null},'"x"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU003"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"',"_",'x"'),(0,l.kt)("td",{parentName:"tr",align:null},'"x"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU004"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"x',"_",'"'),(0,l.kt)("td",{parentName:"tr",align:null},'"x"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU005"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"',"_","_","_",'x"'),(0,l.kt)("td",{parentName:"tr",align:null},'"x"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU006"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"x',"_","_","_",'"'),(0,l.kt)("td",{parentName:"tr",align:null},'"x"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU007"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"xyz"'),(0,l.kt)("td",{parentName:"tr",align:null},'"xyz"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU008"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"',"_","_","_",'xyz"'),(0,l.kt)("td",{parentName:"tr",align:null},'"xyz"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU009"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"xyz',"_","_","_",'"'),(0,l.kt)("td",{parentName:"tr",align:null},'"xyz"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TU010"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string strip"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1. pass data to function and capture result"),(0,l.kt)("td",{parentName:"tr",align:null},'"',"_",(0,l.kt)("strong",{parentName:"td"},"abc","_"),"def","_","_","_",'"'),(0,l.kt)("td",{parentName:"tr",align:null},'"abc',"_","_","_",'def"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);