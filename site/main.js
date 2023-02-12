var e={d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{Z:()=>f});const r=["length","lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","max_whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning","excludeCharacters","repeatingCharacter","max_repeatingCharacter","customRepeatingCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement"],a={passwordLengthMin:3,passwordLengthMax:256,excludeCharactersMin:1,excludeCharactersMax:10,defaultPasswordLength:8,possibleWhitespaceCharacterOffset:4,whitespaceBetweenMax:function(){const e=this.passwordLengthMax-this.possibleWhitespaceCharacterOffset;return e>=1?e:0},whitespaceBetweenMin:function(){return this.passwordLengthMax-this.possibleWhitespaceCharacterOffset>=1?1:0},errorMessagePrefix:"-=sP",templateMessageMarker:"~"},n=["lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","excludeCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement"],s=["lowercase","uppercase","numbers","punctuation","lowercase_supplement","uppercase_supplement","symbols_supplement"];function i(e,t,r=a.templateMessageMarker){let n=0;for(;e.includes(r);){if(t[n]===r)throw new Error(`${a.errorMessagePrefix}-cM_E.1: A 'Message Replacement', "${t[n]}", contained a 'Message Marker', "${r}".`);e=e.replace(r,t[n++]??t[t.length-1])}return e}var o;!function(e){e.invalidModifier="~-~_E.~: Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript 'FormData' Object.",e.toManyAttributes="~-~_E.~: To Many Attributes. The requested password may only contain ~ amount of attributes, ~ attributes were selected.",e.nonGenerableCharacterType="~-~_E.~: Non Generable Character Type. Attempted to generate a character of type ~",e.invalidAttributeType="~-~_.~: InvalidAttribute Type. Attribute ~ is supposed to be of type ~",e.outOfBoundsAttributeValue="~-~_E.~: Out Of Bounds Attribute Type. Attribute type ~ is out of its value bounds.",e.missingRequiredAttribute="~-~_E.~: Attribute Missing Required. The attribute '~' requires attribute '~' to be set before it can be used.",e.missingRequiredAttributes="~-~_E.~: Missing Required Attributes. The Password Modifier must contain one of the following attributes ~.",e.excludeCharactersContainedWhitespace="~-~_E.~: 'Exclude Characters' contained whitespace."}(o||(o={}));const c=o,h=["whitespaceBeginning","whitespaceEnd","whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning"];function p(e){let t,r=e.length;for(;0!=r;)t=Math.floor(Math.random()*r),r--,[e[r],e[t]]=[e[t],e[r]];return e}const l={lowercase:{min:97,max:122},uppercase:{min:65,max:90},numbers:{min:48,max:57},punctuation:{min:33,max:126,range:[[33,47],[58,64],[91,96],[123,126]]},whitespace:{single:32},lowercase_supplement:{min:223,max:255,range:[[233,246],[248,255]]},uppercase_supplement:{min:192,max:222,range:[[192,214],[216,222]]},symbols_supplement:{min:161,max:247,range:[[161,191],[215],[247]]}};function u(e,t){const r=self.crypto.getRandomValues(new Uint8Array(1))[0];if(e.charCodeOptions?.excludeCharacters&&e.charCodeOptions.excludeCharacters.includes(String.fromCharCode(r)))return u(e);if(t){if(t?.beginning){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceBeginning")&&32===r)return r;if(32===r)return u(e,t)}if(t?.end){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceEnd")&&32===r)return r;if(32===r)return u(e,t)}}if(!l[e.charType])throw new Error(i(c.nonGenerableCharacterType,[a.errorMessagePrefix,"gCC","1",e.charType]));{if(l[e.charType]?.single&&l[e.charType]?.single===r)return r;const t=l[e.charType]?.min,a=l[e.charType]?.max,n=l[e.charType]?.range;if(n){if(t&&a&&r>=t&&r<=a){if(r===t||r===a)return r;for(let e=0;e<n.length;e++){if(n[e][0]&&n[e][1]&&r>=n[e][0]&&r<=n[e][1])return r;if(n[e][0]&&r===n[e][0])return r}}}else if(t&&a&&r>=t&&r<=a)return r}return u(e,t)}function g(e){const t=[];return e.split("").forEach((e=>{t.includes(e)||t.push(e)})),t.join("")}function d(e,t){let r=e.slice(0,1),a=e.slice(1,e.length-1),n=e.slice(e.length-1,e.length);if(t.customCharacterSet){const s=[];a.split("").forEach((e=>{s.push(e)})),"string"==typeof t.customCharacterSet?t.customCharacterSet.split("").forEach((e=>{s.push(e),s.push(e)})):t.customCharacterSet.forEach((e=>{let t=parseInt(e[1]);for(;t--;)s.push(e[0])})),t.preservations?.beginning||(s.push(r),r=""),t.preservations?.end||(s.push(n),n=""),e=r+p(s).join("")+n}else if(t.repeatingSetCount&&t.repeatingSetCount>1){let s=p(e.split(""));s=g(s.join("")).split(""),a=g(a);for(let e=0;e<t.repeatingSetCount&&s[e];e++)a+=s[e];e=r+p(a.split("")).join("")+n}else a+=p(e.split(""))[0],e=r+p(a.split("")).join("")+n;return e}function f(e={length:a.defaultPasswordLength,lowercase:!0}){if(!e||"object"!=typeof e)throw new Error(i(c.invalidModifier,[a.errorMessagePrefix,"M","1"]));let t="",o="",l=!1,g=!1;!function(e){let t=Object.keys(e).filter((e=>n.includes(e))).length;if(e.repeatingCharacter)if(e.customRepeatingCharacters){if("string"!=typeof e.customRepeatingCharacters)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","15","string or list"]));if(e.customRepeatingCharacters=e.customRepeatingCharacters.trim(),e.customRepeatingCharacters.includes(" ")){const r=[];e.customRepeatingCharacters.split(" ").forEach((e=>{if(e.includes("\\")){const t=e.slice(1,2),a=(e=e.replace(t,"")).split(":");if(a.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');r.push([t,a[1]])}else{let t=e.split(":");if(t.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');r.push([t[0],t[1]])}})),e.customRepeatingCharacters=r,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),t+=parseInt(e[1])}))}else if(e.customRepeatingCharacters.includes(":")){const r=[];if(e.customRepeatingCharacters.includes("\\")){const t=e.customRepeatingCharacters.slice(1,2);e.customRepeatingCharacters=e.customRepeatingCharacters.replace(t,"");const a=e.customRepeatingCharacters.split(":");if(a.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');r.push([t,a[1]])}else{const t=e.customRepeatingCharacters.split(":");if(t.length>2)throw new Error('Custom Character Repeats contained an unescaped ":" (colon).');r.push([t[0],t[1]])}e.customRepeatingCharacters=r,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),t+=parseInt(e[1])}))}else t+=2*e.customRepeatingCharacters.length}else if(e.max_repeatingCharacter){if("number"!=typeof e.max_repeatingCharacter&&"string"!=typeof e.max_repeatingCharacter)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","13","max_repeatingCharacter","number or string"]));if("string"==typeof e.max_repeatingCharacter&&(e.max_repeatingCharacter=parseInt(e.max_repeatingCharacter)),e.max_repeatingCharacter<1||e.max_repeatingCharacter>255)throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","14","max_repeatingCharacter"]));if(e.length<2*e.max_repeatingCharacter)throw new Error("The password can not contain the requested amount of repeating characters.");t+=e.max_repeatingCharacter}else t++;if(!e.length||"string"!=typeof e.length&&"number"!=typeof e.length)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","1","length","string or number"]));if("string"==typeof e.length){const t=parseInt(e.length);if(t>a.passwordLengthMax||t<a.passwordLengthMin)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","1","length","string or number"]))}else if(e.length>a.passwordLengthMax||e.length<a.passwordLengthMin)throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","2","length"]));if(t>e.length)throw new Error(i(c.toManyAttributes,[a.errorMessagePrefix,"vM","3",`${e.length}`,`${t}`]));if(e.w_between){if(!e.max_whitespaceBetween)throw new Error(i(c.missingRequiredAttribute,[a.errorMessagePrefix,"vM","11","max_whitespaceBetween","w_between"]));if("string"!=typeof e.max_whitespaceBetween&&"number"!=typeof e.max_whitespaceBetween)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","4","max_whitespaceBetween","string or number"]));if("string"==typeof e.max_whitespaceBetween){const t=parseInt(e.max_whitespaceBetween);if(t>a.whitespaceBetweenMax()||t<a.whitespaceBetweenMin())throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","5","max_whitespaceBetween"]))}else if(e.max_whitespaceBetween>a.whitespaceBetweenMax()||e.max_whitespaceBetween<a.whitespaceBetweenMin())throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","6","max_whitespaceBetween"]))}if(!Object.keys(e).some((function(e){return s.includes(e)})))throw new Error(i(c.missingRequiredAttributes,[a.errorMessagePrefix,"vM","7",s.toString()]));if(e.excludeCharacters){if("string"!=typeof e.excludeCharacters)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","8","excludeCharacters","string"]));if(!e.excludeCharacters.length&&e.excludeCharacters.length<=0)throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","9","excludeCharacters"]));if(new RegExp("/[s]/g").test(e.excludeCharacters))throw new Error(i(c.excludeCharactersContainedWhitespace,[a.errorMessagePrefix,"vM","10"]))}}(e=function(e){const t={length:a.defaultPasswordLength};function n([e,a]){r.includes(e)&&(!a||"string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a||(t[e]=a))}if(e instanceof FormData)for(let[t,r]of e.entries())n([t,r]);else for(const[t,r]of Object.entries(e))n([t,r]);return t}(e));const f=Object.keys(e).filter((e=>s.includes(e))),w=Object.keys(e).filter((e=>h.includes(e)));let m=e.length-2;if(e.repeatingCharacter&&(e.customRepeatingCharacters?"string"!=typeof e.customRepeatingCharacters?e.customRepeatingCharacters.forEach((e=>{m-=parseInt(e[1])})):m-=2*e.customRepeatingCharacters.length:e.max_repeatingCharacter?m-=e.max_repeatingCharacter:m--),m<=-1)throw new Error("The password length can not contain the selected amount of characters");if(e.whitespaceBetween&&e.max_whitespaceBetween&&(m-=e.max_whitespaceBetween),f.length>1){let r=[];r=r.concat(p(f));let a="";for(e.whitespaceBeginning&&e.required_whitespaceBeginning?(t+=" ",l=!0):(a=r.pop(),a&&(t+=String.fromCharCode(u({charType:a,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{beginning:!0}))));o.length<m;)a=r.pop(),!a&&r.length<=0&&(r=r.concat(p(f)),a=r.pop()),a&&(o+=String.fromCharCode(u({charType:a,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}})));if(e.whitespaceBetween&&e.max_whitespaceBetween)for(;e.max_whitespaceBetween--;)o+=" ";if(t+=p(o.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd?(t+=" ",g=!0):(r.length<=0&&!a&&(r=r.concat(p(f))),a=r.pop(),a&&(t+=String.fromCharCode(u({charType:a,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{end:!0})))),e.repeatingCharacter&&(t=d(t,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:l,end:g}}),t.length<e.length)){let n=t.slice(0,1),s=t.slice(1,t.length-1),i=t.slice(t.length-1,t.length);for(;s.length<e.length-2;)if((r.length<=0||!a)&&(r=r.concat(p(f))),a=r.pop(),a){const t=String.fromCharCode(u({charType:a,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}}));s+=t,s.length+1<=e.length-2&&(s+=t)}t=n+p(s.split("")).join("")+i}}else{for(e.whitespaceBeginning&&e.required_whitespaceBeginning?(t+=" ",l=!0):t+=String.fromCharCode(u({charType:f[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{beginning:!0}));o.length<m;)o+=String.fromCharCode(u({charType:f[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}}));if(e.whitespaceBetween&&e.max_whitespaceBetween)for(;e.max_whitespaceBetween--;)o+=" ";if(t+=p(o.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd?(t+=" ",g=!0):t+=String.fromCharCode(u({charType:f[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{end:!0})),e.repeatingCharacter&&(t=d(t,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:l,end:g}}),t.length<e.length)){let r=t.slice(0,1),a=t.slice(1,t.length-1),n=t.slice(t.length-1,t.length);for(;a.length<e.length-2;){const t=String.fromCharCode(u({charType:f[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}}));a+=t,a.length+1<=e.length-2&&(a+=t)}t=r+p(a.split("")).join("")+n}}return t}var w=t.Z;(()=>{const e=document.body.querySelector("#displayPassword");function t(){if(!this.dataset.target||!this.dataset.toggle)throw new Error(`Toggle Element (${this}) was missing the proper data attributes`);this.dataset.target.split(" ").forEach((e=>{document.querySelectorAll(e).forEach((e=>{e.hasAttribute(this.dataset.toggle)?e.removeAttribute(this.dataset.toggle):e.setAttribute(this.dataset.toggle,this.dataset.toggle)}))}))}let r;e.innerText=w(),document.body.querySelector("#passwordForm").addEventListener("submit",(function(t){t.preventDefault(),e.innerText=w(new FormData(this))})),document.body.querySelector("#copyPassword").addEventListener("click",(function(t){t.preventDefault(),navigator.clipboard.writeText(e.innerText).then((()=>{this.style.backgroundColor="green",this.innerText="Copied!",setTimeout((()=>{this.toggleAttribute("style"),this.innerText="Copy"}),5e3)})).catch((e=>{console.error(e.message)}))})),document.body.querySelectorAll(".toggle").forEach((e=>{e.addEventListener("click",t),t.apply(e)}));const a=document.querySelector(".add-button");a.style.display="none",window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),r=e,a.style.display="block",a.addEventListener("click",(e=>{a.style.display="none",r.prompt(),r.userChoice.then((e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),r=null}))}))})),window.addEventListener("appinstalled",(()=>{a.style.display="none",r=null})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/simplePass/sw.js")})();