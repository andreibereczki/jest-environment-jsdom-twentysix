"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_jsdom_abstract_1 = require("@jest/environment-jsdom-abstract");
const JSDOM = require("jsdom");
class JSDOMEnvironment extends environment_jsdom_abstract_1.default {
    constructor(config, context) {
        super(config, context, JSDOM);
    }
}
exports.default = JSDOMEnvironment;
