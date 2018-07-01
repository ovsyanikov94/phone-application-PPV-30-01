!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(a,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function a(e,t){var n=t&&t.loc,o=void 0,i=void 0;n&&(e+=" - "+(o=n.start.line)+":"+(i=n.start.column));for(var l=Error.prototype.constructor.call(this,e),s=0;s<r.length;s++)this[r[s]]=l[r[s]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{n&&(this.lineNumber=o,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var a=n(0),o=r(n(1)),i=n(21),l=n(13),s=r(n(11));t.VERSION="4.0.11";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))a.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;t.log=c,t.createFrame=a.createFrame,t.logger=s.default},function(e,t,n){e.exports=n(22).default},function(e,t,n){var r=n(3);e.exports=(r.default||r).template({1:function(e,t,n,r,a,o){return'        <li>\r\n            <img src="'+e.escapeExpression(e.lambda(o[0][0],t))+'">\r\n        </li>\r\n'},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a,o){var i,l=e.lambda,s=e.escapeExpression;return'<img class="phone" src="'+s(l(null!=(i=null!=(i=null!=t?t.phone:t)?i.images:i)?i[0]:i,t))+'">\r\n\r\n<button data-element="button-back" >Back</button>\r\n<button>Add to basket</button>\r\n\r\n\r\n<h1>'+s(l(null!=(i=null!=t?t.phone:t)?i.name:i,t))+"</h1>\r\n\r\n<p>"+s(l(null!=(i=null!=t?t.phone:t)?i.description:i,t))+'</p>\r\n\r\n<ul class="phone-thumbs">\r\n'+(null!=(i=n.each.call(null!=t?t:e.nullContext||{},null!=(i=null!=t?t.phone:t)?i.images:i,{name:"each",hash:{},fn:e.program(1,a,1,o),inverse:e.noop,data:a,blockParams:o}))?i:"")+"</ul>"},useData:!0,useBlockParams:!0})},function(e,t,n){var r=n(3);e.exports=(r.default||r).template({1:function(e,t,n,r,a,o){var i,l=e.lambda,s=e.escapeExpression;return'        <li class="thumbnail"\r\n            data-element="phone"\r\n            data-phone-id="'+s(l(null!=(i=o[0][0])?i.id:i,t))+'"\r\n        >\r\n            <a href="#!/phones/'+s(l(null!=(i=o[0][0])?i.id:i,t))+'" class="thumb">\r\n                <img alt="'+s(l(null!=(i=o[0][0])?i.name:i,t))+'" src="'+s(l(null!=(i=o[0][0])?i.imageUrl:i,t))+'">\r\n            </a>\r\n            <a href="#!/phones/'+s(l(null!=(i=o[0][0])?i.id:i,t))+'">'+s(l(null!=(i=o[0][0])?i.name:i,t))+"</a>\r\n            <p>"+s(l(null!=(i=o[0][0])?i.snippet:i,t))+"</p>\r\n        </li>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a,o){var i;return'<ul class="phones">\r\n'+(null!=(i=n.each.call(null!=t?t:e.nullContext||{},null!=t?t.phonesArray:t,{name:"each",hash:{},fn:e.program(1,a,1,o),inverse:e.noop,data:a,blockParams:o}))?i:"")+"</ul>"},useData:!0,useBlockParams:!0})},function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r);class o{constructor(e){this._element=e.element}hide(){this._element.classList.add("js-hidden")}show(){this._element.classList.remove("js-hidden")}}class i extends o{constructor(e){super(e),this._phones=e.phones,this._render(),this._element.addEventListener("click",this._onPhoneSelected.bind(this))}_onPhoneSelected(e){let t=e.target,n=t.closest("[data-element='phone']");if(n&&(t.matches("img")||t.matches("a"))){let e=new CustomEvent("phoneSelected",{detail:{phoneID:n.dataset.phoneId}});this._element.dispatchEvent(e)}}_render(){this._element.innerHTML=a()({phonesArray:this._phones})}}var l=n(4),s=n.n(l);class u extends o{constructor(e){super(e),this._phone=null}setPhone(e){this._phone=e,this._render(),this._element.addEventListener("click",this._onButtonBack.bind(this))}_onButtonBack(e){if(e.target.matches('[data-element="button-back"]')){let e=new CustomEvent("backEvent");this._phone=null,this._element.dispatchEvent(e)}}_render(){this._element.innerHTML=s()({phone:this._phone})}}class c{static send(e,t="GET"){return new Promise((n,r)=>{let a=new XMLHttpRequest;a.open(t,e,!0),a.send(),a.onerror=(()=>{r(a.responseText)}),a.onreadystatechange=(()=>{200===a.status&&a.responseText&&n(JSON.parse(a.responseText))})})}}new class{constructor(e){this._element=e.element,c.send("phones/phones.json").then(e=>{this._phoneCatalogue=new i({element:document.querySelector('[data-component="phone-catalogue"]'),phones:e}),this._phoneCatalogue._element.addEventListener("phoneSelected",this._onPhoneSelected.bind(this))}).catch(e=>{console.log("Exception: ",e)}),this._phoneViwer=new u({element:document.querySelector('[data-component="phone-viewer"]')}),this._phoneViwer._element.addEventListener("backEvent",this._onButtonBack.bind(this))}_onButtonBack(){this._phoneViwer.hide(),this._phoneCatalogue.show()}async _onPhoneSelected(e){try{let t=e.detail.phoneID,n=await c.send(`phones/${t}.json`);this._phoneCatalogue.hide(),this._phoneViwer.setPhone(n),this._phoneViwer.show()}catch(e){console.log("Exception: ",e)}}}({element:document.querySelector('[data-component="phone-page"]')})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(7))},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=o.COMPILER_REVISION;if(t!==n){if(t<n){var r=o.REVISION_CHANGES[n],i=o.REVISION_CHANGES[t];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new a.default("No environment passed to template");if(!e||!e.main)throw new a.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new a.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:r.escapeExpression,invokePartial:function(n,o,i){i.hash&&(o=r.extend({},o,i.hash),i.ids&&(i.ids[0]=!0));n=t.VM.resolvePartial.call(this,n,o,i);var l=t.VM.invokePartial.call(this,n,o,i);null==l&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),l=i.partials[i.name](o,i));if(null!=l){if(i.indent){for(var s=l.split("\n"),u=0,c=s.length;u<c&&(s[u]||u+1!==c);u++)s[u]=i.indent+s[u];l=s.join("\n")}return l}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,a){var o=this.programs[e],l=this.fn(e);return t||a||r||n?o=i(this,e,l,t,n,r,a):o||(o=this.programs[e]=i(this,e,l)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=r.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function l(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=r.data;l._setup(r),!r.partial&&e.useData&&(a=function(e,t){t&&"root"in t||((t=t?o.createFrame(t):{}).root=e);return t}(t,a));var i=void 0,u=e.useBlockParams?[]:void 0;function c(t){return""+e.main(n,t,n.helpers,n.partials,a,u,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(c=s(e.main,c,n,r.depths||[],a,u))(t,r)}return l.isTop=!0,l._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},l._child=function(t,r,o,l){if(e.useBlockParams&&!o)throw new a.default("must pass block params");if(e.useDepths&&!l)throw new a.default("must pass parent depths");return i(n,t,e[t],r,0,o,l)},l},t.wrapProgram=i,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var i=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var s=void 0;n.fn&&n.fn!==l&&function(){n.data=o.createFrame(n.data);var e=n.fn;s=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=o.createFrame(n.data),n.data["partial-block"]=i,e(t,n)},e.partials&&(n.partials=r.extend({},n.partials,e.partials))}();void 0===e&&s&&(e=s);if(void 0===e)throw new a.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=l;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),o=n(2);function i(e,t,n,r,a,o,i){function l(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,a.data||r,o&&[a.blockParams].concat(o),l)}return(l=s(n,l,e,i,r,o)).program=t,l.depth=i?i.length:0,l.blockParams=a||0,l}function l(){return""}function s(e,t,n,a,o,i){if(e.decorator){var l={};t=e.decorator(t,l,n,a&&a[0],o,i,a),r.extend(t,l)}return t}},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(a.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console[t].apply(console,r)}}};t.default=a,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",function(e,t,n,a){var o=e;return t.partials||(t.partials={},o=function(a,o){var i=n.partials;n.partials=r.extend({},i,t.partials);var l=e(a,o);return n.partials=i,l}),t.partials[a.args[0]]=a.fn,o})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){r.default(e)};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(12))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var a=t.data;return t.data&&t.ids&&((a=r.createFrame(t.data)).contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:a,blockParams:r.blockParams([e],[a&&a.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),t[0]=a,e.log.apply(e,t)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new r.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new a.default("Must pass iterator to #each");var n=t.fn,o=t.inverse,i=0,l="",s=void 0,u=void 0;function c(t,a,o){s&&(s.key=t,s.index=a,s.first=0===a,s.last=!!o,u&&(s.contextPath=u+t)),l+=n(e[t],{data:s,blockParams:r.blockParams([e[t],t],[u+t,null])})}if(t.data&&t.ids&&(u=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),r.isFunction(e)&&(e=e.call(this)),t.data&&(s=r.createFrame(t.data)),e&&"object"==typeof e)if(r.isArray(e))for(var d=e.length;i<d;i++)i in e&&c(i,i,i===e.length-1);else{var p=void 0;for(var f in e)e.hasOwnProperty(f)&&(void 0!==p&&c(p,i-1),p=f,i++);void 0!==p&&c(p,i-1,!0)}return 0===i&&(l=o(this)),l})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var a=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return a(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):a(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(t,n)})},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){a.default(e),o.default(e),i.default(e),l.default(e),s.default(e),u.default(e),c.default(e)};var a=r(n(20)),o=r(n(19)),i=r(n(18)),l=r(n(17)),s=r(n(16)),u=r(n(15)),c=r(n(14))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var o=a(n(2)),i=r(n(10)),l=r(n(1)),s=a(n(0)),u=a(n(9)),c=r(n(8));function d(){var e=new o.HandlebarsEnvironment;return s.extend(e,o),e.SafeString=i.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var p=d();p.create=d,c.default(p),p.default=p,t.default=p,e.exports=t.default}]);
//# sourceMappingURL=index.js.map