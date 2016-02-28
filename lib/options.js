/**
 * @fileoverview Options for cli generator
 * @author Ivan Sobolev
 */

"use strict";

module.exports = require("optionator")({
    prepend: "bemlint [options] file.html [file.html]",
    defaults: {
        concatRepeatedArrays: true,
        mergeRepeatedObjects: true
    },
    options: [
        {
            heading: "Basic configuration"
        },
        {
            option: "help",
            alias: "h",
            type: "Boolean",
            description: "Display help"
        },
        {
            option: "version",
            alias: "v",
            type: "Boolean",
            description: "Outputs the version"
        },
        {
            option: "elem",
            alias: "e",
            type: "String",
            default: "__",
            description: "Element delimeter"
        },
        {
            option: "mod",
            alias: "m",
            type: "String",
            default: "_",
            description: "Mod delimeter"
        },
        {
            option: "wordPattern",
            alias: "wp",
            type: "String",
            default: "[a-z0-9]+(?:-[a-z0-9]+)*",
            description: "Regex defines which symbols can be used for block, element and modifier's names"
        },

        {
            option: "bem-prefixes",
            alias: "bp",
            type: "Array",
            description: "Array of block names prefix to lint",
            example: "['b-', 'l-', 'helper-']"
        },

    ]
});
