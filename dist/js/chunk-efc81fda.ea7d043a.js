(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efc81fda"],{"039b":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"072f":function(t,e,n){"use strict";var o=n("2dba"),a=n("ad11"),r=n("92ce"),i=n("039b"),s=n("13d6");t.exports=function(t,e,n){var c=s(t),u=""[t];r(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(a(String.prototype,t,n(i,c,u)),o(RegExp.prototype,c,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)}))}},"13d6":function(t,e,n){var o=n("f4a3")("wks"),a=n("4cbb"),r=n("a514").Symbol;t.exports=function(t){return o[t]||(o[t]=r&&r[t]||(r||a)("Symbol."+t))}},"2b20":function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},"2dba":function(t,e,n){var o=n("fde6"),a=n("afe8");t.exports=n("6382")?function(t,e,n){return o.setDesc(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},"4cbb":function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},6382:function(t,e,n){t.exports=!n("92ce")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"92ce":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"9c4a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loginBox"}},[n("div",{staticClass:"h-100 bg-plum-plate bg-animation"},[n("div",{staticClass:"d-flex h-100 justify-content-center align-items-center"},[n("b-col",{staticClass:"mx-auto app-login-box",attrs:{md:"8"}},[n("div",{attrs:{id:"title"}},[t._v("\n                    My Asset\n                ")]),n("div",{staticClass:"modal-dialog w-100 mx-auto"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("div",{staticClass:"h5 modal-title text-center"},[n("h4",{staticClass:"mt-2"},[n("div",[t._v("Welcome ,")]),n("span",[t._v("Please sign in to your account below.")])])]),n("b-form-group",{attrs:{id:"exampleInputGroup1","label-for":"exampleInput1",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email..."},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("b-form-group",{attrs:{id:"exampleInputGroup2","label-for":"exampleInput2"}},[n("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"Enter password..."},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",{staticClass:"divider"}),n("h6",{staticClass:"mb-0"},[t._v("\n                                No account?\n                                "),n("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:t.signUp}},[t._v("Sign up")])],1)],1),n("div",{staticClass:"modal-footer clearfix"},[n("div",{staticClass:"float-right"},[n("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.signInEmail}},[t._v("Login By Email")]),n("b-button",{attrs:{variant:"info",size:"lg"},on:{click:t.signInGoogle}},[t._v("Login By Google")])],1)])])])])],1)])])},a=[],r=(n("a481"),n("8aa5")),i=n.n(r),s={name:"loginBox",data:function(){return{email:"",password:""}},methods:{signUp:function(){location.replace("/Register")},signInEmail:function(){i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){location.replace("/Dashboards")}).catch(function(t){alert(t)})},signInGoogle:function(){var t=new i.a.auth.GoogleAuthProvider;i.a.auth().languageCode="ko",i.a.auth().signInWithPopup(t).then(function(t){t.credential.accessToken,t.user;t&&location.replace("/Dashboards")}).catch(function(t){t.code,t.message,t.email,t.credential})}}},c=s,u=(n("afd7"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null);e["default"]=l.exports},a481:function(t,e,n){n("072f")("replace",2,function(t,e,n){return function(o,a){"use strict";var r=t(this),i=void 0==o?void 0:o[e];return void 0!==i?i.call(o,r,a):n.call(String(r),o,a)}})},a514:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},ad11:function(t,e,n){var o=n("a514"),a=n("2dba"),r=n("4cbb")("src"),i="toString",s=Function[i],c=(""+s).split(i);n("2b20").inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,i){"function"==typeof n&&(n.hasOwnProperty(r)||a(n,r,t[e]?""+t[e]:c.join(String(e))),n.hasOwnProperty("name")||a(n,"name",e)),t===o?t[e]=n:(i||delete t[e],a(t,e,n))})(Function.prototype,i,function(){return"function"==typeof this&&this[r]||s.call(this)})},afd7:function(t,e,n){"use strict";var o=n("d072"),a=n.n(o);a.a},afe8:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},d072:function(t,e,n){},f4a3:function(t,e,n){var o=n("a514"),a="__core-js_shared__",r=o[a]||(o[a]={});t.exports=function(t){return r[t]||(r[t]={})}},fde6:function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}}}]);