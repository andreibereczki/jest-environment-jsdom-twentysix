import BaseEnv from '@jest/environment-jsdom-abstract';
import * as JSDOM from 'jsdom';
import { type EnvironmentContext, type JestEnvironmentConfig } from '@jest/environment';

export default class JSDOMEnvironment extends BaseEnv {
  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context, JSDOM);
  }
}
