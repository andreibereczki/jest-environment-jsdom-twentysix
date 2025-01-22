import BaseEnv from '@jest/environment-jsdom-abstract';
import { type EnvironmentContext, type JestEnvironmentConfig } from '@jest/environment';
export default class JSDOMEnvironment extends BaseEnv {
    constructor(config: JestEnvironmentConfig, context: EnvironmentContext);
}
