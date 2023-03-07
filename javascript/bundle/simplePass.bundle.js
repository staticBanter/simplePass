var e={d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{Z:()=>b});const r=["length","lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","max_whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning","excludeCharacters","repeatingCharacter","max_repeatingCharacter","customRepeatingCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement","preConfig"],a={min_passwordLength:3,max_passwordLength:256,min_excludeCharactersLength:0,max_excludeCharactersLength:10,defaultPasswordModifier:{length:22,lowercase:!0,uppercase:!0,numbers:!0,punctuation:!0},max_whitespaceCharactersOffset:4,max_whitespaceBetween:function(){const e=this.max_passwordLength-this.max_whitespaceCharactersOffset;return e>=1?e:0},min_whitespaceBetween:function(){return this.max_passwordLength-this.max_whitespaceCharactersOffset>=1?1:0},errorMessagePrefix:"-=sP",templateMessageMarker:"~",htmlForm:{id:"#sp_form",class:".sp_form"}},n=["lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","excludeCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement"],s=["lowercase","uppercase","numbers","punctuation","lowercase_supplement","uppercase_supplement","symbols_supplement"];function i(e,t,r=a.templateMessageMarker){let n=0;for(;e.includes(r);){if(t[n]===r)throw new Error(`${a.errorMessagePrefix}-cM_E.1: A 'Message Replacement', "${t[n]}", contained a 'Message Marker', "${r}".`);e=e.replace(r,t[n++]??t[t.length-1])}return e}var o;!function(e){e.invalidModifier="~-~_E.~: Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript 'FormData' Object.",e.toManyAttributes="~-~_E.~: To Many Attributes. The requested password may only contain ~ amount of attributes, ~ attributes were selected.",e.nonGenerableCharacterType="~-~_E.~: Non Generable Character Type. Attempted to generate a character of type ~",e.invalidAttributeType="~-~_.~: InvalidAttribute Type. Attribute ~ is supposed to be of type ~",e.outOfBoundsAttributeValue="~-~_E.~: Out Of Bounds Attribute Type. Attribute type ~ is out of its value bounds.",e.missingRequiredAttribute="~-~_E.~: Attribute Missing Required. The attribute '~' requires attribute '~' to be set before it can be used.",e.missingRequiredAttributes="~-~_E.~: Missing Required Attributes. The Password Modifier must contain one of the following attributes ~.",e.excludeCharactersContainedWhitespace="~-~_E.~: 'Exclude Characters' contained whitespace."}(o||(o={}));const c=o,h=["whitespaceBeginning","whitespaceEnd","whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning"];function p(e){let t,r=e.length;for(;0!=r;)t=Math.floor(Math.random()*r),r--,[e[r],e[t]]=[e[t],e[r]];return e}const l={lowercase:{min:97,max:122},uppercase:{min:65,max:90},numbers:{min:48,max:57},punctuation:{min:33,max:126,range:[[33,47],[58,64],[91,96],[123,126]]},whitespace:{single:32},lowercase_supplement:{min:223,max:255,range:[[233,246],[248,255]]},uppercase_supplement:{min:192,max:222,range:[[192,214],[216,222]]},symbols_supplement:{min:161,max:247,range:[[161,191],[215],[247]]}};function u(e,t){const r=self.crypto.getRandomValues(new Uint8Array(1))[0];if(e.charCodeOptions?.excludeCharacters&&e.charCodeOptions.excludeCharacters.includes(String.fromCharCode(r)))return u(e);if(t){if(t?.beginning){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceBeginning")&&32===r)return r;if(32===r)return u(e,t)}if(t?.end){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceEnd")&&32===r)return r;if(32===r)return u(e,t)}}if(!l[e.charType])throw new Error(i(c.nonGenerableCharacterType,[a.errorMessagePrefix,"gCC","1",e.charType]));{if(l[e.charType]?.single&&l[e.charType]?.single===r)return r;const t=l[e.charType]?.min,a=l[e.charType]?.max,n=l[e.charType]?.range;if(n){if(t&&a&&r>=t&&r<=a){if(r===t||r===a)return r;for(let e=0;e<n.length;e++){if(n[e][0]&&n[e][1]&&r>=n[e][0]&&r<=n[e][1])return r;if(n[e][0]&&r===n[e][0])return r}}}else if(t&&a&&r>=t&&r<=a)return r}return u(e,t)}function g(e,t){function r(e){const t=[];return e.split("").forEach((e=>{t.includes(e)||t.push(e)})),t.join("")}let a=e.slice(0,1),n=e.slice(1,e.length-1),s=e.slice(e.length-1,e.length);if(t.customCharacterSet){const r=[];n.split("").forEach((e=>{r.push(e)})),"string"==typeof t.customCharacterSet?t.customCharacterSet.split("").forEach((e=>{r.push(e),r.push(e)})):t.customCharacterSet.forEach((e=>{let t=parseInt(e[1]);for(;t--;)r.push(e[0])})),t.preservations?.beginning||(r.push(a),a=""),t.preservations?.end||(r.push(s),s=""),e=a+p(r).join("")+s}else if(t.repeatingSetCount&&t.repeatingSetCount>1){let i=p(e.split(""));i=r(i.join("")).split(""),n=r(n);for(let e=0;e<t.repeatingSetCount&&i[e];e++)n+=i[e];e=a+p(n.split("")).join("")+s}else n+=p(e.split(""))[0],e=a+p(n.split("")).join("")+s;return e}const f={colour:"red",score:50},m={colour:"yellowgreen",score:75},d={colour:"limegreen",score:80},w={colour:"green",score:95},C={colour:"darkgreen",score:110};function x(e,t,r){let a=0;const s=e.length*Math.log(function(e){let t=0,r=!1;return e.characterSets.forEach((e=>{if(n.includes(e)){h.includes(e)&&(r?e="":(e="whitespace",r=!0));const a=l[e];a&&(a.range?a.range.forEach((e=>{e[0]&&e[1]?t+=e[1]-e[0]:e[0]&&t++})):a.min&&a.max?t+=a.max-a.min:a.single&&t++)}})),e.excludeCharacters&&e.excludeCharacters.length>0&&(t-=e.excludeCharacters.length),t}({characterSets:t.characterSets.used.filter((e=>t.characterSets.available.includes(e))),excludeCharacters:t.excludeCharacters}))/Math.log(2);if(a+=s,a+=function(e,t={min_passwordLength:3,max_passwordLength:256}){const r=[];for(let t=0;t<e.length;t++)r.includes(e.charAt(t))||r.push(e.charAt(t));const a=r.length/e.length,n=(e.length-r.length)/e.length;let s=e.length/t.min_passwordLength;return s>1&&(s=1),((a+n)/2+s+e.length/t.max_passwordLength)/3*100}(e,{min_passwordLength:t.min_length,max_passwordLength:t.max_length}),a/=2,r&&r.styleTarget){let e="",t="";a<=f.score?(e=f.colour,t="bad"):a>f.score&&a<=m.score?(e=m.colour,t="modest"):a>m.score&&a<=d.score?(e=d.colour,t="ok"):a>d.score&&a<=w.score?(e=w.colour,t="good"):(e=C.colour,t="excellent"),"inline"===r.styleType?r.styleTarget.style.color=e:(r.styleTarget.classList.add("strengthChecked"),r.styleTarget.dataset.score=t)}return{password:e,strengthScore:a,entropy:s}}const _={default:{length:22,numbers:!0,lowercase:!0,uppercase:!0,punctuation:!0},fourDigitPin:{numbers:!0,length:4},defaultSupplement1:{length:22,numbers:!0,symbols_supplement:!0,lowercase_supplement:!0,uppercase_supplement:!0},extreme:{length:256,numbers:!0,lowercase:!0,uppercase:!0,punctuation:!0,lowercase_supplement:!0,uppercase_supplement:!0,symbols_supplement:!0,max_repeatingCharacter:Math.floor(9*Math.random()+5),whitespaceBetween:!0,max_whitespaceBetween:Math.floor(9*Math.random()+2)}};function b(e=a.defaultPasswordModifier,t){if(!e||"object"!=typeof e)throw new Error(i(c.invalidModifier,[a.errorMessagePrefix,"M","1"]));let o="",l="",f=!1,m=!1;if(function(e){let t=Object.keys(e).filter((e=>n.includes(e))).length;if(e.preConfig){if("string"!=typeof e.preConfig)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","16","preConfig","string"]));if(!e.preConfig.length||e.preConfig.length<=0||e.preConfig.length>=256)throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","17","preConfig"]))}if(e.repeatingCharacter)if(e.customRepeatingCharacters){if("string"!=typeof e.customRepeatingCharacters)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","15","customRepeatingCharacters","string"]));if(e.customRepeatingCharacters=e.customRepeatingCharacters.trim(),e.customRepeatingCharacters.includes(" ")){const r=[];e.customRepeatingCharacters.split(" ").forEach((e=>{if(e.includes("\\")){const t=e.slice(1,2),a=(e=e.replace(t,"")).split(":");if(a.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');r.push([t,a[1]])}else{let t=e.split(":");if(t.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');r.push([t[0],t[1]])}})),e.customRepeatingCharacters=r,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),t+=parseInt(e[1])}))}else if(e.customRepeatingCharacters.includes(":")){const r=[];if(e.customRepeatingCharacters.includes("\\")){const t=e.customRepeatingCharacters.slice(1,2);e.customRepeatingCharacters=e.customRepeatingCharacters.replace(t,"");const a=e.customRepeatingCharacters.split(":");if(a.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');r.push([t,a[1]])}else{const t=e.customRepeatingCharacters.split(":");if(t.length>2)throw new Error('Custom Character Repeats contained an unescaped ":" (colon).');r.push([t[0],t[1]])}e.customRepeatingCharacters=r,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),t+=parseInt(e[1])}))}else t+=2*e.customRepeatingCharacters.length}else if(e.max_repeatingCharacter){if("number"!=typeof e.max_repeatingCharacter&&"string"!=typeof e.max_repeatingCharacter)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","13","max_repeatingCharacter","number or string"]));if("string"==typeof e.max_repeatingCharacter&&(e.max_repeatingCharacter=parseInt(e.max_repeatingCharacter)),e.max_repeatingCharacter<1||e.max_repeatingCharacter>255)throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","14","max_repeatingCharacter"]));if(e.length<2*e.max_repeatingCharacter)throw new Error("The password can not contain the requested amount of repeating characters.");t+=e.max_repeatingCharacter}else t++;if(!e.length||"string"!=typeof e.length&&"number"!=typeof e.length)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","1","length","string or number"]));if("string"==typeof e.length){const t=parseInt(e.length);if(t>a.max_passwordLength||t<a.min_passwordLength)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","1","length","string or number"]))}else if(e.length>a.max_passwordLength||e.length<a.min_passwordLength)throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","2","length"]));if(t>e.length)throw new Error(i(c.toManyAttributes,[a.errorMessagePrefix,"vM","3",`${e.length}`,`${t}`]));if(e.w_between){if(!e.max_whitespaceBetween)throw new Error(i(c.missingRequiredAttribute,[a.errorMessagePrefix,"vM","11","max_whitespaceBetween","w_between"]));if("string"!=typeof e.max_whitespaceBetween&&"number"!=typeof e.max_whitespaceBetween)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","4","max_whitespaceBetween","string or number"]));if("string"==typeof e.max_whitespaceBetween){const t=parseInt(e.max_whitespaceBetween);if(t>a.max_whitespaceBetween()||t<a.min_whitespaceBetween())throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","5","max_whitespaceBetween"]))}else if(e.max_whitespaceBetween>a.max_whitespaceBetween()||e.max_whitespaceBetween<a.min_whitespaceBetween())throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","6","max_whitespaceBetween"]))}if(!Object.keys(e).some((function(e){return s.includes(e)})))throw new Error(i(c.missingRequiredAttributes,[a.errorMessagePrefix,"vM","7",s.toString()]));if(e.excludeCharacters){if("string"!=typeof e.excludeCharacters)throw new Error(i(c.invalidAttributeType,[a.errorMessagePrefix,"vM","8","excludeCharacters","string"]));if(!e.excludeCharacters.length&&e.excludeCharacters.length<=0)throw new Error(i(c.outOfBoundsAttributeValue,[a.errorMessagePrefix,"vM","9","excludeCharacters"]));if(new RegExp("/[s]/g").test(e.excludeCharacters))throw new Error(i(c.excludeCharactersContainedWhitespace,[a.errorMessagePrefix,"vM","10"]))}}(e=function(e){const t={length:a.defaultPasswordModifier.length};function n([e,a]){r.includes(e)&&(!a||"string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a||(t[e]=a))}if(e instanceof FormData)for(let[t,r]of e.entries())n([t,r]);else for(const[t,r]of Object.entries(e))n([t,r]);return t}(e)),e.preConfig){const t=_[e.preConfig];e={length:e.length},t&&Object.assign(e,t)}const d=Object.keys(e).filter((e=>s.includes(e))),w=Object.keys(e).filter((e=>h.includes(e)));let C=e.length-2;if(e.repeatingCharacter&&(e.customRepeatingCharacters?"string"!=typeof e.customRepeatingCharacters?e.customRepeatingCharacters.forEach((e=>{C-=parseInt(e[1])})):C-=2*e.customRepeatingCharacters.length:e.max_repeatingCharacter?C-=e.max_repeatingCharacter:C--),e.whitespaceBetween&&e.max_whitespaceBetween&&(C-=e.max_whitespaceBetween),C<=-1)throw new Error("The password length can not contain the selected amount of characters");if(d.length>1){let t=[];t=t.concat(p(d));let r="";for(e.whitespaceBeginning&&e.required_whitespaceBeginning?(o+=" ",f=!0):(r=t.pop(),r&&(o+=String.fromCharCode(u({charType:r,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{beginning:!0}))));l.length<C;)r=t.pop(),!r&&t.length<=0&&(t=t.concat(p(d)),r=t.pop()),r&&(l+=String.fromCharCode(u({charType:r,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}})));if(e.whitespaceBetween&&e.max_whitespaceBetween)for(let t=0;t<e.max_whitespaceBetween;t++)l+=" ";if(o+=p(l.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd?(o+=" ",m=!0):((t.length<=0||!r)&&(t=t.concat(p(d))),r=t.pop(),r&&(o+=String.fromCharCode(u({charType:r,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{end:!0})))),e.repeatingCharacter&&(o=g(o,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:f,end:m}}),o.length<e.length)){let a=o.slice(0,1),n=o.slice(1,o.length-1),s=o.slice(o.length-1,o.length);for(;n.length<e.length-2;)if((t.length<=0||!r)&&(t=t.concat(p(d))),r=t.pop(),r){const t=String.fromCharCode(u({charType:r,charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}}));n+=t,n.length+1<=e.length-2&&(n+=t)}o=a+p(n.split("")).join("")+s}}else{for(e.whitespaceBeginning&&e.required_whitespaceBeginning?(o+=" ",f=!0):o+=String.fromCharCode(u({charType:d[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{beginning:!0}));l.length<C;)l+=String.fromCharCode(u({charType:d[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}}));if(e.whitespaceBetween&&e.max_whitespaceBetween)for(let t=0;t<e.max_whitespaceBetween;t++)l+=" ";if(o+=p(l.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd?(o+=" ",m=!0):o+=String.fromCharCode(u({charType:d[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}},{end:!0})),e.repeatingCharacter&&(o=g(o,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:f,end:m}}),o.length<e.length)){let t=o.slice(0,1),r=o.slice(1,o.length-1),a=o.slice(o.length-1,o.length);for(;r.length<e.length-2;){const t=String.fromCharCode(u({charType:d[0],charCodeOptions:{whitespaceOptions:w,excludeCharacters:e.excludeCharacters}}));r+=t,r.length+1<=e.length-2&&(r+=t)}o=t+p(r.split("")).join("")+a}}return t?"boolean"!=typeof t&&t.styleTarget&&t.styleType?x(o,{characterSets:{used:Object.keys(e),available:n},excludeCharacters:e.excludeCharacters,min_length:a.min_passwordLength,max_length:a.max_passwordLength},{styleTarget:t.styleTarget,styleType:t.styleType}):x(o,{characterSets:{used:Object.keys(e),available:n},excludeCharacters:e.excludeCharacters,min_length:a.min_passwordLength,max_length:a.max_passwordLength}):o}var y=t.Z;export{y as default};