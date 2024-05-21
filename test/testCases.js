'use strict';

import passwordPreConfigs from "../javascript/module/data/objects/passwordPreConfigs.js";
import * as Crypto from "node:crypto";

const configs = {
    basic:{
        messages:{
            prefix: "ERROR.simplePass-~.~:",
            templateMarker: "~",
        },
        cryptoModule:Crypto
    },
    strengthCheck:{
        messages:{
            prefix: "ERROR.simplePass-~.~:",
            templateMarker: "~",
        },
        strengthCheck:true,
        cryptoModule:Crypto
    }
}

const testCases = [
    {
        passwordModifier:{
            length:22,
        },
        characterSets:
        {
            lowercase:true,
            uppercase:true,
            numbers:true,
            punctuation:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:3,
            excludeCharacters:'bcdefghijklmnopqrstuvwxyz'
        },
        characterSets:
        {
            lowercase:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:20,
            uniqueCharacters:true,
        },
        characterSets:
        {
            lowercase:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
            repeatingCharacter:true,
        },
        characterSets:
        {
            lowercase:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
            repeatingCharacter:true,
            max_repeatingCharacter:2
        },
        characterSets:
        {
            lowercase:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:8,
            repeatingCharacter:true,
            customRepeatingCharacters:'a b:2 \\:2'
        },
        characterSets:
        {
            lowercase:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:passwordPreConfigs["fourDigitPin"].length,
            preConfig:"fourDigitPin"
        },
        characterSets:{
            numbers:passwordPreConfigs['fourDigitPin'].numbers
        },
        testOpts:{
            notInclude:/\D/
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
        },
        characterSets:
        {
            lowercase:true,
            whitespaceBeginning:true
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
        },
        characterSets:
        {
            lowercase:true,
            whitespaceBeginning:true,
            required_whitespaceBeginning:true
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
        },
        characterSets:
        {
            lowercase:true,
            whitespaceEnd:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
        },
        characterSets:
        {
            lowercase:true,
            whitespaceEnd:true,
            required_whitespaceEnd:true
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
        },
        characterSets:
        {
            lowercase:true,
            whitespaceBetween:true,
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
        },
        characterSets:
        {
            lowercase:true,
            whitespaceBetween:true,
            max_whitespaceBetween:2
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:22,
        },
        characterSets:
        {
            lowercase:true,
            uppercase:true,
            numbers:true,
            punctuation:true,
        },
        config:configs.strengthCheck
    },
    {
        passwordModifier:"This is not an object",
        errors:{
            testTitle:'Should throw an error if password modifier is not an object',
            message:"ERROR.simplePass-M.1: Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript 'FormData' Object."
        },
        config:configs.basic
    },
    /**
     * TODO: Add the remaining test cases, and bundle the test case better some how.
     */
    {
        passwordModifier:{
            length:20,
            uniqueCharacters:true,
            repeatingCharacter:true
        },
        characterSets:{
            lowercase:true,
        },
        errors:{
            testTitle:'Should throw an error if unique character modifier is set with: repeating characters, any whitespace modifier, or a pre-config',
            message:"ERROR.simplePass-M_E.2: Unique modifier was set with clashing modifiers."
        },
        config:configs.basic
    },
    {
        passwordModifier:{
            length:4,
        },
        characterSets:{
            lowercase:true,
            uppercase:true,
            numbers:true,
            punctuation:true,
            whitespaceBetween:true,
            max_whitespaceBetween:3
        },
        errors:{
            testTitle:'Should throw an error if the password can not contain all of the desired modifiers',
            message:"ERROR: The password length can not contain the selected amount of characters"
        },
        config:configs.basic
    }
];

export default testCases
