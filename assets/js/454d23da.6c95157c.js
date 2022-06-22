"use strict";(self.webpackChunksft211=self.webpackChunksft211||[]).push([[431],{3905:function(e,t,a){a.d(t,{Zo:function(){return g},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=u(a),p=r,d=c["".concat(l,".").concat(p)]||c[p]||h[p]||o;return a?n.createElement(d,i(i({ref:t},g),{},{components:a})):n.createElement(d,i({ref:t},g))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3249:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return g},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"other-langs-4",title:"Debugging Other Languages",sidebar_position:4,description:"How to debug other languages."},l="Debugging Other Languages",u={unversionedId:"D-Debugging/other-langs-4",id:"D-Debugging/other-langs-4",isDocsHomePage:!1,title:"Debugging Other Languages",description:"How to debug other languages.",source:"@site/docs/D-Debugging/other-langs-4.md",sourceDirName:"D-Debugging",slug:"/D-Debugging/other-langs-4",permalink:"/D-Debugging/other-langs-4",editUrl:"https://github.com/Seneca-ICTOER/software-testing/tree/main/docs/D-Debugging/other-langs-4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"other-langs-4",title:"Debugging Other Languages",sidebar_position:4,description:"How to debug other languages."},sidebar:"courseNotesSidebar",previous:{title:"Other Debugging Tools",permalink:"/D-Debugging/other-tools-3"},next:{title:"Debugging On Linux",permalink:"/D-Debugging/debug-linux-5"}},g=[],h={toc:g};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging-other-languages"},"Debugging Other Languages"),(0,o.kt)("p",null,"There are several languages that you can compile in Visual Studio and you can use Visual Studio to debug them all. In general, high level languages like C, C++, Java, and C# are all debugged in a similar manner. You have to use different techniques when you are using a language which is much different than the compiled languages."),(0,o.kt)("p",null,"All languages we've been working with so far have been compiled into a binary executable. The compiler either inserts additional debug information into the executable or into an associated file that goes with it. This provides information on where the individual lines start in the program and where the functions are. This allows the debugger to know the variable names and to know exactly where a line of code starts and stops."),(0,o.kt)("p",null,"The languages we've dealt with so far have been ",(0,o.kt)("em",{parentName:"p"},"strongly typed")," languages. A strongly typed language does a lot of type checking during the compilation process. As a result, it detects a great number of errors at compile time and you get to fix them before your program ever executes."),(0,o.kt)("p",null,"There is also a class of languages which are ",(0,o.kt)("em",{parentName:"p"},"weakly")," typed. This means that when you pass a parameter to a function they don't actually check to see that the type of the parameter is correct. Further, some of these languages have variables where you don't even declare the type of the variable. The type of the variable is determined by the value which is assigned to it and, if you assign a different value to the same variable, you can change the type of the variable. Many programmers think that this is a very handy thing to be able to do but it removes the compiler's ability to check to see that you are using the right types during the compilation process. Some of the languages in this category include scripting languages like Bash as well as popular languages like Python and JavaScript. All of these languages are much more weakly typed than C and C++."),(0,o.kt)("p",null,"The major problem with weakly typed languages is that all of the bugs, other than pure syntactic bugs, are runtime bugs. This means that you do not discover the bugs until you actually run the program. It also means that if a line never gets executed it could well have a bug in it and you will never find it. Even more problematic, because you can actually change the type of the variables as the program runs, the program might work perfectly with one set of data yet fail on another set of data."),(0,o.kt)("p",null,"What this means for software testing is that you must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Be very careful in your testing coverage to make sure that every line in the program has been executed,"),(0,o.kt)("li",{parentName:"ul"},"Carefully select the data for each test to make sure that all possible data type changes are executed with different data types to ensure that they work correctly.")),(0,o.kt)("p",null,"When you are debugging weakly typed languages, it is far more difficult to ensure that the program is bug free. In fact, all you can say is that the program has run correctly on the tests you have tried. The only way you get confidence in these programs, is by running them for a long time with a large amount of data in the real world. This certainly does not prove that the program is correct, but it does demonstrate that it handles most real-world situations."),(0,o.kt)("p",null,"The development of strongly typed languages was one of the advances that allowed us to write software of the size and quality that we have today. It took years of experience to develop these languages. The downside of the strongly typed languages is that you need to declare the types of all variables and function parameters as well as spend time creating structures and classes. This is a time consuming process that many programmers prefer to skip. The trouble is that skipping these steps removes the benefits of strong typing and complicates the testing process."))}c.isMDXComponent=!0}}]);