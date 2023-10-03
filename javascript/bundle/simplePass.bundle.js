var e={d:(t,a)=>{for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{Z:()=>C});const a=["length","lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","max_whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning","excludeCharacters","uniqueCharacters","repeatingCharacter","max_repeatingCharacter","customRepeatingCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement","preConfig","lowercase_extended_a","uppercase_extended_a","ligature_extended_a","lowercase_extended_b","uppercase_extended_b","mixedcase_extended_b","insensitivecase_extended_b","lowercase_ipa_extension","uppercase_ipa_extension","character_modifier_letters","symbol_modifier_letters","lowercase_greek_coptic","uppercase_greek_coptic","insensitivecase_greek_coptic","symbol_greek_coptic","lowercase_cyrillic","uppercase_cyrillic","symbols_cyrillic","lowercase_cyrillic_supplement","uppercase_cyrillic_supplement","misc_cyrillic_supplement","general_punctuation","currency_symbols","misc_technical","box_drawings","block_elements","misc_symbols","dingbats"],s={min_passwordLength:3,max_passwordLength:256,min_excludeCharactersLength:0,max_excludeCharactersLength:10,defaultPasswordModifier:{length:22,lowercase:!0,uppercase:!0,numbers:!0,punctuation:!0},max_whitespaceCharactersOffset:4,max_whitespaceBetween:function(){const e=this.max_passwordLength-this.max_whitespaceCharactersOffset;return e>=1?e:0},min_whitespaceBetween:function(){return this.max_passwordLength-this.max_whitespaceCharactersOffset>=1?1:0},messages:{prefix:"ERROR.simplePass-~.~:",templateMarker:"~"},htmlElements:{forms:"#sp_form",passwordBox:"#sp_passwordBox",passwordContainer:"#sp_passwordContainer",entropyContainer:"#sp_passwordEntropy",passwordParagraph:"#sp_passwordParagraph",batchPasswordInput:"#sp_batchPasswordInput",copyButton:"#sp_copyPasswordButton",generateButton:"#sp_generatePasswordButton"}},r=["lowercase","uppercase","numbers","punctuation","whitespaceBeginning","whitespaceEnd","whitespaceBetween","excludeCharacters","lowercase_supplement","uppercase_supplement","symbols_supplement","lowercase_extended_a","uppercase_extended_a","ligature_extended_a","lowercase_extended_b","uppercase_extended_b","mixedcase_extended_b","lowercase_ipa_extension","uppercase_ipa_extension","insensitivecase_extended_b","character_modifier_letters","symbol_modifier_letters","lowercase_greek_coptic","uppercase_greek_coptic","insensitivecase_greek_coptic","symbol_greek_coptic","lowercase_cyrillic","uppercase_cyrillic","symbols_cyrillic","lowercase_cyrillic_supplement","uppercase_cyrillic_supplement","misc_cyrillic_supplement","general_punctuation","currency_symbols","misc_technical","box_drawings","block_elements","misc_symbols","dingbats"];function n(e,t,a=1,s,r=!1){const n=[];for(t+=1;e<t;)s?.includes(e)||(r?n.push([e]):n.push(e)),e+a>t?e=t:e+=a;return n}const o={lowercase:{min:97,max:122},uppercase:{min:65,max:90},numbers:{min:48,max:57},punctuation:{min:33,max:126,range:[[33,47],[58,64],[91,96],[123,126]]},whitespace:{min:32},lowercase_supplement:{min:223,max:255,range:[[233,246],[248,255]]},uppercase_supplement:{min:192,max:222,range:[[192,214],[216,222]]},symbols_supplement:{min:161,max:247,range:[[161,191],[215],[247]]},lowercase_extended_a:{min:257,max:383,range:n(257,312,2,[306,307]).concat(n(314,329,2)).concat(n(331,375,2,[338,339])).concat(n(378,383,2)).map((e=>[e]))},uppercase_extended_a:{min:256,max:382,range:n(256,310,2,[306,307]).concat(n(313,327,2)).concat(n(330,374,2,[338,339])).concat([376]).concat(n(377,381,2)).map((e=>[e]))},ligature_extended_a:{min:306,max:339,range:[[306],[307],[338],[339]]},lowercase_extended_b:{min:384,max:591,range:[[384],[387],[389],[392],[396,397],[402],[405],[409,411],[414],[417],[419],[421],[427],[432],[436],[438],[441,442],[445],[454],[457],[460],[496],[499],[501],[572],[589],[591],[578],[563,569],[575,576],[585],[587],[583]].concat(n(462,476,2,void 0,!0)).concat(n(479,495,2,void 0,!0)).concat(n(505,561,2,void 0,!0))},uppercase_extended_b:{min:385,max:590,range:[[444]].concat(n(385,408,1,[387,389,392,396,397,402,405],!0)).concat(n(412,440,1,[414,417,419,421,422,424,426,427,429,432,436,438],!0)).concat(n(452,458,1,[453,454,456,459],!0)).concat(n(461,475,2,void 0,!0)).concat(n(478,494,2,void 0,!0)).concat(n(497,504,1,[498,499,501],!0)).concat(n(506,562,2,void 0,!0)).concat(n(570,590,1,[572,575,576,578,583,585,587,589],!0))},mixedcase_extended_b:{min:453,max:498,range:[[453],[456],[459],[498]]},insensitivecase_extended_b:{min:422,max:451,range:[[422],[426],[443],[446,451]]},lowercase_ipa_extension:{min:592,max:683,range:[[592,659],[665,672],[675,683]]},uppercase_ipa_extension:{min:660,max:685,range:[[660,664],[673,674],[684,685]]},character_modifier_letters:{min:688,max:739,range:[[688,696],[737,739]]},symbol_modifier_letters:{min:697,max:767,range:[[697,736],[740,767]]},lowercase_greek_coptic:{min:881,max:1019,range:[[881],[883],[887],[912],[940,974],[1016],[1019]].concat(n(985,107,2,void 0,!0))},uppercase_greek_coptic:{min:880,max:1018,range:[[880],[882],[886],[902],[904,906],[908],[910,911],[913,929],[931,939],[1015],[1018]].concat(n(994,1004,2,void 0,!0))},insensitivecase_greek_coptic:{min:984,max:1011,range:[[1011]].concat(n(984,992,2,void 0,!0))},symbol_greek_coptic:{min:884,max:1020,range:[[884,885],[890,894],[900,901],[903],[975,983],[988],[1008,1014],[1020,1023]]},lowercase_cyrillic:{min:1072,max:1279,range:[[1072,1119]].concat(n(1121,1153,2,void 0,!0)).concat(n(1163,1215,2,[1189,1205],!0)).concat(n(1218,1230,2,void 0,!0)).concat(n(1231,1279,2,[1237],!0))},uppercase_cyrillic:{min:1024,max:1278,range:[[1024,1071]].concat(n(1120,1214,2,[1154,1156,1158,1160,1188,1204],!0)).concat(n(1217,1229,2,void 0,!0)).concat(n(1232,1278,2,[1236],!0))},symbols_cyrillic:{min:1154,max:1237,range:[[1154],[1188,1189],[1204,1205],[1236,1237]]},lowercase_cyrillic_supplement:{min:1281,max:1319,range:n(1281,1319,2,void 0,!0)},uppercase_cyrillic_supplement:{min:1280,max:1319,range:n(1280,1319,2,void 0,!0)},misc_cyrillic_supplement:{min:1320,max:1327},general_punctuation:{min:8208,max:8286,range:[[8208,8231],[8240,8286]]},currency_symbols:{min:8352,max:8383,range:[[8352,8371],[8373,8383]]},misc_technical:{min:8960,max:9215},box_drawings:{min:9472,max:9599},block_elements:{min:9600,max:9631},misc_symbols:{min:9728,max:9983,range:[[9728,9897],[9899,9983]]},dingbats:{min:9984,max:10175}},c=["whitespaceBeginning","whitespaceEnd","whitespaceBetween","required_whitespaceEnd","required_whitespaceBeginning"];function i(e){let t,a=e.length;for(;0!=a;)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e}const l={invalidModifier:"Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript 'FormData' Object.",toManyAttributes:"To Many Attributes. The requested password may only contain ~ attributes, ~ attributes were selected.",nonGenerableCharacterType:"Non Generable Character Type. Attempted to generate a character of type ~",invalidAttributeType:"InvalidAttribute Type. Attribute ~ is supposed to be of type ~",outOfBoundsAttributeValue:"Out Of Bounds Attribute Type. Attribute type ~ is out of its value bounds.",missingRequiredAttributes:"Missing Required Attribute. The attribute '~' requires attribute '~' to be set before it can be used.",missingRequiredModifier:"Missing Required Attributes. The Password Modifier must contain one of the following attributes ~.",excludeCharactersContainedWhitespace:"'Exclude Characters' contained whitespace"};function p(e,t){let a=self.crypto.getRandomValues(new Uint8Array(1))[0];if(e.charCodeOptions?.excludeCharacters&&e.charCodeOptions.excludeCharacters.includes(String.fromCharCode(a)))return p(e);if(t){if(t?.beginning){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceBeginning")&&32===a)return a;if(32===a)return p(e,t)}if(t?.end){if(e.charCodeOptions?.whitespaceOptions?.includes("whitespaceEnd")&&32===a)return a;if(32===a)return p(e,t)}}const s=o[e.charType];if(!s)throw{errorKey:l.nonGenerableCharacterType,replacements:["gCC","1",e.charType]};if(s.min>256&&(a+=s.min),!s.max&&!s.range&&a===s.min)return a;if(s.range){if(s.min&&s.max&&a>=s.min&&a<=s.max){if(a===s.min||a===s.max)return a;for(let e=0;e<s.range.length;e++){if(s.range[e][0]&&s.range[e][1]&&a>=s.range[e][0]&&a<=s.range[e][1])return a;if(s.range[e][0]&&a===s.range[e][0])return a}}}else if(s.min&&s.max&&a>=s.min&&a<=s.max)return a;return p(e,t)}function m(e,t){function a(e){const t=[];return e.split("").forEach((e=>{t.includes(e)||t.push(e)})),t.join("")}let s=e.slice(0,1),r=e.slice(1,e.length-1),n=e.slice(e.length-1,e.length);if(t.customCharacterSet){const a=[];r.split("").forEach((e=>{a.push(e)})),"string"==typeof t.customCharacterSet?t.customCharacterSet.split("").forEach((e=>{a.push(e),a.push(e)})):t.customCharacterSet.forEach((e=>{let t=parseInt(e[1]);for(;t--;)a.push(e[0])})),t.preservations?.beginning||(a.push(s),s=""),t.preservations?.end||(a.push(n),n=""),e=s+i(a).join("")+n}else if(t.repeatingSetCount&&t.repeatingSetCount>1){let o=i(e.split(""));o=a(o.join("")).split(""),r=a(r);for(let e=0;e<t.repeatingSetCount&&o[e];e++)r+=o[e];e=s+i(r.split("")).join("")+n}else r+=i(e.split(""))[0],e=s+i(r.split("")).join("")+n;return e}const h={colour:"red",score:60},g={colour:"orange",score:75},d={colour:"gold",score:80},u={colour:"yellowgreen",score:95},f={colour:"darkgreen",score:110};function _(e,t,a){let s=0;const n=e.length*Math.log(function(e){let t=0,a=!1;return e.characterSets.forEach((e=>{if(r.includes(e)){c.includes(e)&&(a?e="":(e="whitespace",a=!0));const s=o[e];s&&(s.range?s.range.forEach((e=>{e[0]&&e[1]?t+=e[1]-e[0]:e[0]&&t++})):s.min&&s.max&&(t+=s.max-s.min))}})),e.excludeCharacters&&e.excludeCharacters.length>0&&(t-=e.excludeCharacters.length),t}({characterSets:t.characterSets.used.filter((e=>t.characterSets.available.includes(e))),excludeCharacters:t.excludeCharacters}))/Math.log(2);if(s+=n,s+=function(e,t={min_passwordLength:3,max_passwordLength:256}){const a=[];for(let t=0;t<e.length;t++)a.includes(e.charAt(t))||a.push(e.charAt(t));const s=a.length/e.length,r=(e.length-a.length)/e.length;let n=e.length/t.min_passwordLength;return n>1&&(n=1),((s+r)/2+n+e.length/t.max_passwordLength)/3*100}(e,{min_passwordLength:t.min_length,max_passwordLength:t.max_length}),s/=2,a&&a.styleTarget){let e="",t="";s<=h.score?(e=h.colour,t="bad"):s>h.score&&s<=g.score?(e=g.colour,t="modest"):s>g.score&&s<=d.score?(e=d.colour,t="ok"):s>d.score&&s<=u.score?(e=u.colour,t="good"):(e=f.colour,t="excellent"),"inline"===a.styleType?a.styleTarget.setAttribute("style",(a.styleTarget.getAttribute("style")??"")+`\n                    color: ${e};\n                `):(a.styleTarget.classList.add("strengthChecked"),a.styleTarget.dataset.score=t)}return{password:e,strengthScore:s,entropy:n}}const w={default:{length:22,numbers:!0,lowercase:!0,uppercase:!0,punctuation:!0},fourDigitPin:{numbers:!0,length:4},defaultSupplement1:{length:22,numbers:!0,symbols_supplement:!0,lowercase_supplement:!0,uppercase_supplement:!0},bios:{length:20,lowercase:!0,uppercase:!0,numbers:!0},extreme:{length:256,numbers:!0,lowercase:!0,uppercase:!0,punctuation:!0,lowercase_supplement:!0,uppercase_supplement:!0,symbols_supplement:!0,max_repeatingCharacter:Math.floor(9*Math.random()+5),whitespaceBetween:!0,max_whitespaceBetween:Math.floor(9*Math.random()+2)}};function y(e){let t=document.createElement("DIV"),a="SP_MESSAGE",s="ERROR";t.classList.add("sp_messageBox");const r=document.createElement("DIV");t.appendChild(r);const n=document.createElement("BUTTON");n.title="Close",n.innerText="X";let o=document.createElement("P"),c=null;"object"==typeof e?(e.level&&(s=e.level.toUpperCase(),a=s),e.title&&(a=e.title.replaceAll(" ","_")),e.type&&(t.dataset.messageType=e.type,"overlay"===e.type.toLocaleLowerCase())&&(c=document.createElement("DIV"),c.classList.add("sp_backdrop")),"string"==typeof e.message?o.innerText=e.message:(o=document.createElement("UL"),e.message.forEach((e=>{const t=document.createElement("LI");t.innerText=e,o.appendChild(t)})))):o.innerText=e,t.dataset.title=a,t.dataset.messageLevel=s;const i=document.createElement("STRONG");return i.innerText=a,r.appendChild(i),r.appendChild(n),n.addEventListener("click",(e=>{e.preventDefault(),t.remove()})),t.appendChild(o),c&&(c.appendChild(t),t=c),t}function x(e,t={consoleMessage:!0,level:"ERROR"},a=s){if("CLEAR"===e)return"object"==typeof t.consoleMessage&&t.consoleMessage.clear&&console.clear(),void(t.htmlMessage?.clear&&t.htmlMessage.messageBoard&&t.htmlMessage.messageBoard.querySelectorAll(".sp_messageBox").forEach((e=>{e.remove()})));let r;if("object"==typeof e&&(e.title&&(r=e.title.replace(" ","_")),e=e.templateMessages&&e.templateMessages.templates&&e.templateMessages.replacements&&e.templateMessages.replacements.length&&e.templateMessages.replacements.length>=1?function(e,t,a=s){let r=0;for(e=`${a.messages.prefix} ${e}`;e.includes(a.messages.templateMarker);){if(t[r]===a.messages.templateMarker)throw new Error(`${a.messages.prefix}-cM_E.1: A 'Message Replacement', "${t[r]}", contained a 'Message Marker', "${a.messages.templateMarker}".`);e=e.replace(a.messages.templateMarker,t[r++]??t[t.length-1])}return e}(e.templateMessages.templates[e.messageKey],e.templateMessages.replacements,a):e.messageKey),!t.consoleMessage&&!t.htmlMessage){const a="sP-eH_E.4: Missing Message Type. A Message Of Unknown Type Was Created:";return console.warn(a),void document.body.appendChild(y({message:[a,e],title:"sP-eH_E.4: Missing Message Type.",type:"overlay",level:t.level}))}switch(t.htmlMessage&&t.htmlMessage.messageBoard.appendChild(y({message:e,title:r,level:t.level})),t.level?.toLocaleLowerCase()){case"info":console.info(e);break;case"warning":console.warn(e);break;case"log":console.log(e);break;case"debug":console.debug(e);break;default:throw new Error(e)}}function C(e=s.defaultPasswordModifier,t,n,h=s){x("CLEAR",{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard,clear:!0}:void 0,consoleMessage:{clear:n?.clearConsole},level:"CLEAR"},h),e&&"object"==typeof e||x({messageKey:"invalidModifier",templateMessages:{replacements:["M","1"],templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h);let g="",d="",u=!1,f=!1;e=function(e){const t={length:s.defaultPasswordModifier.length};function r([e,s]){a.includes(e)&&(!s||"string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s||(t[e]=s))}if(e instanceof FormData)for(let[t,a]of e.entries())r([t,a]);else for(const[t,a]of Object.entries(e))r([t,a]);return t}(e);try{!function(e,t){let a=Object.keys(e).filter((e=>r.includes(e))).length;if(e.preConfig&&("string"!=typeof e.preConfig||!e.preConfig.length||e.preConfig.length<=0)&&"string"!=typeof e.preConfig)throw{errorKey:"invalidAttributeType",replacements:["vM","16","preConfig","string"]};if(e.repeatingCharacter)if(e.customRepeatingCharacters){if("string"!=typeof e.customRepeatingCharacters)throw{errorKey:"invalidAttributeType",replacements:["vM","15","customRepeatingCharacters","string"]};if(e.customRepeatingCharacters=e.customRepeatingCharacters.trim(),e.customRepeatingCharacters.includes(" ")){const t=[];e.customRepeatingCharacters.split(" ").forEach((e=>{if(e.includes("\\")){const a=e.slice(1,2),s=(e=e.replace(a,"")).split(":");if(s.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');t.push([a,s[1]])}else{let a=e.split(":");if(a.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');t.push([a[0],a[1]])}})),e.customRepeatingCharacters=t,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),a+=parseInt(e[1])}))}else if(e.customRepeatingCharacters.includes(":")){const t=[];if(e.customRepeatingCharacters.includes("\\")){const a=e.customRepeatingCharacters.slice(1,2);e.customRepeatingCharacters=e.customRepeatingCharacters.replace(a,"");const s=e.customRepeatingCharacters.split(":");if(s.length>2)throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');t.push([a,s[1]])}else{const a=e.customRepeatingCharacters.split(":");if(a.length>2)throw new Error('Custom Character Repeats contained an unescaped ":" (colon).');t.push([a[0],a[1]])}e.customRepeatingCharacters=t,e.customRepeatingCharacters.forEach((e=>{(!e[1]||parseInt(e[1])<=1)&&(e[1]="2"),a+=parseInt(e[1])}))}else a+=2*e.customRepeatingCharacters.length}else if(e.max_repeatingCharacter){if("number"!=typeof e.max_repeatingCharacter&&"string"!=typeof e.max_repeatingCharacter)throw{errorKey:"invalidAttributeType",replacements:["vM","13","max_repeatingCharacter","number or string"]};if("string"==typeof e.max_repeatingCharacter&&(e.max_repeatingCharacter=parseInt(e.max_repeatingCharacter)),e.max_repeatingCharacter<1||e.max_repeatingCharacter>100)throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","14","max_repeatingCharacter"]};if(e.length<2*e.max_repeatingCharacter)throw{errorKey:"The password can not contain the requested amount of repeating characters."};a+=e.max_repeatingCharacter}else a++;if(!e.length||"string"!=typeof e.length&&"number"!=typeof e.length)throw{errorKey:"invalidAttributeType",replacements:["vM","1","length","string or number"]};if("string"==typeof e.length){const a=parseInt(e.length);if(a>t.max_passwordLength||a<t.min_passwordLength)throw{errorKey:"invalidAttributeType",replacements:["vM","1","length","string or number"]}}else if(e.length>t.max_passwordLength||e.length<t.min_passwordLength)throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","2","length"]};if(a>e.length)throw{errorKey:"toManyAttributes",replacements:["vM","3",`${e.length}`,`${a}`]};if(e.w_between){if(!e.max_whitespaceBetween)throw{errorKey:"missingRequiredAttribute",replacements:["vM","11","max_whitespaceBetween","w_between"]};if("string"!=typeof e.max_whitespaceBetween&&"number"!=typeof e.max_whitespaceBetween)throw{errorKey:"invalidAttributeType",replacements:["vM","4","max_whitespaceBetween","string or number"]};if("string"==typeof e.max_whitespaceBetween){const a=parseInt(e.max_whitespaceBetween);if(a>t.max_whitespaceBetween()||a<t.min_whitespaceBetween())throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","5","max_whitespaceBetween"]}}else if(e.max_whitespaceBetween>t.max_whitespaceBetween()||e.max_whitespaceBetween<t.min_whitespaceBetween())throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","6","max_whitespaceBetween"]}}if(!Object.keys(e).some((function(e){return Object.keys(o).includes(e)})))throw{errorKey:"missingRequiredAttributes",replacements:["vM","7",Object.keys(o).toString()]};if(e.excludeCharacters){if("string"!=typeof e.excludeCharacters)throw{errorKey:"invalidAttributeType",replacements:["vM","8","excludeCharacters","string"]};if(!e.excludeCharacters.length&&e.excludeCharacters.length<=0)throw{errorKey:"outOfBoundsAttributeValue",replacements:["vM","9","excludeCharacters"]};if(new RegExp(/[\s]/g).test(e.excludeCharacters))throw{errorKey:"excludeCharactersContainedWhitespace",replacements:["vM","10"]}}}(e,h)}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}if(e.preConfig){const t=w[e.preConfig];e={length:e.length},t&&Object.assign(e,t)}const y=Object.keys(e).filter((e=>Object.keys(o).includes(e))),C=Object.keys(e).filter((e=>c.includes(e)));let b=e.length-2;if(e.uniqueCharacters&&(e.repeatingCharacter||e.whitespaceBeginning||e.whitespaceEnd||e.whitespaceEnd||e.required_whitespaceEnd||e.required_whitespaceBeginning||e.max_whitespaceBetween||e.preConfig)&&x("ERROR.simplePass-M_E.2: Unique modifier was set with clashing modifiers."),e.repeatingCharacter&&(e.customRepeatingCharacters?"string"!=typeof e.customRepeatingCharacters?e.customRepeatingCharacters.forEach((e=>{b-=parseInt(e[1])})):b-=2*e.customRepeatingCharacters.length:e.max_repeatingCharacter?b-=e.max_repeatingCharacter:b--),e.whitespaceBetween&&e.max_whitespaceBetween&&(e.length-e.max_whitespaceBetween<y.length&&x({messageKey:"ERROR: The password length can not contain the selected amount of characters"},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h),b-=e.max_whitespaceBetween),b<=-1&&x({messageKey:"ERROR: The password length can not contain the selected amount of characters"},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h),y.length>1){let t=[];t=t.concat(i(y));let a="";if(e.whitespaceBeginning&&e.required_whitespaceBeginning)g+=" ",u=!0;else if(a=t.pop(),a)try{g+=String.fromCharCode(p({charType:a,charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}},{beginning:!0}))}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}for(;d.length<b;)if(a=t.pop(),!a&&t.length<=0&&(t=t.concat(i(y)),a=t.pop()),a)try{const t=String.fromCharCode(p({charType:a,charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}}));if(e.uniqueCharacters&&(g.includes(t)||d.includes(t)))continue;d+=t}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}if(e.whitespaceBetween&&e.max_whitespaceBetween)for(let t=0;t<e.max_whitespaceBetween;t++)d+=" ";if(g+=i(d.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd)g+=" ",f=!0;else if((t.length<=0||!a)&&(t=t.concat(i(y))),a=t.pop(),a)try{let t=String.fromCharCode(p({charType:a,charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}},{end:!0}));if(e.uniqueCharacters&&g.includes(t))for(;g.includes(t);)t=String.fromCharCode(p({charType:a,charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}},{end:!0}));g+=t}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}if(e.repeatingCharacter&&(g=m(g,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:u,end:f}}),g.length<e.length)){let s=g.slice(0,1),r=g.slice(1,g.length-1),o=g.slice(g.length-1,g.length);for(;r.length<e.length-2;)if((t.length<=0||!a)&&(t=t.concat(i(y))),a=t.pop(),a)try{const t=String.fromCharCode(p({charType:a,charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}}));r+=t,r.length+1<=e.length-2&&(r+=t)}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}g=s+i(r.split("")).join("")+o}}else{if(e.whitespaceBeginning&&e.required_whitespaceBeginning)g+=" ",u=!0;else try{g+=String.fromCharCode(p({charType:y[0],charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}},{beginning:!0}))}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}for(;d.length<b;)try{const t=String.fromCharCode(p({charType:y[0],charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}}));if(e.uniqueCharacters&&(g.includes(t)||d.includes(t)))continue;d+=t}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}if(e.whitespaceBetween&&e.max_whitespaceBetween)for(let t=0;t<e.max_whitespaceBetween;t++)d+=" ";if(g+=i(d.split("")).join(""),e.whitespaceEnd&&e.required_whitespaceEnd)g+=" ",f=!0;else try{let t=String.fromCharCode(p({charType:y[0],charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}},{end:!0}));if(e.uniqueCharacters&&g.includes(t))for(;g.includes(t);)t=String.fromCharCode(p({charType:y[0],charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}},{end:!0}));g+=t}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}if(e.repeatingCharacter&&(g=m(g,{repeatingSetCount:e.max_repeatingCharacter,customCharacterSet:e.customRepeatingCharacters,preservations:{beginning:u,end:f}}),g.length<e.length)){let t=g.slice(0,1),a=g.slice(1,g.length-1),s=g.slice(g.length-1,g.length);for(;a.length<e.length-2;)try{const t=String.fromCharCode(p({charType:y[0],charCodeOptions:{whitespaceOptions:C,excludeCharacters:e.excludeCharacters}}));a+=t,a.length+1<=e.length-2&&(a+=t)}catch(e){x({messageKey:e.errorKey,templateMessages:{replacements:e.replacements,templates:l}},{htmlMessage:n?.messageBoard?{messageBoard:n.messageBoard}:void 0,consoleMessage:!0,level:"ERROR"},h)}g=t+i(a.split("")).join("")+s}}return t?"boolean"!=typeof t&&t.styleTarget&&t.styleType?_(g,{characterSets:{used:Object.keys(e),available:r},excludeCharacters:e.excludeCharacters,min_length:h.min_passwordLength,max_length:h.max_passwordLength},{styleTarget:t.styleTarget,styleType:t.styleType}):_(g,{characterSets:{used:Object.keys(e),available:r},excludeCharacters:e.excludeCharacters,min_length:h.min_passwordLength,max_length:h.max_passwordLength}):g}C.init=function(e=s){if("object"!=typeof e)return void x({messageKey:'ERROR.simplePass-Init.2: Initializer Configuration argument must be of type "object".'},{htmlMessage:{messageBoard:document.body},consoleMessage:!0,level:"ERROR"},e);const t=document.querySelector(e.htmlElements.forms);if(!t)return void x({messageKey:"ERROR.simplePass-Init.1: Could not find the form"},{htmlMessage:{messageBoard:document.body},consoleMessage:!0,level:"ERROR"},e);const a=t.querySelector("input[name=length]");a.min=e.min_passwordLength.toString(),a.max=e.max_passwordLength.toString(),a.step="1",a.required=!0;const r=t.querySelector("input[name=excludeCharacters]"),n=s.max_passwordLength-6;r.minLength=1,r.maxLength=n,r.pattern="/[s]/g";const o=t.querySelector("input[name=max_repeatingCharacter]");o.min="1",o.max="100",o.step="1";const c=t.querySelector("input[name=customRepeatingCharacters]");c.minLength=1,c.maxLength=100;const i=document.body.querySelector(e.htmlElements.batchPasswordInput);i.min="1",i.max="256",i.step="1",Object.entries(e.defaultPasswordModifier).forEach((([e,a])=>{const s=t.querySelector(`input[name=${e}]`),r=s.getAttribute("type");a&&(r&&"input"!==r&&"number"!==r?s.checked=!0:s.value=a.toString())}));const l=document.body.querySelector(e.htmlElements.passwordBox),p=l.querySelector(e.htmlElements.passwordContainer),m=l.querySelector(e.htmlElements.passwordParagraph),h=l.querySelector(e.htmlElements.entropyContainer),g=C({length:22,lowercase:!0,uppercase:!0,numbers:!0,punctuation:!0},{styleTarget:m,styleType:"inline"},{messageBoard:l});"string"==typeof g?m.innerText=g:(m.innerText=g.password,h.innerText=Math.floor(g.entropy).toString()),t.addEventListener("submit",(function(t){let a;t.preventDefault();if(i.value){let t=parseInt(i.value);if(t<1||t>256)throw new Error("Request Password Batch Amount Was Out Of Bounds.");p.querySelector("#sp_passwordList")?.remove(),h.parentElement?.remove(),m.remove();const a=document.createElement("OL");for(a.id="sp_passwordList";t--;){const t=document.createElement("LI");t.classList.add("sp_listedPassword");const s=document.createElement("P");s.classList.add("sp_password");const r=document.createElement("P"),n=C(new FormData(this),{styleTarget:s,styleType:"inline"},{messageBoard:l});if("object"!=typeof n)return void x({messageKey:"ERROR.simplePass-Init.7: The password was not an object"},{htmlMessage:{messageBoard:document.body},consoleMessage:!0,level:"ERROR"},e);s.innerText=n.password,r.innerText=`Bits of Entropy : ~${Math.floor(n.entropy)}`,t.appendChild(s),t.appendChild(r),a.appendChild(t)}p.appendChild(a),p.dataset.batchType="list"}else{if(a=C(new FormData(this),{styleTarget:m,styleType:"inline"},{messageBoard:p}),p.querySelector("#sp_passwordList")?.remove(),!p.querySelector(e.htmlElements.passwordParagraph)){let e=document.createElement("P");e.innerText="Bits of Entropy: ~",p.firstElementChild.appendChild(m),e.appendChild(h),p.appendChild(e)}if("object"!=typeof a)return void x({messageKey:"ERROR.simplePass-Init.8: The password was not an object"},{htmlMessage:{messageBoard:document.body},consoleMessage:!0,level:"ERROR"},e);m.innerText=a.password,h.innerText=Math.floor(a.entropy).toString(),h.parentElement.removeAttribute("style"),p.dataset.batchType="single"}}));const d=t.querySelectorAll("input[data-radioCheckbox]");d.forEach((e=>{e.addEventListener("click",(function(){d.forEach((e=>{e.value!==this.value&&e.checked&&(e.checked=!1)}))}))})),document.body.querySelector(e.htmlElements.copyButton)?.addEventListener("click",(function(e){switch(e.preventDefault(),p.dataset.batchType){default:case"single":navigator.clipboard.writeText(m.innerText).then((()=>{this.style.backgroundColor="green",this.innerText="Copied!",setTimeout((()=>{this.toggleAttribute("style"),this.innerText="Copy"}),5e3)})).catch((e=>{console.error(e.message)}));break;case"list":let e="";p.querySelectorAll("LI").forEach((t=>{e+=`${t.querySelector("p")?.innerText}\n`})),navigator.clipboard.writeText(e).then((()=>{this.style.backgroundColor="green",this.innerText="Copied!",setTimeout((()=>{this.toggleAttribute("style"),this.innerText="Copy"}),5e3)})).catch((e=>{console.error(e.message)}))}}))};var b=t.Z;export{b as default};