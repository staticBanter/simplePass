/*!
 * 
 * simplePass - A JavaScript password generator.
 * Copyright (C) 2023  Jordan Vezina(staticBanter)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */
var e={d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{Z:()=>C});const s=["length","lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","max_whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning","excludeCharacters","uniqueCharacters","repeatingCharacter","max_repeatingCharacter","customRepeatingCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement","preConfig","lowercase_extended_a","uppercase_extended_a","ligature_extended_a","lowercase_extended_b","uppercase_extended_b","mixedcase_extended_b","insensitivecase_extended_b","lowercase_ipa_extension","uppercase_ipa_extension","character_modifier_letters","symbol_modifier_letters","lowercase_greek_coptic","uppercase_greek_coptic","insensitivecase_greek_coptic","symbol_greek_coptic","lowercase_cyrillic","uppercase_cyrillic","symbols_cyrillic","lowercase_cyrillic_supplement","uppercase_cyrillic_supplement","misc_cyrillic_supplement","general_punctuation","currency_symbols","misc_technical","box_drawings","block_elements","misc_symbols","dingbats"],a={passwordConstraints:{min_length:3,max_length:256,min_excludeCharactersLength:0,max_excludeCharactersLength:10,max_whitespaceCharactersOffset:4,max_whitespaceBetween:function(){const e=this.max_length-this.max_whitespaceCharactersOffset;return e>=1?e:0},min_whitespaceBetween:function(){return this.max_length-this.max_whitespaceCharactersOffset>=1?1:0}},defaultPasswordModifier:{length:22,lowercase:!0,uppercase:!0,numbers:!0,punctuation:!0},messages:{prefix:"ERROR.simplePass-~.~:",templateMarker:"~",messageBoard:".simplePass_messageBoard",messageBoxes:".simplePass_messageBox",messageBackdrop:".simplePass_messageBackdrop",clearConsole:!1},htmlElements:{passwordTarget:".simplePass_passwordTarget",entropyTarget:".simplePass_entropyTarget",strengthCheckerStyling:{styleType:"inline"},actionElements:{generate:".simplePass_generator",copy:".simplePass_copier",form:"#simplePass_form"},passwordContainer:".simplePass_passwordContainer"}},n=["lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","excludeCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement","lowercase_extended_a","uppercase_extended_a","ligature_extended_a","lowercase_extended_b","uppercase_extended_b","mixedcase_extended_b","lowercase_ipa_extension","uppercase_ipa_extension","insensitivecase_extended_b","character_modifier_letters","symbol_modifier_letters","lowercase_greek_coptic","uppercase_greek_coptic","insensitivecase_greek_coptic","symbol_greek_coptic","lowercase_cyrillic","uppercase_cyrillic","symbols_cyrillic","lowercase_cyrillic_supplement","uppercase_cyrillic_supplement","misc_cyrillic_supplement","general_punctuation","currency_symbols","misc_technical","box_drawings","block_elements","misc_symbols","dingbats"];function r(e,t,s=1,a,n=!1){const r=[];for(t+=1;e<t;)a?.includes(e)||(n?r.push([e]):r.push(e)),e+s>t?e=t:e+=s;return r}const i={lowercase:{min:97,max:122},uppercase:{min:65,max:90},numbers:{min:48,max:57},punctuation:{min:33,max:126,range:[[33,47],[58,64],[91,96],[123,126]]},whitespace:{min:32},lowercase_supplement:{min:223,max:255,range:[[233,246],[248,255]]},uppercase_supplement:{min:192,max:222,range:[[192,214],[216,222]]},symbols_supplement:{min:161,max:247,range:[[161,191],[215],[247]]},lowercase_extended_a:{min:257,max:383,range:r(257,312,2,[306,307]).concat(r(314,329,2)).concat(r(331,375,2,[338,339])).concat(r(378,383,2)).map((e=>[e]))},uppercase_extended_a:{min:256,max:382,range:r(256,310,2,[306,307]).concat(r(313,327,2)).concat(r(330,374,2,[338,339])).concat([376]).concat(r(377,381,2)).map((e=>[e]))},ligature_extended_a:{min:306,max:339,range:[[306],[307],[338],[339]]},lowercase_extended_b:{min:384,max:591,range:[[384],[387],[389],[392],[396,397],[402],[405],[409,411],[414],[417],[419],[421],[427],[432],[436],[438],[441,442],[445],[454],[457],[460],[496],[499],[501],[572],[589],[591],[578],[563,569],[575,576],[585],[587],[583]].concat(r(462,476,2,void 0,!0)).concat(r(479,495,2,void 0,!0)).concat(r(505,561,2,void 0,!0))},uppercase_extended_b:{min:385,max:590,range:[[444]].concat(r(385,408,1,[387,389,392,396,397,402,405],!0)).concat(r(412,440,1,[414,417,419,421,422,424,426,427,429,432,436,438],!0)).concat(r(452,458,1,[453,454,456,459],!0)).concat(r(461,475,2,void 0,!0)).concat(r(478,494,2,void 0,!0)).concat(r(497,504,1,[498,499,501],!0)).concat(r(506,562,2,void 0,!0)).concat(r(570,590,1,[572,575,576,578,583,585,587,589],!0))},mixedcase_extended_b:{min:453,max:498,range:[[453],[456],[459],[498]]},insensitivecase_extended_b:{min:422,max:451,range:[[422],[426],[443],[446,451]]},lowercase_ipa_extension:{min:592,max:683,range:[[592,659],[665,672],[675,683]]},uppercase_ipa_extension:{min:660,max:685,range:[[660,664],[673,674],[684,685]]},character_modifier_letters:{min:688,max:739,range:[[688,696],[737,739]]},symbol_modifier_letters:{min:697,max:767,range:[[697,736],[740,767]]},lowercase_greek_coptic:{min:881,max:1019,range:[[881],[883],[887],[912],[940,974],[1016],[1019]].concat(r(985,107,2,void 0,!0))},uppercase_greek_coptic:{min:880,max:1018,range:[[880],[882],[886],[902],[904,906],[908],[910,911],[913,929],[931,939],[1015],[1018]].concat(r(994,1004,2,void 0,!0))},insensitivecase_greek_coptic:{min:984,max:1011,range:[[1011]].concat(r(984,992,2,void 0,!0))},symbol_greek_coptic:{min:884,max:1020,range:[[884,885],[890,894],[900,901],[903],[975,983],[988],[1008,1014],[1020,1023]]},lowercase_cyrillic:{min:1072,max:1279,range:[[1072,1119]].concat(r(1121,1153,2,void 0,!0)).concat(r(1163,1215,2,[1189,1205],!0)).concat(r(1218,1230,2,void 0,!0)).concat(r(1231,1279,2,[1237],!0))},uppercase_cyrillic:{min:1024,max:1278,range:[[1024,1071]].concat(r(1120,1214,2,[1154,1156,1158,1160,1188,1204],!0)).concat(r(1217,1229,2,void 0,!0)).concat(r(1232,1278,2,[1236],!0))},symbols_cyrillic:{min:1154,max:1237,range:[[1154],[1188,1189],[1204,1205],[1236,1237]]},lowercase_cyrillic_supplement:{min:1281,max:1319,range:r(1281,1319,2,void 0,!0)},uppercase_cyrillic_supplement:{min:1280,max:1319,range:r(1280,1319,2,void 0,!0)},misc_cyrillic_supplement:{min:1320,max:1327},general_punctuation:{min:8208,max:8286,range:[[8208,8231],[8240,8286]]},currency_symbols:{min:8352,max:8383,range:[[8352,8371],[8373,8383]]},misc_technical:{min:8960,max:9215},box_drawings:{min:9472,max:9599},block_elements:{min:9600,max:9631},misc_symbols:{min:9728,max:9983,range:[[9728,9897],[9899,9983]]},dingbats:{min:9984,max:10175}},o=["whitespaceBeginning","whitespaceEnd","whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning"];function l(e){let t,s=e.length;for(;0!=s;)t=Math.floor(Math.random()*s),s--,[e[s],e[t]]=[e[t],e[s]];return e}const c={invalidModifier:"Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript 'FormData' Object.",toManyAttributes:"To Many Attributes. The requested password may only contain ~ attributes, ~ attributes were selected.",nonGenerableCharacterType:"Non Generable Character Type. Attempted to generate a character of type ~",invalidAttributeType:"InvalidAttribute Type. Attribute ~ is supposed to be of type ~",outOfBoundsAttributeValue:"Out Of Bounds Attribute Type. Attribute type ~ is out of its value bounds.",missingRequiredAttributes:"Missing Required Attribute. The attribute '~' requires attribute '~' to be set before it can be used.",missingRequiredModifier:"Missing Required Attributes. The Password Modifier must contain one of the following attributes ~.",excludeCharactersContainedWhitespace:"'Exclude Characters' contained whitespace"};function p(e,t){let s=self.crypto.getRandomValues(new Uint8Array(1))[0];if(e.charCodeOptions?.excludeCharacters&&e.charCodeOptions.excludeCharacters.includes(String.fromCharCode(s)))return p(e);if(t){if(t?.beginning){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceBeginning")&&32===s)return s;if(32===s)return p(e,t)}if(t?.end){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceEnd")&&32===s)return s;if(32===s)return p(e,t)}}const a=i[e.charType];if(!a)throw{errorKey:c.nonGenerableCharacterType,replacements:["gCC","1",e.charType]};if(a.min>256&&(s+=a.min),!a.max&&!a.range&&s===a.min)return s;if(a.range){if(a.min&&a.max&&s>=a.min&&s<=a.max){if(s===a.min||s===a.max)return s;for(let e=0;e<a.range.length;e++){if(a.range[e][0]&&a.range[e][1]&&s>=a.range[e][0]&&s<=a.range[e][1])return s;if(a.range[e][0]&&s===a.range[e][0])return s}}}else if(a.min&&a.max&&s>=a.min&&s<=a.max)return s;return p(e,t)}function m(e,t){function s(e){const t=[];return e.split("").forEach((e=>{t.includes(e)||t.push(e)})),t.join("")}let a=e.slice(0,1),n=e.slice(1,e.length-1),r=e.slice(e.length-1,e.length);if(t.customCharacterSet){const s=[];n.split("").forEach((e=>{s.push(e)})),"string"==typeof t.customCharacterSet?t.customCharacterSet.split("").forEach((e=>{s.push(e),s.push(e)})):t.customCharacterSet.forEach((e=>{let t=parseInt(e[1]);for(;t--;)s.push(e[0])})),t.preservations?.beginning||(s.push(a),a=""),t.preservations?.end||(s.push(r),r=""),e=a+l(s).join("")+r}else if(t.repeatingSetCount&&t.repeatingSetCount>1){let i=l(e.split(""));i=s(i.join("")).split(""),n=s(n);for(let e=0;e<t.repeatingSetCount&&i[e];e++)n+=i[e];e=a+l(n.split("")).join("")+r}else n+=l(e.split(""))[0],e=a+l(n.split("")).join("")+r;return e}const g={bad:{colour:"red",score:60},modest:{colour:"orange",score:75},ok:{colour:"gold",score:80},good:{colour:"yellowgreen",score:95},excellent:{colour:"darkgreen",score:110}};function h(e,t,s){let a=0;const r=e.length*Math.log(function(e){let t=0,s=!1;return e.characterSets.forEach((e=>{if(n.includes(e)){o.includes(e)&&(s?e="":(e="whitespace",s=!0));const a=i[e];a&&(a.range?a.range.forEach((e=>{e[0]&&e[1]?t+=e[1]-e[0]:e[0]&&t++})):a.min&&a.max&&(t+=a.max-a.min))}})),e.excludeCharacters&&e.excludeCharacters.length>0&&(t-=e.excludeCharacters.length),t}({characterSets:t.characterSets.used.filter((e=>t.characterSets.available.includes(e))),excludeCharacters:t.excludeCharacters}))/Math.log(2);if(a+=r,a+=function(e,t={min_passwordLength:3,max_passwordLength:256}){const s=[];for(let t=0;t<e.length;t++)s.includes(e.charAt(t))||s.push(e.charAt(t));const a=s.length/e.length,n=(e.length-s.length)/e.length;let r=e.length/t.min_passwordLength;return r>1&&(r=1),((a+n)/2+r+e.length/t.max_passwordLength)/3*100}(e,{min_passwordLength:t.min_length,max_passwordLength:t.max_length}),a/=2,s&&s.styleTarget){let e="",t="";a<=g.bad.score?(e=g.bad.colour,t="bad"):a>g.bad.score&&a<=g.modest.score?(e=g.modest.colour,t="modest"):a>g.modest.score&&a<=g.ok.score?(e=g.ok.colour,t="ok"):a>g.ok.score&&a<=g.good.score?(e=g.good.colour,t="good"):(e=g.excellent.colour,t="excellent"),"inline"===s.styleType?Object.assign(s.styleTarget.style,{color:e}):(s.styleTarget.classList.add("strengthChecked"),s.styleTarget.dataset.score=t)}return{password:e,strengthScore:a,entropy:r}}const d={default:{length:22,numbers:!0,lowercase:!0,uppercase:!0,punctuation:!0},fourDigitPin:{numbers:!0,length:4},defaultSupplement1:{length:22,numbers:!0,symbols_supplement:!0,lowercase_supplement:!0,uppercase_supplement:!0},bios:{length:20,lowercase:!0,uppercase:!0,numbers:!0},extreme:{length:256,numbers:!0,lowercase:!0,uppercase:!0,punctuation:!0,lowercase_supplement:!0,uppercase_supplement:!0,symbols_supplement:!0,max_repeatingCharacter:Math.floor(9*Math.random()+5),whitespaceBetween:!0,max_whitespaceBetween:Math.floor(9*Math.random()+2)}};function u(e){let t=document.createElement("DIV"),s="SP_MESSAGE",n="ERROR";t.classList.add(a.messages.messageBoxes?.substring(1)??"simplePass_messageBox");const r=document.createElement("DIV");t.appendChild(r);const i=document.createElement("BUTTON");i.title="Close",i.innerText="X";let o=document.createElement("P"),l=null;"object"==typeof e?(e.level&&(n=e.level.toUpperCase(),s=n),e.title&&(s=e.title.replaceAll(" ","_")),e.type&&(t.dataset.messageType=e.type,"overlay"===e.type.toLocaleLowerCase())&&(l=document.createElement("DIV"),l.classList.add(a.messages.messageBackdrop?.substring(1)??"simplePass_messageBackdrop")),"string"==typeof e.message?o.innerText=e.message:(o=document.createElement("UL"),e.message.forEach((e=>{const t=document.createElement("LI");t.innerText=e,o.appendChild(t)})))):o.innerText=e,t.dataset.title=s,t.dataset.messageLevel=n;const c=document.createElement("STRONG");return c.innerText=s,r.appendChild(c),r.appendChild(i),i.addEventListener("click",(e=>{e.preventDefault(),t.remove()})),t.appendChild(o),l&&(l.appendChild(t),t=l,t.setAttribute("style",`\n            height: ${document.documentElement.scrollHeight}px;\n            width: ${document.documentElement.scrollWidth}px;\n        `),window.addEventListener("resize",(()=>{t.setAttribute("style","\n                height: 0px;\n                width: 0px;\n            "),t.setAttribute("style",`\n                height: ${document.documentElement.scrollHeight}px;\n                width: ${document.documentElement.scrollWidth}px;\n            `)}))),t}function y(e,t={consoleMessage:!0,level:"ERROR"},s=a){if(s.messages=Object.assign(a,s.messages),"CLEAR"===e)return"object"==typeof t.consoleMessage&&t.consoleMessage.clear&&console.clear(),void(t.htmlMessage?.clear&&t.htmlMessage.messageBoard&&t.htmlMessage.messageBoard.querySelectorAll(".sp_messageBox").forEach((e=>{e.remove()})));let n;if("object"==typeof e&&(e.title&&(n=e.title.replace(" ","_")),e=e.templateMessages&&e.templateMessages.templates&&e.templateMessages.replacements&&e.templateMessages.replacements.length&&e.templateMessages.replacements.length>=1?function(e,t,s=a){let n=0;for(e=`${s.messages.prefix} ${e}`;e.includes(s.messages.templateMarker);){if(t[n]===s.messages.templateMarker)throw new Error(`${s.messages.prefix}-cM_E.1: A 'Message Replacement', "${t[n]}", contained a 'Message Marker', "${s.messages.templateMarker}".`);e=e.replace(s.messages.templateMarker,t[n++]??t[t.length-1])}return e}(e.templateMessages.templates[e.messageKey],e.templateMessages.replacements,s):e.messageKey),!t.consoleMessage&&!t.htmlMessage){const s="sP-eH_E.4: Missing Message Type. A Message Of Unknown Type Was Created:";return console.warn(s),void document.body.appendChild(u({message:[s,e],title:"sP-eH_E.4: Missing Message Type.",type:"overlay",level:t.level}))}switch(t.htmlMessage&&t.htmlMessage.messageBoard.appendChild(u({message:e,title:n,level:t.level})),t.level?.toLocaleLowerCase()){case"info":console.info(e);break;case"warning":console.warn(e);break;case"log":console.log(e);break;case"debug":console.debug(e);break;default:throw new Error(e)}}function _(e,t){e instanceof HTMLInputElement?e.value=t:e.innerText=t}function f(e){return e instanceof HTMLInputElement?e.value:e.innerText}function w(e,t,s=null){"string"==typeof t?_(e,t):(_(e,t.password),s&&_(s,Math.floor(t.entropy).toString()))}function C(e=a.defaultPasswordModifier,t,r=a){let g=null;r.messages&&r.messages.messageBoard&&(g=document.body.querySelector(r.messages.messageBoard)),y("CLEAR",{htmlMessage:g?{messageBoard:g,clear:!0}:void 0,consoleMessage:{clear:r.messages?.clearConsole},level:"CLEAR"},r),e&&"object"==typeof e||y({messageKey:"invalidModifier",templateMessages:{replacements:["M","1"],templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r);let u="",_="",f=!1,w=!1;e=function(e){const t={length:a.defaultPasswordModifier.length};function n([e,a]){s.includes(e)&&(!a||"string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a||(t[e]=a))}if(e instanceof FormData)for(let[t,s]of e.entries())n([t,s]);else for(const[t,s]of Object.entries(e))n([t,s]);return t}(e);try{!function(e,t){let s=Object.keys(e).filter((e=>n.includes(e))).length;if(e.preConfig&&("string"!=typeof e.preConfig||!e.preConfig.length||e.preConfig.length<=0)&&"string"!=typeof e.preConfig)throw{errorKey:"invalidAttributeType",replacements:["vM","16","preConfig","string"]};if(e.repeatingCharacter)if(e.customRepeatingCharacters){if("string"!=typeof e.customRepeatingCharacters)throw{errorKey:"invalidAttributeType",replacements:["vM","15","customRepeatingCharacters","string"]};if(e.customRepeatingCharacters=e.customRepeatingCharacters.trim(),e.customRepeatingCharacters.includes(" ")){const t=[];e.customRepeatingCharacters.split(" ").forEach((e=>{if(e.includes("\\")){const s=e.slice(1,2),a=(e=e.replace(s,"")).split(":");if(a.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');t.push([s,a[1]])}else{let s=e.split(":");if(s.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');t.push([s[0],s[1]])}})),e.customRepeatingCharacters=t,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),s+=parseInt(e[1])}))}else if(e.customRepeatingCharacters.includes(":")){const t=[];if(e.customRepeatingCharacters.includes("\\")){const s=e.customRepeatingCharacters.slice(1,2);e.customRepeatingCharacters=e.customRepeatingCharacters.replace(s,"");const a=e.customRepeatingCharacters.split(":");if(a.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');t.push([s,a[1]])}else{const s=e.customRepeatingCharacters.split(":");if(s.length>2)throw new Error('Custom Character Repeats contained an unescaped ":" (colon).');t.push([s[0],s[1]])}e.customRepeatingCharacters=t,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),s+=parseInt(e[1])}))}else s+=2*e.customRepeatingCharacters.length}else if(e.max_repeatingCharacter){if("number"!=typeof e.max_repeatingCharacter&&"string"!=typeof e.max_repeatingCharacter)throw{errorKey:"invalidAttributeType",replacements:["vM","13","max_repeatingCharacter","number or string"]};if("string"==typeof e.max_repeatingCharacter&&(e.max_repeatingCharacter=parseInt(e.max_repeatingCharacter)),e.max_repeatingCharacter<1||e.max_repeatingCharacter>100)throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","14","max_repeatingCharacter"]};if(e.length<2*e.max_repeatingCharacter)throw{errorKey:"The password can not contain the requested amount of repeating characters."};s+=e.max_repeatingCharacter}else s++;if(!e.length||"string"!=typeof e.length&&"number"!=typeof e.length)throw{errorKey:"invalidAttributeType",replacements:["vM","1","length","string or number"]};if("string"==typeof e.length){const s=parseInt(e.length);if(s>t.passwordConstraints.max_length||s<t.passwordConstraints.min_length)throw{errorKey:"invalidAttributeType",replacements:["vM","1","length","string or number"]}}else if(e.length>t.passwordConstraints.max_length||e.length<t.passwordConstraints.min_length)throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","2","length"]};if(s>e.length)throw{errorKey:"toManyAttributes",replacements:["vM","3",`${e.length}`,`${s}`]};if(e.w_between){if(!e.max_whitespaceBetween)throw{errorKey:"missingRequiredAttribute",replacements:["vM","11","max_whitespaceBetween","w_between"]};if("string"!=typeof e.max_whitespaceBetween&&"number"!=typeof e.max_whitespaceBetween)throw{errorKey:"invalidAttributeType",replacements:["vM","4","max_whitespaceBetween","string or number"]};if("string"==typeof e.max_whitespaceBetween){const s=parseInt(e.max_whitespaceBetween);if(s>t.passwordConstraints.max_whitespaceBetween()||s<t.passwordConstraints.min_whitespaceBetween())throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","5","max_whitespaceBetween"]}}else if(e.max_whitespaceBetween>t.passwordConstraints.max_whitespaceBetween()||e.max_whitespaceBetween<t.passwordConstraints.min_whitespaceBetween())throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","6","max_whitespaceBetween"]}}if(!Object.keys(e).some((function(e){return Object.keys(i).includes(e)})))throw{errorKey:"missingRequiredAttributes",replacements:["vM","7",Object.keys(i).toString()]};if(e.excludeCharacters){if("string"!=typeof e.excludeCharacters)throw{errorKey:"invalidAttributeType",replacements:["vM","8","excludeCharacters","string"]};if(!e.excludeCharacters.length&&e.excludeCharacters.length<=0)throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","9","excludeCharacters"]};if(new RegExp(/[\s]/g).test(e.excludeCharacters))throw{errorKey:"excludeCharactersContainedWhitespace",replacements:["vM","10"]}}}(e,r)}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}if(e.preConfig){const t=d[e.preConfig];e={length:e.length},t&&Object.assign(e,t)}const C=Object.keys(e).filter((e=>Object.keys(i).includes(e))),x=Object.keys(e).filter((e=>o.includes(e)));let b=e.length-2;if(e.uniqueCharacters&&(e.repeatingCharacter||e.whitespaceBeginning||e.whitespaceEnd||e.whitespaceEnd||e.required_whitespaceEnd||e.required_whitespaceBeginning||e.max_whitespaceBetween||e.preConfig)&&y("ERROR.simplePass-M_E.2: Unique modifier was set with clashing modifiers."),e.repeatingCharacter&&(e.customRepeatingCharacters?"string"!=typeof e.customRepeatingCharacters?e.customRepeatingCharacters.forEach((e=>{b-=parseInt(e[1])})):b-=2*e.customRepeatingCharacters.length:e.max_repeatingCharacter?b-=e.max_repeatingCharacter:b--),e.whitespaceBetween&&e.max_whitespaceBetween&&(e.length-e.max_whitespaceBetween<C.length&&y({messageKey:"ERROR: The password length can not contain the selected amount of characters"},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r),b-=e.max_whitespaceBetween),b<=-1&&y({messageKey:"ERROR: The password length can not contain the selected amount of characters"},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r),C.length>1){let t=[];if(t=t.concat(l(C)),e.whitespaceBeginning&&e.required_whitespaceBeginning)u+=" ",f=!0;else{try{u+=String.fromCharCode(p({charType:t[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}},{beginning:!0}))}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}t.shift()}for(;_.length<b;){t.length||(t=t.concat(l(C)));try{const s=String.fromCharCode(p({charType:t[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}}));if(e.uniqueCharacters&&(u.includes(s)||_.includes(s)))continue;_+=s}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}t.shift()}if(e.whitespaceBetween&&e.max_whitespaceBetween)for(;e.max_whitespaceBetween--;)_+=" ";if(u+=l(_.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd)u+=" ",w=!0;else{t.length||(t=t.concat(l(C)));try{let s=String.fromCharCode(p({charType:t[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}},{end:!0}));if(e.uniqueCharacters&&u.includes(s))for(;u.includes(s);)s=String.fromCharCode(p({charType:t[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}},{end:!0}));u+=s}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}}if(e.repeatingCharacter&&(u=m(u,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:f,end:w}}),u.length<e.length)){let s=u.slice(0,1),a=u.slice(1,u.length-1),n=u.slice(u.length-1,u.length);for(;a.length<e.length-2;){t.length||(t=t.concat(l(C)));try{const s=String.fromCharCode(p({charType:t[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}}));a+=s,a.length+1<=e.length-2&&(a+=s)}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}}u=s+l(a.split("")).join("")+n}}else{if(e.whitespaceBeginning&&e.required_whitespaceBeginning)u+=" ",f=!0;else try{u+=String.fromCharCode(p({charType:C[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}},{beginning:!0}))}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}for(;_.length<b;)try{const t=String.fromCharCode(p({charType:C[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}}));if(e.uniqueCharacters&&(u.includes(t)||_.includes(t)))continue;_+=t}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}if(e.whitespaceBetween&&e.max_whitespaceBetween)for(;e.max_whitespaceBetween--;)_+=" ";if(u+=l(_.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd)u+=" ",w=!0;else try{let t=String.fromCharCode(p({charType:C[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}},{end:!0}));if(e.uniqueCharacters&&u.includes(t))for(;u.includes(t);)t=String.fromCharCode(p({charType:C[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}},{end:!0}));u+=t}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}if(e.repeatingCharacter&&(u=m(u,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:f,end:w}}),u.length<e.length)){let t=u.slice(0,1),s=u.slice(1,u.length-1),a=u.slice(u.length-1,u.length);for(;s.length<e.length-2;)try{const t=String.fromCharCode(p({charType:C[0],charCodeOptions:{whitespaceOptions:x,excludeCharacters:e.excludeCharacters}}));s+=t,s.length+1<=e.length-2&&(s+=t)}catch(e){y({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:c}},{htmlMessage:g?{messageBoard:g}:void 0,consoleMessage:!0,level:"ERROR"},r)}u=t+l(s.split("")).join("")+a}}return t?"boolean"!=typeof t&&t.styleTarget&&t.styleType?h(u,{characterSets:{used:Object.keys(e),available:n},excludeCharacters:e.excludeCharacters,min_length:r.passwordConstraints.min_length,max_length:r.passwordConstraints.max_length},{styleTarget:t.styleTarget,styleType:t.styleType}):h(u,{characterSets:{used:Object.keys(e),available:n},excludeCharacters:e.excludeCharacters,min_length:r.passwordConstraints.min_length,max_length:r.passwordConstraints.max_length}):u}C.init=function(e=a){e.defaultPasswordModifier||(e.defaultPasswordModifier=Object.assign(a.defaultPasswordModifier,e.defaultPasswordModifier));let t=null;e.messages&&e.messages.messageBoard&&(t=document.body.querySelector(e.messages.messageBoard));const s=document.body.querySelector(e.htmlElements.passwordTarget);if(!s)return void y("ERROR.simplePass-I.1: Could not find a password target",{htmlMessage:t?{messageBoard:t}:void 0,consoleMessage:!0,level:"ERROR"},e);let n=null,r=null;if(e.htmlElements.entropyTarget&&(n=document.body.querySelector(e.htmlElements.entropyTarget)),e.htmlElements.strengthCheckerStyling&&(r=e.htmlElements.strengthCheckerStyling.styleTarget?document.body.querySelector(e.htmlElements.strengthCheckerStyling.styleTarget):s),w(s,C(e.defaultPasswordModifier,!(!n&&!r)&&(!r||{styleType:e.htmlElements.strengthCheckerStyling?.styleType??"inline",styleTarget:r})),n),e.htmlElements.actionElements){if(e.htmlElements.actionElements.generate&&document.body.querySelector(e.htmlElements.actionElements.generate)?.addEventListener("click",(function(){this instanceof HTMLButtonElement&&this.form&&"submit"===this.type||w(s,C(e.defaultPasswordModifier,!(!n&&!r)&&(!r||{styleType:e.htmlElements.strengthCheckerStyling?.styleType??"inline",styleTarget:r})),n)})),e.htmlElements.actionElements.form){const s=document.body.querySelector(e.htmlElements.actionElements.form);if(s){if(s.addEventListener("submit",(function(s){s.preventDefault();const a=new FormData(this);let i=parseInt(a.get("passwordBatchAmount")?.toString()??"0")-1;const o=document.body.querySelector(e.htmlElements.passwordContainer??".simplePass_passwordContainer");if(o)if(i&&i>0){o.innerHTML="";const t=document.createElement("ol");for(;i--;){const s=document.createElement("li"),n=document.createElement("p"),r=document.createElement("b");r.innerText="Password: ";const i=document.createElement("span");i.classList.add(e.htmlElements.passwordTarget.substring(1)),n.appendChild(r),n.appendChild(i),s.appendChild(n),t.appendChild(s),w(i,C(a,!(!e.htmlElements.strengthCheckerStyling||e.htmlElements.strengthCheckerStyling.styleTarget)&&{styleType:e.htmlElements.strengthCheckerStyling?.styleType??"inline",styleTarget:i}))}const s=document.createElement("li"),n=document.createElement("p"),l=document.createElement("b");l.innerText="Password: ";const c=document.createElement("span");c.classList.add(e.htmlElements.passwordTarget.substring(1)),n.appendChild(l),n.appendChild(c),s.appendChild(n),t.appendChild(s);let p=null;if(e.htmlElements.entropyTarget){const t=document.createElement("p"),s=document.createElement("b");s.innerText="Bits of Entropy: ~",p=document.createElement("span"),p.classList.add(e.htmlElements.entropyTarget.substring(1)),t.appendChild(s),t.appendChild(p),o.appendChild(t)}r=null,e.htmlElements.strengthCheckerStyling&&e.htmlElements.strengthCheckerStyling.styleTarget&&e.htmlElements.strengthCheckerStyling.styleTarget!==e.htmlElements.passwordTarget&&(r=document.body.querySelector(e.htmlElements.strengthCheckerStyling.styleTarget)),w(c,C(a,!(!e.htmlElements.strengthCheckerStyling&&!r)&&{styleType:e.htmlElements.strengthCheckerStyling?.styleType??"inline",styleTarget:r??c}),p),o.prepend(t)}else if(o.querySelector("ol")){o.innerHTML="";const t=document.createElement("p"),s=document.createElement("b");s.innerText="Password: ";const n=document.createElement("span");n.classList.add(e.htmlElements.passwordTarget.substring(1)),t.appendChild(s),t.appendChild(n),o.appendChild(t);let i=null;if(e.htmlElements.entropyTarget){const t=document.createElement("p"),s=document.createElement("b");s.innerText="Bits of Entropy: ~",i=document.createElement("span"),i.classList.add(e.htmlElements.entropyTarget.substring(1)),t.appendChild(s),t.appendChild(i),o.appendChild(t)}r=null,e.htmlElements.strengthCheckerStyling&&e.htmlElements.strengthCheckerStyling.styleTarget&&(r=document.body.querySelector(e.htmlElements.strengthCheckerStyling.styleTarget)),w(n,C(a,!(!e.htmlElements.strengthCheckerStyling&&!r)&&{styleType:e.htmlElements.strengthCheckerStyling?.styleType??"inline",styleTarget:r??n}),i)}else{const s=document.body.querySelector(e.htmlElements.passwordTarget);if(!s)return void y("ERROR.simplePass-I.2: Could not find a password target",{htmlMessage:t?{messageBoard:t}:void 0,consoleMessage:!0,level:"ERROR"},e);e.htmlElements.entropyTarget&&(n=document.body.querySelector(e.htmlElements.entropyTarget)),w(s,C(a,!(!n&&!r)&&(!r||{styleType:e.htmlElements.strengthCheckerStyling?.styleType??"inline",styleTarget:r})),n)}else y("ERROR.simplePass-I.3: Use of batch password generation without a password container.",{htmlMessage:t?{messageBoard:t}:void 0,consoleMessage:!0,level:"ERROR"},e)})),e.defaultPasswordModifier)for(const[t,a]of Object.entries(e.defaultPasswordModifier)){const e=s.querySelector(`[name=${t}]`);e&&a&&("checkbox"===e.type||"radio"===e.type?e.checked=!0:e.value=a.toString())}const a=s.querySelectorAll("input[data-radioCheckbox]");a.forEach((e=>{e.addEventListener("click",(function(){a.forEach((e=>{e.value!==this.value&&e.checked&&(e.checked=!1)}))}))}))}}e.htmlElements.actionElements.copy&&document.body.querySelector(e.htmlElements.actionElements.copy)?.addEventListener("click",(function(){let s="";document.body.querySelectorAll(e.htmlElements.passwordTarget).forEach(((e,t)=>{s+=t?`\n${f(e)}`:`${f(e)}`})),navigator.clipboard.writeText(s).then((()=>{this.style.backgroundColor="green",this.innerText="Copied!",setTimeout((()=>{this.toggleAttribute("style"),this.innerText="Copy"}),5e3)})).catch((s=>{y(`ERROR.simplePass-Ic.1: Unable to copy to clipboard! Environment Error: ${s.message}.`,{htmlMessage:t?{messageBoard:t}:void 0,consoleMessage:!0,level:"ERROR"},e)}))}))}};var x=t.Z;
/*!
 *
 * simplePass - A JavaScript password generator.
 * Copyright (C) 2023  Jordan Vezina(staticBanter)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */
(()=>{if("/simplePass/EXAMPLES-AND-INTEGRATION.html"===window.location.pathname){const e=document.body.querySelector(".simplePass_passwordTarget_6"),t=document.body.querySelector(".simplePass_entropyTarget_3"),s=x({length:22,lowercase:!0,uppercase:!0,numbers:!0,punctuation:!0},{styleTarget:e,styleType:"inline"});e.innerText=s.password,t.innerText=Math.round(s.entropy),x.init(),x.init({htmlElements:{passwordTarget:".simplePass_passwordTarget_1",strengthCheckerStyling:{styleType:"inline"},actionElements:{copy:".simplePass_copier_1",generate:".simplePass_generator_1"}}}),x.init({htmlElements:{passwordTarget:".simplePass_passwordTarget_2",strengthCheckerStyling:{styleType:"inline"},actionElements:{copy:".simplePass_copier_2",generate:".simplePass_generator_2",form:"#simplePass_form"}}}),x.init({htmlElements:{passwordTarget:".simplePass_passwordTarget_3",strengthCheckerStyling:{styleType:"inline"},actionElements:{copy:".simplePass_copier_3",generate:".simplePass_generator_3",form:"#simplePass_form_1"},passwordContainer:".simplePass_passwordContainer"}}),x.init({htmlElements:{passwordTarget:".simplePass_passwordTarget_4",entropyTarget:".simplePass_entropyTarget",strengthCheckerStyling:{styleType:"inline"},actionElements:{copy:".simplePass_copier_4",generate:".simplePass_generator_4",form:"#simplePass_form_2"},passwordContainer:".simplePass_passwordContainer_1"}}),x.init({htmlElements:{passwordTarget:".simplePass_passwordTarget_5",entropyTarget:".simplePass_entropyTarget_2",strengthCheckerStyling:{styleType:"inline"},messages:{messageBoard:".simplePass_messageBoard"},actionElements:{copy:".simplePass_copier_5",generate:".simplePass_generator_5",form:"#simplePass_form_3"},passwordContainer:".simplePass_passwordContainer_2"}})}else x.init();let e;window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),e=t})),window.addEventListener("appinstalled",(()=>{addBtn.style.display="none",e=null})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/simplePass/sw.js")})();