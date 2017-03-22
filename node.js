/*
 * Copyright 2017 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const SentryLib = require('raven');
const detect = require('detect-process');
const isRunningInAsar = require('electron-is-running-in-asar');

const env = detect.getName();

// In electron, we don't want to log to external services if we're not running in asar
const fake = env === 'electron' && isRunningInAsar();

module.exports = require('./src/resin-raven')(SentryLib, fake);