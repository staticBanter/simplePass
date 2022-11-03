'use strict';

import I_charCodeGenerationFlag from "../interfaces/charCodeGenerationFlag.interface.js";

interface I_charCodeOptions {
    whitespaceOptions?:Array<string>,
    excludeCharacters?:string
};

export default interface I_charCodeRequest {
    charType:string,
    charCodeOptions?:I_charCodeOptions,
};